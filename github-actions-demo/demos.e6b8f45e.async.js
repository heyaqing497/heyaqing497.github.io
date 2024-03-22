"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{63296:function(s,n,a){a.r(n);var r=a(67294),u=a(85893),v=function(){var o=(0,r.useRef)(null);return(0,r.useEffect)(function(){var t=o.current,e=t==null?void 0:t.getContext("2d");e&&(e.beginPath(),e.moveTo(20,20),e.lineTo(200,20),e.lineWidth=1,e.strokeStyle="#CC0000",e.stroke())},[]),(0,u.jsx)("canvas",{ref:o,width:"100",height:"100"})};n.default=v},2795:function(s,n,a){a.r(n);var r=a(67294),u=a(85893),v=function(){var o=(0,r.useRef)(null);return(0,r.useEffect)(function(){var t=o.current,e=t==null?void 0:t.getContext("webgl");if(e){var d=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,A=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,c=e.createShader(e.VERTEX_SHADER),l=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(c,d),e.shaderSource(l,A),e.compileShader(c),e.compileShader(l);var i=e.createProgram();e.attachShader(i,c),e.attachShader(i,l),e.linkProgram(i),e.useProgram(i);var R=new Float32Array([1,1,-1,1,1,-1,-1,-1]),_=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,R,e.STATIC_DRAW);var f=e.getAttribLocation(i,"a_Position");e.vertexAttribPointer(f,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(f),e.drawArrays(e.TRIANGLE_STRIP,0,4)}},[]),(0,u.jsx)("canvas",{ref:o,width:"100",height:"100"})};n.default=v}}]);
