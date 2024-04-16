/**
 * title: Text
 */
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const Text = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const requestId = useAnimationFrame(canvasRef, () => {
    if (canvasRef.current) {
      // 获取canvas元素、twgl实用函数和WebGL上下文
      const canvas = canvasRef.current;
      const m4 = twgl.m4; // 导入twgl的m4模块，用于执行矩阵操作，例如变换（翻译、旋转、缩放）等
      const gl = canvas.getContext('webgl');
      if (gl) {
        // 定义顶点着色器源码
        const vertexShaderSource = `
          uniform mat4 u_worldViewProjection; // 用于变换顶点位置的世界视图投影矩阵

          attribute vec4 a_position; // 顶点位置属性
          attribute vec2 a_texcoord; // 顶点纹理坐标属性
          
          varying vec2 v_texcoord; // 传递给片段着色器的纹理坐标变量
          
          void main() {
            v_texcoord = a_texcoord; // 将顶点的纹理坐标传递给片段着色器
            gl_Position = u_worldViewProjection * a_position; // 计算顶点在屏幕上的位置
          }
        `;
        // 定义片段着色器源码
        const fragmentShaderSource = `  
          precision mediump float; // 确定浮点精度

          varying vec2 v_texcoord; // 从顶点着色器接收的纹理坐标
          uniform sampler2D u_texture; // 纹理采样器
          uniform vec4 u_color; // 统一颜色变量，可用于整体着色调整
          
          void main() {
            vec4 color = texture2D(u_texture, v_texcoord) * u_color; // 根据纹理坐标采样并乘以统一颜色
            if (color.a < 0.1) { // 如果颜色的透明度低于阈值，则丢弃该像素
              discard;
            }
            gl_FragColor = color; // 设置最终的像素颜色
          }
        `;

        // 创建WebGL程序, 使用twgl库根据提供的着色器源码创建WebGL程序的信息对象
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource, // 需要编译的顶点着色器源码
          fragmentShaderSource, // 需要编译的片段着色器源码
        ]);

        // 创建一个平面的缓冲信息
        const bufferInfo = twgl.primitives.createPlaneBufferInfo(
          gl,
          1, // 平面的宽度
          1, // 平面的高度
          1, // x轴上的细分数量
          1, // y轴上的细分数量
          m4.rotationX(Math.PI * 0.5), // 平面的旋转矩阵，此处将其绕X轴旋转90度
        );

        /**
         * 生成一个介于min和max之间的随机数。
         * @param {number} min - 随机数的最小值。
         * @param {number} max - 随机数的最大值。
         * @return {number} 介于min和max之间的随机数。
         */
        function rand(min, max) {
          return min + Math.random() * (max - min);
        }

        // 共享值
        const camera = m4.identity(); // 摄像机矩阵
        const view = m4.identity(); // 视图矩阵
        const viewProjection = m4.identity(); // 视图投影矩阵
        const world = m4.identity(); // 世界矩阵

        const ctx = document.createElement('canvas').getContext('2d');
        /**
         * 创建并返回一个带有指定文本的canvas元素。
         * @param text 要绘制在canvas上的文本。
         * @returns 返回一个包含绘制文本的canvas元素，如果上下文不存在，则返回undefined。
         */
        function makeText(text) {
          if (ctx) {
            ctx.font = '20px monospace'; // 设置字体样式
            const t = ctx.measureText(text); // 测量文本宽度
            ctx.canvas.width = Math.ceil(t.width) + 2; // 根据文本宽度调整canvas宽度
            ctx.canvas.height = 24; // 设置canvas高度
            ctx.font = '20px monospace'; // 再次设置字体，确保一致性
            ctx.fillStyle = 'white'; // 设置文本填充颜色为白色
            ctx.textAlign = 'center'; // 设置文本在canvas上水平居中
            ctx.textBaseAlign = 'middle'; // 设置文本在canvas上垂直居中
            ctx.fillText(
              text,
              (ctx.canvas.width / 2) | 0, // 文本x坐标，确保整数
              (ctx.canvas.height / 2) | 0, // 文本y坐标，确保整数
            );
            return ctx.canvas; // 返回包含文本的canvas元素
          }
        }

        // 定义一个包含多个名字的消息数组
        const msgs = [
          'al',
          'joe',
          'jill',
          'brian',
          'thomas',
          'chrissy',
          'jennifer',
          'alexander',
        ];

        // 设置像素存储模式，用于处理纹理的alpha通道
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        // 为每个消息创建一个纹理和相应的缩放比例
        const textTextures = msgs.map(function (msg) {
          const canvas = makeText(msg); // 创建一个带有文本的画布
          const scale = 0.01; // 纹理的缩放比例
          return {
            tex: twgl.createTexture(gl, { src: canvas }), // 创建纹理
            scale: [canvas.width * scale, canvas.height * scale, 1], // 计算并返回缩放数组
          };
        });

        // 初始化要绘制的对象列表和绘制信息列表
        const objects: any[] = [];
        const drawObjects: any[] = [];
        const numObjects = 500; // 定义对象的数量
        const baseHue = rand(0, 360); // 随机基础色相值
        // 创建多个绘制对象，并为每个对象随机设置纹理、位置和颜色
        for (let ii = 0; ii < numObjects; ++ii) {
          const texNdx = rand(0, textTextures.length) | 0; // 随机选择一个纹理
          const text = textTextures[texNdx]; // 获取选中的纹理信息
          const uniforms = {
            u_texture: text.tex, // 设置使用的纹理
            u_worldViewProjection: m4.identity(), // 设置世界视图投影矩阵
            u_color: chroma.hsv((baseHue + rand(0, 60)) % 360, 1, 1).gl(), // 随机设置颜色
          };
          // 添加绘制对象的详细信息到绘制对象列表
          drawObjects.push({
            programInfo: programInfo,
            bufferInfo: bufferInfo,
            uniforms: uniforms,
          });
          // 添加对象的位移、速度和材质信息到对象列表
          objects.push({
            translation: [rand(-10, 10), rand(-10, 10), rand(-10, 10)],
            ySpeed: rand(0.1, 0.3),
            zSpeed: rand(0.1, 0.3),
            uniforms: uniforms,
            texInfo: text,
          });
        }
        // 设置清除颜色，使用基于基础色相的随机颜色
        const clearColor = chroma.hsv((baseHue + 30) % 360, 0.5, 0.5).gl();

        /**
         * 绘制场景的函数，负责利用WebGL渲染当前场景。
         * @param time {number} 当前时间戳，用于动画的推进。
         */
        function drawScene(_time) {
          if (gl) {
            // 时间处理，转换为秒
            let time = _time;
            time *= 0.001;

            twgl.resizeCanvasToDisplaySize(canvas); // 调整HTML画布大小以适应显示尺寸
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // 设置WebGL视口

            // 启用深度测试和混合
            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            // 设置混合函数
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            // 清理颜色缓冲区和深度缓冲区
            gl.clearColor(
              clearColor[0],
              clearColor[1],
              clearColor[2],
              clearColor[3],
            );
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // 设置投影矩阵
            const projection = m4.perspective(
              (30 * Math.PI) / 180, // 视场角，以弧度计
              canvas.clientWidth / canvas.clientHeight, // 视图宽高比
              0.5, // 靠近平面
              100, // 远离平面
            );
            // 设置相机位置、目标点和向上向量
            const eye = [1, 4, -20];
            const target = [0, 0, 0];
            const up = [0, 1, 0];

            // 计算相机矩阵并求其逆矩阵，用于视图矩阵
            m4.lookAt(eye, target, up, camera);
            m4.inverse(camera, view);
            // 计算视图投影矩阵
            m4.multiply(projection, view, viewProjection);

            // 遍历所有物体，设置其在场景中的位置和外观
            objects.forEach(function (obj) {
              const uni = obj.uniforms;
              const texInfo = obj.texInfo;
              // 初始化世界矩阵
              m4.identity(world);
              // 应用物体的旋转和位移
              m4.rotateY(world, time * obj.ySpeed, world);
              m4.rotateZ(world, time * obj.zSpeed, world);
              m4.translate(world, obj.translation, world);
              m4.rotateX(world, time, world);
              m4.scale(world, texInfo.scale, world);
              // 计算世界视图矩阵
              m4.multiply(view, world, world);

              // 计算物体的统一变量，用于WebGL着色器
              m4.multiply(projection, world, uni.u_worldViewProjection);
            });

            twgl.drawObjectList(gl, drawObjects); // 执行绘制命令

            requestId.current = requestAnimationFrame(drawScene); // 请求下一帧动画
          }
        }

        // 开始动画循环。
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} style={{ width: '100%', height: '500px' }} />;
};

export default Text;
