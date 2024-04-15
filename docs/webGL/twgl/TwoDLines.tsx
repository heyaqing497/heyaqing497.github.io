/**
 * title: 2D-lines
 */
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const TwoDLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestId = useAnimationFrame(canvasRef, () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      const m4 = twgl.m4; // 导入twgl的m4模块，用于矩阵操作
      twgl.setDefaults({ attribPrefix: 'a_' }); // 设置twgl的默认属性，将属性前缀设置为"a_"
      if (gl) {
        // 定义顶点着色器源代码
        const vertexShaderSource = `  
          // 定义统一变量：变换矩阵、偏移量、中心点坐标和缩放因子
          uniform mat4 u_matrix;
          uniform vec4 u_offsets;
          uniform vec4 u_centers;
          uniform vec4 u_mult;
    
          // 定义属性变量：顶点位置和颜色
          attribute vec2 a_position;
          attribute vec4 a_color;
    
          // 定义varying变量，用于顶点着色器和片段着色器间传递颜色
          varying vec4 v_color;
    
          // 定义圆周率PI
          #define PI 3.14159
    
          // 主函数：计算每个顶点的最终位置和颜色
          void main() {
            vec2 offset = mix(u_offsets.xz, u_offsets.yw, a_position.y); // 根据顶点的y坐标，混合两个偏移量
            // 计算角度并应用缩放和偏移
            float a = u_mult.x * a_position.x * PI * 2.0 + offset.x; // mix(u_offsets.x, u_offsets.y, a_position.y);
            // 使用角度计算x和y坐标
            float c = cos(a * u_mult.y);
            vec2 xy = vec2(
              cos(a),
              sin(a)) * c * offset.y +
              mix(u_centers.xy, u_centers.zw, a_position.y);
            gl_Position = u_matrix * vec4(xy, 0, 1); // 应用变换矩阵，设置最终顶点位置
            v_color = a_color; // 传递颜色到片段着色器
          }
        `;
        // 定义片段着色器源代码
        const fragmentShaderSource = `  
          precision mediump float; // 定义中等精度浮点数

          varying vec4 v_color; // 接收从顶点着色器传递的颜色
    
          void main() { // 主函数：设置像素颜色
            gl_FragColor = v_color; // 直接使用接收的颜色设置像素
          }
        `;

        // 创建着色器程序信息，用于后续的渲染过程
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        // 初始化变量
        const numLines = 100; // 线的数量
        const arrays = {
          position: twgl.primitives.createAugmentedTypedArray(2, numLines * 2), // 位置数组
          color: twgl.primitives.createAugmentedTypedArray(
            3,
            numLines * 2,
            Uint8Array,
          ), // 颜色数组
        };

        // 生成一个介于min和max之间的随机数
        function rand(min, max) {
          return min + Math.random() * (max - min);
        }

        const hue = rand(0, 360); // 随机生成颜色的初始色调
        // 为每条线生成颜色和位置数据
        for (let ii = 0; ii < numLines; ++ii) {
          const u = ii / numLines;
          const h = (360 + hue + Math.abs(u - 0.5) * 100) % 360; // 计算颜色的色调
          const s = Math.sin(u * Math.PI * 2) * 0.25 + 0.75; // 计算颜色的饱和度
          const v = 1; // 颜色的亮度
          const color = chroma.hsv(h, s, v); // 根据色调、饱和度和亮度生成颜色
          arrays.position.push(u, 1); // 添加线上点的位置数据
          arrays.color.push(color.rgb()); // 添加颜色数据
          arrays.position.push(u, 0); // 添加线尾点的位置数据
          arrays.color.push(color.brighten().desaturate().rgb()); // 添加变化后的颜色数据
        }

        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays); // 创建缓冲信息

        // 设置偏移量、中心点、缩放倍数等统一变量
        const offsets = [0, 0, 0, 1];
        const centers = [0, 0, 0, 0];
        const mult = [1, 2, 0, 0];
        const uniforms = {
          u_matrix: m4.identity(), // 矩阵统一变量
          u_offsets: offsets, // 偏移量统一变量
          u_centers: centers, // 中心点统一变量
          u_mult: mult, // 缩放倍数统一变量
        };

        /**
         * 绘制场景的函数。
         * @param _time 时间戳，用于动画效果。
         */
        function drawScene(_time) {
          if (gl) {
            let time = _time;
            time *= 0.001; // 将时间转换为秒

            twgl.resizeCanvasToDisplaySize(canvas); // 调整canvas大小以适应显示尺寸
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // 设置OpenGL视口

            // 启用深度测试和剔除面
            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.CULL_FACE);
            gl.clearColor(0, 0, 0, 1); // 设置清除颜色为黑色
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 清除颜色和深度缓冲

            // 动态计算偏移量和中心点位置，用于几何形状的动画效果
            offsets[0] = Math.sin(time);
            offsets[1] = Math.sin(time * 0.13) * Math.PI * 2;
            offsets[2] = Math.sin(time * 0.43) * 0.5 + 1.0;
            offsets[3] = Math.cos(time * 0.17) * 0.5 + 0.5;

            centers[0] = Math.sin(time * 0.163) * 0.5;
            centers[1] = Math.cos(time * 0.267) * 0.5;
            centers[2] = Math.sin(time * 0.367) * 0.5;
            centers[3] = Math.cos(time * 0.497) * 0.5;

            // 通过时间来动态调整缩放比例
            mult[1] = (Math.sin(time * 0.1) * 0.5 + 0.5) * 3;

            // 计算透视投影矩阵
            const aspect = canvas.clientWidth / canvas.clientHeight;
            m4.ortho(-aspect, aspect, 1, -1, -1, 1, uniforms.u_matrix);

            // 使用OpenGL程序，并设置缓冲区和属性
            gl.useProgram(programInfo.program);
            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
            // 设置uniforms变量
            twgl.setUniforms(programInfo, uniforms);

            twgl.drawBufferInfo(gl, bufferInfo, gl.LINES); // 绘制缓冲区信息

            requestId.current = requestAnimationFrame(drawScene); // 请求下一帧动画
          }
        }

        // 请求开始绘制第一帧
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} width={800} height={300} />;
};

export default TwoDLines;
