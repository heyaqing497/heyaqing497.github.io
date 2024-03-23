/**
 * title: 我是一個正方體
 */
import React, { useEffect, useRef, type FC } from 'react';

const Cube: FC<{ title: string }> = () => {
  const webglRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = webglRef.current;
    // 2d/webgl
    const gl = canvas?.getContext('webgl');
    if (gl) {
      const vertexShaderSrc = `
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;  // 视图矩阵
        uniform mat4 u_ProjMatrix; // 正射投影矩阵
        mat4 u_MvpMatrix = u_ProjMatrix * u_ViewMatrix;
        varying vec4 v_Color;
        void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
        }
        `;

      const fragmentShaderSrc = `
        precision highp float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
        `;

      /**** 渲染器生成处理 ****/
      // 创建顶点渲染器
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexShaderSrc);
      gl.compileShader(vertexShader);
      // 创建片元渲染器
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentShaderSrc);
      gl.compileShader(fragmentShader);
      // 程序对象
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.useProgram(program);
      gl.program = program;

      // prettier-ignore
      const verticesColors = new Float32Array([
        1, 1, 1, 1, 1, 1, // 点 0 白
        -1, 1, 1, 1, 0, 1, // 点 1 品红
        -1, -1, 1, 1, 0, 0, // 点 2 红
        1, -1, 1, 1, 1, 0, // 点 3 黄

        1, -1, -1, 0, 1, 0, // 点 4 绿色
        1, 1, -1, 0, 1, 1, // 点 5 青色
        -1, 1, -1, 0, 0, 1, // 点 6 蓝色
        -1, -1, -1, 0, 0, 0, // 点 7 黑色
      ]);

      // prettier-ignore
      const indices = new Uint8Array([
        0, 1, 2, 0, 2, 3, // 正面
        0, 3, 4, 0, 4, 5, // 右面
        0, 5, 6, 0, 6, 1, // 上面
        1, 6, 7, 1, 7, 2, // 左面
        7, 4, 3, 7, 3, 2, // 下面
        4, 7, 6, 4, 6, 5, // 背面
      ]);

      // 每个数组元素的字节数
      const SIZE = verticesColors.BYTES_PER_ELEMENT;
      // 创建缓存对象
      const vertexColorBuffer = gl.createBuffer();
      const indexBuffer = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

      // 获取 a_Position 变量地址
      const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
      const a_Color = gl.getAttribLocation(gl.program, 'a_Color');
      /****** 正射投影 ******/
      const u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');

      // prettier-ignore
      const viewMatrix = createViewMatrix(
        3, 4, 8, // 观察点
        0, 0, 0, // 视点
        0, 1, 0 // 上方向
      )
      gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix);

      /****** 正射投影 ******/
      const u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
      // prettier-ignore
      const projMatrix = createPerspective(
        30, canvas.width / canvas.height, 1, 100
      )
      gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix);

      gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, SIZE * 6, 0);
      gl.enableVertexAttribArray(a_Position);

      gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, SIZE * 6, SIZE * 3);
      gl.enableVertexAttribArray(a_Color);

      /*** 绘制 ***/
      // 清空画布，并指定颜色
      gl.clearColor(0, 0, 0, 1);
      gl.enable(gl.DEPTH_TEST); // 启动深度检测，处理错误的像素覆盖问题

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      // 绘制三角形
      // gl.drawArrays(gl.TRIANGLES, 0, 8);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_BYTE, 0);

      /************ 后面都是一些工具类方法 ******/

      /**** 构造视图矩阵 ****/
      function createViewMatrix(eyeX, eyeY, eyeZ, atX, atY, atZ, upX, upY, upZ) {
        const normalize = (v) => {
          const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
          return [v[0] / length, v[1] / length, v[2] / length];
        };
        const subtract = (v1, v2) => {
          return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
        };
        const cross = (v1, v2) => {
          return [
            v1[1] * v2[2] - v1[2] * v2[1],
            v1[2] * v2[0] - v1[0] * v2[2],
            v1[0] * v2[1] - v1[1] * v2[0],
          ];
        };

        const zAxis = normalize(subtract([eyeX, eyeY, eyeZ], [atX, atY, atZ]));
        const xAxis = normalize(cross([upX, upY, upZ], zAxis));
        const yAxis = normalize(cross(zAxis, xAxis));

        return new Float32Array([
          xAxis[0],
          yAxis[0],
          zAxis[0],
          0,
          xAxis[1],
          yAxis[1],
          zAxis[1],
          0,
          xAxis[2],
          yAxis[2],
          zAxis[2],
          0,
          -(xAxis[0] * eyeX + xAxis[1] * eyeY + xAxis[2] * eyeZ),
          -(yAxis[0] * eyeX + yAxis[1] * eyeY + yAxis[2] * eyeZ),
          -(zAxis[0] * eyeX + zAxis[1] * eyeY + zAxis[2] * eyeZ),
          1,
        ]);
      }

      function angleToRadian(angle) {
        return (Math.PI * angle) / 180;
      }

      /***** 构建透视矩阵 *****/
      function createPerspective(fov, aspect, near, far) {
        fov = angleToRadian(fov); // 角度转弧度
        const f = 1.0 / Math.tan(fov / 2);
        const nf = 1 / (near - far);
        // prettier-ignore
        return new Float32Array([
          f / aspect, 0, 0, 0,
          0, f, 0, 0,
          0, 0, (far + near) * nf, -1,
          0, 0, 2 * far * near * nf, 0,
        ]);
      }
    }
  }, []);
  return <canvas ref={webglRef} width="200" height="200" />;
};

export default Cube;
