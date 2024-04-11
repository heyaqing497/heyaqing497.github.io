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

  // 動畫渲染引用
  const myReq = useRef<number>();

  // 初始化音频上下文和音频源。
  const _context = new (window.AudioContext || window.webkitAudioContext)();
  const context = useRef(_context);

  // 创建一个循环播放的音频源。
  const _streamSource = audioStreamSource.create({
    context: _context,
    loop: true,
  });
  const streamSource = useRef(_streamSource);

  // 创建一个音频分析器。
  const _analyser = _context.createAnalyser();
  const analyser = useRef(_analyser);

  // 开始播放音乐。
  const startMusic = () => {
    setHasBegin(true);
    streamSource.current.play();
    context.current.resume().then(() => {
      streamSource.current.play();
      streamSource.current.getSource().connect(analyser.current); // 连接音频源到分析器
      analyser.current.connect(context.current.destination); // 连接分析器到音频上下文的目标
    });
  };

  /**
   * 开始绘制图形。
   * 该函数首先检查是否存在canvas元素和WebGL上下文。
   * 如果存在，它将根据用户的设备类型和浏览器能力初始化并绘制一个基于音频分析的图形。
   * 对于移动设备或不支持WebGL的浏览器，会降低图形的绘制质量。
   * 使用WebGL着色器程序来处理每个绘制点的位置和颜色，颜色基于音频频谱的数据。
   */
  const startDraw = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl');
      // 检测当前设备是否为移动设备，这将影响绘制策略
      const isMobile =
        /Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(
          navigator.userAgent,
        );

      twgl.setDefaults({ attribPrefix: 'a_' }); // 设置twgl的一些默认属性
      if (gl) {
        // 创建顶点着色器
        const vertexShaderSource = `  
          // 定义顶点着色器的输入属性：扩展度和高度
          attribute float a_spread; // 扩展度，控制点的散开程度
          attribute float a_height; // 高度，控制点的位置
      
          // 定义从顶点着色器传到片段着色器的变量
          varying vec4 v_color; // 用于传递颜色
      
          // 将HSV颜色转换为RGB颜色
          vec3 hsv2rgb(vec3 c) {
            c = vec3(c.x, clamp(c.yz, 0.0, 1.0)); // 调整色调和饱和度，保证它们在有效范围内
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0); // 用于HSV到RGB转换的常量
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www); // 计算RGB分量
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y); // 混合RGB颜色，完成转换
          }
      
          // 顶点着色器的主函数
          void main() {
            gl_Position = vec4(a_spread, a_height * 2.0 - 1.0, 0, 1); // 计算每个顶点的位置
            v_color = vec4(hsv2rgb(vec3(a_spread * 0.5 + 0.5, a_height, 1)), 1); // 计算每个顶点的颜色，使用HSV2RGB函数进行颜色转换
          }
        `;
        // 创建片段着色器
        const fragmentShaderSource = `  
          precision mediump float; // 定义片段着色器使用的精度

          // 接收从顶点着色器传来的颜色变量
          varying vec4 v_color; // 用于传递颜色

          // 片段着色器的主函数
          void main() {
            gl_FragColor = v_color; // 设置片段的颜色为接收到的颜色
          }
        `;

        // 创建WebGL程序
        const programInfo = twgl.createProgramInfo(gl, [
          vertexShaderSource,
          fragmentShaderSource,
        ]);

        // 根据设备类型和浏览器能力调整绘制点的数量
        const numPoints =
          (analyser.current.frequencyBinCount * (isMobile ? 0.25 : 1)) | 0;
        // 准备绘制所需的数据数组
        const spreadArray = new Float32Array(numPoints); // 创建一个Float32Array，用于存储扩展数据
        const heightArray = new Uint8Array(numPoints); // 创建一个Uint8Array，用于存储高度数据

        // 计算每个点在屏幕空间的位置
        for (let ii = 0; ii < numPoints; ++ii) {
          spreadArray[ii] = (ii / numPoints) * 2 - 1; // 计算屏幕空间位置
        }
        // 准备绘制数组，包含扩展和高度数据的详细信息
        const arrays = {
          spread: { data: spreadArray, numComponents: 1 },
          height: {
            data: heightArray,
            numComponents: 1,
            drawType: gl.DYNAMIC_DRAW,
          },
        };
        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays); // 创建并初始化缓冲区信息

        // 绘制场景, 用于更新和绘制当前的音频频谱数据
        function drawScene() {
          if (gl) {
            // 调整canvas大小以适应显示尺寸
            twgl.resizeCanvasToDisplaySize(canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            // 清理画布
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.lineWidth(2); // 设置线宽

            gl.useProgram(programInfo.program); // 使用编译好的程序

            // 更新高度数组数据
            analyser.current.getByteFrequencyData(heightArray);
            twgl.setAttribInfoBufferFromArray(
              gl,
              bufferInfo.attribs.a_height,
              heightArray,
            );

            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo); // 设置绘制所需的缓冲区和属性
            twgl.drawBufferInfo(gl, bufferInfo, gl.LINE_STRIP); // 执行绘制命令

            myReq.current = requestAnimationFrame(drawScene); // 递归调用自身进行下一帧的绘制
          }
        }
        myReq.current = requestAnimationFrame(drawScene); // 初始绘制
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
    if (myReq.current) {
      cancelAnimationFrame(myReq.current);
    }
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
