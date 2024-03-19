# WebGL

This is an example WebGL.

```jsx
import { Foo } from 'heyaqing';
import React, { useEffect, type FC, useRef } from 'react';

export default () => {
  const webglRef = useRef < HTMLCanvasElement > null;
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
```

### 方法

| 属性           | 说明                                    | 类型      | 默认值  | 版本 |
| -------------- | --------------------------------------- | --------- | ------- | ---- |
| getContext     | 返回 canvas 的上下文                    | `number`  | `100`   | `-`  |
| realtimeBounds | 实时获取容器 bounds，`false` 以节约性能 | `boolean` | `false` | `-`  |
| autoTrigger    | 监听点击事件并自动触发滚动              | `boolean` | `true`  | `-`  |
| scrollableX    | 是否支持横向滚动                        | `boolean` | `true`  | `-`  |
| scrollableY    | 是否支持纵向滚动                        | `boolean` | `true`  | `-`  |

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell
