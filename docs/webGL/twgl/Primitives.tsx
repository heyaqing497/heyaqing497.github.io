/**
 * title: Primitives
 */
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const Primitives = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const requestId = useAnimationFrame(canvasRef, () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      twgl.setDefaults({ attribPrefix: 'a_' }); // 设置twgl的默认属性，将属性前缀设置为"a_"
      const m4 = twgl.m4; // 导入twgl的m4模块，用于矩阵操作
      if (gl) {
        // 定义顶点着色器源代码
        const vertexShaderSource = `  
          // 顶点着色器程序的变量声明和计算逻辑, 主要负责将顶点从对象空间转换到屏幕空间，并计算光照等信息
          uniform mat4 u_worldViewProjection; // 世界视图投影矩阵，用于将顶点从世界空间转换到屏幕空间
          uniform vec3 u_lightWorldPos; // 灯光在世界空间的位置
          uniform mat4 u_world; // 世界矩阵，用于将顶点从对象空间转换到世界空间
          uniform mat4 u_viewInverse; // 视图矩阵的逆矩阵，用于计算视点到顶点的方向
          uniform mat4 u_worldInverseTranspose; // 世界矩阵的逆转置矩阵，用于计算法向量在世界空间的表示
          
          attribute vec4 a_position; // 顶点位置属性，来源于顶点缓冲对象
          attribute vec3 a_normal; // 顶点法向量属性，用于光照计算
          attribute vec2 a_texcoord;// 顶点纹理坐标属性，用于纹理映射    
          
          varying vec4 v_position; // 传递给片段着色器的顶点位置
          varying vec2 v_texCoord; // 传递给片段着色器的纹理坐标
          varying vec3 v_normal; // 传递给片段着色器的法向量
          varying vec3 v_surfaceToLight; // 传递给片段着色器的表面到灯光的距离向量
          varying vec3 v_surfaceToView; // 传递给片段着色器的表面到视点的距离向量
          
          void main() {
            v_texCoord = a_texcoord; // 纹理坐标直接传递
            v_position = (u_worldViewProjection * a_position); // 计算屏幕空间中的顶点位置
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // 计算世界空间中的法向量
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz; // 计算表面到灯光的位置向量
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // 计算表面到视点的位置向量
            gl_Position = v_position; // 设置最终的顶点位置
          }
        `;
        // 定义片段着色器源代码
        const fragmentShaderSource = `  
          // 片段着色器程序的变量声明和计算逻辑, 主要负责根据计算出的光照信息和纹理来确定像素的颜色
          precision mediump float; // 确定浮点数的精度

          varying vec4 v_position; // 从顶点着色器接收的顶点位置
          varying vec2 v_texCoord; // 从顶点着色器接收的纹理坐标
          varying vec3 v_normal; // 从顶点着色器接收的法向量
          varying vec3 v_surfaceToLight; // 从顶点着色器接收的表面到灯光的距离向量
          varying vec3 v_surfaceToView; // 从顶点着色器接收的表面到视点的距离向量
          
          uniform vec4 u_lightColor; // 灯光颜色
          uniform vec4 u_diffuseMult; // 表面漫反射颜色的乘数
          uniform sampler2D u_diffuse; // 纹理采样器
          uniform vec4 u_specular; // 表面镜面反射颜色
          uniform float u_shininess; // 镜面反射光泽度
          uniform float u_specularFactor; // 镜面反射贡献因子
          
          vec4 lit(float l ,float h, float m) {
            // 计算光照强度
            return vec4(1.0,
                        abs(l),//max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult; // 计算漫反射颜色
            vec3 a_normal = normalize(v_normal); // 法向量标准化
            vec3 surfaceToLight = normalize(v_surfaceToLight); // 灯光方向标准化
            vec3 surfaceToView = normalize(v_surfaceToView); // 视点方向标准化
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // 半向量标准化
            // 计算光照强度
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            // 计算最终颜色
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor; // 设置像素颜色
          }
        `;

        // 创建着色器程序信息，包括着色器的编译、链接以及属性和uniform变量的位置信息，用于后续的渲染过程
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        // 创建各种形状的缓冲信息数组
        const shapes = [
          twgl.primitives.createCubeBufferInfo(gl, 2), // 创建一个边长为2的立方体缓冲信息
          twgl.primitives.createSphereBufferInfo(gl, 1, 24, 12), // 创建一个半径为1，经线数为24，纬线数为12的球体缓冲信息
          twgl.primitives.createPlaneBufferInfo(gl, 2, 2), // 创建一个长宽各为2的平面缓冲信息
          twgl.primitives.createTruncatedConeBufferInfo(gl, 1, 0, 2, 24, 1), // 创建一个底圆半径为1，顶圆半径为0，高为2的截断圆锥缓冲信息
          twgl.primitives.createCresentBufferInfo(gl, 1, 1, 0.5, 0.1, 24), // 创建一个半径为1，环宽为1，环高为0.5，厚度为0.1的月牙形缓冲信息
          twgl.primitives.createCylinderBufferInfo(gl, 1, 2, 24, 2), // 创建一个底圆半径为1，顶圆半径为2，高度为2的圆柱体缓冲信息
          twgl.primitives.createDiscBufferInfo(gl, 1, 24), // 创建一个半径为1，扇形划分数为24的圆盘缓冲信息
          twgl.primitives.createTorusBufferInfo(gl, 1, 0.4, 24, 12), // 创建一个内半径为1，外半径为0.4，经线数为24，纬线数为12的环形缓冲信息
        ];

        /**
         * 生成一个介于min和max之间的随机数。
         * @param min 随机数的最小值。
         * @param max 随机数的最大值。
         * @return 返回一个在[min, max]范围内的随机数。
         */
        function rand(min, max) {
          return min + Math.random() * (max - min);
        }

        // 共享的值
        const lightWorldPosition = [1, 8, -10]; // 灯光在世界空间中的位置
        const lightColor = [1, 1, 1, 1]; // 灯光颜色
        const camera = m4.identity(); // 相机矩阵
        const view = m4.identity(); // 视图矩阵
        const viewProjection = m4.identity(); // 视图投影矩阵

        // 创建一个纹理
        const tex = twgl.createTexture(gl, {
          min: gl.NEAREST, // 纹理过滤方式，此处设置为最邻近过滤
          mag: gl.NEAREST, // 纹理放大过滤方式，此处同样设置为最邻近过滤
          src: [
            // 纹理的源数据，一个包含颜色数据的数组
            255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
            255, 255, 255,
          ],
        });

        // 初始化绘制对象和物体数组, 用来初始化将要绘制的物体及其相关属性，包括颜色、位置、移动速度等，同时设置用于绘制的统一变量，如漫反射颜色、镜面反射颜色等。
        const objects: any[] = []; // 存储所有物体信息的数组
        const drawObjects: any[] = []; // 存储绘制物体所需信息的数组
        const numObjects = 100; // 物体数量
        const baseHue = rand(0, 360); // 基础色调，用于漫反射颜色的随机生成
        // 创建物体并设置其属性
        for (let ii = 0; ii < numObjects; ++ii) {
          // 创建统一变量，用于着色器程序
          const uniforms = {
            u_lightWorldPos: lightWorldPosition,
            u_lightColor: lightColor,
            u_diffuseMult: chroma
              .hsv((baseHue + rand(0, 60)) % 360, 0.4, 0.8)
              .gl(), // 漫反射颜色
            u_specular: [1, 1, 1, 1], // 镜面反射颜色
            u_shininess: 50, // 镜面光泽度
            u_specularFactor: 1, // 镜面反射因子
            u_diffuse: tex, // 纹理
            u_viewInverse: camera, // 相机反转矩阵
            u_world: m4.identity(), // 世界矩阵
            u_worldInverseTranspose: m4.identity(), // 世界矩阵的逆转置
            u_worldViewProjection: m4.identity(), // 世界视图投影矩阵
          };
          // 将绘制信息添加到数组，用于绘制过程
          drawObjects.push({
            programInfo: programInfo,
            bufferInfo: shapes[ii % shapes.length], // 循环使用shapes数组中的形状
            uniforms: uniforms,
          });
          // 添加物体信息到数组，包括其初始位置和移动速度
          objects.push({
            translation: [rand(-10, 10), rand(-10, 10), rand(-10, 10)], // 物体的初始位置，随机生成
            ySpeed: rand(0.1, 0.3), // 物体Y轴上的移动速度，随机生成
            zSpeed: rand(0.1, 0.3), // 物体Z轴上的移动速度，随机生成
            uniforms: uniforms, // 与绘制信息中相同的统一变量，用于在物体移动时保持其渲染属性
          });
        }

        // 绘制场景
        function drawScene(_time) {
          if (gl) {
            let time = _time;
            time *= 0.001; // 将时间戳转换为秒
            twgl.resizeCanvasToDisplaySize(canvas); // 根据浏览器窗口大小调整画布尺寸
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // 设置OpenGL视口

            gl.enable(gl.DEPTH_TEST); // 启用深度测试
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 清除颜色和深度缓冲区

            const projection = m4.perspective(
              (30 * Math.PI) / 180,
              canvas.clientWidth / canvas.clientHeight,
              0.5,
              100,
            ); // 设置投影矩阵
            // 设置摄像机位置和目标点
            const eye = [1, 4, -20];
            const target = [0, 0, 0];
            const up = [0, 1, 0];

            // 计算摄像机矩阵并求其逆矩阵
            m4.lookAt(eye, target, up, camera);
            m4.inverse(camera, view);
            // 计算视图投影矩阵
            m4.multiply(projection, view, viewProjection);

            // 遍历所有物体，更新其统一变量, 包括世界矩阵、世界矩阵的逆转置矩阵和世界视图投影矩阵。
            objects.forEach(function (obj: any) {
              const uni = obj.uniforms;
              const world = uni.u_world;
              // 计算物体的世界矩阵
              m4.identity(world); // 将世界矩阵初始化为单位矩阵
              m4.rotateY(world, time * obj.ySpeed, world); // 沿Y轴根据时间旋转
              m4.rotateZ(world, time * obj.zSpeed, world); // 沿Z轴根据时间旋转
              m4.translate(world, obj.translation, world); // 根据物体的平移量进行平移
              m4.rotateX(world, time, world); // 沿X轴根据时间旋转
              // 计算世界矩阵的逆转置矩阵
              m4.transpose(
                m4.inverse(world, uni.u_worldInverseTranspose),
                uni.u_worldInverseTranspose,
              );
              // 计算世界视图投影矩阵
              m4.multiply(
                viewProjection,
                uni.u_world,
                uni.u_worldViewProjection,
              );
            });

            twgl.drawObjectList(gl, drawObjects); // 绘制物体

            requestId.current = requestAnimationFrame(drawScene); // 请求下一帧动画
          }
        }

        // 请求首次动画帧以启动场景绘制
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} width={800} height={300} />;
};

export default Primitives;
