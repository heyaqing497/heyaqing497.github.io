"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(G,w,o){o.r(w);var y=o(67294),T=o(85893),I=function(){var L=(0,y.useRef)(null);return(0,y.useEffect)(function(){var R=L.current,n=R==null?void 0:R.getContext("experimental-webgl");if(n){var v=function i(){rotateX(B),rotateY(B),rotateZ(B),n.uniformMatrix4fv(D,!1,new Float32Array(u)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,h.length/3),requestAnimationFrame(i)},E=`precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `,r=`
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `,a=n.createShader(n.VERTEX_SHADER),e=n.createShader(n.FRAGMENT_SHADER),d=n.createProgram();n.shaderSource(a,E),n.shaderSource(e,r),n.compileShader(a),n.compileShader(e),n.attachShader(d,a),n.attachShader(d,e),n.linkProgram(d),n.useProgram(d);var P=function(l,m,W,c,F){var f=new Array,x=-c;function S(V,Y,N){for(var X=0,M=360/V,b=new Array,uu=0;uu<V;uu++)b.push(Math.sin(Math.PI/180*X)*N,Math.cos(Math.PI/180*X)*N,Y),X+=M;return b}for(var j=360/F,C=0,x=c,U=0,z=j,H=0;H<F/2;H++){if(H>=F/4)var K=Math.sin(Math.PI/180*C)*-c;else var K=Math.sin(Math.PI/180*C)*-c;C+=j;var _=S(F,K,x);H>=F/4?K=Math.sin(Math.PI/180*C)*-c:K=-Math.sin(Math.PI/180*C)*-c,x=Math.sqrt(c*c-c*Math.sin(Math.PI/180*C)*c*Math.sin(Math.PI/180*C));for(var A=S(F,K,x),t=0;t<_.length;t+=3)t==0?(f.push(_[t],_[t+1],_[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(_[_.length-3],_[_.length-2],_[_.length-1]),f.push(_[t],_[t+1],_[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(A[t+3],A[t+4],A[t+5])):t==_.length-3?(f.push(_[t],_[t+1],_[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(_[t-3],_[t-2],_[t-1]),f.push(_[t],_[t+1],_[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(A[0],A[1],A[2])):(f.push(_[t],_[t+1],_[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(_[t-3],_[t-2],_[t-1]),f.push(_[t],_[t+1],_[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(A[t+3],A[t+4],A[t+5]))}return f},h=P(0,0,0,.5,180),g=n.getAttribLocation(d,"position"),D=n.getUniformLocation(d,"mat"),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];o.g.rotateX=function(i){var l=Math.cos(Math.PI/180*i),m=Math.sin(Math.PI/180*i),W=u[1],c=u[5],F=u[9];u[1]=l*u[1]-m*u[2],u[5]=l*u[5]-m*u[6],u[9]=l*u[9]-m*u[10],u[2]=m*W+l*u[2],u[6]=m*c+l*u[6],u[10]=m*F+l*u[10]},o.g.rotateY=function(i){var l=Math.cos(Math.PI/180*i),m=Math.sin(Math.PI/180*i),W=u[0],c=u[8],F=u[4];u[0]=l*u[0]+m*u[2],u[4]=l*u[4]+m*u[6],u[8]=l*u[8]+m*u[10],u[2]=l*u[2]-m*W,u[6]=l*u[6]-m*F,u[10]=l*u[10]-m*c},o.g.rotateZ=function(i){var l=Math.cos(Math.PI/180*i),m=Math.sin(Math.PI/180*i),W=u[0],c=u[4],F=u[8];u[0]=l*u[0]-m*u[1],u[4]=l*u[4]-m*u[5],u[8]=l*u[8]-m*u[9],u[1]=m*W+l*u[1],u[5]=m*c+l*u[5],u[9]=m*F+l*u[9]},o.g.moveX=function(i){u[0]=u[0]+i*u[3],u[4]=u[4]+i*u[7],u[8]=u[8]+i*u[11],u[12]=u[12]+i*u[15]},o.g.moveY=function(i){u[1]=i*u[3]+u[1],u[5]=i*u[7]+u[5],u[9]=i*u[11]+u[9],u[13]=i*u[15]+u[13]},o.g.moveZ=function(i){u[2]=i*u[3]+u[2],u[6]=i*u[7]+u[6],u[10]=i*u[11]+u[10],u[14]=i*u[15]+u[14]},o.g.scaleFun=function(i){u[0]=i*u[0],u[4]=i*u[4],u[8]=i*u[8],u[12]=i*u[12],u[1]=i*u[1],u[5]=i*u[5],u[9]=i*u[9],u[13]=i*u[13],u[2]=i*u[2],u[6]=i*u[6],u[10]=i*u[10],u[14]=i*u[14]};var O=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,O),n.bufferData(n.ARRAY_BUFFER,new Float32Array(h),n.STATIC_DRAW),n.vertexAttribPointer(g,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(g);var p=.05,B=.5;v()}},[]),(0,T.jsx)("canvas",{ref:L,width:"200",height:"200"})};w.default=I},27246:function(G,w,o){o.r(w);var y=o(67294),T=o(85893),I=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,s=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,L=function(){var n=(0,y.useRef)(null);function v(a,e,d,P,h){var g,D,u,O;return g=a*Math.pow(1-h,3),D=3*e*h*Math.pow(1-h,2),u=3*d*Math.pow(h,2)*(1-h),O=P*Math.pow(h,3),g+D+u+O}function E(a,e,d,P,h,g){return{x:v(a.x,e.x,d.x,P.x,h*g),y:v(a.y,e.y,d.y,P.y,h*g),z:v(a.z,e.z,d.z,P.z,h*g)}}function r(a,e,d,P,h,g){for(var D=h||100,u=g||1,O=u/(D-1),p=[],B=0;B<D;B++){var i=E(a,e,d,P,B,O);p.push(i.x),p.push(i.y),p.push(i.z)}return p}return(0,y.useEffect)(function(){var a=n.current,e=a==null?void 0:a.getContext("webgl");if(e){var d=e.createShader(e.VERTEX_SHADER),P=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(d,I),e.shaderSource(P,s),e.compileShader(d);var h=e.getShaderParameter(d,e.COMPILE_STATUS);if(!h)throw new Error("compile Shader is failed");e.compileShader(P);var g=e.getShaderParameter(P,e.COMPILE_STATUS);if(!g)throw new Error("compile Shader is failed");var D=e.createProgram();e.attachShader(D,d),e.attachShader(D,P),e.linkProgram(D);var u=e.getProgramParameter(D,e.LINK_STATUS);if(!u)throw new Error("link Shader is failed");e.useProgram(D);var O=e.getAttribLocation(D,"a_Position"),p=e.getUniformLocation(D,"u_FragColor");e.uniform4fv(p,[0,1,1,1]);var B=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),i=new Float32Array(B),l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.vertexAttribPointer(O,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(O),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.LINE_STRIP,0,B.length/3)}},[]),(0,T.jsx)("canvas",{ref:n,width:"300",height:"200"})};w.default=L},38952:function(G,w,o){o.r(w);var y=o(67294),T=o(85893),I=function(){var L=(0,y.useRef)(null);return(0,y.useEffect)(function(){var R=L.current,n=R==null?void 0:R.getContext("webgl");if(n){var v=function(f,S,j,C,x,U,z,H,K){var _=function(M){var b=Math.sqrt(M[0]*M[0]+M[1]*M[1]+M[2]*M[2]);return[M[0]/b,M[1]/b,M[2]/b]},A=function(M,b){return[M[0]-b[0],M[1]-b[1],M[2]-b[2]]},t=function(M,b){return[M[1]*b[2]-M[2]*b[1],M[2]*b[0]-M[0]*b[2],M[0]*b[1]-M[1]*b[0]]},V=_(A([f,S,j],[C,x,U])),Y=_(t([z,H,K],V)),N=_(t(V,Y));return new Float32Array([Y[0],N[0],V[0],0,Y[1],N[1],V[1],0,Y[2],N[2],V[2],0,-(Y[0]*f+Y[1]*S+Y[2]*j),-(N[0]*f+N[1]*S+N[2]*j),-(V[0]*f+V[1]*S+V[2]*j),1])},E=function(f){return Math.PI*f/180},r=function(f,S,j,C){f=E(f);var x=1/Math.tan(f/2),U=1/(j-C);return new Float32Array([x/S,0,0,0,0,x,0,0,0,0,(C+j)*U,-1,0,0,2*C*j*U,0])},a=`
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
        `,e=`
        precision highp float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
        `,d=n.createShader(n.VERTEX_SHADER);n.shaderSource(d,a),n.compileShader(d);var P=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(P,e),n.compileShader(P);var h=n.createProgram();n.attachShader(h,d),n.attachShader(h,P),n.linkProgram(h),n.useProgram(h),n.program=h;var g=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),D=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),u=g.BYTES_PER_ELEMENT,O=n.createBuffer(),p=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,O),n.bufferData(n.ARRAY_BUFFER,g,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p),n.bufferData(n.ELEMENT_ARRAY_BUFFER,D,n.STATIC_DRAW);var B=n.getAttribLocation(n.program,"a_Position"),i=n.getAttribLocation(n.program,"a_Color"),l=n.getUniformLocation(n.program,"u_ViewMatrix"),m=v(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(l,!1,m);var W=n.getUniformLocation(n.program,"u_ProjMatrix"),c=r(30,R.width/R.height,1,100);n.uniformMatrix4fv(W,!1,c),n.vertexAttribPointer(B,3,n.FLOAT,!1,u*6,0),n.enableVertexAttribArray(B),n.vertexAttribPointer(i,3,n.FLOAT,!1,u*6,u*3),n.enableVertexAttribArray(i),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,D.length,n.UNSIGNED_BYTE,0)}},[]),(0,T.jsx)("canvas",{ref:L,width:"200",height:"200"})};w.default=I},63296:function(G,w,o){o.r(w);var y=o(67294),T=o(85893),I=function(){var L=(0,y.useRef)(null);return(0,y.useEffect)(function(){var R=L.current,n=R==null?void 0:R.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,T.jsx)("canvas",{ref:L,width:"100",height:"100"})};w.default=I},2795:function(G,w,o){o.r(w);var y=o(67294),T=o(85893),I=function(){var L=(0,y.useRef)(null);return(0,y.useEffect)(function(){var R=L.current,n=R==null?void 0:R.getContext("webgl");if(n){var v=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,E=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=n.createShader(n.VERTEX_SHADER),a=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(r,v),n.shaderSource(a,E),n.compileShader(r),n.compileShader(a);var e=n.createProgram();n.attachShader(e,r),n.attachShader(e,a),n.linkProgram(e),n.useProgram(e);var d=new Float32Array([1,1,-1,1,1,-1,-1,-1]),P=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,P),n.bufferData(n.ARRAY_BUFFER,d,n.STATIC_DRAW);var h=n.getAttribLocation(e,"a_Position");n.vertexAttribPointer(h,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(h),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,T.jsx)("canvas",{ref:L,width:"100",height:"100"})};w.default=I},44091:function(G,w,o){o.r(w);var y=o(67294),T=o(99477),I=o(85893),s=function(){var R=(0,y.useRef)(null);return(0,y.useEffect)(function(){var n=R.current,v=10,E=10,r;function a(){v=n.clientWidth,E=n.clientHeight,r=new T.CP7({antialias:!0}),r.setSize(v,E),n.appendChild(r.domElement),r.setClearColor(16777215,1)}var e;function d(){e=new T.cPb(45,v/E,1,1e4),e.position.x=0,e.position.y=2,e.position.z=1,e.up.x=0,e.up.y=0,e.up.z=1,e.lookAt(new T.Pa4(0,0,0))}var P;function h(){P=new T.xsS}var g;function D(){var B=new T.DvJ(1,1,1),i=new T.YBo({color:16777215});g=new T.Kj0(B,i),P.add(g)}function u(){var B=new T.cek(16711680);B.position.set(1,1,-1);var i=new T.cek(65280);i.position.set(1,-1,1),P.add(B),P.add(i)}function O(){g.rotation.x+=.01,g.rotation.y+=.01,r.render(P,e),requestAnimationFrame(O)}function p(){a(),d(),h(),D(),u(),O()}p()},[]),(0,I.jsx)("div",{ref:R,style:{width:150,height:150}})};w.default=s},548:function(G,w,o){o.r(w);var y=o(27424),T=o.n(y),I=o(67294),s=o(53313),L=o(48460),R=o(87269),n=o.n(R),v=o(85893),E=function(){var a=(0,I.useRef)(null),e=(0,I.useState)(!0),d=T()(e,2),P=d[0],h=d[1],g=(0,I.useState)(!1),D=T()(g,2),u=D[0],O=D[1],p=new(window.AudioContext||window.webkitAudioContext),B=(0,I.useRef)(p),i=R.create({context:p,loop:!0}),l=(0,I.useRef)(i),m=p.createAnalyser(),W=(0,I.useRef)(m),c=function(){O(!0),l.current.play(),B.current.resume().then(function(){l.current.play(),l.current.getSource().connect(W.current),W.current.connect(B.current.destination)})},F=function(){if(a.current){var j=a.current,C=j.getContext("webgl"),x=window.AudioContext===void 0&&/iPhone|iPad|iPod/.test(navigator.userAgent);if(L.j_({attribPrefix:"a_"}),C){for(var U=function X(){C&&(L.Lo(j),C.viewport(0,0,C.canvas.width,C.canvas.height),C.clearColor(0,0,0,1),C.clear(C.COLOR_BUFFER_BIT),C.lineWidth(2),C.useProgram(K.program),W.current.getByteFrequencyData(t),L.Ss(C,N.attribs.a_height,t),L.o8(C,K,N),L.y0(C,N,C.LINE_STRIP),requestAnimationFrame(X))},z=`  
          attribute float a_spread;
          attribute float a_height;
      
          varying vec4 v_color;
      
          vec3 hsv2rgb(vec3 c) {
            c = vec3(c.x, clamp(c.yz, 0.0, 1.0));
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }
      
          void main() {
            gl_Position = vec4(a_spread, a_height * 2.0 - 1.0, 0, 1);
            v_color = vec4(hsv2rgb(vec3(a_spread * 0.5 + 0.5, a_height, 1)), 1);
          }
        `,H=`  
          precision mediump float;

          varying vec4 v_color;
          void main() {
            gl_FragColor = v_color;
          }
        `,K=L.EK(C,[z,H]),_=W.current.frequencyBinCount*(x?.25:1)|0,A=new Float32Array(_),t=new Uint8Array(_),V=0;V<_;++V)A[V]=V/_*2-1;var Y={spread:{data:A,numComponents:1},height:{data:t,numComponents:1,drawType:C.DYNAMIC_DRAW}},N=L.qX(C,Y);requestAnimationFrame(U)}}};(0,I.useEffect)(function(){u&&(c(),F())},[u]),(0,I.useEffect)(function(){l.current.on("error",function(S){console.error("audio error:",S)}),l.current.on("newSource",function(){h(!1)}),l.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var f=function(){O(!1),l.current.stop()};return(0,v.jsxs)(v.Fragment,{children:[u&&(0,v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,v.jsx)("canvas",{ref:a,width:800,height:300}),(0,v.jsx)("div",{children:(0,v.jsx)(s.ZP,{type:"primary",onClick:function(){return f()},children:"\u505C\u6B62"})})]}),!P&&!u&&(0,v.jsx)(s.ZP,{type:"primary",onClick:function(){return O(!0)},children:"\u64AD\u653E"})]})};w.default=E},85790:function(G,w,o){o.r(w);var y=o(28670),T=o.n(y),I=o(67294),s=o(48460),L=o(85893),R=function(){var v=(0,I.useRef)(null);return(0,I.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4;if(r){for(var e=function(C,x){return C+Math.random()*(x-C)},d=function j(C){if(r){var x=C;x*=.001,s.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var U=a.perspective(30*Math.PI/180,E.clientWidth/E.clientHeight,.5,100),z=[1,4,-20],H=[0,0,0],K=[0,1,0];a.lookAt(z,H,K,p),a.inverse(p,B),a.multiply(U,B,i),m.forEach(function(_){var A=_.uniforms,t=A.u_world;a.identity(t),a.rotateY(t,x*_.ySpeed,t),a.rotateZ(t,x*_.zSpeed,t),a.translate(t,_.translation,t),a.rotateX(t,x,t),a.transpose(a.inverse(t,A.u_worldInverseTranspose),A.u_worldInverseTranspose),a.multiply(i,A.u_world,A.u_worldViewProjection)}),s.bV(r,W),requestAnimationFrame(j)}},P=`  
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
        `,h=`  
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
        `,g=s.EK(r,[P,h]),D=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createPlaneBufferInfo(r,2,2),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1),s.S6.createCresentBufferInfo(r,1,1,.5,.1,24),s.S6.createCylinderBufferInfo(r,1,2,24,2),s.S6.createDiscBufferInfo(r,1,24),s.S6.createTorusBufferInfo(r,1,.4,24,12)],u=[1,8,-10],O=[1,1,1,1],p=a.identity(),B=a.identity(),i=a.identity(),l=s.cU(r,{min:r.NEAREST,mag:r.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),m=[],W=[],c=100,F=e(0,360),f=0;f<c;++f){var S={u_lightWorldPos:u,u_lightColor:O,u_diffuseMult:y.hsv((F+e(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:l,u_viewInverse:p,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};W.push({programInfo:g,bufferInfo:D[f%D.length],uniforms:S}),m.push({translation:[e(-10,10),e(-10,10),e(-10,10)],ySpeed:e(.1,.3),zSpeed:e(.1,.3),uniforms:S})}requestAnimationFrame(d)}}},[]),(0,L.jsx)("canvas",{ref:v,width:800,height:300})};w.default=R},99038:function(G,w,o){o.r(w);var y=o(28670),T=o.n(y),I=o(67294),s=o(48460),L=o(85893),R=function(){var v=(0,I.useRef)(null);return(0,I.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4;if(r){var e=function(k){c&&(c.fillStyle="#00f",c.strokeStyle="#ff0",c.lineWidth=10,c.fillRect(0,0,c.canvas.width,c.canvas.height),c.beginPath(),c.arc(c.canvas.width/2,c.canvas.height/2,c.canvas.width/2.2*Math.abs(Math.cos(k)),0,Math.PI*2),c.stroke())},d=function ru(k){if(r){var J=k;J*=.001,s.Lo(E),r.viewport(0,0,E.clientWidth,E.clientHeight),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var Q=20,$=J*.1,eu=a.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),au=[Math.cos($)*Q,4,Math.sin($)*Q],tu=[0,0,0],ou=[0,1,0];a.lookAt(au,tu,ou,l),a.inverse(l,m),a.multiply(eu,m,W),e(J),c&&s.Mh(r,K.fromCanvas,c.canvas),t.forEach(function(nu){var q=nu.uniforms,Z=q.u_world;a.identity(Z),a.rotateY(Z,J*nu.ySpeed,Z),a.rotateZ(Z,J*nu.zSpeed,Z),a.translate(Z,nu.translation,Z),a.rotateX(Z,J,Z),a.transpose(a.inverse(Z,q.u_worldInverseTranspose),q.u_worldInverseTranspose),a.multiply(W,q.u_world,q.u_worldViewProjection)}),s.bV(r,V),requestAnimationFrame(ru)}},P=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,h=`  
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
        `,g=`  
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
        `,D=`  
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
        `,u=s.EK(r,[P,h]),O=s.EK(r,[g,D]),p=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createPlaneBufferInfo(r,2,2),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],B=function(k,J){var Q=k,$=J;return $===void 0&&($=Q,Q=0),Q+Math.random()*($-Q)},i=B(360),l=a.identity(),m=a.identity(),W=a.identity(),c=document.createElement("canvas").getContext("2d");c&&(c.canvas.width=64,c.canvas.height=64),e(0);var F=document.createElement("canvas").getContext("2d"),f=40;if(F){F.canvas.width=f*6,F.canvas.height=f,F.fillStyle="#888";for(var S=0;S<6;++S){var j=y.hsv((i+S*10)%360,1-S/6,1);F.fillStyle=j.darken().hex(),F.fillRect(f*S,0,f,f),F.save(),F.translate(f*(S+.5),f*.5),F.beginPath(),F.arc(0,0,f*.3,0,Math.PI*2),F.fillStyle=j.hex(),F.fill(),F.restore()}}for(var C=[],x=0;x<6;++x){var U=document.createElement("canvas");U.width=128,U.height=128;var z=U.getContext("2d"),H=y.hsv((i+x*10)%360,1-x/6,1);z&&(z.fillStyle=H.darken().hex(),z.fillRect(0,0,128,128),z.translate(64,64),z.rotate(Math.PI*.25),z.fillStyle=H.hex(),z.fillRect(-40,-40,80,80)),C.push(U)}for(var K=s.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:c==null?void 0:c.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:F==null?void 0:F.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:C}}),_=[K.checker,K.stripe,K.hftIcon,K.clover,K.fromCanvas],A=[K.yokohama,K.goldengate,K.cubemapFromCanvas,K.cubemapFrom6Canvases,K.cubemapFromArray],t=[],V=[],Y=100,N=0;N<Y;++N){var X=void 0,M=void 0,b=void 0,uu=B(0,2)|0;switch(uu){case 0:b=p[N%p.length],M=u,X={u_diffuseMult:y.hsv((i+B(0,60))%360,.4,.8).gl(),u_diffuse:_[B(0,_.length)|0],u_viewInverse:l,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;case 1:b=B(0,2)<1?p[1]:p[3],M=O,X={u_texture:A[B(0,A.length)|0],u_viewInverse:l,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;default:throw"wAT!"}V.push({programInfo:M,bufferInfo:b,uniforms:X}),t.push({translation:[B(-10,10),B(-10,10),B(-10,10)],ySpeed:B(.1,.3),zSpeed:B(.1,.3),uniforms:X})}requestAnimationFrame(d)}}},[]),(0,L.jsx)("canvas",{ref:v,width:800,height:300})};w.default=R},52246:function(G,w,o){o.r(w);var y=o(67294),T=o(48460),I=o(85893),s=function(){var R=(0,y.useRef)(null);return(0,y.useEffect)(function(){if(R.current){var n=R.current,v=n.getContext("webgl");if(v){var E=function(){if(v){v.viewport(0,0,r,a),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(P.program);var u=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,u);var O=new Uint16Array([0,1,2]);v.bufferData(v.ELEMENT_ARRAY_BUFFER,O,v.STATIC_DRAW),T.o8(v,P,g),v.drawElements(v.TRIANGLES,O.length,v.UNSIGNED_SHORT,0)}},r=v.canvas.width,a=v.canvas.height;T.Lo(n);var e=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,d=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,P=T.EK(v,[e,d]),h=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),g=T.qX(v,{position:h});E()}}},[]),(0,I.jsx)("canvas",{ref:R,width:100,height:100})};w.default=s},11696:function(G,w,o){o.r(w);var y=o(67294),T=o(48460),I=o(85893),s=function(){var R=(0,y.useRef)(null);return(0,y.useEffect)(function(){if(R.current){var n=R.current,v=T.m4,E=n.getContext("webgl");if(E){var r=function u(O){if(E){var p=O;p*=.001,T.Lo(n),E.viewport(0,0,E.canvas.width,E.canvas.height),E.enable(E.DEPTH_TEST),E.enable(E.CULL_FACE),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT);var B=30*Math.PI/180,i=E.canvas.width/E.canvas.height,l=.5,m=10,W=v.perspective(B,i,l,m),c=[1,4,-6],F=[0,0,0],f=[0,1,0],S=v.lookAt(c,F,f),j=v.inverse(S),C=v.multiply(W,j),x=v.rotationY(p);D.u_viewInverse=S,D.u_world=x,D.u_worldInverseTranspose=v.transpose(v.inverse(x)),D.u_worldViewProjection=v.multiply(C,x),E.useProgram(d.program),T.o8(E,d,h),T.N9(d,D),E.drawElements(E.TRIANGLES,h.numElements,E.UNSIGNED_SHORT,0),requestAnimationFrame(u)}},a=`
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
        `,e=`  
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
        `,d=T.EK(E,[a,e]),P={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},h=T.qX(E,P),g=T.cU(E,{min:E.NEAREST,mag:E.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),D={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:g};requestAnimationFrame(r)}}},[]),(0,I.jsx)("canvas",{ref:R,width:100,height:100})};w.default=s},41732:function(G,w,o){o.r(w);var y=o(28670),T=o.n(y),I=o(67294),s=o(48460),L=o(85893),R=function(){var v=(0,I.useRef)(null);return(0,I.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl"),a=s.m4;if(s.j_({attribPrefix:"a_"}),r){for(var e=function(x,U){return x+Math.random()*(U-x)},d=function C(x){if(r){var U=x;U*=.001,s.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),F[0]=Math.sin(U),F[1]=Math.sin(U*.13)*Math.PI*2,F[2]=Math.sin(U*.43)*.5+1,F[3]=Math.cos(U*.17)*.5+.5,f[0]=Math.sin(U*.163)*.5,f[1]=Math.cos(U*.267)*.5,f[2]=Math.sin(U*.367)*.5,f[3]=Math.cos(U*.497)*.5,S[1]=(Math.sin(U*.1)*.5+.5)*3;var z=E.clientWidth/E.clientHeight;a.ortho(-z,z,1,-1,-1,1,j.u_matrix),r.useProgram(g.program),s.o8(r,g,c),s.N9(g,j),s.y0(r,c,r.LINES),requestAnimationFrame(C)}},P=`  
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
        `,h=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,g=s.EK(r,[P,h]),D=100,u={position:s.S6.createAugmentedTypedArray(2,D*2),color:s.S6.createAugmentedTypedArray(3,D*2,Uint8Array)},O=e(0,360),p=0;p<D;++p){var B=p/D,i=(360+O+Math.abs(B-.5)*100)%360,l=Math.sin(B*Math.PI*2)*.25+.75,m=1,W=y.hsv(i,l,m);u.position.push(B,1),u.color.push(W.rgb()),u.position.push(B,0),u.color.push(W.brighten().desaturate().rgb())}var c=s.qX(r,u),F=[0,0,0,1],f=[0,0,0,0],S=[1,2,0,0],j={u_matrix:a.identity(),u_offsets:F,u_centers:f,u_mult:S};requestAnimationFrame(d)}}},[]),(0,L.jsx)("canvas",{ref:v,width:800,height:300})};w.default=R}}]);
