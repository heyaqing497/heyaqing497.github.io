/**
 * title: 我是一條線
 */
import React, { useEffect, useRef, type FC } from 'react';

const Line: FC<{ title: string }> = () => {
  const webglRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = webglRef.current;
    // 2d/webgl
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.beginPath(); // 开始路径绘制
      ctx.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
      ctx.lineTo(200, 20); // 绘制一条到(200,20)的直线
      ctx.lineWidth = 1.0; // 设置线宽
      ctx.strokeStyle = '#CC0000'; // 设置线的颜色
      ctx.stroke(); // 进行线的着色，这时整条线才变得可见
    }
  }, []);
  return <canvas ref={webglRef} width="100" height="100" />;
};

export default Line;
