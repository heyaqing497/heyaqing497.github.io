/**
 * title: twgl.js畫三角形
 */
import React, { useEffect, useRef } from 'react';
import * as twgl from 'twgl.js';

const Triangle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      if (gl) {
        // 设置WebGL视图大小
        const width = gl.canvas.width;
        const height = gl.canvas.height;
        twgl.resizeCanvasToDisplaySize(canvas);

        // 创建着色器
        const vertexShaderSource = `  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `;
        const fragmentShaderSource = `  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色  
          }  
        `;

        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        // 创建顶点数据  (x,y,z)
        const positions = new Float32Array([
          -1,
          -1,
          0, // 下角
          0.5,
          1,
          0, // 上角
          1,
          0,
          0, // 中間右角
        ]);
        const bufferInfo = twgl.createBufferInfoFromArrays(gl, {
          position: positions,
        });

        // 绘制场景
        function drawScene() {
          if (gl) {
            gl.viewport(0, 0, width, height);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.useProgram(programInfo.program);

            // 创建元素数组缓冲区
            const elementArrayBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);

            // 将索引数据填充到缓冲区中
            const indices = new Uint16Array([0, 1, 2]); // 例如，一个三角形的顶点索引
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

            // 现在你可以安全地调用 gl.drawElements 来绘制图形
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
          }
        }

        // 初始绘制
        drawScene();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={100} height={100} />;
};

export default Triangle;
