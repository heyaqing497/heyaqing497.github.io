"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{27246:function(D,l,u){u.r(l);var c=u(67294),h=u(85893),_=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,T=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,E=function(){var e=(0,c.useRef)(null);function P(t,r,n,i,a){var v,o,d,A;return v=t*Math.pow(1-a,3),o=3*r*a*Math.pow(1-a,2),d=3*n*Math.pow(a,2)*(1-a),A=i*Math.pow(a,3),v+o+d+A}function C(t,r,n,i,a,v){return{x:P(t.x,r.x,n.x,i.x,a*v),y:P(t.y,r.y,n.y,i.y,a*v),z:P(t.z,r.z,n.z,i.z,a*v)}}function S(t,r,n,i,a,v){for(var o=a||100,d=v||1,A=d/(o-1),s=[],R=0;R<o;R++){var g=C(t,r,n,i,R,A);s.push(g.x),s.push(g.y),s.push(g.z)}return s}return(0,c.useEffect)(function(){var t=e.current,r=t==null?void 0:t.getContext("webgl");if(r){var n=r.createShader(r.VERTEX_SHADER),i=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(n,_),r.shaderSource(i,T),r.compileShader(n);var a=r.getShaderParameter(n,r.COMPILE_STATUS);if(!a)throw new Error("compile Shader is failed");r.compileShader(i);var v=r.getShaderParameter(i,r.COMPILE_STATUS);if(!v)throw new Error("compile Shader is failed");var o=r.createProgram();r.attachShader(o,n),r.attachShader(o,i),r.linkProgram(o);var d=r.getProgramParameter(o,r.LINK_STATUS);if(!d)throw new Error("link Shader is failed");r.useProgram(o);var A=r.getAttribLocation(o,"a_Position"),s=r.getUniformLocation(o,"u_FragColor");r.uniform4fv(s,[0,1,1,1]);var R=S({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),g=new Float32Array(R),B=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,B),r.bufferData(r.ARRAY_BUFFER,g,r.STATIC_DRAW),r.vertexAttribPointer(A,3,r.FLOAT,!1,0,0),r.enableVertexAttribArray(A),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.LINE_STRIP,0,R.length/3)}},[]),(0,h.jsx)("canvas",{ref:e,width:"100",height:"100"})};l.default=E},63296:function(D,l,u){u.r(l);var c=u(67294),h=u(85893),_=function(){var E=(0,c.useRef)(null);return(0,c.useEffect)(function(){var f=E.current,e=f==null?void 0:f.getContext("2d");e&&(e.beginPath(),e.moveTo(20,20),e.lineTo(200,20),e.lineWidth=1,e.strokeStyle="#CC0000",e.stroke())},[]),(0,h.jsx)("canvas",{ref:E,width:"100",height:"100"})};l.default=_},2795:function(D,l,u){u.r(l);var c=u(67294),h=u(85893),_=function(){var E=(0,c.useRef)(null);return(0,c.useEffect)(function(){var f=E.current,e=f==null?void 0:f.getContext("webgl");if(e){var P=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,C=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,S=e.createShader(e.VERTEX_SHADER),t=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(S,P),e.shaderSource(t,C),e.compileShader(S),e.compileShader(t);var r=e.createProgram();e.attachShader(r,S),e.attachShader(r,t),e.linkProgram(r),e.useProgram(r);var n=new Float32Array([1,1,-1,1,1,-1,-1,-1]),i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW);var a=e.getAttribLocation(r,"a_Position");e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(a),e.drawArrays(e.TRIANGLE_STRIP,0,4)}},[]),(0,h.jsx)("canvas",{ref:E,width:"100",height:"100"})};l.default=_}}]);
