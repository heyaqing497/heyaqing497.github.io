/**
 * title: Kaleidoscope
 */
import { Button } from 'antd';
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const Kaleidoscope = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 决定是否使用帧缓冲区
  const useFramebuffer = useRef<boolean>(true);

  const requestId = useAnimationFrame(canvasRef, () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const m4 = twgl.m4; // 导入twgl的m4模块，用于矩阵操作
      const gl = canvas.getContext('webgl');
      twgl.setDefaults({ attribPrefix: 'a_' }); // 设置twgl的默认属性，将属性前缀设置为"a_"
      if (gl) {
        /**
         * 创建顶点着色器源码字符串。
         * 该字符串包含了顶点着色器的GLSL代码，用于在图形渲染管道的早期阶段对顶点进行处理。
         * 它定义了如何将顶点从对象空间转换到屏幕空间，并处理光照等。
         */
        const vertexShaderSource = `  
          uniform mat4 u_worldViewProjection; // 世界视图投影矩阵
          uniform vec3 u_lightWorldPos; // 光源在世界空间的位置
          uniform mat4 u_world; // 世界矩阵
          uniform mat4 u_viewInverse; // 视图矩阵的逆矩阵
          uniform mat4 u_worldInverseTranspose; // 世界矩阵的逆转置矩阵
          
          attribute vec4 a_position; // 顶点位置属性
          attribute vec3 a_normal; // 顶点法向量属性
          attribute vec2 a_texcoord; // 顶点纹理坐标属性
          
          varying vec4 v_position; // 传递给片段着色器的顶点位置
          varying vec2 v_texCoord; // 传递给片段着色器的纹理坐标
          varying vec3 v_normal; // 传递给片段着色器的法向量
          varying vec3 v_surfaceToLight; // 传递给片段着色器的表面到光源的向量
          varying vec3 v_surfaceToView; // 传递给片段着色器的表面到视点的向量
          
          void main() { // 主函数
            v_texCoord = a_texcoord; // 纹理坐标
            v_position = (u_worldViewProjection * a_position); // 顶点位置，用于投影
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // 法线，用于光照计算
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz; // 表面到光源的向量
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // 表面到视点的向量
            gl_Position = v_position; // 设置最终的顶点位置
          }
        `;
        /**
         * 创建片段着色器源码字符串。
         * 该字符串包含了片段着色器的GLSL代码，用于在图形渲染管道的晚期阶段对像素进行处理，
         * 主要负责光照计算和颜色混合等。
         */
        const fragmentShaderSource = `  
          precision mediump float; // 确定浮点精度

          varying vec4 v_position; // 从顶点着色器接收的顶点位置
          varying vec2 v_texCoord; // 从顶点着色器接收的纹理坐标
          varying vec3 v_normal; // 从顶点着色器接收的法向量
          varying vec3 v_surfaceToLight; // 从顶点着色器接收的表面到光源的向量
          varying vec3 v_surfaceToView; // 从顶点着色器接收的表面到视点的向量
          
          uniform vec4 u_lightColor; // 光源颜色
          uniform vec4 u_ambient; // 环境光颜色
          uniform sampler2D u_diffuse; // 纹理贴图
          uniform vec4 u_specular; // 镜面光颜色
          uniform float u_shininess; // 镜面光泽度
          uniform float u_specularFactor; // 镜面光系数
          uniform float u_fogNear; // 雾化近平面
          uniform float u_fogFar; // 雾化远平面
          uniform vec4 u_fogColor; // 雾化颜色
          
          // 计算光照
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        abs(l),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() { // 主函数
            float depth = gl_FragCoord.z / gl_FragCoord.w; // 计算像素深度
            float fogFactor = smoothstep(u_fogNear, u_fogFar, depth); // 计算雾化因子
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord); // 从纹理贴图获取颜色
            vec3 a_normal = normalize(v_normal); // 法线向量归一化
            vec3 surfaceToLight = normalize(v_surfaceToLight); // 表面到光源向量归一化
            vec3 surfaceToView = normalize(v_surfaceToView); // 表面到视点向量归一化
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // 半向量归一化
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess); // 计算光照强度
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a); // 计算最终颜色
            gl_FragColor = mix(outColor, u_fogColor, fogFactor); // 应用雾化效果
          }
        `;

        /**
         * 创建WebGL程序。
         * 使用提供的着色器源码创建并链接WebGL着色器程序，并返回程序信息对象，供后续渲染使用。
         * @param gl WebGLRenderingContext - WebGL渲染上下文对象。
         * @param sources 着色器源码数组，包含顶点着色器和片段着色器源码。
         * @returns {Object} 包含程序对象和各着色器变量位置的对象。
         */
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        // 定义着色器程序的顶点着色器代码
        const kaleidVS = `
          attribute vec4 a_position; // 输入的顶点位置
          attribute vec2 a_id; // 输入的顶点标识符
          varying vec2 v_texcoord; // 传递给片段着色器的纹理坐标
          uniform mat4 u_matrix; // 世界矩阵
          uniform mat4 u_projection; // 投影矩阵
          uniform float u_angleTime; // 时间控制的角度
          uniform float u_angleScale; // 角度缩放因子
          void main() {
            vec4 localPosition = u_matrix * a_position; // 应用世界矩阵变换顶点位置
            float angle = a_id.x * u_angleScale + u_angleTime; // 计算角度
            float radius = localPosition.y; // 使用y坐标作为半径
            float c = cos(angle); // 计算角度的余弦值
            float s = sin(angle); // 计算角度的正弦值
            mat4 m = mat4( // 创建一个用于旋转的矩阵
                vec4(c, s, 0, 0),
                vec4(-s, c, 0, 0),
                vec4(0, 0, 1, 0),
                vec4(0, 0, 0, 1));
            gl_Position = u_projection * m * localPosition; // 应用投影矩阵和旋转矩阵后的结果赋值给gl_Position
            v_texcoord = a_position.xy * 0.5 + 0.5; // 计算纹理坐标
          }
        `;
        // 定义着色器程序的片段着色器代码
        const kaleidFS = `
          precision mediump float; // 确定浮点精度

          varying vec2 v_texcoord; // 从顶点着色器接收的纹理坐标
          uniform sampler2D u_texture; // 输入的纹理

          void main() {
            gl_FragColor = texture2D(u_texture, v_texcoord); // 输出纹理颜色
          }
        `;
        // 使用twgl创建着色器程序的信息
        const kaleidProgramInfo = twgl.createProgramInfo(gl, [
          kaleidVS,
          kaleidFS,
        ]);

        /**
         * 根据给定的单位四边形顶点位置，创建并返回一个包含缓冲信息的对象。
         * 该方法通过重复单位四边形来覆盖一个指定大小的区域，并为每个四边形分配唯一的ID。
         * @param gl WebGL上下文，用于创建和管理WebGL资源。
         * @param across 横向上的四边形数量
         * @param down 纵向上的四边形数量
         * @returns 返回通过TWGL创建的包含位置、ID和索引的缓冲信息对象
         */
        function createUnitQuadsBufferInfo(gl, across, down) {
          // 计算四边形、顶点和索引的总数
          const numQuads = across * down;
          const numVertices = 4 * numQuads;
          const numIndices = 6 * numQuads;

          // 创建增强型TypedArray来存储位置、ID和索引
          const positions = twgl.primitives.createAugmentedTypedArray(
            3,
            numVertices,
          );
          const ids = twgl.primitives.createAugmentedTypedArray(
            2,
            numVertices,
            Uint16Array,
          );
          const indices = twgl.primitives.createAugmentedTypedArray(
            3,
            numIndices,
            Uint16Array,
          );

          // 定义一个单位四边形的顶点位置
          const verts = [-1, -1, -1, 1, -1, 0, -1, 1, 0, 1, 1, 1];

          let ndx = 0;
          // 遍历每个四边形，复制顶点位置并设置ID，以及创建索引
          for (let yy = 0; yy < down; ++yy) {
            for (let xx = 0; xx < across; ++xx) {
              positions.push(verts);
              ids.push(xx, yy, xx, yy, xx, yy, xx, yy);
              indices.push(
                ndx + 0,
                ndx + 1,
                ndx + 2,
                ndx + 2,
                ndx + 1,
                ndx + 3,
              );
              ndx += 4;
            }
          }

          // 根据数组创建缓冲信息并返回
          return twgl.createBufferInfoFromArrays(gl, {
            position: positions,
            id: ids,
            indices: indices,
          });
        }

        const segments = 20; // 定义绘制的细分段数
        // const cyAcross = 12;
        // const cyDown = 25;
        const bufferInfo = twgl.primitives.createCubeBufferInfo(gl, 2); // 创建立方体的缓冲信息
        const screenBufferInfo = createUnitQuadsBufferInfo(gl, segments, 1); // 创建单位正方形的缓冲信息，用于屏幕渲染

        const fbSize = 1024; // 定义帧缓冲区的大小
        // 创建帧缓冲区信息
        const framebufferInfo = twgl.createFramebufferInfo(
          gl,
          undefined,
          fbSize,
          fbSize,
        );

        // 创建一个纹理，用于材质表现
        const tex = twgl.createTexture(gl, {
          min: gl.NEAREST, // 纹理过滤方式为最近点采样
          mag: gl.NEAREST, // 纹理过滤方式为最近点采样
          src: [
            // 纹理的初始数据
            255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
            255, 255, 255,
          ],
        });

        // 定义着色器使用的uniforms变量，包括光照、材质等参数
        const uniforms = {
          u_lightWorldPos: [1, 8, -10], // 光源世界位置
          u_lightColor: [0.2, 0.5, 1.0, 1], // 光源颜色
          u_ambient: [0, 0, 0, 1], // 环境光颜色
          u_specular: [1, 1, 1, 1], // 高光颜色
          u_shininess: 50, // 高光指数
          u_specularFactor: 1, // 高光强度
          u_diffuse: tex, // 纹理贴图
          u_fogColor: [1, 1, 1, 1], // 雾颜色
          u_fogNear: 5, // 雾开始距离
          u_fogFar: 25, // 雾结束距离
          u_world: m4.identity(), // 世界矩阵
        };

        // 定义屏幕渲染时使用的uniforms变量，包括纹理、矩阵等
        const screenUniforms = {
          u_texture: framebufferInfo.attachments[0], // 使用帧缓冲区中的颜色附件作为纹理
          u_matrix: m4.translation([1, 1, 0]), // 矩阵变换，用于屏幕渲染
          u_projection: m4.identity(), // 投影矩阵，屏幕渲染使用单位矩阵
          u_angleTime: 0, // 角度和时间的乘积，可用于动画
          u_angleScale: 1, // 角度缩放，控制动画速度
        };

        /**
         * 线性插值函数，用于计算两个值之间的插值。
         * @param a 起始值。
         * @param b 结束值。
         * @param t 进度值，范围为0到1。
         * @returns 返回插值结果。
         */
        function lerp(a, b, t) {
          return a + (b - a) * t;
        }

        // 初始化颜色变量
        let currentBaseColor;
        let targetBaseColor;
        let baseColorScale;
        const colorFadeDuration = 5; // 颜色淡入的持续时间
        const colorChangeDuration = 10; // 颜色变化的持续时间
        let colorFadeTimer; // 颜色淡入的计时器
        let colorChangeTimer; // 颜色变化的计时器

        // 选择新的基础颜色，并设置为目标颜色，用于颜色过渡。
        function pickNewColor() {
          // 如果已有目标颜色，则使用当前目标颜色，否则随机生成
          currentBaseColor =
            targetBaseColor || chroma.hsv(Math.random() * 360, 1, 1);
          // 随机生成新的目标颜色
          targetBaseColor = chroma.hsv(Math.random() * 360, 1, 1);
          // 设置颜色过渡的渐变尺度
          baseColorScale = chroma
            .scale([currentBaseColor, targetBaseColor])
            .mode('lab');
          // 重置颜色过渡和变化的计时器
          colorFadeTimer = colorFadeDuration;
          colorChangeTimer = colorChangeDuration;
        }
        pickNewColor(); // 初始化颜色

        let then = 0; // 上一帧的时间戳, 用于时间计算的变量

        // 更新画面颜色和几何体渲染。
        function drawScene(_time) {
          console.log('====useFramebuffer', useFramebuffer.current);
          if (gl) {
            let time = _time; // 从程序开始到当前的时间戳（单位：毫秒）。
            time *= 0.001; // 将时间转换为秒
            const deltaTime = time - then; // 计算帧间隔
            then = time; // 更新上一帧时间

            twgl.resizeCanvasToDisplaySize(canvas); // 调整画布大小以适应显示设备

            let aspect; // 宽高比
            if (useFramebuffer.current) {
              // 如果使用帧缓冲区，绑定它并设置宽高比为1
              twgl.bindFramebufferInfo(gl, framebufferInfo);
              aspect = 1;
            } else {
              // 否则，绑定默认帧缓冲区并根据画布尺寸计算宽高比
              twgl.bindFramebufferInfo(gl, null);
              aspect = canvas.clientWidth / canvas.clientHeight;
            }

            // 更新颜色淡入淡出和变化的计时器
            colorFadeTimer -= deltaTime; // 更新颜色淡出的计时器
            colorChangeTimer -= deltaTime; // 更新颜色变化的计时器
            if (colorChangeTimer <= 0) {
              pickNewColor(); // 如果到了颜色变化的时间，选择新的颜色
            }

            // 计算颜色淡入的程度，并更新雾化颜色
            const colorLerp =
              1 - Math.max(0, colorFadeTimer / colorFadeDuration); // 计算颜色淡入的程度
            const fadeColor = baseColorScale(colorLerp); // 根据淡入程度调整颜色
            uniforms.u_fogColor = fadeColor.gl(); // 更新雾化颜色
            const fc = uniforms.u_fogColor;

            // 启用剔除面、深度测试，设置清屏颜色
            gl.cullFace(gl.BACK); // 设置剔除面为背面
            gl.enable(gl.CULL_FACE); // 启用剔除面功能
            gl.enable(gl.DEPTH_TEST); // 启用深度测试
            gl.clearColor(fc[0], fc[1], fc[2], fc[3]); // 设置清屏颜色
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 清屏

            // 计算透视投影和相机位置
            const projection = m4.perspective(
              (30 * Math.PI) / 180, // 视角，以弧度计
              aspect, // 视口的宽高比
              0.5, // 最近平面距离
              30, // 最远平面距离
            );

            // 设置相机位置、目标点和向上向量，计算相机矩阵和视图矩阵
            const eye = [1, 0, -16];
            const target = [0, 0, 0];
            const up = [0, 1, 0];
            const camera = m4.lookAt(eye, target, up);
            const view = m4.inverse(camera);
            const viewProjection = m4.multiply(projection, view);
            uniforms.u_viewInverse = camera;

            // 使用着色器程序，设置缓冲区和属性
            gl.useProgram(programInfo.program);
            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

            // 遍历并渲染25个几何体，每个几何体通过不同的世界矩阵进行位置、旋转和缩放
            for (let ii = 0; ii < 25; ++ii) {
              const x = ii % 5;
              const y = (ii / 5) | 0;
              const world = uniforms.u_world;
              m4.identity(world);
              // 更新世界矩阵：位置、旋转、缩放
              m4.translate(world, [0, 0, 0], world);
              // 应用Y轴和Z轴的旋转
              m4.rotateY(world, time * 0.43, world);
              m4.rotateZ(world, time * 0.37, world);
              // 根据x和y坐标调整几何体的位置
              m4.translate(world, [x * 3 - 7 - 3, y * 3 - 5 - 3, 0], world);
              // 应用X轴和Y轴的旋转，每个几何体略有不同
              m4.rotateX(world, time * 0.21 + ii, world);
              m4.rotateY(world, time * 0.53 + ii, world);

              // 更新uniforms以反映当前的世界矩阵状态
              uniforms.u_world = world;
              uniforms.u_worldInverseTranspose = m4.transpose(
                m4.inverse(world),
              );
              uniforms.u_worldViewProjection = m4.multiply(
                viewProjection,
                world,
              );
              //        uniforms.u_lightColor[0] = x / 4;
              //        uniforms.u_lightColor[1] = y / 4;
              //        uniforms.u_lightColor[2] = 1 - (x + y) / 8;

              //        uniforms.u_lightColor[0] = Math.max(x, y) / 5;
              //        uniforms.u_lightColor[1] = Math.max(y, x) / 5;
              //        uniforms.u_lightColor[2] = 1;// - (x + y) / 8;
              // 设置光源颜色
              uniforms.u_lightColor = [2, 2, 2, 1];

              // 使用设置的uniforms渲染几何体
              twgl.setUniforms(programInfo, uniforms);
              twgl.drawBufferInfo(gl, bufferInfo);
            }

            /**
             * 使用帧缓冲对象渲染图形。
             * 该代码段配置并使用了OpenGL的状态机，包括清除颜色缓冲区和深度缓冲区、设置着色程序、
             * 计算投影矩阵以及更新统一变量。它通过调整统一变量来实现动画效果。
             */
            if (useFramebuffer.current) {
              twgl.bindFramebufferInfo(gl, null); // 绑定默认的帧缓冲对象

              // 设置清除颜色并清除颜色缓冲区和深度缓冲区
              gl.clearColor(0, 0, 0, 0);
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              // 使用着色程序
              gl.useProgram(kaleidProgramInfo.program);

              // 计算最大和最小的缩放比例
              const maxScale = (Math.PI * 2) / 6; // 最大缩放比例基于完整圆周被分割为6段
              const minScale = (Math.PI * 2) / segments; // 最小缩放比例基于提供的分割段数
              const s = 0.7; // 缩放调整系数

              // 根据画布的宽高比设置正交投影，以适应画布尺寸
              aspect = canvas.clientWidth / canvas.clientHeight;
              m4.ortho(
                -aspect * s, // 左边界
                aspect * s, // 右边界
                -1 * s, // 下边界
                1 * s, // 上边界
                -1, // 近平面
                1, // 远平面
                screenUniforms.u_projection,
              );

              // 设置动画时间，影响缩放和位置
              screenUniforms.u_angleTime = time * 0.1;
              // 根据时间调整缩放比例，实现动态变化的视觉效果
              screenUniforms.u_angleScale = lerp(
                minScale, // 最小缩放值
                maxScale, // 最大缩放值
                Math.sin(time * 0.017) * 0.5 + 0.5, // 时间函数，产生0到1之间的波动值
              );
              // 设置变换矩阵，用于位置和大小变换。首先设置为单位矩阵，然后进行平移和缩放操作
              m4.identity(screenUniforms.u_matrix);
              m4.translate(
                screenUniforms.u_matrix,
                [1, 0.5, 0], // 平移量
                screenUniforms.u_matrix,
              );
              m4.scale(
                screenUniforms.u_matrix,
                [1, 2, 1], // 缩放因子
                screenUniforms.u_matrix,
              );

              // 设置缓冲区和属性，然后绘制
              twgl.setBuffersAndAttributes(
                gl,
                kaleidProgramInfo,
                screenBufferInfo,
              );
              twgl.setUniforms(kaleidProgramInfo, screenUniforms); // 设置统一变量
              twgl.drawBufferInfo(gl, screenBufferInfo); // 执行绘制命令
            }

            requestId.current = requestAnimationFrame(drawScene);
          }
        }

        // 初始绘制
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return (
    <>
      <canvas ref={canvasRef} style={{ width: '100%', height: '500px' }} />
      <Button
        type="primary"
        onClick={() => {
          useFramebuffer.current = !useFramebuffer.current;
        }}
      >
        切換
      </Button>
    </>
  );
};

export default Kaleidoscope;
