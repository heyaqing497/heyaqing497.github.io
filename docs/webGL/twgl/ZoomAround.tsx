/**
 * title: zoom-around
 */
import * as chroma from 'chroma-js';
import React, { useRef } from 'react';
import * as twgl from 'twgl.js';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const ZoomAround = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestId = useAnimationFrame(canvasRef, () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      twgl.setDefaults({ attribPrefix: 'a_' });
      const m4 = twgl.m4;
      const v3 = twgl.v3;
      if (gl) {
        // 创建顶点着色器
        const vertexShaderSource = `  
          uniform mat4 u_worldViewProjection;
          uniform vec3 u_lightWorldPos;
          uniform mat4 u_world;
          uniform mat4 u_viewInverse;
          uniform mat4 u_worldInverseTranspose;
          
          attribute vec4 a_position;
          attribute vec3 a_normal;
          attribute vec2 a_texcoord;
          
          varying vec4 v_position;
          varying vec2 v_texCoord;
          varying vec3 v_normal;
          varying vec3 v_surfaceToLight;
          varying vec3 v_surfaceToView;
          
          void main() {
            v_texCoord = a_texcoord;
            v_position = (u_worldViewProjection * a_position);
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz;
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz;
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz;
            gl_Position = v_position;
          } 
        `;
        // 创建片段着色器
        const fragmentShaderSource = `  
          precision mediump float;

          varying vec4 v_position;
          varying vec2 v_texCoord;
          varying vec3 v_normal;
          varying vec3 v_surfaceToLight;
          varying vec3 v_surfaceToView;
          
          uniform vec4 u_lightColor;
          uniform vec4 u_diffuseMult;
          uniform sampler2D u_diffuse;
          uniform vec4 u_specular;
          uniform float u_shininess;
          uniform float u_specularFactor;
          
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        abs(l),//max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult;
            vec3 a_normal = normalize(v_normal);
            vec3 surfaceToLight = normalize(v_surfaceToLight);
            vec3 surfaceToView = normalize(v_surfaceToView);
            vec3 halfVector = normalize(surfaceToLight + surfaceToView);
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor;
          }
        `;

        // 创建WebGL程序
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        const shapes = [
          twgl.primitives.createCubeBufferInfo(gl, 2),
          twgl.primitives.createSphereBufferInfo(gl, 1, 24, 12),
          twgl.primitives.createTruncatedConeBufferInfo(gl, 1, 0, 2, 24, 1),
        ];

        function rand(min, max) {
          return min + Math.random() * (max - min);
        }

        function easeInOut(_t, start, end) {
          const c = end - start;
          let t = _t / 0.5;
          if (t < 1) {
            return (c / 2) * t * t + start;
          } else {
            return (-c / 2) * (--t * (t - 2) - 1) + start;
          }
        }
        // Shared values
        const lightWorldPosition = [1, 8, -10];
        const lightColor = [1, 1, 1, 1];
        const camera = m4.identity();
        const view = m4.identity();
        const viewProjection = m4.identity();
        let targetNdx = 0;
        let targetTimer = 0;
        let zoomTimer = 0;
        let eye = v3.copy([1, 4, -60]);
        let target = v3.copy([0, 0, 0]);
        const up = [0, 1, 0];
        const zoomScale = 1.4;
        const zoomDuration = 2;
        const targetChangeInterval = 3;
        let oldEye;
        let oldTarget;
        let newEye;
        let newTarget;

        const tex = twgl.createTexture(gl, {
          min: gl.NEAREST,
          mag: gl.NEAREST,
          src: [
            255, 255, 255, 255, 192, 192, 192, 255, 192, 192, 192, 255, 255,
            255, 255, 255,
          ],
        });

        const objects: any[] = [];
        const drawObjects: any[] = [];
        const numObjects = 100;
        const baseHue = rand(0, 360);
        for (let ii = 0; ii < numObjects; ++ii) {
          const uniforms = {
            u_lightWorldPos: lightWorldPosition,
            u_lightColor: lightColor,
            u_diffuseMult: chroma
              .hsv((baseHue + rand(0, 60)) % 360, 0.4, 0.8)
              .gl(),
            u_specular: [1, 1, 1, 1],
            u_shininess: 50,
            u_specularFactor: 1,
            u_diffuse: tex,
            u_viewInverse: camera,
            u_world: m4.identity(),
            u_worldInverseTranspose: m4.identity(),
            u_worldViewProjection: m4.identity(),
          };
          drawObjects.push({
            programInfo: programInfo,
            bufferInfo: shapes[ii % shapes.length],
            uniforms: uniforms,
          });
          objects.push({
            translation: [rand(-50, 50), rand(-50, 50), rand(-50, 50)],
            scale: rand(1, 5),
            size: 2,
            xSpeed: rand(0.2, 0.7),
            zSpeed: rand(0.2, 0.7),
            uniforms: uniforms,
          });
        }
        let then = 0;

        // 绘制场景
        function drawScene(_time) {
          if (gl) {
            let time = _time;
            time *= 0.001;
            const elapsed = time - then;
            then = time;

            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.CULL_FACE);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            const fovy = (30 * Math.PI) / 180;
            const projection = m4.perspective(
              fovy,
              canvas.clientWidth / canvas.clientHeight,
              0.5,
              200,
            );

            targetTimer -= elapsed;
            if (targetTimer <= 0) {
              targetTimer = targetChangeInterval;
              zoomTimer = 0;
              targetNdx = (targetNdx + 1) % objects.length;
              oldEye = v3.copy(eye);
              oldTarget = v3.copy(target);
              const targetObj = objects[targetNdx];
              newTarget = targetObj.translation;
              const halfSize =
                targetObj.size * targetObj.scale * zoomScale * 0.5;
              const distance = halfSize / Math.tan(fovy * 0.5);
              const direction = v3.normalize(v3.subtract(eye, newTarget));
              newEye = v3.add(newTarget, v3.mulScalar(direction, distance));
            }

            zoomTimer += elapsed;
            const lerp = easeInOut(Math.min(1, zoomTimer / zoomDuration), 0, 1);
            eye = v3.lerp(oldEye, newEye, lerp);
            target = v3.lerp(oldTarget, newTarget, lerp);

            m4.lookAt(eye, target, up, camera);
            m4.inverse(camera, view);
            m4.multiply(projection, view, viewProjection);

            objects.forEach(function (obj) {
              const uni = obj.uniforms;
              const world = uni.u_world;
              m4.identity(world);
              m4.translate(world, obj.translation, world);
              m4.rotateX(world, time * obj.xSpeed, world);
              m4.rotateZ(world, time * obj.zSpeed, world);
              m4.scale(world, [obj.scale, obj.scale, obj.scale], world);
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

            requestId.current = requestAnimationFrame(drawScene);
          }
        }

        // 初始绘制
        requestId.current = requestAnimationFrame(drawScene);
        return drawScene;
      }
    }
  });

  return <canvas ref={canvasRef} width={800} height={300} />;
};

export default ZoomAround;
