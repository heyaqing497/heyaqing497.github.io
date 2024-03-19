import React, { useEffect, useRef } from 'react';
var Foo = function Foo(props) {
  var webglRef = useRef(null);
  useEffect(function () {
    var canvas = webglRef.current;
    // 2d/webgl
    var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    ;
    ;
    if (ctx) {
      ctx.beginPath(); // 开始路径绘制
      ctx.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
      ctx.lineTo(200, 20); // 绘制一条到(200,20)的直线
      ctx.lineWidth = 1.0; // 设置线宽
      ctx.strokeStyle = '#CC0000'; // 设置线的颜色
      ctx.stroke(); // 进行线的着色，这时整条线才变得可见
    }
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: webglRef,
    width: "500",
    height: "500"
  });
};
export default Foo;