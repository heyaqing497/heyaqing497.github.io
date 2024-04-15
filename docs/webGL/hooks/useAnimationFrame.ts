import { useInViewport } from 'ahooks';
import { useCallback, useEffect, useRef } from 'react';

const initFunc = () => {};

export function useAnimationFrame(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  startDraw: () => any,
) {
  // 動畫渲染引用
  const requestId = useRef<number>();
  // 是否在屏幕內
  const [inViewport] = useInViewport(canvasRef);
  // 畫面渲染函數
  const drawScene = useCallback(() => {
    const _drawScene = startDraw();
    return _drawScene || initFunc;
  }, []);

  useEffect(() => {
    if (!inViewport && requestId.current) {
      cancelAnimationFrame(requestId.current);
    } else if (inViewport) {
      requestId.current = requestAnimationFrame(drawScene);
    }
  }, [inViewport]);
  return requestId;
}
