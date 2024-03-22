/**
 * title: 我是一個正方形
 */
import React, { useEffect, useRef, type FC } from 'react';

const Foo: FC<{ title: string }> = () => {
  const webglRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = webglRef.current;
    // 2d/webgl
    let gl = canvas?.getContext('webgl');
    if (gl) {
      // 设置顶点着色器和片段着色器
      let vertexShaderSource = `
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `;
      let fragmentShaderSource = `
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色
        }
      `;

      // 创建着色器程序
      let vertexShader = gl.createShader(gl.VERTEX_SHADER);
      let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

      gl.shaderSource(vertexShader, vertexShaderSource);
      gl.shaderSource(fragmentShader, fragmentShaderSource);

      gl.compileShader(vertexShader);
      gl.compileShader(fragmentShader);

      let program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);

      gl.linkProgram(program);
      gl.useProgram(program);

      // 准备数据
      let vertices = new Float32Array([
        1.0,
        1.0, // 右上角
        -1.0,
        1.0, // 左上角
        1.0,
        -1.0, // 右下角
        -1.0,
        -1.0, // 左下角
      ]);

      // 创建缓冲区
      let vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      // 获取a_Position变量的地址
      let a_Position = gl.getAttribLocation(program, 'a_Position');

      // 将缓冲区数据分配给a_Position变量
      gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

      // 开启a_Position变量
      gl.enableVertexAttribArray(a_Position);

      // 绘制正方形
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }, []);
  return <canvas ref={webglRef} width="100" height="100" />;
};

export default Foo;
