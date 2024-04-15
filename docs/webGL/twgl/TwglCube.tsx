/**
 * title: twgl cube
 */
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const TwglCube = () => {
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
          uniform mat4 u_worldViewProjection; // 定义统一变量：世界视图投影矩阵
          uniform vec3 u_lightWorldPos; // 定义统一变量：光源在世界空间的位置
          uniform mat4 u_world; // 定义统一变量：世界矩阵
          uniform mat4 u_viewInverse; // 定义统一变量：视图矩阵的逆矩阵
          uniform mat4 u_worldInverseTranspose; // 定义统一变量：世界矩阵的逆转置矩阵
          
          attribute vec4 position; // 定义顶点属性：顶点位置
          attribute vec3 normal; // 定义顶点属性：法向量
          attribute vec2 texcoord; // 定义顶点属性：纹理坐标
          
          varying vec4 v_position; // 定义varying变量：传递给片段着色器的纹理坐标
          varying vec2 v_texCoord; // 定义varying变量：传递给片段着色器的纹理坐标
          varying vec3 v_normal; // 定义varying变量：传递给片段着色器的法向量
          varying vec3 v_surfaceToLight; // 定义varying变量：传递给片段着色器的表面到光源的距离
          varying vec3 v_surfaceToView; // 定义varying变量：传递给片段着色器的表面到观察者的距离
          
          // 顶点着色器主函数
          void main() {
            v_texCoord = texcoord;  // 将纹理坐标传递给片段着色器
            v_position = u_worldViewProjection * position; // 计算顶点在世界视图投影空间的位置
            v_normal = (u_worldInverseTranspose * vec4(normal, 0)).xyz; // 计算顶点在世界空间的法向量
            v_surfaceToLight = u_lightWorldPos - (u_world * position).xyz; // 计算顶点表面到光源的距离
            v_surfaceToView = (u_viewInverse[3] - (u_world * position)).xyz; // 计算顶点表面到观察者的距离
            gl_Position = v_position; // 设置gl_Position，确定最终的顶点位置
          }
        `;
        // 定义片段着色器源码
        const fragmentShaderSource = `  
          precision mediump float; // 确定float的精度为medium

          // 下面的varying变量用于传递顶点着色器中的数据到片段着色器
          varying vec4 v_position; // 顶点位置
          varying vec2 v_texCoord; // 顶点纹理坐标
          varying vec3 v_normal; // 顶点法向量
          varying vec3 v_surfaceToLight; // 表面到光源的向量
          varying vec3 v_surfaceToView; // 表面到观察者的向量
          
          // uniform变量用于传递全局属性给着色器
          uniform vec4 u_lightColor; // 光源颜色
          uniform vec4 u_ambient; // 环境光颜色
          uniform sampler2D u_diffuse; // 纹理贴图
          uniform vec4 u_specular; // 高光颜色
          uniform float u_shininess; // 高光指数
          uniform float u_specularFactor; // 高光强度因子
          
          // 计算光照的lit函数
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        max(l, 0.0), // 漫反射成分
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0, // 高光反射成分
                        1.0);
          }
          
          // 主函数：计算像素颜色
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord); // 从纹理贴图获取颜色
            vec3 a_normal = normalize(v_normal); // 正常化法向量
            vec3 surfaceToLight = normalize(v_surfaceToLight); // 正常化表面到光源的向量
            vec3 surfaceToView = normalize(v_surfaceToView); // 正常化表面到观察者的向量
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // 计算半向量（光源方向与观察方向的中间向量）
            // 使用lit函数计算光照
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            // 计算最终颜色
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            // 设置像素颜色
            gl_FragColor = outColor;
          } 
        `;

        // 创建WebGL程序
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        /**
         * 准备绘制所需的数据
         * 该对象包含了几何体绘制所需的位置、法向量、纹理坐标和索引数据。
         * 其中：
         * - position: 顶点位置数组，用于定义几何体的形状。24*3
         * - normal: 法向量数组，用于光照计算中表示每个顶点的法线方向。24*3
         * - texcoord: 纹理坐标数组，用于映射纹理到几何体表面。24*2
         * - indices: 索引数组，用于指定顶点的连接关系，形成多边形。24
         */
        const arrays = {
          position: [
            1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1,
            -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1,
            1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1,
            1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1,
          ],
          normal: [
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0,
            -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0,
            -1, 0, 0, -1, 0, 0, -1,
          ],
          texcoord: [
            1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1,
            1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1,
            1, 1,
          ],
          indices: [
            0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14,
            12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
          ],
        };
        // 使用TWGL库根据提供的数组创建一个缓冲区信息对象。
        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

        // 使用TWGL库创建并设置纹理参数，包括最小过滤器、最大过滤器和源数据。
        const tex = twgl.createTexture(gl, {
          min: gl.NEAREST,
          mag: gl.NEAREST,
          src: [
            255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
            255, 255, 255,
          ],
        });

        // 定义用于着色器的uniforms变量，包括光源位置、颜色、环境光、镜面光等参数。
        const uniforms = {
          u_lightWorldPos: [1, 8, -10],
          u_lightColor: [1, 0.8, 0.8, 1],
          u_ambient: [0, 0, 0, 1],
          u_specular: [1, 1, 1, 1],
          u_shininess: 50,
          u_specularFactor: 1,
          u_diffuse: tex,
        };

        /**
         * 绘制场景函数。
         * @param time {number} 当前时间戳。
         */
        function drawScene(time) {
          if (gl) {
            let currentTime = time;
            currentTime *= 0.001; // 将时间戳转换为秒。
            twgl.resizeCanvasToDisplaySize(canvas); // 根据浏览器窗口大小调整画布尺寸。
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // 设置视口，使其填充整个画布。

            // 启用深度测试和面剔除，以实现正确的3D渲染效果。
            gl.enable(gl.DEPTH_TEST); // 启用深度测试。
            gl.enable(gl.CULL_FACE); // 启用面剔除。

            // 清除颜色和深度缓冲，为新的渲染帧做准备。
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // 设置透视投影和相机参数。
            const fov = (30 * Math.PI) / 180; // 视场角，以弧度计
            const aspect = gl.canvas.width / gl.canvas.height; // 视图宽高比
            const zNear = 0.5; // 靠近平面
            const zFar = 10; // 远离平面
            const projection = m4.perspective(fov, aspect, zNear, zFar); // 创建透视投影矩阵

            // 定义相机位置、目标点和向上方向，用于创建相机视图矩阵。
            const eye = [1, 4, -6]; // 相机位置
            const target = [0, 0, 0]; // 相机朝向的目标点
            const up = [0, 1, 0]; // 相机的向上方向
            const camera = m4.lookAt(eye, target, up); // 创建相机视图矩阵
            const view = m4.inverse(camera); // 计算视图矩阵的逆矩阵
            const viewProjection = m4.multiply(projection, view); // 将投影矩阵和视图矩阵相乘得到视图投影矩阵

            const world = m4.rotationY(currentTime); // 通过时间旋转世界矩阵，实现动态效果

            // 更新uniforms中的视图、世界等矩阵，供着色器使用
            uniforms.u_viewInverse = camera;
            uniforms.u_world = world;
            uniforms.u_worldInverseTranspose = m4.transpose(m4.inverse(world));
            uniforms.u_worldViewProjection = m4.multiply(viewProjection, world);

            // 使用程序、设置缓冲区和属性，应用uniforms并绘制三角形。
            gl.useProgram(programInfo.program); // 使用着色程序
            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo); // 设置缓冲区和属性
            twgl.setUniforms(programInfo, uniforms); // 应用uniforms
            gl.drawElements(
              gl.TRIANGLES, // 为什么使用TRIANGLES：尽管最终呈现的是一个完整的正方体，但其内部顶点数据和索引信息实际上是按照多个三角形来组织的
              bufferInfo.numElements,
              gl.UNSIGNED_SHORT,
              0,
            );

            requestId.current = requestAnimationFrame(drawScene); // 请求下一帧动画。
          }
        }

        // 开始动画循环。
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} width={100} height={100} />;
};

export default TwglCube;
