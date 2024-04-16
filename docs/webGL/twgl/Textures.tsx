/**
 * title: Textures
 */
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const Textures = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const requestId = useAnimationFrame(canvasRef, () => {
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

        // 定义各种形状的缓冲信息，用于后续的3D渲染
        const shapes = [
          twgl.primitives.createCubeBufferInfo(gl, 2), // 创建一个边长为2的立方体的缓冲信息
          twgl.primitives.createSphereBufferInfo(gl, 1, 24, 12), // 创建一个半径为1，经线段数为24，纬线段数为12的球体的缓冲信息
          twgl.primitives.createPlaneBufferInfo(gl, 2, 2), // 创建一个长宽各为2的平面的缓冲信息
          twgl.primitives.createTruncatedConeBufferInfo(gl, 1, 0, 2, 24, 1), // 创建一个底圆半径为1，顶圆半径为0，高为2的截断圆锥的缓冲信息
        ];

        /**
         * 生成指定范围内的随机数。
         * @param _min 随机数的最小值。
         * @param _max 随机数的最大值（可选）。
         * @returns 介于最小值和最大值之间的随机数。
         */
        const rand = (_min: number, _max?: number) => {
          let min = _min;
          let max = _max;
          if (max === undefined) {
            max = min;
            min = 0;
          }
          return min + Math.random() * (max - min);
        };

        // 共享值
        const baseHue = rand(360); // 用于着色器中的基本色调
        const camera = m4.identity(); // 相机位置和设置
        const view = m4.identity(); // 观察矩阵
        const viewProjection = m4.identity(); // 视觉投影矩阵

        // 在HTML文档中创建并初始化一个画布用于绘制
        const ctx = document.createElement('canvas').getContext('2d');
        if (ctx) {
          ctx.canvas.width = 64; // 设置画布宽度
          ctx.canvas.height = 64; // 设置画布高度
        }

        /**
         * 更新画布内容，绘制一个随时间变化的圆形。
         * @param time 用于计算圆形大小和位置的时间参数。
         */
        function updateCanvas(time) {
          if (ctx) {
            // 设置画布的基本样式
            ctx.fillStyle = '#00f'; // 设置填充颜色为蓝色
            ctx.strokeStyle = '#ff0'; // 设置边框颜色为黄色
            ctx.lineWidth = 10; // 设置边框宽度为10
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // 清空画布并填充为蓝色
            ctx.beginPath(); // 开始绘制路径
            // 绘制一个随时间变化的圆形
            ctx.arc(
              ctx.canvas.width / 2, // 圆心x坐标
              ctx.canvas.height / 2, // 圆心y坐标
              (ctx.canvas.width / 2.2) * Math.abs(Math.cos(time)), // 圆的半径，随时间变化
              0, // 起始角度
              Math.PI * 2, // 结束角度，即一整个圆
            );
            ctx.stroke(); // 绘制圆形边框
          }
        }
        updateCanvas(0); // 初始调用，更新画布内容

        // 在一个立方体映射的画布上绘制六个面，每个面上有一个颜色不同的圆。
        const cubemapCtx = document.createElement('canvas').getContext('2d');
        const size = 40; // 定义画布每个面的大小
        if (cubemapCtx) {
          // 设置画布大小，为立方体映射的宽度和高度
          cubemapCtx.canvas.width = size * 6;
          cubemapCtx.canvas.height = size;
          cubemapCtx.fillStyle = '#888'; // 设置默认填充颜色为灰色

          // 循环绘制每个面
          for (let ff = 0; ff < 6; ++ff) {
            const color = chroma.hsv((baseHue + ff * 10) % 360, 1 - ff / 6, 1); // 根据面的索引计算颜色
            cubemapCtx.fillStyle = color.darken().hex(); // 设置当前面的填充颜色
            cubemapCtx.fillRect(size * ff, 0, size, size); // 绘制矩形，填充颜色

            // 保存当前状态，并绘制圆
            cubemapCtx.save();
            cubemapCtx.translate(size * (ff + 0.5), size * 0.5); // 移动画布中心到当前面中心
            cubemapCtx.beginPath();
            cubemapCtx.arc(0, 0, size * 0.3, 0, Math.PI * 2); // 绘制圆
            cubemapCtx.fillStyle = color.hex(); // 设置圆的填充颜色
            cubemapCtx.fill();
            cubemapCtx.restore(); // 恢复之前的状态
          }
        }

        // 创建6个canvas元素来展示加载效果
        const cubeFaceCanvases: any = [];
        for (let ff = 0; ff < 6; ++ff) {
          const canvas = document.createElement('canvas');
          canvas.width = 128;
          canvas.height = 128;
          const ctx = canvas.getContext('2d');
          const color = chroma.hsv((baseHue + ff * 10) % 360, 1 - ff / 6, 1); // 根据面的索引计算颜色
          if (ctx) {
            // 为画布背景填充颜色
            ctx.fillStyle = color.darken().hex();
            ctx.fillRect(0, 0, 128, 128);
            // 设置画布的中心点并旋转
            ctx.translate(64, 64);
            ctx.rotate(Math.PI * 0.25);
            // 在画布上绘制亮色矩形
            ctx.fillStyle = color.hex();
            ctx.fillRect(-40, -40, 80, 80);
          }
          cubeFaceCanvases.push(canvas);
        }

        /**
         * 创建并初始化一系列纹理对象。
         * @param gl WebGLRenderingContext，WebGL绘图上下文对象。
         * @returns {Object} 包含各种纹理的对象。
         */
        const textures = twgl.createTextures(gl, {
          // 一个2的幂次方图像
          hftIcon: { src: 'images/hft-icon-16.png', mag: gl.NEAREST },
          // 一个非2的幂次方图像
          clover: { src: 'images/clover.jpg' },
          // 从一个canvas元素创建的纹理
          fromCanvas: { src: ctx?.canvas },
          // 从6个图像创建的立方体纹理
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
          // 从一个图像（可以是1x6, 2x3, 3x2或6x1）创建的立方体纹理
          goldengate: {
            target: gl.TEXTURE_CUBE_MAP,
            src: 'images/goldengate.jpg',
          },
          // 从一个JavaScript数组创建的2x2像素纹理
          checker: {
            mag: gl.NEAREST,
            min: gl.LINEAR,
            src: [
              255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
              255, 255, 255,
            ],
          },
          // 从一个类型化数组创建的1x8像素纹理
          stripe: {
            mag: gl.NEAREST,
            min: gl.LINEAR,
            format: gl.LUMINANCE,
            src: new Uint8Array([255, 128, 255, 128, 255, 128, 255, 128]),
            width: 1,
          },
          // 从数组创建的立方体纹理
          cubemapFromArray: {
            target: gl.TEXTURE_CUBE_MAP,
            format: gl.RGBA,
            src: [
              0xf0, 0x80, 0x80, 0xff, 0x80, 0xe0, 0x80, 0xff, 0x80, 0x80, 0xd0,
              0xff, 0xc0, 0x80, 0x80, 0xff, 0x80, 0xb0, 0x80, 0xff, 0x80, 0x80,
              0x00, 0xff,
            ],
          },
          // 从canvas元素创建的立方体纹理
          cubemapFromCanvas: {
            target: gl.TEXTURE_CUBE_MAP,
            src: cubemapCtx?.canvas,
          },
          // 从6个canvas元素创建的立方体纹理
          cubemapFrom6Canvases: {
            target: gl.TEXTURE_CUBE_MAP,
            src: cubeFaceCanvases,
          },
        });

        // 随机选择纹理使用的二维纹理数组
        const twoDTextures = [
          textures.checker,
          textures.stripe,
          textures.hftIcon,
          textures.clover,
          textures.fromCanvas,
        ];

        // 用于立方体映射的纹理数组
        const cubeTextures = [
          textures.yokohama,
          textures.goldengate,
          textures.cubemapFromCanvas,
          textures.cubemapFrom6Canvases,
          textures.cubemapFromArray,
        ];

        const objects: any[] = []; // 存储所有物体信息的数组
        const drawObjects: any[] = []; // 存储绘制物体所需信息的数组
        const numObjects = 100; // 物体数量

        /**
         * 创建一定数量的物体，并根据随机类型配置其渲染属性，包括纹理和材质等。
         * 物体的形状和渲染方式（方格或三维环境映射）是随机确定的。
         */
        for (let ii = 0; ii < numObjects; ++ii) {
          let uniforms;
          let programInfo;
          let shape;
          const renderType = rand(0, 2) | 0; // 随机确定渲染类型（0: 方格, 1: 三维环境映射）
          switch (renderType) {
            case 0: // 方格纹理
              // 根据索引随机选择形状
              shape = shapes[ii % shapes.length];
              programInfo = onePointProgramInfo;
              //定义着色器中使用的uniforms变量，它包含多个用于渲染的材质和纹理参数
              uniforms = {
                u_diffuseMult: chroma
                  .hsv((baseHue + rand(0, 60)) % 360, 0.4, 0.8)
                  .gl(), // u_diffuseMult: 使用chroma.js库根据基础色调和随机值生成一个HSV颜色，然后转换为GL所需的格式，用于调整材质的漫反射颜色。
                u_diffuse: twoDTextures[rand(0, twoDTextures.length) | 0], // u_diffuse: 从预定义的二维纹理数组中随机选择一个纹理，用于材质的漫反射贴图。
                u_viewInverse: camera, // u_viewInverse: 存储相机的逆矩阵，用于在着色器中进行视图空间到世界空间的转换。
                u_world: m4.identity(), // u_world: 表示物体在世界空间中的变换矩阵，此处使用单位矩阵，表示物体位于世界空间的原点。
                u_worldInverseTranspose: m4.identity(), // u_worldInverseTranspose: 存储u_world矩阵的逆矩阵转置，用于计算法线矩阵。
                u_worldViewProjection: m4.identity(), // u_worldViewProjection: 存储物体在世界空间中的变换矩阵乘以视图投影矩阵的结果，用于在着色器中进行坐标变换。
              };
              break;
            case 1: // 三维环境映射
              // 随机选择立方体形状
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
              throw 'wAT!'; // 处理未知渲染类型错误
          }
          // 将绘制信息添加到绘制对象数组中
          drawObjects.push({
            programInfo: programInfo,
            bufferInfo: shape,
            uniforms: uniforms,
          });
          // 添加物体位置和运动属性
          objects.push({
            translation: [rand(-10, 10), rand(-10, 10), rand(-10, 10)], // 随机位置
            ySpeed: rand(0.1, 0.3), // y轴运动速度
            zSpeed: rand(0.1, 0.3), // z轴运动速度
            uniforms: uniforms,
          });
        }

        /**
         * 绘制场景的函数。
         * @param time 时间戳，用于动画的推进。
         */
        function drawScene(time) {
          if (gl) {
            let currentTime = time;
            currentTime *= 0.001; // 将时间戳转换为秒。
            twgl.resizeCanvasToDisplaySize(canvas); // 调整canvas大小以适应显示尺寸。
            gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight); // 设置OpenGL的视口。

            // 启用深度测试和混合。
            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); // 设置混合函数。
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 清理颜色和深度缓冲区。

            // 定义场景中物体运动的半径和速度。
            const radius = 20;
            const orbitSpeed = currentTime * 0.1;
            // 设置投影矩阵。
            const projection = m4.perspective(
              (30 * Math.PI) / 180, // 视场角，以弧度计
              gl.canvas.width / gl.canvas.height, // 视图宽高比
              0.5, // 靠近平面
              100, // 远离平面
            );
            // 定义摄像机的位置。
            const eye = [
              Math.cos(orbitSpeed) * radius,
              4,
              Math.sin(orbitSpeed) * radius,
            ];
            const target = [0, 0, 0];
            const up = [0, 1, 0];

            m4.lookAt(eye, target, up, camera); // 设置摄像机。
            m4.inverse(camera, view); // 计算视图矩阵。
            m4.multiply(projection, view, viewProjection); // 计算视图投影矩阵。

            // 更新画布内容，可能是动态纹理或其他需要每帧更新的内容。
            updateCanvas(currentTime);
            // 如果存在上下文，则将上下文画布作为纹理应用。
            if (ctx) {
              twgl.setTextureFromElement(gl, textures.fromCanvas, ctx.canvas);
            }

            // 遍历所有物体，更新它们的统一变量以进行渲染。
            objects.forEach(function (obj) {
              const uni = obj.uniforms;
              const world = uni.u_world;
              // 计算物体的世界矩阵。
              m4.identity(world);
              m4.rotateY(world, currentTime * obj.ySpeed, world);
              m4.rotateZ(world, currentTime * obj.zSpeed, world);
              m4.translate(world, obj.translation, world);
              m4.rotateX(world, currentTime, world);
              // 计算世界矩阵的逆转置，用于光照计算。
              m4.transpose(
                m4.inverse(world, uni.u_worldInverseTranspose),
                uni.u_worldInverseTranspose,
              );
              // 计算世界视图投影矩阵。
              m4.multiply(
                viewProjection,
                uni.u_world,
                uni.u_worldViewProjection,
              );
            });

            twgl.drawObjectList(gl, drawObjects); // 绘制物体

            requestId.current = requestAnimationFrame(drawScene); // 请求下一帧动画。
          }
        }

        // 请求首次动画帧，启动场景绘制。
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} style={{ width: '100%', height: '300px' }} />;
};

export default Textures;
