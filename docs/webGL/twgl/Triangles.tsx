/**
 * title: 三角形
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

        // 创建顶点着色器
        const vertexShaderSource = `  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `;
        // 创建片段着色器
        const fragmentShaderSource = `  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色  
          }  
        `;

        // 创建WebGL程序
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        const bufferInfo = twgl.createBufferInfoFromArrays(gl, {
          // 頂點數據 (x,y,z)
          position: [
            -1,
            -1,
            0, // 下角
            0.5,
            1,
            0, // 上角
            1,
            0,
            0, // 中間右角
          ],
          indices: [0, 1, 2], // 索引數據
        });

        // 绘制场景
        function drawScene() {
          if (gl) {
            // 调整canvas大小以适应显示尺寸
            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, width, height);

            gl.clear(gl.COLOR_BUFFER_BIT); // 清理画布

            gl.useProgram(programInfo.program); // 使用编译好的程序

            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo); // 设置缓冲区和属性
            //  执行绘制命令
            gl.drawElements(
              gl.TRIANGLES,
              bufferInfo.numElements,
              gl.UNSIGNED_SHORT,
              0,
            );
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
