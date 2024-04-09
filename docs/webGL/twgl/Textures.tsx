/**
 * title: Textures
 */
import * as chroma from 'chroma-js';
import React, { useEffect, useRef } from 'react';
import * as twgl from 'twgl.js';

const Textures = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      twgl.setDefaults({ attribPrefix: 'a_' }); // 设置twgl的默认属性，将属性前缀设置为"a_"
      const m4 = twgl.m4; // 导入twgl的m4模块，用于矩阵操作
      if (gl) {
        // 定义一个点的顶点着色器源代码
        const onePointVertexShaderSource = `  
          uniform mat4 u_worldViewProjection; // 世界视图投影矩阵

          attribute vec4 a_position; // 顶点位置属性
          attribute vec2 a_texcoord; // 顶点纹理坐标属性
          
          varying vec4 v_position; // 传递给片段着色器的顶点位置
          varying vec2 v_texCoord; // 传递给片段着色器的顶点纹理坐标
          
          void main() {
            v_texCoord = a_texcoord; // 纹理坐标
            gl_Position = u_worldViewProjection * a_position; // 计算最终的顶点位置
          }
        `;
        // 定义一个点的片段着色器源代码
        const onePointFragmentShaderSource = `  
          precision mediump float; // 中等精度浮点数

          varying vec4 v_position; // 从顶点着色器接收的顶点位置
          varying vec2 v_texCoord; // 从顶点着色器接收的纹理坐标
          
          uniform vec4 u_diffuseMult; // 扩展的漫反射颜色
          uniform sampler2D u_diffuse; // 漫反射贴图  
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult; // 计算漫反射颜色
            if (diffuseColor.a < 0.1) { // 如果颜色的透明度小于0.1，则丢弃像素
              discard;
            }
            gl_FragColor = diffuseColor; // 设置最终的颜色
          } 
        `;

        // 环境映射的顶点着色器源代码
        const envMapVertexShaderSource = `  
          uniform mat4 u_viewInverse; // 视图矩阵的逆矩阵
          uniform mat4 u_world; // 世界矩阵
          uniform mat4 u_worldViewProjection; // 世界视图投影矩阵
          uniform mat4 u_worldInverseTranspose; // 世界矩阵的逆转置矩阵
          
          attribute vec4 a_position; // 顶点位置属性
          attribute vec3 a_normal; // 顶点法向量属性
          
          varying vec3 v_normal; // 传递给片段着色器的法向量
          varying vec3 v_surfaceToView; // 传递给片段着色器的表面到视点的向量
          
          void main() {
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // 计算变换后的法向量
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // 计算表面到视点的向量
            gl_Position = u_worldViewProjection * a_position; // 计算最终的顶点位置
          }
        `;
        // 环境映射的片段着色器源代码
        const envMapFragmentShaderSource = `  
          precision mediump float; // 中等精度浮点数

          uniform samplerCube u_texture;// 环境贴图
          
          varying vec3 v_surfaceToView; // 从顶点着色器接收的表面到视点的向量
          varying vec3 v_normal; // 从顶点着色器接收的法向量
          
          void main() {
            vec3 normal = normalize(v_normal);  // 归一化法向量
            vec3 surfaceToView = normalize(v_surfaceToView); // 归一化表面到视点的向量
            vec4 color = textureCube(u_texture, -reflect(surfaceToView, normal)); // 计算反射颜色
            gl_FragColor = color; // 设置最终的颜色
          }
        `;

        // 创建一个点的着色器程序信息
        const onePointProgramInfo = twgl.createProgramInfo(gl, [
          onePointVertexShaderSource,
          onePointFragmentShaderSource,
        ]);
        // 创建环境映射的着色器程序信息
        const envMapProgramInfo = twgl.createProgramInfo(gl, [
          envMapVertexShaderSource,
          envMapFragmentShaderSource,
        ]);

        const shapes = [
          twgl.primitives.createCubeBufferInfo(gl, 2),
          twgl.primitives.createSphereBufferInfo(gl, 1, 24, 12),
          twgl.primitives.createPlaneBufferInfo(gl, 2, 2),
          twgl.primitives.createTruncatedConeBufferInfo(gl, 1, 0, 2, 24, 1),
        ];

        const rand = (_min: number, _max?: number) => {
          let min = _min;
          let max = _max;
          if (max === undefined) {
            max = min;
            min = 0;
          }
          return min + Math.random() * (max - min);
        };

        // Shared values
        const baseHue = rand(360);
        const camera = m4.identity();
        const view = m4.identity();
        const viewProjection = m4.identity();

        // A circle on a canvas
        const ctx = document.createElement('canvas').getContext('2d');
        if (ctx) {
          ctx.canvas.width = 64;
          ctx.canvas.height = 64;
        }

        function updateCanvas(time) {
          if (ctx) {
            ctx.fillStyle = '#00f';
            ctx.strokeStyle = '#ff0';
            ctx.lineWidth = 10;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.beginPath();
            ctx.arc(
              ctx.canvas.width / 2,
              ctx.canvas.height / 2,
              (ctx.canvas.width / 2.2) * Math.abs(Math.cos(time)),
              0,
              Math.PI * 2,
            );
            ctx.stroke();
          }
        }
        updateCanvas(0);

        // A cubemap drawn to a canvas with a circle on each face.
        const cubemapCtx = document.createElement('canvas').getContext('2d');
        const size = 40;
        if (cubemapCtx) {
          cubemapCtx.canvas.width = size * 6;
          cubemapCtx.canvas.height = size;
          cubemapCtx.fillStyle = '#888';
          for (let ff = 0; ff < 6; ++ff) {
            const color = chroma.hsv((baseHue + ff * 10) % 360, 1 - ff / 6, 1);
            cubemapCtx.fillStyle = color.darken().hex();
            cubemapCtx.fillRect(size * ff, 0, size, size);
            cubemapCtx.save();
            cubemapCtx.translate(size * (ff + 0.5), size * 0.5);
            cubemapCtx.beginPath();
            cubemapCtx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
            cubemapCtx.fillStyle = color.hex();
            cubemapCtx.fill();
            cubemapCtx.restore();
          }
        }

        // make 6 canvases to show loading from 6 element
        const cubeFaceCanvases: any = [];
        for (let ff = 0; ff < 6; ++ff) {
          const canvas = document.createElement('canvas');
          canvas.width = 128;
          canvas.height = 128;
          const ctx = canvas.getContext('2d');
          const color = chroma.hsv((baseHue + ff * 10) % 360, 1 - ff / 6, 1);
          if (ctx) {
            ctx.fillStyle = color.darken().hex();
            ctx.fillRect(0, 0, 128, 128);
            ctx.translate(64, 64);
            ctx.rotate(Math.PI * 0.25);
            ctx.fillStyle = color.hex();
            ctx.fillRect(-40, -40, 80, 80);
          }
          cubeFaceCanvases.push(canvas);
        }

        const textures = twgl.createTextures(gl, {
          // a power of 2 image
          hftIcon: { src: 'images/hft-icon-16.png', mag: gl.NEAREST },
          // a non-power of 2 image
          clover: { src: 'images/clover.jpg' },
          // From a canvas
          fromCanvas: { src: ctx?.canvas },
          // A cubemap from 6 images
          yokohama: {
            target: gl.TEXTURE_CUBE_MAP,
            src: [
              'images/yokohama/posx.jpg',
              'images/yokohama/negx.jpg',
              'images/yokohama/posy.jpg',
              'images/yokohama/negy.jpg',
              'images/yokohama/posz.jpg',
              'images/yokohama/negz.jpg',
            ],
          },
          // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
          goldengate: {
            target: gl.TEXTURE_CUBE_MAP,
            src: 'images/goldengate.jpg',
          },
          // A 2x2 pixel texture from a JavaScript array
          checker: {
            mag: gl.NEAREST,
            min: gl.LINEAR,
            src: [
              255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
              255, 255, 255,
            ],
          },
          // a 1x8 pixel texture from a typed array.
          stripe: {
            mag: gl.NEAREST,
            min: gl.LINEAR,
            format: gl.LUMINANCE,
            src: new Uint8Array([255, 128, 255, 128, 255, 128, 255, 128]),
            width: 1,
          },
          // a cubemap from array
          cubemapFromArray: {
            target: gl.TEXTURE_CUBE_MAP,
            format: gl.RGBA,
            src: [
              0xf0, 0x80, 0x80, 0xff, 0x80, 0xe0, 0x80, 0xff, 0x80, 0x80, 0xd0,
              0xff, 0xc0, 0x80, 0x80, 0xff, 0x80, 0xb0, 0x80, 0xff, 0x80, 0x80,
              0x00, 0xff,
            ],
          },
          cubemapFromCanvas: {
            target: gl.TEXTURE_CUBE_MAP,
            src: cubemapCtx?.canvas,
          },
          cubemapFrom6Canvases: {
            target: gl.TEXTURE_CUBE_MAP,
            src: cubeFaceCanvases,
          },
        });

        // This is soley to make it easy to pick textures at random
        const twoDTextures = [
          textures.checker,
          textures.stripe,
          textures.hftIcon,
          textures.clover,
          textures.fromCanvas,
        ];

        const cubeTextures = [
          textures.yokohama,
          textures.goldengate,
          textures.cubemapFromCanvas,
          textures.cubemapFrom6Canvases,
          textures.cubemapFromArray,
        ];

        const objects: any[] = [];
        const drawObjects: any[] = [];
        const numObjects = 100;

        for (let ii = 0; ii < numObjects; ++ii) {
          let uniforms;
          let programInfo;
          let shape;
          const renderType = rand(0, 2) | 0;
          switch (renderType) {
            case 0: // checker
              shape = shapes[ii % shapes.length];
              programInfo = onePointProgramInfo;
              uniforms = {
                u_diffuseMult: chroma
                  .hsv((baseHue + rand(0, 60)) % 360, 0.4, 0.8)
                  .gl(),
                u_diffuse: twoDTextures[rand(0, twoDTextures.length) | 0],
                u_viewInverse: camera,
                u_world: m4.identity(),
                u_worldInverseTranspose: m4.identity(),
                u_worldViewProjection: m4.identity(),
              };
              break;
            case 1: // yokohama
              shape = rand(0, 2) < 1 ? shapes[1] : shapes[3];
              programInfo = envMapProgramInfo;
              uniforms = {
                u_texture: cubeTextures[rand(0, cubeTextures.length) | 0],
                u_viewInverse: camera,
                u_world: m4.identity(),
                u_worldInverseTranspose: m4.identity(),
                u_worldViewProjection: m4.identity(),
              };
              break;
            default:
              throw 'wAT!';
          }
          drawObjects.push({
            programInfo: programInfo,
            bufferInfo: shape,
            uniforms: uniforms,
          });
          objects.push({
            translation: [rand(-10, 10), rand(-10, 10), rand(-10, 10)],
            ySpeed: rand(0.1, 0.3),
            zSpeed: rand(0.1, 0.3),
            uniforms: uniforms,
          });
        }

        // 绘制场景
        function drawScene(time) {
          if (gl) {
            let currentTime = time;
            currentTime *= 0.001; // 将时间戳转换为秒。
            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            const radius = 20;
            const orbitSpeed = currentTime * 0.1;
            const projection = m4.perspective(
              (30 * Math.PI) / 180,
              gl.canvas.width / gl.canvas.height,
              0.5,
              100,
            );
            const eye = [
              Math.cos(orbitSpeed) * radius,
              4,
              Math.sin(orbitSpeed) * radius,
            ];
            const target = [0, 0, 0];
            const up = [0, 1, 0];

            m4.lookAt(eye, target, up, camera);
            m4.inverse(camera, view);
            m4.multiply(projection, view, viewProjection);

            updateCanvas(currentTime);
            if (ctx) {
              twgl.setTextureFromElement(gl, textures.fromCanvas, ctx.canvas);
            }

            objects.forEach(function (obj) {
              const uni = obj.uniforms;
              const world = uni.u_world;
              m4.identity(world);
              m4.rotateY(world, currentTime * obj.ySpeed, world);
              m4.rotateZ(world, currentTime * obj.zSpeed, world);
              m4.translate(world, obj.translation, world);
              m4.rotateX(world, currentTime, world);
              m4.transpose(
                m4.inverse(world, uni.u_worldInverseTranspose),
                uni.u_worldInverseTranspose,
              );
              m4.multiply(
                viewProjection,
                uni.u_world,
                uni.u_worldViewProjection,
              );
            });

            twgl.drawObjectList(gl, drawObjects);

            requestAnimationFrame(drawScene);
          }
        }

        // 初始绘制
        requestAnimationFrame(drawScene);
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={800} height={300} />;
};

export default Textures;
