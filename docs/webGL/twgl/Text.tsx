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
      const m4 = twgl.m4;
      const gl = canvas.getContext('webgl');
      if (gl) {
        // 定义顶点着色器源码
        const vertexShaderSource = `
          uniform mat4 u_worldViewProjection;

          attribute vec4 a_position;
          attribute vec2 a_texcoord;
          
          varying vec2 v_texcoord;
          
          void main() {
            v_texcoord = a_texcoord;
            gl_Position = u_worldViewProjection * a_position;
          }
        `;
        // 定义片段着色器源码
        const fragmentShaderSource = `  
          precision mediump float;

          varying vec2 v_texcoord;
          uniform sampler2D u_texture;
          uniform vec4 u_color;
          
          void main() {
            vec4 color = texture2D(u_texture, v_texcoord) * u_color;
            if (color.a < 0.1) {
              discard;
            }
            gl_FragColor = color;
          }
        `;

        // 创建WebGL程序
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        const bufferInfo = twgl.primitives.createPlaneBufferInfo(
          gl,
          1,
          1,
          1,
          1,
          m4.rotationX(Math.PI * 0.5),
        );

        function rand(min, max) {
          return min + Math.random() * (max - min);
        }

        // Shared values
        const camera = m4.identity();
        const view = m4.identity();
        const viewProjection = m4.identity();
        const world = m4.identity();

        const ctx = document.createElement('canvas').getContext('2d');
        function makeText(text) {
          if (ctx) {
            ctx.font = '20px monospace';
            const t = ctx.measureText(text);
            ctx.canvas.width = Math.ceil(t.width) + 2;
            ctx.canvas.height = 24;
            ctx.font = '20px monospace';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseAlign = 'middle';
            ctx.fillText(
              text,
              (ctx.canvas.width / 2) | 0,
              (ctx.canvas.height / 2) | 0,
            );
            return ctx.canvas;
          }
        }

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

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        const textTextures = msgs.map(function (msg) {
          const canvas = makeText(msg);
          const scale = 0.01;
          return {
            tex: twgl.createTexture(gl, { src: canvas }),
            scale: [canvas.width * scale, canvas.height * scale, 1],
          };
        });

        const objects: any[] = [];
        const drawObjects: any[] = [];
        const numObjects = 500;
        const baseHue = rand(0, 360);
        for (let ii = 0; ii < numObjects; ++ii) {
          const texNdx = rand(0, textTextures.length) | 0;
          const text = textTextures[texNdx];
          const uniforms = {
            u_texture: text.tex,
            u_worldViewProjection: m4.identity(),
            u_color: chroma.hsv((baseHue + rand(0, 60)) % 360, 1, 1).gl(),
          };
          drawObjects.push({
            programInfo: programInfo,
            bufferInfo: bufferInfo,
            uniforms: uniforms,
          });
          objects.push({
            translation: [rand(-10, 10), rand(-10, 10), rand(-10, 10)],
            ySpeed: rand(0.1, 0.3),
            zSpeed: rand(0.1, 0.3),
            uniforms: uniforms,
            texInfo: text,
          });
        }
        const clearColor = chroma.hsv((baseHue + 30) % 360, 0.5, 0.5).gl();

        /**
         * 绘制场景函数。
         * @param time {number} 当前时间戳。
         */
        function drawScene(_time) {
          if (gl) {
            let time = _time;
            time *= 0.001;
            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.clearColor(
              clearColor[0],
              clearColor[1],
              clearColor[2],
              clearColor[3],
            );
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            const projection = m4.perspective(
              (30 * Math.PI) / 180,
              canvas.clientWidth / canvas.clientHeight,
              0.5,
              100,
            );
            const eye = [1, 4, -20];
            const target = [0, 0, 0];
            const up = [0, 1, 0];

            m4.lookAt(eye, target, up, camera);
            m4.inverse(camera, view);
            m4.multiply(projection, view, viewProjection);

            objects.forEach(function (obj) {
              const uni = obj.uniforms;
              const texInfo = obj.texInfo;
              m4.identity(world);
              m4.rotateY(world, time * obj.ySpeed, world);
              m4.rotateZ(world, time * obj.zSpeed, world);
              m4.translate(world, obj.translation, world);
              m4.rotateX(world, time, world);
              m4.scale(world, texInfo.scale, world);
              m4.multiply(view, world, world);

              m4.multiply(projection, world, uni.u_worldViewProjection);
            });

            twgl.drawObjectList(gl, drawObjects);

            requestId.current = requestAnimationFrame(drawScene);
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
