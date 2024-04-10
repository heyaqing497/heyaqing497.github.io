---
demo:
  cols: 2
---

# WebGL

参考：[WebGL mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)

参考：[WebGL 概念和基础入门](https://blog.csdn.net/qq_27674439/article/details/131852688)

参考：[WebGL 工作原理](https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-how-it-works.html)

This is an example WebGL.

<code src="./src/Line.tsx"></code>
<code src="./src/Square.tsx"></code>
<code src="./src/Bezier.tsx"></code>
<code src="./src/Cube.tsx"></code>

[球的参考网址](https://blog.csdn.net/baidu_38766085/article/details/79881978)
<code src="./src/Ball.tsx"></code>

[twgl官網](https://twgljs.org/)
<code src="./twgl/Triangles.tsx"></code>
<code src="./twgl/TwglCube.tsx"></code>
Textures
<code src="./twgl/Textures.tsx"></code>
Primitives
<code src="./twgl/Primitives.tsx"></code>
TwoDLines
<code src="./twgl/TwoDLines.tsx"></code>

DynamicBuffers
<code src="./twgl/DynamicBuffers.tsx"></code>

threejs
<code src="./threejs/RotatingCube.tsx"></code>

### HTMLCanvasElement （接口）

[HTMLCanvasElement（mdn地址）](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)

提供用于操纵[\<canvas\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)元素的布局和表示的属性和方法。

继承了[HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)接口的属性和方法。

| 属性   | 说明                                                                                                                        | 类型     | 默认值 | 版本 |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ---- |
| height | 反映了[\<canvas\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)元素的height HTML 属性，以 CSS 像素表示 | `number` | `150`  | `-`  |
| width  | 反映了[\<canvas\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)元素的width HTML 属性，以 CSS 像素表示  | `number` | `300`  | `-`  |

| 方法          | 说明                                                                                                                                          | 类型                                         | 默认值 | 版本 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------ | ---- |
| captureStream | 返回[CanvasCaptureMediaStream](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasCaptureMediaStreamTrack) ，它是对画布表面的实时视频捕获 | `function(){}`                               | `-`    | `-`  |
| getContext    | 返回画布上的绘图上下文；如果不支持上下文 ID，则返回 null。绘图上下文可让你在画布上绘图。                                                      | `function(contextType, contextAttributes){}` | `-`    | `-`  |
| toDataURL     | 返回一个数据 URL，该 URL 包含由类型参数指定的格式的图像（默认为png）。返回的图像分辨率为 96dpi。                                              | `function(){}`                               | `-`    | `-`  |
| toBlob        | 创建一个Blob 对象，表示 canvas 中包含的图像；该文件可以由用户代理决定是否缓存在磁盘上或存储在内存中。                                         | `function(){}`                               | `-`    | `-`  |

### getContext

[getContext](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 返回canvas 的上下文

```
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
```

| contextType                   | 说明                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 2d                            | 建立一个 CanvasRenderingContext2D 二维渲染上下文。                                                         |
| webgl \| experimental-webgl   | 创建一个 WebGLRenderingContext 三维渲染上下文对象。只在实现WebGL 版本 1(OpenGL ES 2.0) 的浏览器上可用。    |
| webgl2 \| experimental-webgl2 | 创建一个 WebGL2RenderingContext 三维渲染上下文对象。只在实现 WebGL 版本 2 (OpenGL ES 3.0) 的浏览器上可用。 |
| bitmaprenderer                | 创建一个只提供将 canvas 内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext 。                      |

| contextType | contextAttributes | 说明                                                                                                                 | 类型    |
| ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| 2d          | alpha             | 表明canvas包含一个alpha通道。如果设置为false, 浏览器将认为canvas背景总是不透明的，这样可以加速绘制透明的内容和图片。 | boolean |
| webgl       | alpha             | 表明canvas包含一个alpha缓冲区。                                                                                      | boolean |
| webgl       | antialias         | 表明是否开启抗锯齿。                                                                                                 | boolean |
| webgl       | depth             | 表明绘制缓冲区包含一个深度至少为 16 位的缓冲区。                                                                     | boolean |

### CanvasRenderingContext2D

[CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
为 \<canvas\> 元素的绘图表面提供 2D 渲染上下文。它用于绘制形状，文本，图像和其他对象。

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

```javascript
const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');
```

| 绘制矩形的方法 | 说明                                                                                                         | 语法                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| clearRect()    | 设置指定矩形区域内（以点 (x, y) 为起点，范围是 (width, height)）所有像素变成透明，并擦除之前绘制的所有内容。 | void ctx.clearRect(x, y, width, height);  |
| fillRect()     | 绘制填充矩形，矩形的起点在 (x, y) 位置，矩形的尺寸是 width 和 height。                                       | void ctx.fillRect(x, y, width, height);   |
| strokeRect()   | 在 canvas 中，使用当前的笔触样式，描绘一个起点在 (x, y)、宽度为 w、高度为 h 的矩形。                         | void ctx.strokeRect(x, y, width, height); |

| 绘制文本的方法 | 说明                                                               | 语法                                          |
| -------------- | ------------------------------------------------------------------ | --------------------------------------------- |
| fillText()     | 在 (x,y) 位置绘制（填充）文本。                                    | fillText(text, x, y [, maxWidth])             |
| strokeText()   | 在 (x,y) 位置绘制（描边）文本。                                    | void ctx.strokeText(text, x, y [, maxWidth]); |
| measureText()  | 返回一个关于被测量文本TextMetrics 对象包含的信息（例如它的宽度）。 | ctx.measureText(text);                        |

| 线型           | 说明                                                                     | 语法                             | 默认值 |
| -------------- | ------------------------------------------------------------------------ | -------------------------------- | ------ |
| lineWidth      | 线的宽度。                                                               | `number`                         | 1.0    |
| lineCap        | 线末端的类型。                                                           | butt、round、square              | butt   |
| lineJoin       | 定义两线相交拐点的类型。                                                 | round、bevel、miter              | miter  |
| miterLimit     | 斜接面限制比例                                                           | `number`                         | 10     |
| getLineDash()  | 返回当前线段样式的数组，数组包含一组数量为偶数的非负数数字。             | -                                | -      |
| setLineDash()  | 在填充线时使用虚线模式。它使用一组值来指定描述模式的线和间隙的交替长度。 | setLineDash(segments: number[]); | -      |
| lineDashOffset | 描述在哪里开始绘制线段。设置虚线偏移量的属性                             | float                            | 0.0    |

...

### WebGLRenderingContext

[WebGLRenderingContext](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext)
用于 2D 和 3D 的图形渲染，可以通过在 \<canvas\> 元素上调用 getContext() 函数，调用时传入“webgl”参数
