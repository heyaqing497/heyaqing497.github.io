/**
 * title: zoom-around
 */
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const ZoomAround = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestId = useAnimationFrame(canvasRef, () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      twgl.setDefaults({ attribPrefix: 'a_' }); // 设置twgl的默认属性，将属性前缀设置为"a_"，这有助于在渲染程序中唯一标识属性
      const m4 = twgl.m4; // 导入twgl的m4模块，用于执行矩阵操作，例如变换（翻译、旋转、缩放）等
      const v3 = twgl.v3; // 导入twgl的v3模块，用于处理三维向量操作，例如向量加法、缩放等
      if (gl) {
        /**
         * 创建顶点着色器的源码字符串。
         * 该着色器负责将顶点从对象空间转换到屏幕空间，并计算光照和纹理坐标。
         * 顶点着色器是OpenGL ES着色语言（GLSL）程序的一部分，用于对三维场景中的每个顶点进行处理。
         *
         * @returns {string} 顶点着色器的源码字符串。
         */
        const vertexShaderSource = `  
          uniform mat4 u_worldViewProjection; // 世界视图投影矩阵
          uniform vec3 u_lightWorldPos; // 灯光在世界空间的位置
          uniform mat4 u_world; // 世界矩阵
          uniform mat4 u_viewInverse; // 视图矩阵的逆矩阵
          uniform mat4 u_worldInverseTranspose; // 世界矩阵的逆转置矩阵
          
          attribute vec4 a_position; // 顶点位置属性
          attribute vec3 a_normal; // 顶点法向量属性
          attribute vec2 a_texcoord; // 顶点纹理坐标属性
          
          varying vec4 v_position; // 片元着色器中使用的顶点位置
          varying vec2 v_texCoord; // 片元着色器中使用的纹理坐标
          varying vec3 v_normal; // 片元着色器中使用的法向量
          varying vec3 v_surfaceToLight; // 表面到灯光的向量
          varying vec3 v_surfaceToView; // 表面到视点的向量
          
          void main() { // 主函数
            v_texCoord = a_texcoord; // 纹理坐标传递给片元着色器
            v_position = (u_worldViewProjection * a_position); // 计算屏幕空间中的顶点位置
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // 计算物体空间中的法向量
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz; // 计算表面到灯光的向量
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // 计算表面到视点的向量
            gl_Position = v_position; // 设置顶点位置
          } 
        `;

        /**
         * 创建片段着色器的源码字符串。
         * 片段着色器负责根据纹理和光照计算像素的颜色。
         * 它是OpenGL ES着色语言（GLSL）程序的一部分，用于对渲染图像的每个像素进行处理。
         *
         * @returns {string} 片段着色器的源码字符串。
         */
        const fragmentShaderSource = `  
          precision mediump float; // 中等精度浮点数声明

          varying vec4 v_position; // 顶点位置，传递给片段着色器
          varying vec2 v_texCoord; // 纹理坐标，传递给片段着色器
          varying vec3 v_normal; // 法向量，传递给片段着色器
          varying vec3 v_surfaceToLight; // 表面到灯光的向量，传递给片段着色器
          varying vec3 v_surfaceToView; // 表面到视点的向量，传递给片段着色器
          
          uniform vec4 u_lightColor; // 灯光颜色
          uniform vec4 u_diffuseMult; // 扩展的漫反射颜色
          uniform sampler2D u_diffuse; // 漫反射纹理采样器
          uniform vec4 u_specular; // 镜面反射颜色
          uniform float u_shininess; // 镜面光泽度
          uniform float u_specularFactor; // 镜面反射因子
          
          vec4 lit(float l ,float h, float m) { // 计算光照的辅助函数
            return vec4(1.0,
                        abs(l),//max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() { // 主函数
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult; // 计算漫反射颜色
            vec3 a_normal = normalize(v_normal); // 正常化法向量
            vec3 surfaceToLight = normalize(v_surfaceToLight); // 正常化表面到灯光的向量
            vec3 surfaceToView = normalize(v_surfaceToView); // 正常化表面到视点的向量
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // 计算半向量
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess); // 计算光照强度
            // 计算最终颜色
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor; // 设置像素颜色
          }
        `;

        // 创建WebGL程序, 使用twgl库根据提供的着色器源码创建WebGL程序的信息对象
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource, // 需要编译的顶点着色器源码
          fragmentShaderSource, // 需要编译的片段着色器源码
        ]);

        // 准备要渲染的形状的缓冲信息，包括一个立方体、一个球体和一个截断的圆锥
        const shapes = [
          twgl.primitives.createCubeBufferInfo(gl, 2), // 创建一个边长为2的立方体的缓冲信息
          twgl.primitives.createSphereBufferInfo(gl, 1, 24, 12), // 创建一个半径为1的球体的缓冲信息，有24个经度和12个纬度
          twgl.primitives.createTruncatedConeBufferInfo(gl, 1, 0, 2, 24, 1), // 创建一个底圆半径为1，顶圆半径为0，高为2的截断圆锥的缓冲信息，有24个扇形和1个环形切片
        ];

        /**
         * 生成一个介于min和max之间的随机数。
         * @param {number} min - 随机数的最小值。
         * @param {number} max - 随机数的最大值。
         * @return {number} 介于min和max之间的随机数。
         */
        function rand(min, max) {
          return min + Math.random() * (max - min);
        }

        /**
         * 提供一种缓动函数，用于平滑物体的运动。
         * @param {number} _t - 当前时间或进度（在0到1之间）。
         * @param {number} start - 动画开始值。
         * @param {number} end - 动画结束值。
         * @return {number} 根据缓动函数计算出的当前动画值。
         */
        function easeInOut(_t, start, end) {
          const c = end - start; // 计算动画的总变化量
          let t = _t / 0.5; // 将时间或进度除以0.5，以适应缓动函数的预期输入
          if (t < 1) {
            // 如果当前时间或进度在第一半周期内，则返回缓入的效果
            return (c / 2) * t * t + start; // 使用二次贝塞尔曲线计算缓入值
          } else {
            // 如果当前时间或进度在第二半周期内，则返回缓出的效果
            return (-c / 2) * (--t * (t - 2) - 1) + start; // 使用二次贝塞尔曲线计算缓出值
          }
        }
        // 共享值
        const lightWorldPosition = [1, 8, -10]; // 灯光在世界空间中的位置
        const lightColor = [1, 1, 1, 1]; // 灯光颜色
        const camera = m4.identity(); // 相机矩阵
        const view = m4.identity(); // 视图矩阵
        const viewProjection = m4.identity(); // 视图投影矩阵
        let targetNdx = 0; // 目标索引
        let targetTimer = 0; // 目标计时器
        let zoomTimer = 0; // 变焦计时器
        let eye = v3.copy([1, 4, -60]); // 摄像机位置（观察点）
        let target = v3.copy([0, 0, 0]); // 目标点
        const up = [0, 1, 0]; // “向上”向量
        const zoomScale = 1.4; // 变焦比例
        const zoomDuration = 2; // 变焦持续时间
        const targetChangeInterval = 3; // 目标改变间隔
        let oldEye; // 旧的摄像机位置
        let oldTarget; // 旧的目标点
        let newEye; // 新的摄像机位置
        let newTarget; // 新的目标点

        // 创建并初始化纹理
        const tex = twgl.createTexture(gl, {
          // 设置纹理的最小过滤器和最大过滤器为最近过滤器。
          min: gl.NEAREST,
          mag: gl.NEAREST,
          // 指定纹理的源数据。
          src: [
            255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
            255, 255, 255,
          ],
        });

        // 初始化对象和绘制对象数组
        const objects: any[] = [];
        const drawObjects: any[] = [];
        const numObjects = 100; // 对象数量
        const baseHue = rand(0, 360); // 基础色相
        // 遍历对象集合，并为每个对象设置统一的属性以及独特的变化
        for (let ii = 0; ii < numObjects; ++ii) {
          // 统一变量设置，用于每个对象
          const uniforms = {
            u_lightWorldPos: lightWorldPosition, // 灯光在世界空间的位置
            u_lightColor: lightColor, // 灯光颜色
            u_diffuseMult: chroma // 颜色差异，使用随机的色相值来给对象赋予独特的颜色
              .hsv((baseHue + rand(0, 60)) % 360, 0.4, 0.8) // 使用hsv颜色模型创建一个随机但范围可控的颜色
              .gl(), // 转换为gl所需的格式
            u_specular: [1, 1, 1, 1], // 镜面反射颜色
            u_shininess: 50, // 镜面光泽度
            u_specularFactor: 1, // 镜面反射强度
            u_diffuse: tex, // 纹理贴图
            u_viewInverse: camera, // 相机位置的逆矩阵
            u_world: m4.identity(), // 对象在世界空间的变换矩阵
            u_worldInverseTranspose: m4.identity(), // 用于计算法线的世界空间变换矩阵
            u_worldViewProjection: m4.identity(), // 世界到屏幕的变换矩阵
          };
          // 将绘制信息添加到绘制对象数组，以便于后续渲染
          drawObjects.push({
            programInfo: programInfo, // 着色器程序信息
            bufferInfo: shapes[ii % shapes.length], // 使用的几何形状信息
            uniforms: uniforms, // 对象的uniforms变量
          });
          // 为对象设置独特的运动和变形属性
          objects.push({
            translation: [rand(-50, 50), rand(-50, 50), rand(-50, 50)], // 随机位置
            scale: rand(1, 5), // 随机缩放
            size: 2, // 对象大小
            xSpeed: rand(0.2, 0.7), // x轴移动速度
            zSpeed: rand(0.2, 0.7), // z轴移动速度
            uniforms: uniforms, // 与绘制信息中相同的uniforms变量
          });
        }
        let then = 0; // 用于时间计算的变量

        /**
         * 绘制场景的函数。
         * 该函数首先更新时间，并计算自上一次绘制以来经过的时间。
         * 然后，它调整WebGL画布的大小以匹配显示尺寸，并设置视口。
         * 接着，它启用深度测试和面剔除，并清除颜色和深度缓冲区。
         * 之后，该函数计算新的观察目标和视角，以便进行平滑过渡。
         * 对每个物体，它更新其在场景中的位置、旋转和缩放，并准备其着色器所需的数据。
         * 最后，该函数绘制物体，并安排下一帧继续绘制。
         */
        function drawScene(_time) {
          if (gl) {
            let time = _time;
            time *= 0.001; // 将时间从毫秒转换为秒
            const elapsed = time - then; // 计算自上一帧以来经过的时间
            then = time; // 更新上一帧的时间戳

            // 调整画布大小并设置视口
            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            // 启用深度测试和面剔除，清除颜色和深度缓冲区
            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.CULL_FACE);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // 计算透视投影矩阵
            const fovy = (30 * Math.PI) / 180;
            const projection = m4.perspective(
              fovy, // 视场角，以弧度计
              canvas.clientWidth / canvas.clientHeight, // 视图宽高比
              0.5, // 靠近平面
              200, // 远离平面
            );

            // 更新观察目标的位置
            targetTimer -= elapsed;
            if (targetTimer <= 0) {
              // 检查是否到达目标切换时间
              targetTimer = targetChangeInterval; // 重置目标切换间隔
              zoomTimer = 0; // 重置缩放计时器
              targetNdx = (targetNdx + 1) % objects.length; // 循环选择下一个目标对象
              oldEye = v3.copy(eye); // 备份当前观察点位置
              oldTarget = v3.copy(target); // 备份当前目标点位置
              const targetObj = objects[targetNdx]; // 获取选中的目标对象
              newTarget = targetObj.translation; // 设置新的目标位置
              // 计算新的观察点位置
              const halfSize =
                targetObj.size * targetObj.scale * zoomScale * 0.5; // 计算目标对象半尺寸
              const distance = halfSize / Math.tan(fovy * 0.5); // 根据视场角计算观察点到目标的距离
              const direction = v3.normalize(v3.subtract(eye, newTarget)); // 计算从新目标点指向当前观察点的方向向量
              newEye = v3.add(newTarget, v3.mulScalar(direction, distance)); // 根据方向和距离计算新的观察点位置
            }

            // 平滑过渡到新的观察位置
            zoomTimer += elapsed; // 增加过去的时间到缩放计时器上
            const lerp = easeInOut(Math.min(1, zoomTimer / zoomDuration), 0, 1); // 使用缓动函数计算当前的过渡进度
            eye = v3.lerp(oldEye, newEye, lerp); // 使用线性插值平滑地过渡眼睛（观察点）的位置
            target = v3.lerp(oldTarget, newTarget, lerp); // 使用线性插值平滑地过渡目标点的位置

            // 计算相机矩阵和视图投影矩阵
            m4.lookAt(eye, target, up, camera); // 根据当前的眼睛和目标位置计算相机矩阵
            m4.inverse(camera, view); // 计算相机矩阵的逆矩阵，作为视图矩阵
            m4.multiply(projection, view, viewProjection); // 将视图矩阵和投影矩阵相乘得到视图投影矩阵

            // 更新每个物体的位置、旋转和缩放
            objects.forEach(function (obj) {
              // 遍历每个物体
              const uni = obj.uniforms; // 获取物体的uniforms（包含矩阵等需要更新的属性）
              const world = uni.u_world; // 世界的变换矩阵
              m4.identity(world); // 将世界的变换矩阵重置为单位矩阵
              m4.translate(world, obj.translation, world); // 应用物体的平移变换
              m4.rotateX(world, time * obj.xSpeed, world); // 应用物体的X轴旋转变换
              m4.rotateZ(world, time * obj.zSpeed, world); // 应用物体的Z轴旋转变换
              m4.scale(world, [obj.scale, obj.scale, obj.scale], world); // 应用物体的缩放变换
              m4.transpose(
                m4.inverse(world, uni.u_worldInverseTranspose),
                uni.u_worldInverseTranspose,
              ); // 计算并转置世界矩阵的逆矩阵 transpose
              m4.multiply(
                viewProjection,
                uni.u_world,
                uni.u_worldViewProjection,
              ); // 计算每个物体的视图投影矩阵
            });

            twgl.drawObjectList(gl, drawObjects); // 绘制物体

            requestId.current = requestAnimationFrame(drawScene); // 请求下一帧继续绘制
          }
        }

        // 初始绘制
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} style={{ width: '100%', height: '300px' }} />;
};

export default ZoomAround;
