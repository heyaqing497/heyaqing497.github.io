"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{43569:function($,A,a){a.d(A,{p:function(){return y}});var D=a(27424),d=a.n(D),K=a(19474),v=a(67294),L=function(){};function y(n,B){var l=(0,v.useRef)(),h=(0,K.Z)(n),o=d()(h,1),u=o[0],e=(0,v.useCallback)(function(){var _=B();return _||L},[]);return(0,v.useEffect)(function(){!u&&l.current?cancelAnimationFrame(l.current):u&&(l.current=requestAnimationFrame(e))},[u]),l}},16894:function($,A,a){a.r(A);var D=a(67294),d=a(85893),K=function(){var L=(0,D.useRef)(null);return(0,D.useEffect)(function(){var y=L.current,n=y==null?void 0:y.getContext("experimental-webgl");if(n){var B=function t(){rotateX(O),rotateY(O),rotateZ(O),n.uniformMatrix4fv(p,!1,new Float32Array(r)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,c.length/3),requestAnimationFrame(t)},l=`precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `,h=`
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `,o=n.createShader(n.VERTEX_SHADER),u=n.createShader(n.FRAGMENT_SHADER),e=n.createProgram();n.shaderSource(o,l),n.shaderSource(u,h),n.compileShader(o),n.compileShader(u),n.attachShader(e,o),n.attachShader(e,u),n.linkProgram(e),n.useProgram(e);var _=function(f,P,V,w,S){var E=new Array,b=-w;function C(N,M,X){for(var Z=0,x=360/N,U=new Array,J=0;J<N;J++)U.push(Math.sin(Math.PI/180*Z)*X,Math.cos(Math.PI/180*Z)*X,M),Z+=x;return U}for(var T=360/S,R=0,b=w,H=0,j=T,g=0;g<S/2;g++){if(g>=S/4)var z=Math.sin(Math.PI/180*R)*-w;else var z=Math.sin(Math.PI/180*R)*-w;R+=T;var s=C(S,z,b);g>=S/4?z=Math.sin(Math.PI/180*R)*-w:z=-Math.sin(Math.PI/180*R)*-w,b=Math.sqrt(w*w-w*Math.sin(Math.PI/180*R)*w*Math.sin(Math.PI/180*R));for(var F=C(S,z,b),i=0;i<s.length;i+=3)i==0?(E.push(s[i],s[i+1],s[i+2]),E.push(F[i],F[i+1],F[i+2]),E.push(s[s.length-3],s[s.length-2],s[s.length-1]),E.push(s[i],s[i+1],s[i+2]),E.push(F[i],F[i+1],F[i+2]),E.push(F[i+3],F[i+4],F[i+5])):i==s.length-3?(E.push(s[i],s[i+1],s[i+2]),E.push(F[i],F[i+1],F[i+2]),E.push(s[i-3],s[i-2],s[i-1]),E.push(s[i],s[i+1],s[i+2]),E.push(F[i],F[i+1],F[i+2]),E.push(F[0],F[1],F[2])):(E.push(s[i],s[i+1],s[i+2]),E.push(F[i],F[i+1],F[i+2]),E.push(s[i-3],s[i-2],s[i-1]),E.push(s[i],s[i+1],s[i+2]),E.push(F[i],F[i+1],F[i+2]),E.push(F[i+3],F[i+4],F[i+5]))}return E},c=_(0,0,0,.5,180),I=n.getAttribLocation(e,"position"),p=n.getUniformLocation(e,"mat"),r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];a.g.rotateX=function(t){var f=Math.cos(Math.PI/180*t),P=Math.sin(Math.PI/180*t),V=r[1],w=r[5],S=r[9];r[1]=f*r[1]-P*r[2],r[5]=f*r[5]-P*r[6],r[9]=f*r[9]-P*r[10],r[2]=P*V+f*r[2],r[6]=P*w+f*r[6],r[10]=P*S+f*r[10]},a.g.rotateY=function(t){var f=Math.cos(Math.PI/180*t),P=Math.sin(Math.PI/180*t),V=r[0],w=r[8],S=r[4];r[0]=f*r[0]+P*r[2],r[4]=f*r[4]+P*r[6],r[8]=f*r[8]+P*r[10],r[2]=f*r[2]-P*V,r[6]=f*r[6]-P*S,r[10]=f*r[10]-P*w},a.g.rotateZ=function(t){var f=Math.cos(Math.PI/180*t),P=Math.sin(Math.PI/180*t),V=r[0],w=r[4],S=r[8];r[0]=f*r[0]-P*r[1],r[4]=f*r[4]-P*r[5],r[8]=f*r[8]-P*r[9],r[1]=P*V+f*r[1],r[5]=P*w+f*r[5],r[9]=P*S+f*r[9]},a.g.moveX=function(t){r[0]=r[0]+t*r[3],r[4]=r[4]+t*r[7],r[8]=r[8]+t*r[11],r[12]=r[12]+t*r[15]},a.g.moveY=function(t){r[1]=t*r[3]+r[1],r[5]=t*r[7]+r[5],r[9]=t*r[11]+r[9],r[13]=t*r[15]+r[13]},a.g.moveZ=function(t){r[2]=t*r[3]+r[2],r[6]=t*r[7]+r[6],r[10]=t*r[11]+r[10],r[14]=t*r[15]+r[14]},a.g.scaleFun=function(t){r[0]=t*r[0],r[4]=t*r[4],r[8]=t*r[8],r[12]=t*r[12],r[1]=t*r[1],r[5]=t*r[5],r[9]=t*r[9],r[13]=t*r[13],r[2]=t*r[2],r[6]=t*r[6],r[10]=t*r[10],r[14]=t*r[14]};var m=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,m),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),n.vertexAttribPointer(I,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(I);var W=.05,O=.5;B()}},[]),(0,d.jsx)("canvas",{ref:L,width:"200",height:"200"})};A.default=K},27246:function($,A,a){a.r(A);var D=a(67294),d=a(85893),K=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,v=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,L=function(){var n=(0,D.useRef)(null);function B(o,u,e,_,c){var I,p,r,m;return I=o*Math.pow(1-c,3),p=3*u*c*Math.pow(1-c,2),r=3*e*Math.pow(c,2)*(1-c),m=_*Math.pow(c,3),I+p+r+m}function l(o,u,e,_,c,I){return{x:B(o.x,u.x,e.x,_.x,c*I),y:B(o.y,u.y,e.y,_.y,c*I),z:B(o.z,u.z,e.z,_.z,c*I)}}function h(o,u,e,_,c,I){for(var p=c||100,r=I||1,m=r/(p-1),W=[],O=0;O<p;O++){var t=l(o,u,e,_,O,m);W.push(t.x),W.push(t.y),W.push(t.z)}return W}return(0,D.useEffect)(function(){var o=n.current,u=o==null?void 0:o.getContext("webgl");if(u){var e=u.createShader(u.VERTEX_SHADER),_=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(e,K),u.shaderSource(_,v),u.compileShader(e);var c=u.getShaderParameter(e,u.COMPILE_STATUS);if(!c)throw new Error("compile Shader is failed");u.compileShader(_);var I=u.getShaderParameter(_,u.COMPILE_STATUS);if(!I)throw new Error("compile Shader is failed");var p=u.createProgram();u.attachShader(p,e),u.attachShader(p,_),u.linkProgram(p);var r=u.getProgramParameter(p,u.LINK_STATUS);if(!r)throw new Error("link Shader is failed");u.useProgram(p);var m=u.getAttribLocation(p,"a_Position"),W=u.getUniformLocation(p,"u_FragColor");u.uniform4fv(W,[0,1,1,1]);var O=h({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),t=new Float32Array(O),f=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,f),u.bufferData(u.ARRAY_BUFFER,t,u.STATIC_DRAW),u.vertexAttribPointer(m,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(m),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,O.length/3)}},[]),(0,d.jsx)("canvas",{ref:n,width:"300",height:"200"})};A.default=L},38952:function($,A,a){a.r(A);var D=a(67294),d=a(85893),K=function(){var L=(0,D.useRef)(null);return(0,D.useEffect)(function(){var y=L.current,n=y==null?void 0:y.getContext("webgl");if(n){var B=function(E,C,T,R,b,H,j,g,z){var s=function(x){var U=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);return[x[0]/U,x[1]/U,x[2]/U]},F=function(x,U){return[x[0]-U[0],x[1]-U[1],x[2]-U[2]]},i=function(x,U){return[x[1]*U[2]-x[2]*U[1],x[2]*U[0]-x[0]*U[2],x[0]*U[1]-x[1]*U[0]]},N=s(F([E,C,T],[R,b,H])),M=s(i([j,g,z],N)),X=s(i(N,M));return new Float32Array([M[0],X[0],N[0],0,M[1],X[1],N[1],0,M[2],X[2],N[2],0,-(M[0]*E+M[1]*C+M[2]*T),-(X[0]*E+X[1]*C+X[2]*T),-(N[0]*E+N[1]*C+N[2]*T),1])},l=function(E){return Math.PI*E/180},h=function(E,C,T,R){E=l(E);var b=1/Math.tan(E/2),H=1/(T-R);return new Float32Array([b/C,0,0,0,0,b,0,0,0,0,(R+T)*H,-1,0,0,2*R*T*H,0])},o=`
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
        `,u=`
        precision highp float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
        `,e=n.createShader(n.VERTEX_SHADER);n.shaderSource(e,o),n.compileShader(e);var _=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(_,u),n.compileShader(_);var c=n.createProgram();n.attachShader(c,e),n.attachShader(c,_),n.linkProgram(c),n.useProgram(c),n.program=c;var I=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),p=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),r=I.BYTES_PER_ELEMENT,m=n.createBuffer(),W=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,m),n.bufferData(n.ARRAY_BUFFER,I,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,W),n.bufferData(n.ELEMENT_ARRAY_BUFFER,p,n.STATIC_DRAW);var O=n.getAttribLocation(n.program,"a_Position"),t=n.getAttribLocation(n.program,"a_Color"),f=n.getUniformLocation(n.program,"u_ViewMatrix"),P=B(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(f,!1,P);var V=n.getUniformLocation(n.program,"u_ProjMatrix"),w=h(30,y.width/y.height,1,100);n.uniformMatrix4fv(V,!1,w),n.vertexAttribPointer(O,3,n.FLOAT,!1,r*6,0),n.enableVertexAttribArray(O),n.vertexAttribPointer(t,3,n.FLOAT,!1,r*6,r*3),n.enableVertexAttribArray(t),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,p.length,n.UNSIGNED_BYTE,0)}},[]),(0,d.jsx)("canvas",{ref:L,width:"200",height:"200"})};A.default=K},63296:function($,A,a){a.r(A);var D=a(67294),d=a(85893),K=function(){var L=(0,D.useRef)(null);return(0,D.useEffect)(function(){var y=L.current,n=y==null?void 0:y.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,d.jsx)("canvas",{ref:L,width:"100",height:"100"})};A.default=K},2795:function($,A,a){a.r(A);var D=a(67294),d=a(85893),K=function(){var L=(0,D.useRef)(null);return(0,D.useEffect)(function(){var y=L.current,n=y==null?void 0:y.getContext("webgl");if(n){var B=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,l=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,h=n.createShader(n.VERTEX_SHADER),o=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(h,B),n.shaderSource(o,l),n.compileShader(h),n.compileShader(o);var u=n.createProgram();n.attachShader(u,h),n.attachShader(u,o),n.linkProgram(u),n.useProgram(u);var e=new Float32Array([1,1,-1,1,1,-1,-1,-1]),_=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW);var c=n.getAttribLocation(u,"a_Position");n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(c),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,d.jsx)("canvas",{ref:L,width:"100",height:"100"})};A.default=K},44091:function($,A,a){a.r(A);var D=a(67294),d=a(99477),K=a(85893),v=function(){var y=(0,D.useRef)(null);return(0,D.useEffect)(function(){var n=y.current,B=10,l=10,h;function o(){B=n.clientWidth,l=n.clientHeight,h=new d.CP7({antialias:!0}),h.setSize(B,l),n.appendChild(h.domElement),h.setClearColor(16777215,1)}var u;function e(){u=new d.cPb(45,B/l,1,1e4),u.position.x=0,u.position.y=2,u.position.z=1,u.up.x=0,u.up.y=0,u.up.z=1,u.lookAt(new d.Pa4(0,0,0))}var _;function c(){_=new d.xsS}var I;function p(){var O=new d.DvJ(1,1,1),t=new d.YBo({color:16777215});I=new d.Kj0(O,t),_.add(I)}function r(){var O=new d.cek(16711680);O.position.set(1,1,-1);var t=new d.cek(65280);t.position.set(1,-1,1),_.add(O),_.add(t)}function m(){I.rotation.x+=.01,I.rotation.y+=.01,h.render(_,u),requestAnimationFrame(m)}function W(){o(),e(),c(),p(),r(),m()}W()},[]),(0,K.jsx)("div",{ref:y,style:{width:150,height:150}})};A.default=v},548:function($,A,a){a.r(A);var D=a(27424),d=a.n(D),K=a(69234),v=a(53313),L=a(87269),y=a.n(L),n=a(67294),B=a(48460),l=a(85893),h=function(){var u=(0,n.useRef)(null),e=(0,n.useState)(!0),_=d()(e,2),c=_[0],I=_[1],p=(0,n.useState)(!1),r=d()(p,2),m=r[0],W=r[1],O=(0,n.useState)(0),t=d()(O,2),f=t[0],P=t[1];(0,K.Z)(function(){P(f+1)},1e3);var V=(0,n.useRef)(),w=new(window.AudioContext||window.webkitAudioContext),S=(0,n.useRef)(w),E=L.create({context:w,loop:!0}),C=(0,n.useRef)(E),T=w.createAnalyser(),R=(0,n.useRef)(T),b=function(){W(!0),C.current.play(),S.current.resume().then(function(){C.current.play(),C.current.getSource().connect(R.current),R.current.connect(S.current.destination)})},H=function(){if(u.current){var z=u.current,s=z.getContext("webgl"),F=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(B.j_({attribPrefix:"a_"}),s){for(var i=function nu(){s&&(B.Lo(z),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.lineWidth(2),s.useProgram(X.program),R.current.getByteFrequencyData(U),B.Ss(s,eu.attribs.a_height,U),B.o8(s,X,eu),B.y0(s,eu,s.LINE_STRIP),V.current=requestAnimationFrame(nu))},N=`  
          // \u5B9A\u4E49\u9876\u70B9\u7740\u8272\u5668\u7684\u8F93\u5165\u5C5E\u6027\uFF1A\u6269\u5C55\u5EA6\u548C\u9AD8\u5EA6
          attribute float a_spread; // \u6269\u5C55\u5EA6\uFF0C\u63A7\u5236\u70B9\u7684\u6563\u5F00\u7A0B\u5EA6
          attribute float a_height; // \u9AD8\u5EA6\uFF0C\u63A7\u5236\u70B9\u7684\u4F4D\u7F6E
      
          // \u5B9A\u4E49\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u5230\u7247\u6BB5\u7740\u8272\u5668\u7684\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272
      
          // \u5C06HSV\u989C\u8272\u8F6C\u6362\u4E3ARGB\u989C\u8272
          vec3 hsv2rgb(vec3 c) {
            c = vec3(c.x, clamp(c.yz, 0.0, 1.0)); // \u8C03\u6574\u8272\u8C03\u548C\u9971\u548C\u5EA6\uFF0C\u4FDD\u8BC1\u5B83\u4EEC\u5728\u6709\u6548\u8303\u56F4\u5185
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0); // \u7528\u4E8EHSV\u5230RGB\u8F6C\u6362\u7684\u5E38\u91CF
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www); // \u8BA1\u7B97RGB\u5206\u91CF
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y); // \u6DF7\u5408RGB\u989C\u8272\uFF0C\u5B8C\u6210\u8F6C\u6362
          }
      
          // \u9876\u70B9\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_Position = vec4(a_spread, a_height * 2.0 - 1.0, 0, 1); // \u8BA1\u7B97\u6BCF\u4E2A\u9876\u70B9\u7684\u4F4D\u7F6E
            v_color = vec4(hsv2rgb(vec3(a_spread * 0.5 + 0.5, a_height, 1)), 1); // \u8BA1\u7B97\u6BCF\u4E2A\u9876\u70B9\u7684\u989C\u8272\uFF0C\u4F7F\u7528HSV2RGB\u51FD\u6570\u8FDB\u884C\u989C\u8272\u8F6C\u6362
          }
        `,M=`  
          precision mediump float; // \u5B9A\u4E49\u7247\u6BB5\u7740\u8272\u5668\u4F7F\u7528\u7684\u7CBE\u5EA6

          // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u6765\u7684\u989C\u8272\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272

          // \u7247\u6BB5\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_FragColor = v_color; // \u8BBE\u7F6E\u7247\u6BB5\u7684\u989C\u8272\u4E3A\u63A5\u6536\u5230\u7684\u989C\u8272
          }
        `,X=B.EK(s,[N,M]),Z=R.current.frequencyBinCount*(F?.25:1)|0,x=new Float32Array(Z),U=new Uint8Array(Z),J=0;J<Z;++J)x[J]=J/Z*2-1;var au={spread:{data:x,numComponents:1},height:{data:U,numComponents:1,drawType:s.DYNAMIC_DRAW}},eu=B.qX(s,au);V.current=requestAnimationFrame(i)}}};(0,n.useEffect)(function(){m&&(b(),H())},[m]),(0,n.useEffect)(function(){C.current.on("error",function(g){console.error("audio error:",g)}),C.current.on("newSource",function(){I(!1)}),C.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var j=function(){W(!1),C.current.stop(),V.current&&cancelAnimationFrame(V.current)};return(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)("canvas",{ref:u,width:800,height:300}),(0,l.jsx)("div",{children:(0,l.jsx)(v.ZP,{type:"primary",onClick:function(){return j()},children:"\u505C\u6B62"})})]}),!c&&!m&&(0,l.jsx)(v.ZP,{type:"primary",onClick:function(){return W(!0)},children:"\u64AD\u653E"}),c&&(0,l.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",f,"\u79D2\uFF09..."]})]})};A.default=h},85790:function($,A,a){a.r(A);var D=a(28670),d=a.n(D),K=a(67294),v=a(48460),L=a(43569),y=a(85893),n=function(){var l=(0,K.useRef)(null),h=(0,L.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl");v.j_({attribPrefix:"a_"});var e=v.m4;if(u){for(var _=function(H,j){return H+Math.random()*(j-H)},c=function b(H){if(u){var j=H;j*=.001,v.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var g=e.perspective(30*Math.PI/180,o.clientWidth/o.clientHeight,.5,100),z=[1,4,-20],s=[0,0,0],F=[0,1,0];e.lookAt(z,s,F,t),e.inverse(t,f),e.multiply(g,f,P),w.forEach(function(i){var N=i.uniforms,M=N.u_world;e.identity(M),e.rotateY(M,j*i.ySpeed,M),e.rotateZ(M,j*i.zSpeed,M),e.translate(M,i.translation,M),e.rotateX(M,j,M),e.transpose(e.inverse(M,N.u_worldInverseTranspose),N.u_worldInverseTranspose),e.multiply(P,N.u_world,N.u_worldViewProjection)}),v.bV(u,S),h.current=requestAnimationFrame(b)}},I=`  
          // \u9876\u70B9\u7740\u8272\u5668\u7A0B\u5E8F\u7684\u53D8\u91CF\u58F0\u660E\u548C\u8BA1\u7B97\u903B\u8F91, \u4E3B\u8981\u8D1F\u8D23\u5C06\u9876\u70B9\u4ECE\u5BF9\u8C61\u7A7A\u95F4\u8F6C\u6362\u5230\u5C4F\u5E55\u7A7A\u95F4\uFF0C\u5E76\u8BA1\u7B97\u5149\u7167\u7B49\u4FE1\u606F
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635\uFF0C\u7528\u4E8E\u5C06\u9876\u70B9\u4ECE\u4E16\u754C\u7A7A\u95F4\u8F6C\u6362\u5230\u5C4F\u5E55\u7A7A\u95F4
          uniform vec3 u_lightWorldPos; // \u706F\u5149\u5728\u4E16\u754C\u7A7A\u95F4\u7684\u4F4D\u7F6E
          uniform mat4 u_world; // \u4E16\u754C\u77E9\u9635\uFF0C\u7528\u4E8E\u5C06\u9876\u70B9\u4ECE\u5BF9\u8C61\u7A7A\u95F4\u8F6C\u6362\u5230\u4E16\u754C\u7A7A\u95F4
          uniform mat4 u_viewInverse; // \u89C6\u56FE\u77E9\u9635\u7684\u9006\u77E9\u9635\uFF0C\u7528\u4E8E\u8BA1\u7B97\u89C6\u70B9\u5230\u9876\u70B9\u7684\u65B9\u5411
          uniform mat4 u_worldInverseTranspose; // \u4E16\u754C\u77E9\u9635\u7684\u9006\u8F6C\u7F6E\u77E9\u9635\uFF0C\u7528\u4E8E\u8BA1\u7B97\u6CD5\u5411\u91CF\u5728\u4E16\u754C\u7A7A\u95F4\u7684\u8868\u793A
          
          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027\uFF0C\u6765\u6E90\u4E8E\u9876\u70B9\u7F13\u51B2\u5BF9\u8C61
          attribute vec3 a_normal; // \u9876\u70B9\u6CD5\u5411\u91CF\u5C5E\u6027\uFF0C\u7528\u4E8E\u5149\u7167\u8BA1\u7B97
          attribute vec2 a_texcoord;// \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027\uFF0C\u7528\u4E8E\u7EB9\u7406\u6620\u5C04    
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u706F\u5149\u7684\u8DDD\u79BB\u5411\u91CF
          varying vec3 v_surfaceToView; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u89C6\u70B9\u7684\u8DDD\u79BB\u5411\u91CF
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807\u76F4\u63A5\u4F20\u9012
            v_position = (u_worldViewProjection * a_position); // \u8BA1\u7B97\u5C4F\u5E55\u7A7A\u95F4\u4E2D\u7684\u9876\u70B9\u4F4D\u7F6E
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // \u8BA1\u7B97\u4E16\u754C\u7A7A\u95F4\u4E2D\u7684\u6CD5\u5411\u91CF
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz; // \u8BA1\u7B97\u8868\u9762\u5230\u706F\u5149\u7684\u4F4D\u7F6E\u5411\u91CF
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // \u8BA1\u7B97\u8868\u9762\u5230\u89C6\u70B9\u7684\u4F4D\u7F6E\u5411\u91CF
            gl_Position = v_position; // \u8BBE\u7F6E\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,p=`  
          // \u7247\u6BB5\u7740\u8272\u5668\u7A0B\u5E8F\u7684\u53D8\u91CF\u58F0\u660E\u548C\u8BA1\u7B97\u903B\u8F91, \u4E3B\u8981\u8D1F\u8D23\u6839\u636E\u8BA1\u7B97\u51FA\u7684\u5149\u7167\u4FE1\u606F\u548C\u7EB9\u7406\u6765\u786E\u5B9A\u50CF\u7D20\u7684\u989C\u8272
          precision mediump float; // \u786E\u5B9A\u6D6E\u70B9\u6570\u7684\u7CBE\u5EA6

          varying vec4 v_position; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u8868\u9762\u5230\u706F\u5149\u7684\u8DDD\u79BB\u5411\u91CF
          varying vec3 v_surfaceToView; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u8868\u9762\u5230\u89C6\u70B9\u7684\u8DDD\u79BB\u5411\u91CF
          
          uniform vec4 u_lightColor; // \u706F\u5149\u989C\u8272
          uniform vec4 u_diffuseMult; // \u8868\u9762\u6F2B\u53CD\u5C04\u989C\u8272\u7684\u4E58\u6570
          uniform sampler2D u_diffuse; // \u7EB9\u7406\u91C7\u6837\u5668
          uniform vec4 u_specular; // \u8868\u9762\u955C\u9762\u53CD\u5C04\u989C\u8272
          uniform float u_shininess; // \u955C\u9762\u53CD\u5C04\u5149\u6CFD\u5EA6
          uniform float u_specularFactor; // \u955C\u9762\u53CD\u5C04\u8D21\u732E\u56E0\u5B50
          
          vec4 lit(float l ,float h, float m) {
            // \u8BA1\u7B97\u5149\u7167\u5F3A\u5EA6
            return vec4(1.0,
                        abs(l),//max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult; // \u8BA1\u7B97\u6F2B\u53CD\u5C04\u989C\u8272
            vec3 a_normal = normalize(v_normal); // \u6CD5\u5411\u91CF\u6807\u51C6\u5316
            vec3 surfaceToLight = normalize(v_surfaceToLight); // \u706F\u5149\u65B9\u5411\u6807\u51C6\u5316
            vec3 surfaceToView = normalize(v_surfaceToView); // \u89C6\u70B9\u65B9\u5411\u6807\u51C6\u5316
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // \u534A\u5411\u91CF\u6807\u51C6\u5316
            // \u8BA1\u7B97\u5149\u7167\u5F3A\u5EA6
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            // \u8BA1\u7B97\u6700\u7EC8\u989C\u8272
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor; // \u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
          }
        `,r=v.EK(u,[I,p]),m=[v.S6.createCubeBufferInfo(u,2),v.S6.createSphereBufferInfo(u,1,24,12),v.S6.createPlaneBufferInfo(u,2,2),v.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1),v.S6.createCresentBufferInfo(u,1,1,.5,.1,24),v.S6.createCylinderBufferInfo(u,1,2,24,2),v.S6.createDiscBufferInfo(u,1,24),v.S6.createTorusBufferInfo(u,1,.4,24,12)],W=[1,8,-10],O=[1,1,1,1],t=e.identity(),f=e.identity(),P=e.identity(),V=v.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),w=[],S=[],E=100,C=_(0,360),T=0;T<E;++T){var R={u_lightWorldPos:W,u_lightColor:O,u_diffuseMult:D.hsv((C+_(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:V,u_viewInverse:t,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};S.push({programInfo:r,bufferInfo:m[T%m.length],uniforms:R}),w.push({translation:[_(-10,10),_(-10,10),_(-10,10)],ySpeed:_(.1,.3),zSpeed:_(.1,.3),uniforms:R})}return h.current=requestAnimationFrame(c),c}}});return(0,y.jsx)("canvas",{ref:l,width:800,height:300})};A.default=n},99038:function($,A,a){a.r(A);var D=a(28670),d=a.n(D),K=a(67294),v=a(48460),L=a(43569),y=a(85893),n=function(){var l=(0,K.useRef)(null),h=(0,L.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl");v.j_({attribPrefix:"a_"});var e=v.m4;if(u){var _=function(Y){E&&(E.fillStyle="#00f",E.strokeStyle="#ff0",E.lineWidth=10,E.fillRect(0,0,E.canvas.width,E.canvas.height),E.beginPath(),E.arc(E.canvas.width/2,E.canvas.height/2,E.canvas.width/2.2*Math.abs(Math.cos(Y)),0,Math.PI*2),E.stroke())},c=function nu(Y){if(u){var k=Y;k*=.001,v.Lo(o),u.viewport(0,0,o.clientWidth,o.clientHeight),u.enable(u.DEPTH_TEST),u.enable(u.BLEND),u.blendFunc(u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var q=20,Q=k*.1,ou=e.perspective(30*Math.PI/180,u.canvas.width/u.canvas.height,.5,100),iu=[Math.cos(Q)*q,4,Math.sin(Q)*q],vu=[0,0,0],Eu=[0,1,0];e.lookAt(iu,vu,Eu,V),e.inverse(V,w),e.multiply(ou,w,S),_(k),E&&v.Mh(u,F.fromCanvas,E.canvas),M.forEach(function(tu){var uu=tu.uniforms,G=uu.u_world;e.identity(G),e.rotateY(G,k*tu.ySpeed,G),e.rotateZ(G,k*tu.zSpeed,G),e.translate(G,tu.translation,G),e.rotateX(G,k,G),e.transpose(e.inverse(G,uu.u_worldInverseTranspose),uu.u_worldInverseTranspose),e.multiply(S,uu.u_world,uu.u_worldViewProjection)}),v.bV(u,X),h.current=requestAnimationFrame(nu)}},I=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,p=`  
          precision mediump float; // \u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_position; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u7EB9\u7406\u5750\u6807
          
          uniform vec4 u_diffuseMult; // \u6269\u5C55\u7684\u6F2B\u53CD\u5C04\u989C\u8272
          uniform sampler2D u_diffuse; // \u6F2B\u53CD\u5C04\u8D34\u56FE  
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult; // \u8BA1\u7B97\u6F2B\u53CD\u5C04\u989C\u8272
            if (diffuseColor.a < 0.1) { // \u5982\u679C\u989C\u8272\u7684\u900F\u660E\u5EA6\u5C0F\u4E8E0.1\uFF0C\u5219\u4E22\u5F03\u50CF\u7D20
              discard;
            }
            gl_FragColor = diffuseColor; // \u8BBE\u7F6E\u6700\u7EC8\u7684\u989C\u8272
          } 
        `,r=`  
          uniform mat4 u_viewInverse; // \u89C6\u56FE\u77E9\u9635\u7684\u9006\u77E9\u9635
          uniform mat4 u_world; // \u4E16\u754C\u77E9\u9635
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635
          uniform mat4 u_worldInverseTranspose; // \u4E16\u754C\u77E9\u9635\u7684\u9006\u8F6C\u7F6E\u77E9\u9635
          
          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec3 a_normal; // \u9876\u70B9\u6CD5\u5411\u91CF\u5C5E\u6027
          
          varying vec3 v_normal; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToView; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
          
          void main() {
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // \u8BA1\u7B97\u53D8\u6362\u540E\u7684\u6CD5\u5411\u91CF
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // \u8BA1\u7B97\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,m=`  
          precision mediump float; // \u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          uniform samplerCube u_texture;// \u73AF\u5883\u8D34\u56FE
          
          varying vec3 v_surfaceToView; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
          varying vec3 v_normal; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u6CD5\u5411\u91CF
          
          void main() {
            vec3 normal = normalize(v_normal);  // \u5F52\u4E00\u5316\u6CD5\u5411\u91CF
            vec3 surfaceToView = normalize(v_surfaceToView); // \u5F52\u4E00\u5316\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
            vec4 color = textureCube(u_texture, -reflect(surfaceToView, normal)); // \u8BA1\u7B97\u53CD\u5C04\u989C\u8272
            gl_FragColor = color; // \u8BBE\u7F6E\u6700\u7EC8\u7684\u989C\u8272
          }
        `,W=v.EK(u,[I,p]),O=v.EK(u,[r,m]),t=[v.S6.createCubeBufferInfo(u,2),v.S6.createSphereBufferInfo(u,1,24,12),v.S6.createPlaneBufferInfo(u,2,2),v.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],f=function(Y,k){var q=Y,Q=k;return Q===void 0&&(Q=q,q=0),q+Math.random()*(Q-q)},P=f(360),V=e.identity(),w=e.identity(),S=e.identity(),E=document.createElement("canvas").getContext("2d");E&&(E.canvas.width=64,E.canvas.height=64),_(0);var C=document.createElement("canvas").getContext("2d"),T=40;if(C){C.canvas.width=T*6,C.canvas.height=T,C.fillStyle="#888";for(var R=0;R<6;++R){var b=D.hsv((P+R*10)%360,1-R/6,1);C.fillStyle=b.darken().hex(),C.fillRect(T*R,0,T,T),C.save(),C.translate(T*(R+.5),T*.5),C.beginPath(),C.arc(0,0,T*.3,0,Math.PI*2),C.fillStyle=b.hex(),C.fill(),C.restore()}}for(var H=[],j=0;j<6;++j){var g=document.createElement("canvas");g.width=128,g.height=128;var z=g.getContext("2d"),s=D.hsv((P+j*10)%360,1-j/6,1);z&&(z.fillStyle=s.darken().hex(),z.fillRect(0,0,128,128),z.translate(64,64),z.rotate(Math.PI*.25),z.fillStyle=s.hex(),z.fillRect(-40,-40,80,80)),H.push(g)}for(var F=v.cE(u,{hftIcon:{src:"images/hft-icon-16.png",mag:u.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:E==null?void 0:E.canvas},yokohama:{target:u.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:u.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:u.NEAREST,min:u.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:u.NEAREST,min:u.LINEAR,format:u.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:u.TEXTURE_CUBE_MAP,format:u.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:u.TEXTURE_CUBE_MAP,src:C==null?void 0:C.canvas},cubemapFrom6Canvases:{target:u.TEXTURE_CUBE_MAP,src:H}}),i=[F.checker,F.stripe,F.hftIcon,F.clover,F.fromCanvas],N=[F.yokohama,F.goldengate,F.cubemapFromCanvas,F.cubemapFrom6Canvases,F.cubemapFromArray],M=[],X=[],Z=100,x=0;x<Z;++x){var U=void 0,J=void 0,au=void 0,eu=f(0,2)|0;switch(eu){case 0:au=t[x%t.length],J=W,U={u_diffuseMult:D.hsv((P+f(0,60))%360,.4,.8).gl(),u_diffuse:i[f(0,i.length)|0],u_viewInverse:V,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};break;case 1:au=f(0,2)<1?t[1]:t[3],J=O,U={u_texture:N[f(0,N.length)|0],u_viewInverse:V,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};break;default:throw"wAT!"}X.push({programInfo:J,bufferInfo:au,uniforms:U}),M.push({translation:[f(-10,10),f(-10,10),f(-10,10)],ySpeed:f(.1,.3),zSpeed:f(.1,.3),uniforms:U})}return h.current=requestAnimationFrame(c),c}}});return(0,y.jsx)("canvas",{ref:l,width:800,height:300})};A.default=n},52246:function($,A,a){a.r(A);var D=a(67294),d=a(48460),K=a(85893),v=function(){var y=(0,D.useRef)(null);return(0,D.useEffect)(function(){if(y.current){var n=y.current,B=n.getContext("webgl");if(B){var l=function(){B&&(d.Lo(n),B.viewport(0,0,h,o),B.clear(B.COLOR_BUFFER_BIT),B.useProgram(_.program),d.o8(B,_,c),B.drawElements(B.TRIANGLES,c.numElements,B.UNSIGNED_SHORT,0))},h=B.canvas.width,o=B.canvas.height,u=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,e=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,_=d.EK(B,[u,e]),c=d.qX(B,{position:[-1,-1,0,.5,1,0,1,0,0],indices:[0,1,2]});l()}}},[]),(0,K.jsx)("canvas",{ref:y,width:100,height:100})};A.default=v},11696:function($,A,a){a.r(A);var D=a(67294),d=a(48460),K=a(43569),v=a(85893),L=function(){var n=(0,D.useRef)(null),B=(0,K.p)(n,function(){if(n.current){var l=n.current,h=d.m4,o=l.getContext("webgl");if(o){var u=function W(O){if(o){var t=O;t*=.001,d.Lo(l),o.viewport(0,0,o.canvas.width,o.canvas.height),o.enable(o.DEPTH_TEST),o.enable(o.CULL_FACE),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var f=30*Math.PI/180,P=o.canvas.width/o.canvas.height,V=.5,w=10,S=h.perspective(f,P,V,w),E=[1,4,-6],C=[0,0,0],T=[0,1,0],R=h.lookAt(E,C,T),b=h.inverse(R),H=h.multiply(S,b),j=h.rotationY(t);m.u_viewInverse=R,m.u_world=j,m.u_worldInverseTranspose=h.transpose(h.inverse(j)),m.u_worldViewProjection=h.multiply(H,j),o.useProgram(c.program),d.o8(o,c,p),d.N9(c,m),o.drawElements(o.TRIANGLES,p.numElements,o.UNSIGNED_SHORT,0),B.current=requestAnimationFrame(W)}},e=`
          uniform mat4 u_worldViewProjection; // \u5B9A\u4E49\u7EDF\u4E00\u53D8\u91CF\uFF1A\u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635
          uniform vec3 u_lightWorldPos; // \u5B9A\u4E49\u7EDF\u4E00\u53D8\u91CF\uFF1A\u5149\u6E90\u5728\u4E16\u754C\u7A7A\u95F4\u7684\u4F4D\u7F6E
          uniform mat4 u_world; // \u5B9A\u4E49\u7EDF\u4E00\u53D8\u91CF\uFF1A\u4E16\u754C\u77E9\u9635
          uniform mat4 u_viewInverse; // \u5B9A\u4E49\u7EDF\u4E00\u53D8\u91CF\uFF1A\u89C6\u56FE\u77E9\u9635\u7684\u9006\u77E9\u9635
          uniform mat4 u_worldInverseTranspose; // \u5B9A\u4E49\u7EDF\u4E00\u53D8\u91CF\uFF1A\u4E16\u754C\u77E9\u9635\u7684\u9006\u8F6C\u7F6E\u77E9\u9635
          
          attribute vec4 position; // \u5B9A\u4E49\u9876\u70B9\u5C5E\u6027\uFF1A\u9876\u70B9\u4F4D\u7F6E
          attribute vec3 normal; // \u5B9A\u4E49\u9876\u70B9\u5C5E\u6027\uFF1A\u6CD5\u5411\u91CF
          attribute vec2 texcoord; // \u5B9A\u4E49\u9876\u70B9\u5C5E\u6027\uFF1A\u7EB9\u7406\u5750\u6807
          
          varying vec4 v_position; // \u5B9A\u4E49varying\u53D8\u91CF\uFF1A\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u7EB9\u7406\u5750\u6807
          varying vec2 v_texCoord; // \u5B9A\u4E49varying\u53D8\u91CF\uFF1A\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u5B9A\u4E49varying\u53D8\u91CF\uFF1A\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u5B9A\u4E49varying\u53D8\u91CF\uFF1A\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u5149\u6E90\u7684\u8DDD\u79BB
          varying vec3 v_surfaceToView; // \u5B9A\u4E49varying\u53D8\u91CF\uFF1A\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u89C2\u5BDF\u8005\u7684\u8DDD\u79BB
          
          // \u9876\u70B9\u7740\u8272\u5668\u4E3B\u51FD\u6570
          void main() {
            v_texCoord = texcoord;  // \u5C06\u7EB9\u7406\u5750\u6807\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
            v_position = u_worldViewProjection * position; // \u8BA1\u7B97\u9876\u70B9\u5728\u4E16\u754C\u89C6\u56FE\u6295\u5F71\u7A7A\u95F4\u7684\u4F4D\u7F6E
            v_normal = (u_worldInverseTranspose * vec4(normal, 0)).xyz; // \u8BA1\u7B97\u9876\u70B9\u5728\u4E16\u754C\u7A7A\u95F4\u7684\u6CD5\u5411\u91CF
            v_surfaceToLight = u_lightWorldPos - (u_world * position).xyz; // \u8BA1\u7B97\u9876\u70B9\u8868\u9762\u5230\u5149\u6E90\u7684\u8DDD\u79BB
            v_surfaceToView = (u_viewInverse[3] - (u_world * position)).xyz; // \u8BA1\u7B97\u9876\u70B9\u8868\u9762\u5230\u89C2\u5BDF\u8005\u7684\u8DDD\u79BB
            gl_Position = v_position; // \u8BBE\u7F6Egl_Position\uFF0C\u786E\u5B9A\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,_=`  
          precision mediump float; // \u786E\u5B9Afloat\u7684\u7CBE\u5EA6\u4E3Amedium

          // \u4E0B\u9762\u7684varying\u53D8\u91CF\u7528\u4E8E\u4F20\u9012\u9876\u70B9\u7740\u8272\u5668\u4E2D\u7684\u6570\u636E\u5230\u7247\u6BB5\u7740\u8272\u5668
          varying vec4 v_position; // \u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u9876\u70B9\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u8868\u9762\u5230\u5149\u6E90\u7684\u5411\u91CF
          varying vec3 v_surfaceToView; // \u8868\u9762\u5230\u89C2\u5BDF\u8005\u7684\u5411\u91CF
          
          // uniform\u53D8\u91CF\u7528\u4E8E\u4F20\u9012\u5168\u5C40\u5C5E\u6027\u7ED9\u7740\u8272\u5668
          uniform vec4 u_lightColor; // \u5149\u6E90\u989C\u8272
          uniform vec4 u_ambient; // \u73AF\u5883\u5149\u989C\u8272
          uniform sampler2D u_diffuse; // \u7EB9\u7406\u8D34\u56FE
          uniform vec4 u_specular; // \u9AD8\u5149\u989C\u8272
          uniform float u_shininess; // \u9AD8\u5149\u6307\u6570
          uniform float u_specularFactor; // \u9AD8\u5149\u5F3A\u5EA6\u56E0\u5B50
          
          // \u8BA1\u7B97\u5149\u7167\u7684lit\u51FD\u6570
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        max(l, 0.0), // \u6F2B\u53CD\u5C04\u6210\u5206
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0, // \u9AD8\u5149\u53CD\u5C04\u6210\u5206
                        1.0);
          }
          
          // \u4E3B\u51FD\u6570\uFF1A\u8BA1\u7B97\u50CF\u7D20\u989C\u8272
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord); // \u4ECE\u7EB9\u7406\u8D34\u56FE\u83B7\u53D6\u989C\u8272
            vec3 a_normal = normalize(v_normal); // \u6B63\u5E38\u5316\u6CD5\u5411\u91CF
            vec3 surfaceToLight = normalize(v_surfaceToLight); // \u6B63\u5E38\u5316\u8868\u9762\u5230\u5149\u6E90\u7684\u5411\u91CF
            vec3 surfaceToView = normalize(v_surfaceToView); // \u6B63\u5E38\u5316\u8868\u9762\u5230\u89C2\u5BDF\u8005\u7684\u5411\u91CF
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // \u8BA1\u7B97\u534A\u5411\u91CF\uFF08\u5149\u6E90\u65B9\u5411\u4E0E\u89C2\u5BDF\u65B9\u5411\u7684\u4E2D\u95F4\u5411\u91CF\uFF09
            // \u4F7F\u7528lit\u51FD\u6570\u8BA1\u7B97\u5149\u7167
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            // \u8BA1\u7B97\u6700\u7EC8\u989C\u8272
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            // \u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = outColor;
          } 
        `,c=d.EK(o,[e,_]),I={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},p=d.qX(o,I),r=d.cU(o,{min:o.NEAREST,mag:o.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),m={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:r};return B.current=requestAnimationFrame(u),u}}});return(0,v.jsx)("canvas",{ref:n,width:100,height:100})};A.default=L},41732:function($,A,a){a.r(A);var D=a(28670),d=a.n(D),K=a(67294),v=a(48460),L=a(43569),y=a(85893),n=function(){var l=(0,K.useRef)(null),h=(0,L.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl"),e=v.m4;if(v.j_({attribPrefix:"a_"}),u){for(var _=function(j,g){return j+Math.random()*(g-j)},c=function H(j){if(u){var g=j;g*=.001,v.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),C[0]=Math.sin(g),C[1]=Math.sin(g*.13)*Math.PI*2,C[2]=Math.sin(g*.43)*.5+1,C[3]=Math.cos(g*.17)*.5+.5,T[0]=Math.sin(g*.163)*.5,T[1]=Math.cos(g*.267)*.5,T[2]=Math.sin(g*.367)*.5,T[3]=Math.cos(g*.497)*.5,R[1]=(Math.sin(g*.1)*.5+.5)*3;var z=o.clientWidth/o.clientHeight;e.ortho(-z,z,1,-1,-1,1,b.u_matrix),u.useProgram(r.program),v.o8(u,r,E),v.N9(r,b),v.y0(u,E,u.LINES),h.current=requestAnimationFrame(H)}},I=`  
          // \u5B9A\u4E49\u7EDF\u4E00\u53D8\u91CF\uFF1A\u53D8\u6362\u77E9\u9635\u3001\u504F\u79FB\u91CF\u3001\u4E2D\u5FC3\u70B9\u5750\u6807\u548C\u7F29\u653E\u56E0\u5B50
          uniform mat4 u_matrix;
          uniform vec4 u_offsets;
          uniform vec4 u_centers;
          uniform vec4 u_mult;
    
          // \u5B9A\u4E49\u5C5E\u6027\u53D8\u91CF\uFF1A\u9876\u70B9\u4F4D\u7F6E\u548C\u989C\u8272
          attribute vec2 a_position;
          attribute vec4 a_color;
    
          // \u5B9A\u4E49varying\u53D8\u91CF\uFF0C\u7528\u4E8E\u9876\u70B9\u7740\u8272\u5668\u548C\u7247\u6BB5\u7740\u8272\u5668\u95F4\u4F20\u9012\u989C\u8272
          varying vec4 v_color;
    
          // \u5B9A\u4E49\u5706\u5468\u7387PI
          #define PI 3.14159
    
          // \u4E3B\u51FD\u6570\uFF1A\u8BA1\u7B97\u6BCF\u4E2A\u9876\u70B9\u7684\u6700\u7EC8\u4F4D\u7F6E\u548C\u989C\u8272
          void main() {
            vec2 offset = mix(u_offsets.xz, u_offsets.yw, a_position.y); // \u6839\u636E\u9876\u70B9\u7684y\u5750\u6807\uFF0C\u6DF7\u5408\u4E24\u4E2A\u504F\u79FB\u91CF
            // \u8BA1\u7B97\u89D2\u5EA6\u5E76\u5E94\u7528\u7F29\u653E\u548C\u504F\u79FB
            float a = u_mult.x * a_position.x * PI * 2.0 + offset.x; // mix(u_offsets.x, u_offsets.y, a_position.y);
            // \u4F7F\u7528\u89D2\u5EA6\u8BA1\u7B97x\u548Cy\u5750\u6807
            float c = cos(a * u_mult.y);
            vec2 xy = vec2(
              cos(a),
              sin(a)) * c * offset.y +
              mix(u_centers.xy, u_centers.zw, a_position.y);
            gl_Position = u_matrix * vec4(xy, 0, 1); // \u5E94\u7528\u53D8\u6362\u77E9\u9635\uFF0C\u8BBE\u7F6E\u6700\u7EC8\u9876\u70B9\u4F4D\u7F6E
            v_color = a_color; // \u4F20\u9012\u989C\u8272\u5230\u7247\u6BB5\u7740\u8272\u5668
          }
        `,p=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,r=v.EK(u,[I,p]),m=100,W={position:v.S6.createAugmentedTypedArray(2,m*2),color:v.S6.createAugmentedTypedArray(3,m*2,Uint8Array)},O=_(0,360),t=0;t<m;++t){var f=t/m,P=(360+O+Math.abs(f-.5)*100)%360,V=Math.sin(f*Math.PI*2)*.25+.75,w=1,S=D.hsv(P,V,w);W.position.push(f,1),W.color.push(S.rgb()),W.position.push(f,0),W.color.push(S.brighten().desaturate().rgb())}var E=v.qX(u,W),C=[0,0,0,1],T=[0,0,0,0],R=[1,2,0,0],b={u_matrix:e.identity(),u_offsets:C,u_centers:T,u_mult:R};return h.current=requestAnimationFrame(c),c}}});return(0,y.jsx)("canvas",{ref:l,width:800,height:300})};A.default=n},52109:function($,A,a){a.r(A);var D=a(28670),d=a.n(D),K=a(67294),v=a(48460),L=a(43569),y=a(85893),n=function(){var l=(0,K.useRef)(null),h=(0,L.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl");v.j_({attribPrefix:"a_"});var e=v.m4,_=v.v3;if(u){for(var c=function(nu,Y){return nu+Math.random()*(Y-nu)},I=function(nu,Y,k){var q=k-Y,Q=nu/.5;return Q<1?q/2*Q*Q+Y:-q/2*(--Q*(Q-2)-1)+Y},p=function eu(nu){if(u){var Y=nu;Y*=.001;var k=Y-au;au=Y,v.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var q=30*Math.PI/180,Q=e.perspective(q,o.clientWidth/o.clientHeight,.5,200);if(E-=k,E<=0){E=g,C=0,S=(S+1)%M.length,z=_.copy(T),s=_.copy(R);var ou=M[S];i=ou.translation;var iu=ou.size*ou.scale*H*.5,vu=iu/Math.tan(q*.5),Eu=_.normalize(_.subtract(T,i));F=_.add(i,_.mulScalar(Eu,vu))}C+=k;var tu=I(Math.min(1,C/j),0,1);T=_.lerp(z,F,tu),R=_.lerp(s,i,tu),e.lookAt(T,R,b,P),e.inverse(P,V),e.multiply(Q,V,w),M.forEach(function(uu){var G=uu.uniforms,ru=G.u_world;e.identity(ru),e.translate(ru,uu.translation,ru),e.rotateX(ru,Y*uu.xSpeed,ru),e.rotateZ(ru,Y*uu.zSpeed,ru),e.scale(ru,[uu.scale,uu.scale,uu.scale],ru),e.transpose(e.inverse(ru,G.u_worldInverseTranspose),G.u_worldInverseTranspose),e.multiply(w,G.u_world,G.u_worldViewProjection)}),v.bV(u,X),h.current=requestAnimationFrame(eu)}},r=`  
          uniform mat4 u_worldViewProjection;
          uniform vec3 u_lightWorldPos;
          uniform mat4 u_world;
          uniform mat4 u_viewInverse;
          uniform mat4 u_worldInverseTranspose;
          
          attribute vec4 a_position;
          attribute vec3 a_normal;
          attribute vec2 a_texcoord;
          
          varying vec4 v_position;
          varying vec2 v_texCoord;
          varying vec3 v_normal;
          varying vec3 v_surfaceToLight;
          varying vec3 v_surfaceToView;
          
          void main() {
            v_texCoord = a_texcoord;
            v_position = (u_worldViewProjection * a_position);
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz;
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz;
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz;
            gl_Position = v_position;
          } 
        `,m=`  
          precision mediump float;

          varying vec4 v_position;
          varying vec2 v_texCoord;
          varying vec3 v_normal;
          varying vec3 v_surfaceToLight;
          varying vec3 v_surfaceToView;
          
          uniform vec4 u_lightColor;
          uniform vec4 u_diffuseMult;
          uniform sampler2D u_diffuse;
          uniform vec4 u_specular;
          uniform float u_shininess;
          uniform float u_specularFactor;
          
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        abs(l),//max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult;
            vec3 a_normal = normalize(v_normal);
            vec3 surfaceToLight = normalize(v_surfaceToLight);
            vec3 surfaceToView = normalize(v_surfaceToView);
            vec3 halfVector = normalize(surfaceToLight + surfaceToView);
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor;
          }
        `,W=v.EK(u,[r,m]),O=[v.S6.createCubeBufferInfo(u,2),v.S6.createSphereBufferInfo(u,1,24,12),v.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],t=[1,8,-10],f=[1,1,1,1],P=e.identity(),V=e.identity(),w=e.identity(),S=0,E=0,C=0,T=_.copy([1,4,-60]),R=_.copy([0,0,0]),b=[0,1,0],H=1.4,j=2,g=3,z,s,F,i,N=v.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),M=[],X=[],Z=100,x=c(0,360),U=0;U<Z;++U){var J={u_lightWorldPos:t,u_lightColor:f,u_diffuseMult:D.hsv((x+c(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:N,u_viewInverse:P,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};X.push({programInfo:W,bufferInfo:O[U%O.length],uniforms:J}),M.push({translation:[c(-50,50),c(-50,50),c(-50,50)],scale:c(1,5),size:2,xSpeed:c(.2,.7),zSpeed:c(.2,.7),uniforms:J})}var au=0;return h.current=requestAnimationFrame(p),p}}});return(0,y.jsx)("canvas",{ref:l,width:800,height:300})};A.default=n}}]);
