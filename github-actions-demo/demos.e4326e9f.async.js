"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(V,T,i){i.r(T);var S=i(67294),R=i(85893),O=function(){var x=(0,S.useRef)(null);return(0,S.useEffect)(function(){var E=x.current,t=E==null?void 0:E.getContext("experimental-webgl");if(t){var u=function r(){rotateX(C),rotateY(C),rotateZ(C),t.uniformMatrix4fv(g,!1,new Float32Array(n)),t.clearColor(.5,.5,.5,1),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.LINE_STRIP,0,v.length/3),requestAnimationFrame(r)},U=`precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `,B=`
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `,s=t.createShader(t.VERTEX_SHADER),a=t.createShader(t.FRAGMENT_SHADER),c=t.createProgram();t.shaderSource(s,U),t.shaderSource(a,B),t.compileShader(s),t.compileShader(a),t.attachShader(c,s),t.attachShader(c,a),t.linkProgram(c),t.useProgram(c);var l=function(A,P,Y,F,I){var f=new Array,p=-F;function N(W,K,z){for(var X=0,_=360/W,L=new Array,$=0;$<W;$++)L.push(Math.sin(Math.PI/180*X)*z,Math.cos(Math.PI/180*X)*z,K),X+=_;return L}for(var y=360/I,w=0,p=F,J=0,Q=y,G=0;G<I/2;G++){if(G>=I/4)var H=Math.sin(Math.PI/180*w)*-F;else var H=Math.sin(Math.PI/180*w)*-F;console.log(H),w+=y;var o=N(I,H,p);G>=I/4?H=Math.sin(Math.PI/180*w)*-F:H=-Math.sin(Math.PI/180*w)*-F,p=Math.sqrt(F*F-F*Math.sin(Math.PI/180*w)*F*Math.sin(Math.PI/180*w));for(var h=N(I,H,p),e=0;e<o.length;e+=3)e==0?(f.push(o[e],o[e+1],o[e+2]),f.push(h[e],h[e+1],h[e+2]),f.push(o[o.length-3],o[o.length-2],o[o.length-1]),f.push(o[e],o[e+1],o[e+2]),f.push(h[e],h[e+1],h[e+2]),f.push(h[e+3],h[e+4],h[e+5])):e==o.length-3?(f.push(o[e],o[e+1],o[e+2]),f.push(h[e],h[e+1],h[e+2]),f.push(o[e-3],o[e-2],o[e-1]),f.push(o[e],o[e+1],o[e+2]),f.push(h[e],h[e+1],h[e+2]),f.push(h[0],h[1],h[2])):(f.push(o[e],o[e+1],o[e+2]),f.push(h[e],h[e+1],h[e+2]),f.push(o[e-3],o[e-2],o[e-1]),f.push(o[e],o[e+1],o[e+2]),f.push(h[e],h[e+1],h[e+2]),f.push(h[e+3],h[e+4],h[e+5]))}return f},v=l(0,0,0,.5,180),d=t.getAttribLocation(c,"position"),g=t.getUniformLocation(c,"mat");console.log(t.getShaderInfoLog(s));var n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];console.log(t.getShaderInfoLog(a)),i.g.rotateX=function(r){var A=Math.cos(Math.PI/180*r),P=Math.sin(Math.PI/180*r),Y=n[1],F=n[5],I=n[9];n[1]=A*n[1]-P*n[2],n[5]=A*n[5]-P*n[6],n[9]=A*n[9]-P*n[10],n[2]=P*Y+A*n[2],n[6]=P*F+A*n[6],n[10]=P*I+A*n[10]},i.g.rotateY=function(r){var A=Math.cos(Math.PI/180*r),P=Math.sin(Math.PI/180*r),Y=n[0],F=n[8],I=n[4];n[0]=A*n[0]+P*n[2],n[4]=A*n[4]+P*n[6],n[8]=A*n[8]+P*n[10],n[2]=A*n[2]-P*Y,n[6]=A*n[6]-P*I,n[10]=A*n[10]-P*F},i.g.rotateZ=function(r){var A=Math.cos(Math.PI/180*r),P=Math.sin(Math.PI/180*r),Y=n[0],F=n[4],I=n[8];n[0]=A*n[0]-P*n[1],n[4]=A*n[4]-P*n[5],n[8]=A*n[8]-P*n[9],n[1]=P*Y+A*n[1],n[5]=P*F+A*n[5],n[9]=P*I+A*n[9]},i.g.moveX=function(r){n[0]=n[0]+r*n[3],n[4]=n[4]+r*n[7],n[8]=n[8]+r*n[11],n[12]=n[12]+r*n[15]},i.g.moveY=function(r){n[1]=r*n[3]+n[1],n[5]=r*n[7]+n[5],n[9]=r*n[11]+n[9],n[13]=r*n[15]+n[13]},i.g.moveZ=function(r){n[2]=r*n[3]+n[2],n[6]=r*n[7]+n[6],n[10]=r*n[11]+n[10],n[14]=r*n[15]+n[14]},i.g.scaleFun=function(r){n[0]=r*n[0],n[4]=r*n[4],n[8]=r*n[8],n[12]=r*n[12],n[1]=r*n[1],n[5]=r*n[5],n[9]=r*n[9],n[13]=r*n[13],n[2]=r*n[2],n[6]=r*n[6],n[10]=r*n[10],n[14]=r*n[14]};var D=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,D),t.bufferData(t.ARRAY_BUFFER,new Float32Array(v),t.STATIC_DRAW),t.vertexAttribPointer(d,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(d);var b=.05,C=.5;u()}},[]),(0,R.jsx)("canvas",{ref:x,width:"200",height:"200"})};T.default=O},27246:function(V,T,i){i.r(T);var S=i(67294),R=i(85893),O=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,j=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,x=function(){var t=(0,S.useRef)(null);function u(s,a,c,l,v){var d,g,n,D;return d=s*Math.pow(1-v,3),g=3*a*v*Math.pow(1-v,2),n=3*c*Math.pow(v,2)*(1-v),D=l*Math.pow(v,3),d+g+n+D}function U(s,a,c,l,v,d){return{x:u(s.x,a.x,c.x,l.x,v*d),y:u(s.y,a.y,c.y,l.y,v*d),z:u(s.z,a.z,c.z,l.z,v*d)}}function B(s,a,c,l,v,d){for(var g=v||100,n=d||1,D=n/(g-1),b=[],C=0;C<g;C++){var r=U(s,a,c,l,C,D);b.push(r.x),b.push(r.y),b.push(r.z)}return b}return(0,S.useEffect)(function(){var s=t.current,a=s==null?void 0:s.getContext("webgl");if(a){var c=a.createShader(a.VERTEX_SHADER),l=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(c,O),a.shaderSource(l,j),a.compileShader(c);var v=a.getShaderParameter(c,a.COMPILE_STATUS);if(!v)throw new Error("compile Shader is failed");a.compileShader(l);var d=a.getShaderParameter(l,a.COMPILE_STATUS);if(!d)throw new Error("compile Shader is failed");var g=a.createProgram();a.attachShader(g,c),a.attachShader(g,l),a.linkProgram(g);var n=a.getProgramParameter(g,a.LINK_STATUS);if(!n)throw new Error("link Shader is failed");a.useProgram(g);var D=a.getAttribLocation(g,"a_Position"),b=a.getUniformLocation(g,"u_FragColor");a.uniform4fv(b,[0,1,1,1]);var C=B({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),r=new Float32Array(C),A=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,A),a.bufferData(a.ARRAY_BUFFER,r,a.STATIC_DRAW),a.vertexAttribPointer(D,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(D),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.LINE_STRIP,0,C.length/3)}},[]),(0,R.jsx)("canvas",{ref:t,width:"300",height:"200"})};T.default=x},38952:function(V,T,i){i.r(T);var S=i(67294),R=i(85893),O=function(){var x=(0,S.useRef)(null);return(0,S.useEffect)(function(){var E=x.current,t=E==null?void 0:E.getContext("webgl");if(t){var u=function(f,N,y,w,p,J,Q,G,H){var o=function(_){var L=Math.sqrt(_[0]*_[0]+_[1]*_[1]+_[2]*_[2]);return[_[0]/L,_[1]/L,_[2]/L]},h=function(_,L){return[_[0]-L[0],_[1]-L[1],_[2]-L[2]]},e=function(_,L){return[_[1]*L[2]-_[2]*L[1],_[2]*L[0]-_[0]*L[2],_[0]*L[1]-_[1]*L[0]]},W=o(h([f,N,y],[w,p,J])),K=o(e([Q,G,H],W)),z=o(e(W,K));return new Float32Array([K[0],z[0],W[0],0,K[1],z[1],W[1],0,K[2],z[2],W[2],0,-(K[0]*f+K[1]*N+K[2]*y),-(z[0]*f+z[1]*N+z[2]*y),-(W[0]*f+W[1]*N+W[2]*y),1])},U=function(f){return Math.PI*f/180},B=function(f,N,y,w){f=U(f);var p=1/Math.tan(f/2),J=1/(y-w);return new Float32Array([p/N,0,0,0,0,p,0,0,0,0,(w+y)*J,-1,0,0,2*w*y*J,0])},s=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;  // \u89C6\u56FE\u77E9\u9635
        uniform mat4 u_ProjMatrix; // \u6B63\u5C04\u6295\u5F71\u77E9\u9635
        mat4 u_MvpMatrix = u_ProjMatrix * u_ViewMatrix;
        varying vec4 v_Color;
        void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
        }
        `,a=`
        precision highp float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
        `,c=t.createShader(t.VERTEX_SHADER);t.shaderSource(c,s),t.compileShader(c);var l=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(l,a),t.compileShader(l);var v=t.createProgram();t.attachShader(v,c),t.attachShader(v,l),t.linkProgram(v),t.useProgram(v),t.program=v;var d=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),g=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),n=d.BYTES_PER_ELEMENT,D=t.createBuffer(),b=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,D),t.bufferData(t.ARRAY_BUFFER,d,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,b),t.bufferData(t.ELEMENT_ARRAY_BUFFER,g,t.STATIC_DRAW);var C=t.getAttribLocation(t.program,"a_Position"),r=t.getAttribLocation(t.program,"a_Color"),A=t.getUniformLocation(t.program,"u_ViewMatrix"),P=u(3,4,8,0,0,0,0,1,0);t.uniformMatrix4fv(A,!1,P);var Y=t.getUniformLocation(t.program,"u_ProjMatrix"),F=B(30,E.width/E.height,1,100);t.uniformMatrix4fv(Y,!1,F),t.vertexAttribPointer(C,3,t.FLOAT,!1,n*6,0),t.enableVertexAttribArray(C),t.vertexAttribPointer(r,3,t.FLOAT,!1,n*6,n*3),t.enableVertexAttribArray(r),t.clearColor(0,0,0,1),t.enable(t.DEPTH_TEST),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.drawElements(t.TRIANGLES,g.length,t.UNSIGNED_BYTE,0)}},[]),(0,R.jsx)("canvas",{ref:x,width:"200",height:"200"})};T.default=O},63296:function(V,T,i){i.r(T);var S=i(67294),R=i(85893),O=function(){var x=(0,S.useRef)(null);return(0,S.useEffect)(function(){var E=x.current,t=E==null?void 0:E.getContext("2d");t&&(t.beginPath(),t.moveTo(20,20),t.lineTo(200,20),t.lineWidth=1,t.strokeStyle="#CC0000",t.stroke())},[]),(0,R.jsx)("canvas",{ref:x,width:"100",height:"100"})};T.default=O},2795:function(V,T,i){i.r(T);var S=i(67294),R=i(85893),O=function(){var x=(0,S.useRef)(null);return(0,S.useEffect)(function(){var E=x.current,t=E==null?void 0:E.getContext("webgl");if(t){var u=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,U=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,B=t.createShader(t.VERTEX_SHADER),s=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(B,u),t.shaderSource(s,U),t.compileShader(B),t.compileShader(s);var a=t.createProgram();t.attachShader(a,B),t.attachShader(a,s),t.linkProgram(a),t.useProgram(a);var c=new Float32Array([1,1,-1,1,1,-1,-1,-1]),l=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,l),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW);var v=t.getAttribLocation(a,"a_Position");t.vertexAttribPointer(v,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(v),t.drawArrays(t.TRIANGLE_STRIP,0,4)}},[]),(0,R.jsx)("canvas",{ref:x,width:"100",height:"100"})};T.default=O},44091:function(V,T,i){i.r(T);var S=i(67294),R=i(99477),O=i(85893),j=function(){var E=(0,S.useRef)(null);return(0,S.useEffect)(function(){var t=E.current,u=10,U=10,B;function s(){u=t.clientWidth,U=t.clientHeight,B=new R.CP7({antialias:!0}),B.setSize(u,U),t.appendChild(B.domElement),B.setClearColor(16777215,1)}var a;function c(){a=new R.cPb(45,u/U,1,1e4),a.position.x=0,a.position.y=2,a.position.z=1,a.up.x=0,a.up.y=0,a.up.z=1,a.lookAt(new R.Pa4(0,0,0))}var l;function v(){l=new R.xsS}var d;function g(){var C=new R.DvJ(1,1,1),r=new R.YBo({color:16777215});d=new R.Kj0(C,r),l.add(d)}function n(){var C=new R.cek(16711680);C.position.set(1,1,-1);var r=new R.cek(65280);r.position.set(1,-1,1),l.add(C),l.add(r)}function D(){d.rotation.x+=.01,d.rotation.y+=.01,B.render(l,a),requestAnimationFrame(D)}function b(){s(),c(),v(),g(),n(),D()}b()},[]),(0,O.jsx)("div",{ref:E,style:{width:150,height:150}})};T.default=j},52246:function(V,T,i){i.r(T);var S=i(67294),R=i(48460),O=i(85893),j=function(){var E=(0,S.useRef)(null);return(0,S.useEffect)(function(){if(E.current){var t=E.current,u=t.getContext("webgl");if(u){var U=function(){if(u){u.viewport(0,0,B,s),u.clear(u.COLOR_BUFFER_BIT),u.useProgram(l.program);var n=u.createBuffer();u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,n);var D=new Uint16Array([0,1,2]);u.bufferData(u.ELEMENT_ARRAY_BUFFER,D,u.STATIC_DRAW),R.o8(u,l,d),u.drawElements(u.TRIANGLES,D.length,u.UNSIGNED_SHORT,0)}},B=u.canvas.width,s=u.canvas.height;R.Lo(t);var a=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,c=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,l=R.EK(u,[a,c]),v=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),d=R.qX(u,{position:v});U()}}},[]),(0,O.jsx)("canvas",{ref:E,width:100,height:100})};T.default=j}}]);
