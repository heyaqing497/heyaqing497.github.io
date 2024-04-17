(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{43569:function(Y,C,e){"use strict";e.d(C,{p:function(){return T}});var P=e(27424),A=e.n(P),m=e(19474),a=e(67294),M=function(){};function T(n,f){var c=(0,a.useRef)(),h=(0,m.Z)(n),o=A()(h,1),u=o[0],t=(0,a.useCallback)(function(){var E=f();return E||M},[]);return(0,a.useEffect)(function(){!u&&c.current?cancelAnimationFrame(c.current):u&&(c.current=requestAnimationFrame(t))},[u]),c}},25431:function(Y,C,e){"use strict";e.r(C);var P=e(81354),A=e.n(P),m=e(67294),a=e(85893),M=function(){var n="Hello World!",f="mySecretKey",c=A().AES.encrypt(n,f).toString(),h=A().AES.decrypt(c,f).toString(A().enc.Utf8);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:["\u6587\u6848\uFF1A",n]})," ",(0,a.jsxs)("span",{children:["\u5BC6\u94A5\uFF1A",f]})]}),(0,a.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",c]}),(0,a.jsxs)("div",{children:["\u89E3\u5BC6\u5F8C\uFF1A",h]})]})};C.default=M},59885:function(Y,C,e){"use strict";e.r(C);var P=e(96074),A=e(67294),m=e(85893),a=function(){var T="Hello World!",n=btoa(T),f=atob(n),c="\u4F60\u597D\u4E16\u754C\uFF01",h=btoa(encodeURIComponent(c)),o=decodeURIComponent(atob(h));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{children:["\u6587\u6848\uFF1A",T]}),(0,m.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",n]}),(0,m.jsxs)("div",{children:["\u89E3\u5BC6\u540E\uFF1A",f]}),(0,m.jsx)(P.Z,{}),(0,m.jsxs)("div",{children:["\u4E2D\u6587\u6587\u6848\uFF1A",c]}),(0,m.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",h]}),(0,m.jsxs)("div",{children:["\u89E3\u5BC6\u540E\uFF1A",o]})]})};C.default=a},15100:function(Y,C,e){"use strict";e.r(C);var P=e(81354),A=e.n(P),m=e(67294),a=e(85893),M=function(){var n="Hello World!",f=A().MD5(n).toString(),c="Hello World2!",h=A().MD5(n).toString()===f,o=A().MD5(c).toString()===f;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:["\u6587\u6848\uFF1A",n]}),(0,a.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",f]}),(0,a.jsxs)("div",{children:["\u9A57\u8B49",n,"\uFF1A",h.toString()]}),(0,a.jsxs)("div",{children:["\u9A57\u8B49",c,"\uFF1A",o.toString()]})]})};C.default=M},37098:function(Y,C,e){"use strict";e.r(C);var P=e(27424),A=e.n(P),m=e(81354),a=e.n(m),M=e(67294),T=e(85893),n=function(){var c=function(){var r=a().enc.Hex.parse("0123456789ABCDEF"),B=a().enc.Hex.parse("FEDCBA9876543210"),S="Hello World!",x=a().DES.encrypt(S,r,{iv:B}),v=a().DES.decrypt(x,r,{iv:B});return{plaintext:S,key:r.toString(),iv:B.toString(),encrypted:x.toString(),decrypted:v.toString(a().enc.Utf8),title:"DES (Data Encryption Standard)"}},h=function(){var r="Hello World!",B=a().SHA1(r);return{plaintext:r,encrypted:B.toString(),title:"\u54C8\u5E0C\u51FD\u6570 SHA-1"}},o=function(){var r="Hello World!",B=a().SHA256(r);return{plaintext:r,encrypted:B.toString(),title:"\u54C8\u5E0C\u51FD\u6570 SHA-256"}},u=function(){var r="Hello World!",B=a().SHA512(r);return{plaintext:r,encrypted:B.toString(),title:"\u54C8\u5E0C\u51FD\u6570 SHA-512"}},t=function(){var r="Hello World!",B="my-secret-key",S=a().HmacSHA256(a().SHA256,r,B);return{plaintext:r,key:B,encrypted:S.toString(),title:"\u6D88\u606F\u8BA4\u8BC1\u7801 (MAC)  HMAC"}},E=function(){var r=a().lib.WordArray.random(16);return{encrypted:r.toString(),title:"\u5176\u4ED6\u529F\u80FD \u968F\u673A\u6570\u751F\u6210"}},l={DES:c(),SHA1:h(),SHA256:o(),SHA512:u(),HMAC:t(),random:E()},O={plaintext:"\u660E\u6587",key:"\u5BC6\u94A5",iv:"\u521D\u59CB\u5411\u91CF",encrypted:"\u5BC6\u6587",decrypted:"\u89E3\u5BC6"};return(0,T.jsx)(T.Fragment,{children:Object.values(l).map(function(R){return(0,T.jsxs)("div",{children:[(0,T.jsx)("h2",{children:R.title}),Object.entries(O).map(function(r){var B=A()(r,2),S=B[0],x=B[1];return(0,T.jsx)("div",{children:(R==null?void 0:R[S])&&(0,T.jsxs)("p",{children:[x,": ",R[S]]})},S)})]},R.title)})})};C.default=n},16894:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(85893),m=function(){var M=(0,P.useRef)(null);return(0,P.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("experimental-webgl");if(n){var f=function v(){rotateX(x),rotateY(x),rotateZ(x),n.uniformMatrix4fv(R,!1,new Float32Array(r)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,l.length/3),requestAnimationFrame(v)},c=`precision highp float;
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
      `,o=n.createShader(n.VERTEX_SHADER),u=n.createShader(n.FRAGMENT_SHADER),t=n.createProgram();n.shaderSource(o,c),n.shaderSource(u,h),n.compileShader(o),n.compileShader(u),n.attachShader(t,o),n.attachShader(t,u),n.linkProgram(t),n.useProgram(t);var E=function(D,d,p,w,W){var s=new Array,z=-w;function y(b,j,X){for(var G=0,U=360/b,K=new Array,J=0;J<b;J++)K.push(Math.sin(Math.PI/180*G)*X,Math.cos(Math.PI/180*G)*X,j),G+=U;return K}for(var I=360/W,g=0,z=w,N=0,H=I,L=0;L<W/2;L++){if(L>=W/4)var V=Math.sin(Math.PI/180*g)*-w;else var V=Math.sin(Math.PI/180*g)*-w;g+=I;var _=y(W,V,z);L>=W/4?V=Math.sin(Math.PI/180*g)*-w:V=-Math.sin(Math.PI/180*g)*-w,z=Math.sqrt(w*w-w*Math.sin(Math.PI/180*g)*w*Math.sin(Math.PI/180*g));for(var F=y(W,V,z),i=0;i<_.length;i+=3)i==0?(s.push(_[i],_[i+1],_[i+2]),s.push(F[i],F[i+1],F[i+2]),s.push(_[_.length-3],_[_.length-2],_[_.length-1]),s.push(_[i],_[i+1],_[i+2]),s.push(F[i],F[i+1],F[i+2]),s.push(F[i+3],F[i+4],F[i+5])):i==_.length-3?(s.push(_[i],_[i+1],_[i+2]),s.push(F[i],F[i+1],F[i+2]),s.push(_[i-3],_[i-2],_[i-1]),s.push(_[i],_[i+1],_[i+2]),s.push(F[i],F[i+1],F[i+2]),s.push(F[0],F[1],F[2])):(s.push(_[i],_[i+1],_[i+2]),s.push(F[i],F[i+1],F[i+2]),s.push(_[i-3],_[i-2],_[i-1]),s.push(_[i],_[i+1],_[i+2]),s.push(F[i],F[i+1],F[i+2]),s.push(F[i+3],F[i+4],F[i+5]))}return s},l=E(0,0,0,.5,180),O=n.getAttribLocation(t,"position"),R=n.getUniformLocation(t,"mat"),r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];e.g.rotateX=function(v){var D=Math.cos(Math.PI/180*v),d=Math.sin(Math.PI/180*v),p=r[1],w=r[5],W=r[9];r[1]=D*r[1]-d*r[2],r[5]=D*r[5]-d*r[6],r[9]=D*r[9]-d*r[10],r[2]=d*p+D*r[2],r[6]=d*w+D*r[6],r[10]=d*W+D*r[10]},e.g.rotateY=function(v){var D=Math.cos(Math.PI/180*v),d=Math.sin(Math.PI/180*v),p=r[0],w=r[8],W=r[4];r[0]=D*r[0]+d*r[2],r[4]=D*r[4]+d*r[6],r[8]=D*r[8]+d*r[10],r[2]=D*r[2]-d*p,r[6]=D*r[6]-d*W,r[10]=D*r[10]-d*w},e.g.rotateZ=function(v){var D=Math.cos(Math.PI/180*v),d=Math.sin(Math.PI/180*v),p=r[0],w=r[4],W=r[8];r[0]=D*r[0]-d*r[1],r[4]=D*r[4]-d*r[5],r[8]=D*r[8]-d*r[9],r[1]=d*p+D*r[1],r[5]=d*w+D*r[5],r[9]=d*W+D*r[9]},e.g.moveX=function(v){r[0]=r[0]+v*r[3],r[4]=r[4]+v*r[7],r[8]=r[8]+v*r[11],r[12]=r[12]+v*r[15]},e.g.moveY=function(v){r[1]=v*r[3]+r[1],r[5]=v*r[7]+r[5],r[9]=v*r[11]+r[9],r[13]=v*r[15]+r[13]},e.g.moveZ=function(v){r[2]=v*r[3]+r[2],r[6]=v*r[7]+r[6],r[10]=v*r[11]+r[10],r[14]=v*r[15]+r[14]},e.g.scaleFun=function(v){r[0]=v*r[0],r[4]=v*r[4],r[8]=v*r[8],r[12]=v*r[12],r[1]=v*r[1],r[5]=v*r[5],r[9]=v*r[9],r[13]=v*r[13],r[2]=v*r[2],r[6]=v*r[6],r[10]=v*r[10],r[14]=v*r[14]};var B=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,B),n.bufferData(n.ARRAY_BUFFER,new Float32Array(l),n.STATIC_DRAW),n.vertexAttribPointer(O,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(O);var S=.05,x=.5;f()}},[]),(0,A.jsx)("canvas",{ref:M,width:"200",height:"200"})};C.default=m},27246:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(85893),m=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,a=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,M=function(){var n=(0,P.useRef)(null);function f(o,u,t,E,l){var O,R,r,B;return O=o*Math.pow(1-l,3),R=3*u*l*Math.pow(1-l,2),r=3*t*Math.pow(l,2)*(1-l),B=E*Math.pow(l,3),O+R+r+B}function c(o,u,t,E,l,O){return{x:f(o.x,u.x,t.x,E.x,l*O),y:f(o.y,u.y,t.y,E.y,l*O),z:f(o.z,u.z,t.z,E.z,l*O)}}function h(o,u,t,E,l,O){for(var R=l||100,r=O||1,B=r/(R-1),S=[],x=0;x<R;x++){var v=c(o,u,t,E,x,B);S.push(v.x),S.push(v.y),S.push(v.z)}return S}return(0,P.useEffect)(function(){var o=n.current,u=o==null?void 0:o.getContext("webgl");if(u){var t=u.createShader(u.VERTEX_SHADER),E=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(t,m),u.shaderSource(E,a),u.compileShader(t);var l=u.getShaderParameter(t,u.COMPILE_STATUS);if(!l)throw new Error("compile Shader is failed");u.compileShader(E);var O=u.getShaderParameter(E,u.COMPILE_STATUS);if(!O)throw new Error("compile Shader is failed");var R=u.createProgram();u.attachShader(R,t),u.attachShader(R,E),u.linkProgram(R);var r=u.getProgramParameter(R,u.LINK_STATUS);if(!r)throw new Error("link Shader is failed");u.useProgram(R);var B=u.getAttribLocation(R,"a_Position"),S=u.getUniformLocation(R,"u_FragColor");u.uniform4fv(S,[0,1,1,1]);var x=h({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),v=new Float32Array(x),D=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,D),u.bufferData(u.ARRAY_BUFFER,v,u.STATIC_DRAW),u.vertexAttribPointer(B,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(B),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,x.length/3)}},[]),(0,A.jsx)("canvas",{ref:n,width:"300",height:"200"})};C.default=M},38952:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(85893),m=function(){var M=(0,P.useRef)(null);return(0,P.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("webgl");if(n){var f=function(s,y,I,g,z,N,H,L,V){var _=function(U){var K=Math.sqrt(U[0]*U[0]+U[1]*U[1]+U[2]*U[2]);return[U[0]/K,U[1]/K,U[2]/K]},F=function(U,K){return[U[0]-K[0],U[1]-K[1],U[2]-K[2]]},i=function(U,K){return[U[1]*K[2]-U[2]*K[1],U[2]*K[0]-U[0]*K[2],U[0]*K[1]-U[1]*K[0]]},b=_(F([s,y,I],[g,z,N])),j=_(i([H,L,V],b)),X=_(i(b,j));return new Float32Array([j[0],X[0],b[0],0,j[1],X[1],b[1],0,j[2],X[2],b[2],0,-(j[0]*s+j[1]*y+j[2]*I),-(X[0]*s+X[1]*y+X[2]*I),-(b[0]*s+b[1]*y+b[2]*I),1])},c=function(s){return Math.PI*s/180},h=function(s,y,I,g){s=c(s);var z=1/Math.tan(s/2),N=1/(I-g);return new Float32Array([z/y,0,0,0,0,z,0,0,0,0,(g+I)*N,-1,0,0,2*g*I*N,0])},o=`
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
        `,t=n.createShader(n.VERTEX_SHADER);n.shaderSource(t,o),n.compileShader(t);var E=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(E,u),n.compileShader(E);var l=n.createProgram();n.attachShader(l,t),n.attachShader(l,E),n.linkProgram(l),n.useProgram(l),n.program=l;var O=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),R=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),r=O.BYTES_PER_ELEMENT,B=n.createBuffer(),S=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,B),n.bufferData(n.ARRAY_BUFFER,O,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,S),n.bufferData(n.ELEMENT_ARRAY_BUFFER,R,n.STATIC_DRAW);var x=n.getAttribLocation(n.program,"a_Position"),v=n.getAttribLocation(n.program,"a_Color"),D=n.getUniformLocation(n.program,"u_ViewMatrix"),d=f(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(D,!1,d);var p=n.getUniformLocation(n.program,"u_ProjMatrix"),w=h(30,T.width/T.height,1,100);n.uniformMatrix4fv(p,!1,w),n.vertexAttribPointer(x,3,n.FLOAT,!1,r*6,0),n.enableVertexAttribArray(x),n.vertexAttribPointer(v,3,n.FLOAT,!1,r*6,r*3),n.enableVertexAttribArray(v),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,R.length,n.UNSIGNED_BYTE,0)}},[]),(0,A.jsx)("canvas",{ref:M,width:"200",height:"200"})};C.default=m},63296:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(85893),m=function(){var M=(0,P.useRef)(null);return(0,P.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,A.jsx)("canvas",{ref:M,width:"100",height:"100"})};C.default=m},2795:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(85893),m=function(){var M=(0,P.useRef)(null);return(0,P.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("webgl");if(n){var f=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,c=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,h=n.createShader(n.VERTEX_SHADER),o=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(h,f),n.shaderSource(o,c),n.compileShader(h),n.compileShader(o);var u=n.createProgram();n.attachShader(u,h),n.attachShader(u,o),n.linkProgram(u),n.useProgram(u);var t=new Float32Array([1,1,-1,1,1,-1,-1,-1]),E=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,E),n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW);var l=n.getAttribLocation(u,"a_Position");n.vertexAttribPointer(l,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(l),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,A.jsx)("canvas",{ref:M,width:"100",height:"100"})};C.default=m},44091:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(99477),m=e(85893),a=function(){var T=(0,P.useRef)(null);return(0,P.useEffect)(function(){var n=T.current,f=10,c=10,h;function o(){f=n.clientWidth,c=n.clientHeight,h=new A.CP7({antialias:!0}),h.setSize(f,c),n.appendChild(h.domElement),h.setClearColor(16777215,1)}var u;function t(){u=new A.cPb(45,f/c,1,1e4),u.position.x=0,u.position.y=2,u.position.z=1,u.up.x=0,u.up.y=0,u.up.z=1,u.lookAt(new A.Pa4(0,0,0))}var E;function l(){E=new A.xsS}var O;function R(){var x=new A.DvJ(1,1,1),v=new A.YBo({color:16777215});O=new A.Kj0(x,v),E.add(O)}function r(){var x=new A.cek(16711680);x.position.set(1,1,-1);var v=new A.cek(65280);v.position.set(1,-1,1),E.add(x),E.add(v)}function B(){O.rotation.x+=.01,O.rotation.y+=.01,h.render(E,u),requestAnimationFrame(B)}function S(){o(),t(),l(),R(),r(),B()}S()},[]),(0,m.jsx)("div",{ref:T,style:{width:150,height:150}})};C.default=a},548:function(Y,C,e){"use strict";e.r(C);var P=e(27424),A=e.n(P),m=e(69234),a=e(59415),M=e(87269),T=e.n(M),n=e(67294),f=e(48460),c=e(85893),h=function(){var u=(0,n.useRef)(null),t=(0,n.useState)(!0),E=A()(t,2),l=E[0],O=E[1],R=(0,n.useState)(!1),r=A()(R,2),B=r[0],S=r[1],x=(0,n.useState)(0),v=A()(x,2),D=v[0],d=v[1];(0,m.Z)(function(){d(D+1)},1e3);var p=(0,n.useRef)(),w=new(window.AudioContext||window.webkitAudioContext),W=(0,n.useRef)(w),s=M.create({context:w,loop:!0}),y=(0,n.useRef)(s),I=w.createAnalyser(),g=(0,n.useRef)(I),z=function(){S(!0),y.current.play(),W.current.resume().then(function(){y.current.play(),y.current.getSource().connect(g.current),g.current.connect(W.current.destination)})},N=function(){if(u.current){var V=u.current,_=V.getContext("webgl"),F=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(f.j_({attribPrefix:"a_"}),_){for(var i=function nu(){_&&(f.Lo(V),_.viewport(0,0,_.canvas.width,_.canvas.height),_.clearColor(0,0,0,1),_.clear(_.COLOR_BUFFER_BIT),_.lineWidth(2),_.useProgram(X.program),g.current.getByteFrequencyData(K),f.Ss(_,eu.attribs.a_height,K),f.o8(_,X,eu),f.y0(_,eu,_.LINE_STRIP),p.current=requestAnimationFrame(nu))},b=`  
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
        `,j=`  
          precision mediump float; // \u5B9A\u4E49\u7247\u6BB5\u7740\u8272\u5668\u4F7F\u7528\u7684\u7CBE\u5EA6

          // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u6765\u7684\u989C\u8272\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272

          // \u7247\u6BB5\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_FragColor = v_color; // \u8BBE\u7F6E\u7247\u6BB5\u7684\u989C\u8272\u4E3A\u63A5\u6536\u5230\u7684\u989C\u8272
          }
        `,X=f.EK(_,[b,j]),G=g.current.frequencyBinCount*(F?.25:1)|0,U=new Float32Array(G),K=new Uint8Array(G),J=0;J<G;++J)U[J]=J/G*2-1;var tu={spread:{data:U,numComponents:1},height:{data:K,numComponents:1,drawType:_.DYNAMIC_DRAW}},eu=f.qX(_,tu);p.current=requestAnimationFrame(i)}}};(0,n.useEffect)(function(){B&&(z(),N())},[B]),(0,n.useEffect)(function(){y.current.on("error",function(L){console.error("audio error:",L)}),y.current.on("newSource",function(){O(!1)}),y.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var H=function(){S(!1),y.current.stop(),p.current&&cancelAnimationFrame(p.current)};return(0,c.jsxs)(c.Fragment,{children:[B&&(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,c.jsx)("canvas",{ref:u,style:{width:"100%",height:"300px"}}),(0,c.jsx)("div",{children:(0,c.jsx)(a.ZP,{type:"primary",onClick:function(){return H()},children:"\u505C\u6B62"})})]}),!l&&!B&&(0,c.jsx)(a.ZP,{type:"primary",onClick:function(){return S(!0)},children:"\u64AD\u653E"}),l&&(0,c.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",D,"\u79D2\uFF09..."]})]})};C.default=h},85790:function(Y,C,e){"use strict";e.r(C);var P=e(28670),A=e.n(P),m=e(67294),a=e(48460),M=e(43569),T=e(85893),n=function(){var c=(0,m.useRef)(null),h=(0,M.p)(c,function(){if(c.current){var o=c.current,u=o.getContext("webgl");a.j_({attribPrefix:"a_"});var t=a.m4;if(u){for(var E=function(N,H){return N+Math.random()*(H-N)},l=function z(N){if(u){var H=N;H*=.001,a.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var L=t.perspective(30*Math.PI/180,o.clientWidth/o.clientHeight,.5,100),V=[1,4,-20],_=[0,0,0],F=[0,1,0];t.lookAt(V,_,F,v),t.inverse(v,D),t.multiply(L,D,d),w.forEach(function(i){var b=i.uniforms,j=b.u_world;t.identity(j),t.rotateY(j,H*i.ySpeed,j),t.rotateZ(j,H*i.zSpeed,j),t.translate(j,i.translation,j),t.rotateX(j,H,j),t.transpose(t.inverse(j,b.u_worldInverseTranspose),b.u_worldInverseTranspose),t.multiply(d,b.u_world,b.u_worldViewProjection)}),a.bV(u,W),h.current=requestAnimationFrame(z)}},O=`  
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
        `,R=`  
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
        `,r=a.EK(u,[O,R]),B=[a.S6.createCubeBufferInfo(u,2),a.S6.createSphereBufferInfo(u,1,24,12),a.S6.createPlaneBufferInfo(u,2,2),a.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1),a.S6.createCresentBufferInfo(u,1,1,.5,.1,24),a.S6.createCylinderBufferInfo(u,1,2,24,2),a.S6.createDiscBufferInfo(u,1,24),a.S6.createTorusBufferInfo(u,1,.4,24,12)],S=[1,8,-10],x=[1,1,1,1],v=t.identity(),D=t.identity(),d=t.identity(),p=a.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),w=[],W=[],s=100,y=E(0,360),I=0;I<s;++I){var g={u_lightWorldPos:S,u_lightColor:x,u_diffuseMult:P.hsv((y+E(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:p,u_viewInverse:v,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};W.push({programInfo:r,bufferInfo:B[I%B.length],uniforms:g}),w.push({translation:[E(-10,10),E(-10,10),E(-10,10)],ySpeed:E(.1,.3),zSpeed:E(.1,.3),uniforms:g})}return h.current=requestAnimationFrame(l),l}}});return(0,T.jsx)("canvas",{ref:c,style:{width:"100%",height:"300px"}})};C.default=n},14929:function(Y,C,e){"use strict";e.r(C);var P=e(28670),A=e.n(P),m=e(67294),a=e(48460),M=e(43569),T=e(85893),n=function(){var c=(0,m.useRef)(null),h=(0,M.p)(c,function(){if(c.current){var o=c.current,u=a.m4,t=o.getContext("webgl");if(t){var E=function(F,i){return F+Math.random()*(i-F)},l=function(F){if(p){p.font="20px monospace";var i=p.measureText(F);return p.canvas.width=Math.ceil(i.width)+2,p.canvas.height=24,p.font="20px monospace",p.fillStyle="white",p.textAlign="center",p.textBaseAlign="middle",p.fillText(F,p.canvas.width/2|0,p.canvas.height/2|0),p.canvas}},O=function _(F){if(t){var i=F;i*=.001,a.Lo(o),t.viewport(0,0,t.canvas.width,t.canvas.height),t.enable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.clearColor(V[0],V[1],V[2],V[3]),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);var b=u.perspective(30*Math.PI/180,o.clientWidth/o.clientHeight,.5,100),j=[1,4,-20],X=[0,0,0],G=[0,1,0];u.lookAt(j,X,G,x),u.inverse(x,v),u.multiply(b,v,D),s.forEach(function(U){var K=U.uniforms,J=U.texInfo;u.identity(d),u.rotateY(d,i*U.ySpeed,d),u.rotateZ(d,i*U.zSpeed,d),u.translate(d,U.translation,d),u.rotateX(d,i,d),u.scale(d,J.scale,d),u.multiply(v,d,d),u.multiply(b,d,K.u_worldViewProjection)}),a.bV(t,y),h.current=requestAnimationFrame(_)}},R=`
          uniform mat4 u_worldViewProjection; // \u7528\u4E8E\u53D8\u6362\u9876\u70B9\u4F4D\u7F6E\u7684\u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec2 v_texcoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u7EB9\u7406\u5750\u6807\u53D8\u91CF
          
          void main() {
            v_texcoord = a_texcoord; // \u5C06\u9876\u70B9\u7684\u7EB9\u7406\u5750\u6807\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u9876\u70B9\u5728\u5C4F\u5E55\u4E0A\u7684\u4F4D\u7F6E
          }
        `,r=`  
          precision mediump float; // \u786E\u5B9A\u6D6E\u70B9\u7CBE\u5EA6

          varying vec2 v_texcoord; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u7EB9\u7406\u5750\u6807
          uniform sampler2D u_texture; // \u7EB9\u7406\u91C7\u6837\u5668
          uniform vec4 u_color; // \u7EDF\u4E00\u989C\u8272\u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u6574\u4F53\u7740\u8272\u8C03\u6574
          
          void main() {
            vec4 color = texture2D(u_texture, v_texcoord) * u_color; // \u6839\u636E\u7EB9\u7406\u5750\u6807\u91C7\u6837\u5E76\u4E58\u4EE5\u7EDF\u4E00\u989C\u8272
            if (color.a < 0.1) { // \u5982\u679C\u989C\u8272\u7684\u900F\u660E\u5EA6\u4F4E\u4E8E\u9608\u503C\uFF0C\u5219\u4E22\u5F03\u8BE5\u50CF\u7D20
              discard;
            }
            gl_FragColor = color; // \u8BBE\u7F6E\u6700\u7EC8\u7684\u50CF\u7D20\u989C\u8272
          }
        `,B=a.EK(t,[R,r]),S=a.S6.createPlaneBufferInfo(t,1,1,1,1,u.rotationX(Math.PI*.5)),x=u.identity(),v=u.identity(),D=u.identity(),d=u.identity(),p=document.createElement("canvas").getContext("2d"),w=["al","joe","jill","brian","thomas","chrissy","jennifer","alexander"];t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);for(var W=w.map(function(_){var F=l(_),i=.01;return{tex:a.cU(t,{src:F}),scale:[F.width*i,F.height*i,1]}}),s=[],y=[],I=500,g=E(0,360),z=0;z<I;++z){var N=E(0,W.length)|0,H=W[N],L={u_texture:H.tex,u_worldViewProjection:u.identity(),u_color:P.hsv((g+E(0,60))%360,1,1).gl()};y.push({programInfo:B,bufferInfo:S,uniforms:L}),s.push({translation:[E(-10,10),E(-10,10),E(-10,10)],ySpeed:E(.1,.3),zSpeed:E(.1,.3),uniforms:L,texInfo:H})}var V=P.hsv((g+30)%360,.5,.5).gl();return h.current=requestAnimationFrame(O),O}}});return(0,T.jsx)("canvas",{ref:c,style:{width:"100%",height:"500px"}})};C.default=n},99038:function(Y,C,e){"use strict";e.r(C);var P=e(28670),A=e.n(P),m=e(67294),a=e(48460),M=e(43569),T=e(85893),n=function(){var c=(0,m.useRef)(null),h=(0,M.p)(c,function(){if(c.current){var o=c.current,u=o.getContext("webgl");a.j_({attribPrefix:"a_"});var t=a.m4;if(u){var E=function(Z){s&&(s.fillStyle="#00f",s.strokeStyle="#ff0",s.lineWidth=10,s.fillRect(0,0,s.canvas.width,s.canvas.height),s.beginPath(),s.arc(s.canvas.width/2,s.canvas.height/2,s.canvas.width/2.2*Math.abs(Math.cos(Z)),0,Math.PI*2),s.stroke())},l=function nu(Z){if(u){var k=Z;k*=.001,a.Lo(o),u.viewport(0,0,o.clientWidth,o.clientHeight),u.enable(u.DEPTH_TEST),u.enable(u.BLEND),u.blendFunc(u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var q=20,$=k*.1,ou=t.perspective(30*Math.PI/180,u.canvas.width/u.canvas.height,.5,100),iu=[Math.cos($)*q,4,Math.sin($)*q],vu=[0,0,0],Eu=[0,1,0];t.lookAt(iu,vu,Eu,p),t.inverse(p,w),t.multiply(ou,w,W),E(k),s&&a.Mh(u,F.fromCanvas,s.canvas),j.forEach(function(au){var uu=au.uniforms,Q=uu.u_world;t.identity(Q),t.rotateY(Q,k*au.ySpeed,Q),t.rotateZ(Q,k*au.zSpeed,Q),t.translate(Q,au.translation,Q),t.rotateX(Q,k,Q),t.transpose(t.inverse(Q,uu.u_worldInverseTranspose),uu.u_worldInverseTranspose),t.multiply(W,uu.u_world,uu.u_worldViewProjection)}),a.bV(u,X),h.current=requestAnimationFrame(nu)}},O=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,R=`  
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
        `,B=`  
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
        `,S=a.EK(u,[O,R]),x=a.EK(u,[r,B]),v=[a.S6.createCubeBufferInfo(u,2),a.S6.createSphereBufferInfo(u,1,24,12),a.S6.createPlaneBufferInfo(u,2,2),a.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],D=function(Z,k){var q=Z,$=k;return $===void 0&&($=q,q=0),q+Math.random()*($-q)},d=D(360),p=t.identity(),w=t.identity(),W=t.identity(),s=document.createElement("canvas").getContext("2d");s&&(s.canvas.width=64,s.canvas.height=64),E(0);var y=document.createElement("canvas").getContext("2d"),I=40;if(y){y.canvas.width=I*6,y.canvas.height=I,y.fillStyle="#888";for(var g=0;g<6;++g){var z=P.hsv((d+g*10)%360,1-g/6,1);y.fillStyle=z.darken().hex(),y.fillRect(I*g,0,I,I),y.save(),y.translate(I*(g+.5),I*.5),y.beginPath(),y.arc(0,0,I*.3,0,Math.PI*2),y.fillStyle=z.hex(),y.fill(),y.restore()}}for(var N=[],H=0;H<6;++H){var L=document.createElement("canvas");L.width=128,L.height=128;var V=L.getContext("2d"),_=P.hsv((d+H*10)%360,1-H/6,1);V&&(V.fillStyle=_.darken().hex(),V.fillRect(0,0,128,128),V.translate(64,64),V.rotate(Math.PI*.25),V.fillStyle=_.hex(),V.fillRect(-40,-40,80,80)),N.push(L)}for(var F=a.cE(u,{hftIcon:{src:"images/hft-icon-16.png",mag:u.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:s==null?void 0:s.canvas},yokohama:{target:u.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:u.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:u.NEAREST,min:u.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:u.NEAREST,min:u.LINEAR,format:u.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:u.TEXTURE_CUBE_MAP,format:u.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:u.TEXTURE_CUBE_MAP,src:y==null?void 0:y.canvas},cubemapFrom6Canvases:{target:u.TEXTURE_CUBE_MAP,src:N}}),i=[F.checker,F.stripe,F.hftIcon,F.clover,F.fromCanvas],b=[F.yokohama,F.goldengate,F.cubemapFromCanvas,F.cubemapFrom6Canvases,F.cubemapFromArray],j=[],X=[],G=100,U=0;U<G;++U){var K=void 0,J=void 0,tu=void 0,eu=D(0,2)|0;switch(eu){case 0:tu=v[U%v.length],J=S,K={u_diffuseMult:P.hsv((d+D(0,60))%360,.4,.8).gl(),u_diffuse:i[D(0,i.length)|0],u_viewInverse:p,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};break;case 1:tu=D(0,2)<1?v[1]:v[3],J=x,K={u_texture:b[D(0,b.length)|0],u_viewInverse:p,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};break;default:throw"wAT!"}X.push({programInfo:J,bufferInfo:tu,uniforms:K}),j.push({translation:[D(-10,10),D(-10,10),D(-10,10)],ySpeed:D(.1,.3),zSpeed:D(.1,.3),uniforms:K})}return h.current=requestAnimationFrame(l),l}}});return(0,T.jsx)("canvas",{ref:c,style:{width:"100%",height:"300px"}})};C.default=n},52246:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(48460),m=e(85893),a=function(){var T=(0,P.useRef)(null);return(0,P.useEffect)(function(){if(T.current){var n=T.current,f=n.getContext("webgl");if(f){var c=function(){f&&(A.Lo(n),f.viewport(0,0,h,o),f.clear(f.COLOR_BUFFER_BIT),f.useProgram(E.program),A.o8(f,E,l),f.drawElements(f.TRIANGLES,l.numElements,f.UNSIGNED_SHORT,0))},h=f.canvas.width,o=f.canvas.height,u=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,t=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,E=A.EK(f,[u,t]),l=A.qX(f,{position:[-1,-1,0,.5,1,0,1,0,0],indices:[0,1,2]});c()}}},[]),(0,m.jsx)("canvas",{ref:T,width:100,height:100})};C.default=a},11696:function(Y,C,e){"use strict";e.r(C);var P=e(67294),A=e(48460),m=e(43569),a=e(85893),M=function(){var n=(0,P.useRef)(null),f=(0,m.p)(n,function(){if(n.current){var c=n.current,h=A.m4,o=c.getContext("webgl");if(o){var u=function S(x){if(o){var v=x;v*=.001,A.Lo(c),o.viewport(0,0,o.canvas.width,o.canvas.height),o.enable(o.DEPTH_TEST),o.enable(o.CULL_FACE),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var D=30*Math.PI/180,d=o.canvas.width/o.canvas.height,p=.5,w=10,W=h.perspective(D,d,p,w),s=[1,4,-6],y=[0,0,0],I=[0,1,0],g=h.lookAt(s,y,I),z=h.inverse(g),N=h.multiply(W,z),H=h.rotationY(v);B.u_viewInverse=g,B.u_world=H,B.u_worldInverseTranspose=h.transpose(h.inverse(H)),B.u_worldViewProjection=h.multiply(N,H),o.useProgram(l.program),A.o8(o,l,R),A.N9(l,B),o.drawElements(o.TRIANGLES,R.numElements,o.UNSIGNED_SHORT,0),f.current=requestAnimationFrame(S)}},t=`
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
        `,E=`  
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
        `,l=A.EK(o,[t,E]),O={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},R=A.qX(o,O),r=A.cU(o,{min:o.NEAREST,mag:o.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),B={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:r};return f.current=requestAnimationFrame(u),u}}});return(0,a.jsx)("canvas",{ref:n,width:100,height:100})};C.default=M},41732:function(Y,C,e){"use strict";e.r(C);var P=e(28670),A=e.n(P),m=e(67294),a=e(48460),M=e(43569),T=e(85893),n=function(){var c=(0,m.useRef)(null),h=(0,M.p)(c,function(){if(c.current){var o=c.current,u=o.getContext("webgl"),t=a.m4;if(a.j_({attribPrefix:"a_"}),u){for(var E=function(H,L){return H+Math.random()*(L-H)},l=function N(H){if(u){var L=H;L*=.001,a.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),y[0]=Math.sin(L),y[1]=Math.sin(L*.13)*Math.PI*2,y[2]=Math.sin(L*.43)*.5+1,y[3]=Math.cos(L*.17)*.5+.5,I[0]=Math.sin(L*.163)*.5,I[1]=Math.cos(L*.267)*.5,I[2]=Math.sin(L*.367)*.5,I[3]=Math.cos(L*.497)*.5,g[1]=(Math.sin(L*.1)*.5+.5)*3;var V=o.clientWidth/o.clientHeight;t.ortho(-V,V,1,-1,-1,1,z.u_matrix),u.useProgram(r.program),a.o8(u,r,s),a.N9(r,z),a.y0(u,s,u.LINES),h.current=requestAnimationFrame(N)}},O=`  
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
        `,R=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,r=a.EK(u,[O,R]),B=100,S={position:a.S6.createAugmentedTypedArray(2,B*2),color:a.S6.createAugmentedTypedArray(3,B*2,Uint8Array)},x=E(0,360),v=0;v<B;++v){var D=v/B,d=(360+x+Math.abs(D-.5)*100)%360,p=Math.sin(D*Math.PI*2)*.25+.75,w=1,W=P.hsv(d,p,w);S.position.push(D,1),S.color.push(W.rgb()),S.position.push(D,0),S.color.push(W.brighten().desaturate().rgb())}var s=a.qX(u,S),y=[0,0,0,1],I=[0,0,0,0],g=[1,2,0,0],z={u_matrix:t.identity(),u_offsets:y,u_centers:I,u_mult:g};return h.current=requestAnimationFrame(l),l}}});return(0,T.jsx)("canvas",{ref:c,style:{width:"100%",height:"300px"}})};C.default=n},52109:function(Y,C,e){"use strict";e.r(C);var P=e(28670),A=e.n(P),m=e(67294),a=e(48460),M=e(43569),T=e(85893),n=function(){var c=(0,m.useRef)(null),h=(0,M.p)(c,function(){if(c.current){var o=c.current,u=o.getContext("webgl");a.j_({attribPrefix:"a_"});var t=a.m4,E=a.v3;if(u){for(var l=function(nu,Z){return nu+Math.random()*(Z-nu)},O=function(nu,Z,k){var q=k-Z,$=nu/.5;return $<1?q/2*$*$+Z:-q/2*(--$*($-2)-1)+Z},R=function eu(nu){if(u){var Z=nu;Z*=.001;var k=Z-tu;tu=Z,a.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var q=30*Math.PI/180,$=t.perspective(q,o.clientWidth/o.clientHeight,.5,200);if(s-=k,s<=0){s=L,y=0,W=(W+1)%j.length,V=E.copy(I),_=E.copy(g);var ou=j[W];i=ou.translation;var iu=ou.size*ou.scale*N*.5,vu=iu/Math.tan(q*.5),Eu=E.normalize(E.subtract(I,i));F=E.add(i,E.mulScalar(Eu,vu))}y+=k;var au=O(Math.min(1,y/H),0,1);I=E.lerp(V,F,au),g=E.lerp(_,i,au),t.lookAt(I,g,z,d),t.inverse(d,p),t.multiply($,p,w),j.forEach(function(uu){var Q=uu.uniforms,ru=Q.u_world;t.identity(ru),t.translate(ru,uu.translation,ru),t.rotateX(ru,Z*uu.xSpeed,ru),t.rotateZ(ru,Z*uu.zSpeed,ru),t.scale(ru,[uu.scale,uu.scale,uu.scale],ru),t.transpose(t.inverse(ru,Q.u_worldInverseTranspose),Q.u_worldInverseTranspose),t.multiply(w,Q.u_world,Q.u_worldViewProjection)}),a.bV(u,X),h.current=requestAnimationFrame(eu)}},r=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635
          uniform vec3 u_lightWorldPos; // \u706F\u5149\u5728\u4E16\u754C\u7A7A\u95F4\u7684\u4F4D\u7F6E
          uniform mat4 u_world; // \u4E16\u754C\u77E9\u9635
          uniform mat4 u_viewInverse; // \u89C6\u56FE\u77E9\u9635\u7684\u9006\u77E9\u9635
          uniform mat4 u_worldInverseTranspose; // \u4E16\u754C\u77E9\u9635\u7684\u9006\u8F6C\u7F6E\u77E9\u9635
          
          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec3 a_normal; // \u9876\u70B9\u6CD5\u5411\u91CF\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u7247\u5143\u7740\u8272\u5668\u4E2D\u4F7F\u7528\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u7247\u5143\u7740\u8272\u5668\u4E2D\u4F7F\u7528\u7684\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u7247\u5143\u7740\u8272\u5668\u4E2D\u4F7F\u7528\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u8868\u9762\u5230\u706F\u5149\u7684\u5411\u91CF
          varying vec3 v_surfaceToView; // \u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
          
          void main() { // \u4E3B\u51FD\u6570
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807\u4F20\u9012\u7ED9\u7247\u5143\u7740\u8272\u5668
            v_position = (u_worldViewProjection * a_position); // \u8BA1\u7B97\u5C4F\u5E55\u7A7A\u95F4\u4E2D\u7684\u9876\u70B9\u4F4D\u7F6E
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // \u8BA1\u7B97\u7269\u4F53\u7A7A\u95F4\u4E2D\u7684\u6CD5\u5411\u91CF
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz; // \u8BA1\u7B97\u8868\u9762\u5230\u706F\u5149\u7684\u5411\u91CF
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // \u8BA1\u7B97\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
            gl_Position = v_position; // \u8BBE\u7F6E\u9876\u70B9\u4F4D\u7F6E
          } 
        `,B=`  
          precision mediump float; // \u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570\u58F0\u660E

          varying vec4 v_position; // \u9876\u70B9\u4F4D\u7F6E\uFF0C\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
          varying vec2 v_texCoord; // \u7EB9\u7406\u5750\u6807\uFF0C\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
          varying vec3 v_normal; // \u6CD5\u5411\u91CF\uFF0C\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
          varying vec3 v_surfaceToLight; // \u8868\u9762\u5230\u706F\u5149\u7684\u5411\u91CF\uFF0C\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
          varying vec3 v_surfaceToView; // \u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF\uFF0C\u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668
          
          uniform vec4 u_lightColor; // \u706F\u5149\u989C\u8272
          uniform vec4 u_diffuseMult; // \u6269\u5C55\u7684\u6F2B\u53CD\u5C04\u989C\u8272
          uniform sampler2D u_diffuse; // \u6F2B\u53CD\u5C04\u7EB9\u7406\u91C7\u6837\u5668
          uniform vec4 u_specular; // \u955C\u9762\u53CD\u5C04\u989C\u8272
          uniform float u_shininess; // \u955C\u9762\u5149\u6CFD\u5EA6
          uniform float u_specularFactor; // \u955C\u9762\u53CD\u5C04\u56E0\u5B50
          
          vec4 lit(float l ,float h, float m) { // \u8BA1\u7B97\u5149\u7167\u7684\u8F85\u52A9\u51FD\u6570
            return vec4(1.0,
                        abs(l),//max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() { // \u4E3B\u51FD\u6570
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord) * u_diffuseMult; // \u8BA1\u7B97\u6F2B\u53CD\u5C04\u989C\u8272
            vec3 a_normal = normalize(v_normal); // \u6B63\u5E38\u5316\u6CD5\u5411\u91CF
            vec3 surfaceToLight = normalize(v_surfaceToLight); // \u6B63\u5E38\u5316\u8868\u9762\u5230\u706F\u5149\u7684\u5411\u91CF
            vec3 surfaceToView = normalize(v_surfaceToView); // \u6B63\u5E38\u5316\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // \u8BA1\u7B97\u534A\u5411\u91CF
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess); // \u8BA1\u7B97\u5149\u7167\u5F3A\u5EA6
            // \u8BA1\u7B97\u6700\u7EC8\u989C\u8272
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor; // \u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
          }
        `,S=a.EK(u,[r,B]),x=[a.S6.createCubeBufferInfo(u,2),a.S6.createSphereBufferInfo(u,1,24,12),a.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],v=[1,8,-10],D=[1,1,1,1],d=t.identity(),p=t.identity(),w=t.identity(),W=0,s=0,y=0,I=E.copy([1,4,-60]),g=E.copy([0,0,0]),z=[0,1,0],N=1.4,H=2,L=3,V,_,F,i,b=a.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),j=[],X=[],G=100,U=l(0,360),K=0;K<G;++K){var J={u_lightWorldPos:v,u_lightColor:D,u_diffuseMult:P.hsv((U+l(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:b,u_viewInverse:d,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};X.push({programInfo:S,bufferInfo:x[K%x.length],uniforms:J}),j.push({translation:[l(-50,50),l(-50,50),l(-50,50)],scale:l(1,5),size:2,xSpeed:l(.2,.7),zSpeed:l(.2,.7),uniforms:J})}var tu=0;return h.current=requestAnimationFrame(R),R}}});return(0,T.jsx)("canvas",{ref:c,style:{width:"100%",height:"300px"}})};C.default=n},42480:function(){}}]);
