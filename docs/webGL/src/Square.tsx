/**
 * title: 我是一個正方形
 */
import React, { useEffect, useRef, type FC } from 'react';

const Square: FC<{ title: string }> = () => {
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
      // 片段着色器
      let fragmentShaderSource = `
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色
        }
      `;

      // 创建着色器程序 一般来说vertex shader处理顶点坐标，然后向后传输，经过光栅化之后，传给fragment shader，其负责颜色、纹理、光照等等
      let vertexShader = gl.createShader(gl.VERTEX_SHADER); // createShader创建一个 WebGLShader 着色器对象
      let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

      // shaderSource设置 WebGLShader 着色器（顶点着色器及片元着色器）的 GLSL 程序代码。
      gl.shaderSource(vertexShader, vertexShaderSource);
      gl.shaderSource(fragmentShader, fragmentShaderSource);

      // compileShader编译一个 GLSL 着色器，使其成为为二进制数据，然后就可以被WebGLProgram对象所使用。
      gl.compileShader(vertexShader);
      gl.compileShader(fragmentShader);

      // createProgram创建和初始化一个 WebGLProgram 对象。
      let program = gl.createProgram();
      // attachShader往 WebGLProgram 添加一个片段或者顶点着色器。
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);

      // linkProgram链接给定的WebGLProgram，从而完成为程序的片元和顶点着色器准备 GPU 代码的过程。
      gl.linkProgram(program);

      // useProgram将定义好的WebGLProgram 对象添加到当前的渲染状态中。
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

      // 创建并初始化一个用于储存顶点数据或着色数据的WebGLBuffer对象
      let vertexBuffer = gl.createBuffer();

      // bindBuffer将给定的 WebGLBuffer 绑定到目标。
      // gl.ARRAY_BUFFER: 包含顶点属性的 Buffer，如顶点坐标，纹理坐标数据或顶点颜色数据。
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      // bufferData创建并初始化了 Buffer 对象的数据存储区。
      // gl.STATIC_DRAW: 缓冲区的内容可能经常使用，而不会经常更改。内容被写入缓冲区，但不被读取。
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      // getAttribLocation() 方法返回了给定WebGLProgram对象中某属性的下标指向位置。
      // 获取a_Position变量的地址
      let a_Position = gl.getAttribLocation(program, 'a_Position');

      // 将缓冲区数据分配给a_Position变量
      gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

      // 开启a_Position变量, 打开属性数组列表中指定索引处的通用顶点属性数组。
      gl.enableVertexAttribArray(a_Position);

      // 绘制正方形, 用于从向量数组中绘制图元。
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }, []);
  return <canvas ref={webglRef} width="100" height="100" />;
};

export default Square;
