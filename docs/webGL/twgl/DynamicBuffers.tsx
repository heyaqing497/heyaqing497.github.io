/**
 * title: DynamicBuffers
 */
import { useInterval } from 'ahooks';
import { Button } from 'antd';
import * as audioStreamSource from 'audiostreamsource.js';
import React, { useEffect, useRef, useState } from 'react';
import * as twgl from 'twgl.js';

const DynamicBuffers = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [hasBegin, setHasBegin] = useState(false);
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  const _context = new (window.AudioContext || window.webkitAudioContext)();
  const context = useRef(_context);

  const _streamSource = audioStreamSource.create({
    context: _context,
    loop: true,
  });
  const streamSource = useRef(_streamSource);

  const _analyser = _context.createAnalyser();
  const analyser = useRef(_analyser);

  const startMusic = () => {
    setHasBegin(true);
    streamSource.current.play();
    context.current.resume().then(() => {
      streamSource.current.play();
      streamSource.current.getSource().connect(analyser.current);
      analyser.current.connect(context.current.destination);
    });
  };

  const startDraw = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      const isMobile =
        /Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(
          navigator.userAgent,
        );

      twgl.setDefaults({ attribPrefix: 'a_' });
      if (gl) {
        // 创建着色器
        const vertexShaderSource = `  
          attribute float a_spread;
          attribute float a_height;
      
          varying vec4 v_color;
      
          vec3 hsv2rgb(vec3 c) {
            c = vec3(c.x, clamp(c.yz, 0.0, 1.0));
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }
      
          void main() {
            gl_Position = vec4(a_spread, a_height * 2.0 - 1.0, 0, 1);
            v_color = vec4(hsv2rgb(vec3(a_spread * 0.5 + 0.5, a_height, 1)), 1);
          }
        `;
        const fragmentShaderSource = `  
          precision mediump float;

          varying vec4 v_color;
          void main() {
            gl_FragColor = v_color;
          }
        `;

        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        // If it's a shitty browser (like Safari) then we can't stream so we load
        // a very lo-fi version of the song that has no frequencies above 11.5k
        const numPoints =
          (analyser.current.frequencyBinCount * (isMobile ? 0.25 : 1)) | 0;
        const spreadArray = new Float32Array(numPoints);
        const heightArray = new Uint8Array(numPoints);
        for (let ii = 0; ii < numPoints; ++ii) {
          spreadArray[ii] = (ii / numPoints) * 2 - 1; // make clip space positions
        }
        const arrays = {
          spread: { data: spreadArray, numComponents: 1 },
          height: {
            data: heightArray,
            numComponents: 1,
            drawType: gl.DYNAMIC_DRAW,
          },
        };
        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

        // 绘制场景
        function drawScene() {
          if (gl) {
            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.lineWidth(2);

            gl.useProgram(programInfo.program);

            analyser.current.getByteFrequencyData(heightArray);
            twgl.setAttribInfoBufferFromArray(
              gl,
              bufferInfo.attribs.a_height,
              heightArray,
            );

            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
            twgl.drawBufferInfo(gl, bufferInfo, gl.LINE_STRIP);

            requestAnimationFrame(drawScene);
          }
        }

        // 初始绘制
        requestAnimationFrame(drawScene);
      }
    }
  };

  useEffect(() => {
    if (hasBegin) {
      startMusic();
      startDraw();
    }
  }, [hasBegin]);

  useEffect(() => {
    streamSource.current.on('error', function (e) {
      console.error('audio error:', e); // eslint-disable-line
    });

    streamSource.current.on('newSource', function (/* source */) {
      setLoading(false);
    });

    streamSource.current.setSource(
      'sounds/DOCTOR VOX - Level Up.mp3',
      'sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3', // for shitty browsers like Safari on iOS
    );
  }, []);

  const handleStop = () => {
    setHasBegin(false);
    streamSource.current.stop();
  };

  return (
    <>
      {/* <div id="b">
       <div><a href="http://twgljs.org">twgl.js - dynamic-buffers</a></div>
       <div>music: <a href="http://youtu.be/eUX39M_0MJ8">DOCTOR VOX - Level Up</a></div>
    </div> */}
      {hasBegin && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <canvas ref={canvasRef} width={800} height={300}></canvas>
          <div>
            <Button type="primary" onClick={() => handleStop()}>
              停止
            </Button>
          </div>
        </div>
      )}
      {!loading && !hasBegin && (
        <Button type="primary" onClick={() => setHasBegin(true)}>
          播放
        </Button>
      )}
      {loading && <div>Loading（移動端加載資源較久，已加載{count}秒）...</div>}
    </>
  );
};

export default DynamicBuffers;
