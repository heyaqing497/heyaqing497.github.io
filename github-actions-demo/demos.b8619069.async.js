(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{43569:function(k,A,e){"use strict";e.d(A,{p:function(){return y}});var T=e(27424),f=e.n(T),I=e(19474),t=e(67294),C=function(){};function y(n,B){var F=(0,t.useRef)(),d=(0,I.Z)(n),v=f()(d,1),u=v[0],a=(0,t.useCallback)(function(){var i=B();return i||C},[]);return(0,t.useEffect)(function(){!u&&F.current?cancelAnimationFrame(F.current):u&&(F.current=requestAnimationFrame(a))},[u]),F}},25431:function(k,A,e){"use strict";e.r(A);var T=e(81354),f=e.n(T),I=e(67294),t=e(85893),C=function(){var n="Hello World!",B="mySecretKey",F=f().AES.encrypt(n,B).toString(),d=f().AES.decrypt(F,B).toString(f().enc.Utf8);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{children:["\u6587\u6848\uFF1A",n]})," ",(0,t.jsxs)("span",{children:["\u5BC6\u94A5\uFF1A",B]})]}),(0,t.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",F]}),(0,t.jsxs)("div",{children:["\u89E3\u5BC6\u5F8C\uFF1A",d]})]})};A.default=C},59885:function(k,A,e){"use strict";e.r(A);var T=e(96074),f=e(67294),I=e(85893),t=function(){var y="Hello World!",n=btoa(y),B=atob(n),F="\u4F60\u597D\u4E16\u754C\uFF01",d=btoa(encodeURIComponent(F)),v=decodeURIComponent(atob(d));return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{children:["\u6587\u6848\uFF1A",y]}),(0,I.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",n]}),(0,I.jsxs)("div",{children:["\u89E3\u5BC6\u540E\uFF1A",B]}),(0,I.jsx)(T.Z,{}),(0,I.jsxs)("div",{children:["\u4E2D\u6587\u6587\u6848\uFF1A",F]}),(0,I.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",d]}),(0,I.jsxs)("div",{children:["\u89E3\u5BC6\u540E\uFF1A",v]})]})};A.default=t},15100:function(k,A,e){"use strict";e.r(A);var T=e(81354),f=e.n(T),I=e(67294),t=e(85893),C=function(){var n="Hello World!",B=f().MD5(n).toString(),F="Hello World2!",d=f().MD5(n).toString()===B,v=f().MD5(F).toString()===B;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:["\u6587\u6848\uFF1A",n]}),(0,t.jsxs)("div",{children:["\u52A0\u5BC6\u540E\uFF1A",B]}),(0,t.jsxs)("div",{children:["\u9A57\u8B49",n,"\uFF1A",d.toString()]}),(0,t.jsxs)("div",{children:["\u9A57\u8B49",F,"\uFF1A",v.toString()]})]})};A.default=C},37098:function(k,A,e){"use strict";e.r(A);var T=e(27424),f=e.n(T),I=e(81354),t=e.n(I),C=e(67294),y=e(85893),n=function(){var F=function(){var r=t().enc.Hex.parse("0123456789ABCDEF"),h=t().enc.Hex.parse("FEDCBA9876543210"),S="Hello World!",w=t().DES.encrypt(S,r,{iv:h}),s=t().DES.decrypt(w,r,{iv:h});return{plaintext:S,key:r.toString(),iv:h.toString(),encrypted:w.toString(),decrypted:s.toString(t().enc.Utf8),title:"DES (Data Encryption Standard)"}},d=function(){var r="Hello World!",h=t().SHA1(r);return{plaintext:r,encrypted:h.toString(),title:"\u54C8\u5E0C\u51FD\u6570 SHA-1"}},v=function(){var r="Hello World!",h=t().SHA256(r);return{plaintext:r,encrypted:h.toString(),title:"\u54C8\u5E0C\u51FD\u6570 SHA-256"}},u=function(){var r="Hello World!",h=t().SHA512(r);return{plaintext:r,encrypted:h.toString(),title:"\u54C8\u5E0C\u51FD\u6570 SHA-512"}},a=function(){var r="Hello World!",h="my-secret-key",S=t().HmacSHA256(t().SHA256,r,h);return{plaintext:r,key:h,encrypted:S.toString(),title:"\u6D88\u606F\u8BA4\u8BC1\u7801 (MAC)  HMAC"}},i=function(){var r=t().lib.WordArray.random(16);return{encrypted:r.toString(),title:"\u5176\u4ED6\u529F\u80FD \u968F\u673A\u6570\u751F\u6210"}},o={DES:F(),SHA1:d(),SHA256:v(),SHA512:u(),HMAC:a(),random:i()},L={plaintext:"\u660E\u6587",key:"\u5BC6\u94A5",iv:"\u521D\u59CB\u5411\u91CF",encrypted:"\u5BC6\u6587",decrypted:"\u89E3\u5BC6"};return(0,y.jsx)(y.Fragment,{children:Object.values(o).map(function(p){return(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{children:p.title}),Object.entries(L).map(function(r){var h=f()(r,2),S=h[0],w=h[1];return(0,y.jsx)("div",{style:{wordBreak:"break-all"},children:(p==null?void 0:p[S])&&(0,y.jsxs)("p",{children:[w,": ",p[S]]})},S)})]},p.title)})})};A.default=n},16894:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(85893),I=function(){var C=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=C.current,n=y==null?void 0:y.getContext("experimental-webgl");if(n){var B=function s(){rotateX(w),rotateY(w),rotateZ(w),n.uniformMatrix4fv(p,!1,new Float32Array(r)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,o.length/3),requestAnimationFrame(s)},F=`precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `,d=`
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `,v=n.createShader(n.VERTEX_SHADER),u=n.createShader(n.FRAGMENT_SHADER),a=n.createProgram();n.shaderSource(v,F),n.shaderSource(u,d),n.compileShader(v),n.compileShader(u),n.attachShader(a,v),n.attachShader(a,u),n.linkProgram(a),n.useProgram(a);var i=function(P,D,g,U,j){var _=new Array,K=-U;function m(G,V,Y){for(var Z=0,R=360/G,W=new Array,X=0;X<G;X++)W.push(Math.sin(Math.PI/180*Z)*Y,Math.cos(Math.PI/180*Z)*Y,V),Z+=R;return W}for(var x=360/j,O=0,K=U,H=0,b=x,M=0;M<j/2;M++){if(M>=j/4)var z=Math.sin(Math.PI/180*O)*-U;else var z=Math.sin(Math.PI/180*O)*-U;O+=x;var c=m(j,z,K);M>=j/4?z=Math.sin(Math.PI/180*O)*-U:z=-Math.sin(Math.PI/180*O)*-U,K=Math.sqrt(U*U-U*Math.sin(Math.PI/180*O)*U*Math.sin(Math.PI/180*O));for(var l=m(j,z,K),E=0;E<c.length;E+=3)E==0?(_.push(c[E],c[E+1],c[E+2]),_.push(l[E],l[E+1],l[E+2]),_.push(c[c.length-3],c[c.length-2],c[c.length-1]),_.push(c[E],c[E+1],c[E+2]),_.push(l[E],l[E+1],l[E+2]),_.push(l[E+3],l[E+4],l[E+5])):E==c.length-3?(_.push(c[E],c[E+1],c[E+2]),_.push(l[E],l[E+1],l[E+2]),_.push(c[E-3],c[E-2],c[E-1]),_.push(c[E],c[E+1],c[E+2]),_.push(l[E],l[E+1],l[E+2]),_.push(l[0],l[1],l[2])):(_.push(c[E],c[E+1],c[E+2]),_.push(l[E],l[E+1],l[E+2]),_.push(c[E-3],c[E-2],c[E-1]),_.push(c[E],c[E+1],c[E+2]),_.push(l[E],l[E+1],l[E+2]),_.push(l[E+3],l[E+4],l[E+5]))}return _},o=i(0,0,0,.5,180),L=n.getAttribLocation(a,"position"),p=n.getUniformLocation(a,"mat"),r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];e.g.rotateX=function(s){var P=Math.cos(Math.PI/180*s),D=Math.sin(Math.PI/180*s),g=r[1],U=r[5],j=r[9];r[1]=P*r[1]-D*r[2],r[5]=P*r[5]-D*r[6],r[9]=P*r[9]-D*r[10],r[2]=D*g+P*r[2],r[6]=D*U+P*r[6],r[10]=D*j+P*r[10]},e.g.rotateY=function(s){var P=Math.cos(Math.PI/180*s),D=Math.sin(Math.PI/180*s),g=r[0],U=r[8],j=r[4];r[0]=P*r[0]+D*r[2],r[4]=P*r[4]+D*r[6],r[8]=P*r[8]+D*r[10],r[2]=P*r[2]-D*g,r[6]=P*r[6]-D*j,r[10]=P*r[10]-D*U},e.g.rotateZ=function(s){var P=Math.cos(Math.PI/180*s),D=Math.sin(Math.PI/180*s),g=r[0],U=r[4],j=r[8];r[0]=P*r[0]-D*r[1],r[4]=P*r[4]-D*r[5],r[8]=P*r[8]-D*r[9],r[1]=D*g+P*r[1],r[5]=D*U+P*r[5],r[9]=D*j+P*r[9]},e.g.moveX=function(s){r[0]=r[0]+s*r[3],r[4]=r[4]+s*r[7],r[8]=r[8]+s*r[11],r[12]=r[12]+s*r[15]},e.g.moveY=function(s){r[1]=s*r[3]+r[1],r[5]=s*r[7]+r[5],r[9]=s*r[11]+r[9],r[13]=s*r[15]+r[13]},e.g.moveZ=function(s){r[2]=s*r[3]+r[2],r[6]=s*r[7]+r[6],r[10]=s*r[11]+r[10],r[14]=s*r[15]+r[14]},e.g.scaleFun=function(s){r[0]=s*r[0],r[4]=s*r[4],r[8]=s*r[8],r[12]=s*r[12],r[1]=s*r[1],r[5]=s*r[5],r[9]=s*r[9],r[13]=s*r[13],r[2]=s*r[2],r[6]=s*r[6],r[10]=s*r[10],r[14]=s*r[14]};var h=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,new Float32Array(o),n.STATIC_DRAW),n.vertexAttribPointer(L,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(L);var S=.05,w=.5;B()}},[]),(0,f.jsx)("canvas",{ref:C,width:"200",height:"200"})};A.default=I},27246:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(85893),I=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,t=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,C=function(){var n=(0,T.useRef)(null);function B(v,u,a,i,o){var L,p,r,h;return L=v*Math.pow(1-o,3),p=3*u*o*Math.pow(1-o,2),r=3*a*Math.pow(o,2)*(1-o),h=i*Math.pow(o,3),L+p+r+h}function F(v,u,a,i,o,L){return{x:B(v.x,u.x,a.x,i.x,o*L),y:B(v.y,u.y,a.y,i.y,o*L),z:B(v.z,u.z,a.z,i.z,o*L)}}function d(v,u,a,i,o,L){for(var p=o||100,r=L||1,h=r/(p-1),S=[],w=0;w<p;w++){var s=F(v,u,a,i,w,h);S.push(s.x),S.push(s.y),S.push(s.z)}return S}return(0,T.useEffect)(function(){var v=n.current,u=v==null?void 0:v.getContext("webgl");if(u){var a=u.createShader(u.VERTEX_SHADER),i=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(a,I),u.shaderSource(i,t),u.compileShader(a);var o=u.getShaderParameter(a,u.COMPILE_STATUS);if(!o)throw new Error("compile Shader is failed");u.compileShader(i);var L=u.getShaderParameter(i,u.COMPILE_STATUS);if(!L)throw new Error("compile Shader is failed");var p=u.createProgram();u.attachShader(p,a),u.attachShader(p,i),u.linkProgram(p);var r=u.getProgramParameter(p,u.LINK_STATUS);if(!r)throw new Error("link Shader is failed");u.useProgram(p);var h=u.getAttribLocation(p,"a_Position"),S=u.getUniformLocation(p,"u_FragColor");u.uniform4fv(S,[0,1,1,1]);var w=d({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),s=new Float32Array(w),P=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,P),u.bufferData(u.ARRAY_BUFFER,s,u.STATIC_DRAW),u.vertexAttribPointer(h,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(h),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,w.length/3)}},[]),(0,f.jsx)("canvas",{ref:n,width:"300",height:"200"})};A.default=C},38952:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(85893),I=function(){var C=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=C.current,n=y==null?void 0:y.getContext("webgl");if(n){var B=function(_,m,x,O,K,H,b,M,z){var c=function(R){var W=Math.sqrt(R[0]*R[0]+R[1]*R[1]+R[2]*R[2]);return[R[0]/W,R[1]/W,R[2]/W]},l=function(R,W){return[R[0]-W[0],R[1]-W[1],R[2]-W[2]]},E=function(R,W){return[R[1]*W[2]-R[2]*W[1],R[2]*W[0]-R[0]*W[2],R[0]*W[1]-R[1]*W[0]]},G=c(l([_,m,x],[O,K,H])),V=c(E([b,M,z],G)),Y=c(E(G,V));return new Float32Array([V[0],Y[0],G[0],0,V[1],Y[1],G[1],0,V[2],Y[2],G[2],0,-(V[0]*_+V[1]*m+V[2]*x),-(Y[0]*_+Y[1]*m+Y[2]*x),-(G[0]*_+G[1]*m+G[2]*x),1])},F=function(_){return Math.PI*_/180},d=function(_,m,x,O){_=F(_);var K=1/Math.tan(_/2),H=1/(x-O);return new Float32Array([K/m,0,0,0,0,K,0,0,0,0,(O+x)*H,-1,0,0,2*O*x*H,0])},v=`
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
        `,a=n.createShader(n.VERTEX_SHADER);n.shaderSource(a,v),n.compileShader(a);var i=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(i,u),n.compileShader(i);var o=n.createProgram();n.attachShader(o,a),n.attachShader(o,i),n.linkProgram(o),n.useProgram(o),n.program=o;var L=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),p=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),r=L.BYTES_PER_ELEMENT,h=n.createBuffer(),S=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,L,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,S),n.bufferData(n.ELEMENT_ARRAY_BUFFER,p,n.STATIC_DRAW);var w=n.getAttribLocation(n.program,"a_Position"),s=n.getAttribLocation(n.program,"a_Color"),P=n.getUniformLocation(n.program,"u_ViewMatrix"),D=B(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(P,!1,D);var g=n.getUniformLocation(n.program,"u_ProjMatrix"),U=d(30,y.width/y.height,1,100);n.uniformMatrix4fv(g,!1,U),n.vertexAttribPointer(w,3,n.FLOAT,!1,r*6,0),n.enableVertexAttribArray(w),n.vertexAttribPointer(s,3,n.FLOAT,!1,r*6,r*3),n.enableVertexAttribArray(s),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,p.length,n.UNSIGNED_BYTE,0)}},[]),(0,f.jsx)("canvas",{ref:C,width:"200",height:"200"})};A.default=I},63296:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(85893),I=function(){var C=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=C.current,n=y==null?void 0:y.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,f.jsx)("canvas",{ref:C,width:"100",height:"100"})};A.default=I},2795:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(85893),I=function(){var C=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=C.current,n=y==null?void 0:y.getContext("webgl");if(n){var B=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,F=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,d=n.createShader(n.VERTEX_SHADER),v=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(d,B),n.shaderSource(v,F),n.compileShader(d),n.compileShader(v);var u=n.createProgram();n.attachShader(u,d),n.attachShader(u,v),n.linkProgram(u),n.useProgram(u);var a=new Float32Array([1,1,-1,1,1,-1,-1,-1]),i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,a,n.STATIC_DRAW);var o=n.getAttribLocation(u,"a_Position");n.vertexAttribPointer(o,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(o),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,f.jsx)("canvas",{ref:C,width:"100",height:"100"})};A.default=I},44091:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(99477),I=e(85893),t=function(){var y=(0,T.useRef)(null);return(0,T.useEffect)(function(){var n=y.current,B=10,F=10,d;function v(){B=n.clientWidth,F=n.clientHeight,d=new f.CP7({antialias:!0}),d.setSize(B,F),n.appendChild(d.domElement),d.setClearColor(16777215,1)}var u;function a(){u=new f.cPb(45,B/F,1,1e4),u.position.x=0,u.position.y=2,u.position.z=1,u.up.x=0,u.up.y=0,u.up.z=1,u.lookAt(new f.Pa4(0,0,0))}var i;function o(){i=new f.xsS}var L;function p(){var w=new f.DvJ(1,1,1),s=new f.YBo({color:16777215});L=new f.Kj0(w,s),i.add(L)}function r(){var w=new f.cek(16711680);w.position.set(1,1,-1);var s=new f.cek(65280);s.position.set(1,-1,1),i.add(w),i.add(s)}function h(){L.rotation.x+=.01,L.rotation.y+=.01,d.render(i,u),requestAnimationFrame(h)}function S(){v(),a(),o(),p(),r(),h()}S()},[]),(0,I.jsx)("div",{ref:y,style:{width:150,height:150}})};A.default=t},548:function(k,A,e){"use strict";e.r(A);var T=e(27424),f=e.n(T),I=e(69234),t=e(59415),C=e(87269),y=e.n(C),n=e(67294),B=e(48460),F=e(85893),d=function(){var u=(0,n.useRef)(null),a=(0,n.useState)(!0),i=f()(a,2),o=i[0],L=i[1],p=(0,n.useState)(!1),r=f()(p,2),h=r[0],S=r[1],w=(0,n.useState)(0),s=f()(w,2),P=s[0],D=s[1];(0,I.Z)(function(){D(P+1)},1e3);var g=(0,n.useRef)(),U=new(window.AudioContext||window.webkitAudioContext),j=(0,n.useRef)(U),_=C.create({context:U,loop:!0}),m=(0,n.useRef)(_),x=U.createAnalyser(),O=(0,n.useRef)(x),K=function(){S(!0),m.current.play(),j.current.resume().then(function(){m.current.play(),m.current.getSource().connect(O.current),O.current.connect(j.current.destination)})},H=function(){if(u.current){var z=u.current,c=z.getContext("webgl"),l=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(B.j_({attribPrefix:"a_"}),c){for(var E=function $(){c&&(B.Lo(z),c.viewport(0,0,c.canvas.width,c.canvas.height),c.clearColor(0,0,0,1),c.clear(c.COLOR_BUFFER_BIT),c.lineWidth(2),c.useProgram(Y.program),O.current.getByteFrequencyData(W),B.Ss(c,au.attribs.a_height,W),B.o8(c,Y,au),B.y0(c,au,c.LINE_STRIP),g.current=requestAnimationFrame($))},G=`  
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
        `,V=`  
          precision mediump float; // \u5B9A\u4E49\u7247\u6BB5\u7740\u8272\u5668\u4F7F\u7528\u7684\u7CBE\u5EA6

          // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u6765\u7684\u989C\u8272\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272

          // \u7247\u6BB5\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_FragColor = v_color; // \u8BBE\u7F6E\u7247\u6BB5\u7684\u989C\u8272\u4E3A\u63A5\u6536\u5230\u7684\u989C\u8272
          }
        `,Y=B.EK(c,[G,V]),Z=O.current.frequencyBinCount*(l?.25:1)|0,R=new Float32Array(Z),W=new Uint8Array(Z),X=0;X<Z;++X)R[X]=X/Z*2-1;var eu={spread:{data:R,numComponents:1},height:{data:W,numComponents:1,drawType:c.DYNAMIC_DRAW}},au=B.qX(c,eu);g.current=requestAnimationFrame(E)}}};(0,n.useEffect)(function(){h&&(K(),H())},[h]),(0,n.useEffect)(function(){m.current.on("error",function(M){console.error("audio error:",M)}),m.current.on("newSource",function(){L(!1)}),m.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var b=function(){S(!1),m.current.stop(),g.current&&cancelAnimationFrame(g.current)};return(0,F.jsxs)(F.Fragment,{children:[h&&(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,F.jsx)("canvas",{ref:u,style:{width:"100%",height:"300px"}}),(0,F.jsx)("div",{children:(0,F.jsx)(t.ZP,{type:"primary",onClick:function(){return b()},children:"\u505C\u6B62"})})]}),!o&&!h&&(0,F.jsx)(t.ZP,{type:"primary",onClick:function(){return S(!0)},children:"\u64AD\u653E"}),o&&(0,F.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",P,"\u79D2\uFF09..."]})]})};A.default=d},18585:function(k,A,e){"use strict";e.r(A);var T=e(59415),f=e(28670),I=e.n(f),t=e(67294),C=e(48460),y=e(43569),n=e(85893),B=function(){var d=(0,t.useRef)(null),v=(0,t.useRef)(!0),u=(0,y.p)(d,function(){if(d.current){var a=d.current,i=C.m4,o=a.getContext("webgl");if(C.j_({attribPrefix:"a_"}),o){var L=function(Z,R,W){for(var X=R*W,eu=4*X,au=6*X,$=C.S6.createAugmentedTypedArray(3,eu),Q=C.S6.createAugmentedTypedArray(2,eu,Uint16Array),q=C.S6.createAugmentedTypedArray(3,au,Uint16Array),uu=[-1,-1,-1,1,-1,0,-1,1,0,1,1,1],J=0,nu=0;nu<W;++nu)for(var tu=0;tu<R;++tu)$.push(uu),Q.push(tu,nu,tu,nu,tu,nu,tu,nu),q.push(J+0,J+1,J+2,J+2,J+1,J+3),J+=4;return C.qX(Z,{position:$,id:Q,indices:q})},p=function(Z,R,W){return Z+(R-Z)*W},r=function(){b=M||f.hsv(Math.random()*360,1,1),M=f.hsv(Math.random()*360,1,1),z=f.scale([b,M]).mode("lab"),E=c,G=l},h=function Y(Z){if(console.log("====useFramebuffer",v.current),o){var R=Z;R*=.001;var W=R-V;V=R,C.Lo(a);var X;v.current?(C.GG(o,x),X=1):(C.GG(o,null),X=a.clientWidth/a.clientHeight),E-=W,G-=W,G<=0&&r();var eu=1-Math.max(0,E/c),au=z(eu);K.u_fogColor=au.gl();var $=K.u_fogColor;o.cullFace(o.BACK),o.enable(o.CULL_FACE),o.enable(o.DEPTH_TEST),o.clearColor($[0],$[1],$[2],$[3]),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var Q=i.perspective(30*Math.PI/180,X,.5,30),q=[1,0,-16],uu=[0,0,0],J=[0,1,0],nu=i.lookAt(q,uu,J),tu=i.inverse(nu),Eu=i.multiply(Q,tu);K.u_viewInverse=nu,o.useProgram(s.program),C.o8(o,s,j);for(var iu=0;iu<25;++iu){var vu=iu%5,ru=iu/5|0,N=K.u_world;i.identity(N),i.translate(N,[0,0,0],N),i.rotateY(N,R*.43,N),i.rotateZ(N,R*.37,N),i.translate(N,[vu*3-7-3,ru*3-5-3,0],N),i.rotateX(N,R*.21+iu,N),i.rotateY(N,R*.53+iu,N),K.u_world=N,K.u_worldInverseTranspose=i.transpose(i.inverse(N)),K.u_worldViewProjection=i.multiply(Eu,N),K.u_lightColor=[2,2,2,1],C.N9(s,K),C.y0(o,j)}if(v.current){C.GG(o,null),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.useProgram(g.program);var ou=Math.PI*2/6,_u=Math.PI*2/U,su=.7;X=a.clientWidth/a.clientHeight,i.ortho(-X*su,X*su,-1*su,1*su,-1,1,H.u_projection),H.u_angleTime=R*.1,H.u_angleScale=p(_u,ou,Math.sin(R*.017)*.5+.5),i.identity(H.u_matrix),i.translate(H.u_matrix,[1,.5,0],H.u_matrix),i.scale(H.u_matrix,[1,2,1],H.u_matrix),C.o8(o,g,_),C.N9(g,H),C.y0(o,_)}u.current=requestAnimationFrame(Y)}},S=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635
          uniform vec3 u_lightWorldPos; // \u5149\u6E90\u5728\u4E16\u754C\u7A7A\u95F4\u7684\u4F4D\u7F6E
          uniform mat4 u_world; // \u4E16\u754C\u77E9\u9635
          uniform mat4 u_viewInverse; // \u89C6\u56FE\u77E9\u9635\u7684\u9006\u77E9\u9635
          uniform mat4 u_worldInverseTranspose; // \u4E16\u754C\u77E9\u9635\u7684\u9006\u8F6C\u7F6E\u77E9\u9635
          
          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec3 a_normal; // \u9876\u70B9\u6CD5\u5411\u91CF\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u5149\u6E90\u7684\u5411\u91CF
          varying vec3 v_surfaceToView; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
          
          void main() { // \u4E3B\u51FD\u6570
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            v_position = (u_worldViewProjection * a_position); // \u9876\u70B9\u4F4D\u7F6E\uFF0C\u7528\u4E8E\u6295\u5F71
            v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz; // \u6CD5\u7EBF\uFF0C\u7528\u4E8E\u5149\u7167\u8BA1\u7B97
            v_surfaceToLight = u_lightWorldPos - (u_world * a_position).xyz; // \u8868\u9762\u5230\u5149\u6E90\u7684\u5411\u91CF
            v_surfaceToView = (u_viewInverse[3] - (u_world * a_position)).xyz; // \u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
            gl_Position = v_position; // \u8BBE\u7F6E\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,w=`  
          precision mediump float; // \u786E\u5B9A\u6D6E\u70B9\u7CBE\u5EA6

          varying vec4 v_position; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u7EB9\u7406\u5750\u6807
          varying vec3 v_normal; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u6CD5\u5411\u91CF
          varying vec3 v_surfaceToLight; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u8868\u9762\u5230\u5149\u6E90\u7684\u5411\u91CF
          varying vec3 v_surfaceToView; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u8868\u9762\u5230\u89C6\u70B9\u7684\u5411\u91CF
          
          uniform vec4 u_lightColor; // \u5149\u6E90\u989C\u8272
          uniform vec4 u_ambient; // \u73AF\u5883\u5149\u989C\u8272
          uniform sampler2D u_diffuse; // \u7EB9\u7406\u8D34\u56FE
          uniform vec4 u_specular; // \u955C\u9762\u5149\u989C\u8272
          uniform float u_shininess; // \u955C\u9762\u5149\u6CFD\u5EA6
          uniform float u_specularFactor; // \u955C\u9762\u5149\u7CFB\u6570
          uniform float u_fogNear; // \u96FE\u5316\u8FD1\u5E73\u9762
          uniform float u_fogFar; // \u96FE\u5316\u8FDC\u5E73\u9762
          uniform vec4 u_fogColor; // \u96FE\u5316\u989C\u8272
          
          // \u8BA1\u7B97\u5149\u7167
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        abs(l),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() { // \u4E3B\u51FD\u6570
            float depth = gl_FragCoord.z / gl_FragCoord.w; // \u8BA1\u7B97\u50CF\u7D20\u6DF1\u5EA6
            float fogFactor = smoothstep(u_fogNear, u_fogFar, depth); // \u8BA1\u7B97\u96FE\u5316\u56E0\u5B50
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord); // \u4ECE\u7EB9\u7406\u8D34\u56FE\u83B7\u53D6\u989C\u8272
            vec3 a_normal = normalize(v_normal); // \u6CD5\u7EBF\u5411\u91CF\u5F52\u4E00\u5316
            vec3 surfaceToLight = normalize(v_surfaceToLight); // \u8868\u9762\u5230\u5149\u6E90\u5411\u91CF\u5F52\u4E00\u5316
            vec3 surfaceToView = normalize(v_surfaceToView); // \u8868\u9762\u5230\u89C6\u70B9\u5411\u91CF\u5F52\u4E00\u5316
            vec3 halfVector = normalize(surfaceToLight + surfaceToView); // \u534A\u5411\u91CF\u5F52\u4E00\u5316
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess); // \u8BA1\u7B97\u5149\u7167\u5F3A\u5EA6
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a); // \u8BA1\u7B97\u6700\u7EC8\u989C\u8272
            gl_FragColor = mix(outColor, u_fogColor, fogFactor); // \u5E94\u7528\u96FE\u5316\u6548\u679C
          }
        `,s=C.EK(o,[S,w]),P=`
          attribute vec4 a_position; // \u8F93\u5165\u7684\u9876\u70B9\u4F4D\u7F6E
          attribute vec2 a_id; // \u8F93\u5165\u7684\u9876\u70B9\u6807\u8BC6\u7B26
          varying vec2 v_texcoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u7EB9\u7406\u5750\u6807
          uniform mat4 u_matrix; // \u4E16\u754C\u77E9\u9635
          uniform mat4 u_projection; // \u6295\u5F71\u77E9\u9635
          uniform float u_angleTime; // \u65F6\u95F4\u63A7\u5236\u7684\u89D2\u5EA6
          uniform float u_angleScale; // \u89D2\u5EA6\u7F29\u653E\u56E0\u5B50
          void main() {
            vec4 localPosition = u_matrix * a_position; // \u5E94\u7528\u4E16\u754C\u77E9\u9635\u53D8\u6362\u9876\u70B9\u4F4D\u7F6E
            float angle = a_id.x * u_angleScale + u_angleTime; // \u8BA1\u7B97\u89D2\u5EA6
            float radius = localPosition.y; // \u4F7F\u7528y\u5750\u6807\u4F5C\u4E3A\u534A\u5F84
            float c = cos(angle); // \u8BA1\u7B97\u89D2\u5EA6\u7684\u4F59\u5F26\u503C
            float s = sin(angle); // \u8BA1\u7B97\u89D2\u5EA6\u7684\u6B63\u5F26\u503C
            mat4 m = mat4( // \u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u65CB\u8F6C\u7684\u77E9\u9635
                vec4(c, s, 0, 0),
                vec4(-s, c, 0, 0),
                vec4(0, 0, 1, 0),
                vec4(0, 0, 0, 1));
            gl_Position = u_projection * m * localPosition; // \u5E94\u7528\u6295\u5F71\u77E9\u9635\u548C\u65CB\u8F6C\u77E9\u9635\u540E\u7684\u7ED3\u679C\u8D4B\u503C\u7ED9gl_Position
            v_texcoord = a_position.xy * 0.5 + 0.5; // \u8BA1\u7B97\u7EB9\u7406\u5750\u6807
          }
        `,D=`
          precision mediump float; // \u786E\u5B9A\u6D6E\u70B9\u7CBE\u5EA6

          varying vec2 v_texcoord; // \u4ECE\u9876\u70B9\u7740\u8272\u5668\u63A5\u6536\u7684\u7EB9\u7406\u5750\u6807
          uniform sampler2D u_texture; // \u8F93\u5165\u7684\u7EB9\u7406

          void main() {
            gl_FragColor = texture2D(u_texture, v_texcoord); // \u8F93\u51FA\u7EB9\u7406\u989C\u8272
          }
        `,g=C.EK(o,[P,D]),U=20,j=C.S6.createCubeBufferInfo(o,2),_=L(o,U,1),m=1024,x=C.pL(o,void 0,m,m),O=C.cU(o,{min:o.NEAREST,mag:o.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),K={u_lightWorldPos:[1,8,-10],u_lightColor:[.2,.5,1,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:O,u_fogColor:[1,1,1,1],u_fogNear:5,u_fogFar:25,u_world:i.identity()},H={u_texture:x.attachments[0],u_matrix:i.translation([1,1,0]),u_projection:i.identity(),u_angleTime:0,u_angleScale:1},b,M,z,c=5,l=10,E,G;r();var V=0;return u.current=requestAnimationFrame(h),h}}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("canvas",{ref:d,style:{width:"100%",height:"500px"}}),(0,n.jsx)(T.ZP,{type:"primary",onClick:function(){v.current=!v.current},children:"\u5207\u63DB"})]})};A.default=B},85790:function(k,A,e){"use strict";e.r(A);var T=e(28670),f=e.n(T),I=e(67294),t=e(48460),C=e(43569),y=e(85893),n=function(){var F=(0,I.useRef)(null),d=(0,C.p)(F,function(){if(F.current){var v=F.current,u=v.getContext("webgl");t.j_({attribPrefix:"a_"});var a=t.m4;if(u){for(var i=function(H,b){return H+Math.random()*(b-H)},o=function K(H){if(u){var b=H;b*=.001,t.Lo(v),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var M=a.perspective(30*Math.PI/180,v.clientWidth/v.clientHeight,.5,100),z=[1,4,-20],c=[0,0,0],l=[0,1,0];a.lookAt(z,c,l,s),a.inverse(s,P),a.multiply(M,P,D),U.forEach(function(E){var G=E.uniforms,V=G.u_world;a.identity(V),a.rotateY(V,b*E.ySpeed,V),a.rotateZ(V,b*E.zSpeed,V),a.translate(V,E.translation,V),a.rotateX(V,b,V),a.transpose(a.inverse(V,G.u_worldInverseTranspose),G.u_worldInverseTranspose),a.multiply(D,G.u_world,G.u_worldViewProjection)}),t.bV(u,j),d.current=requestAnimationFrame(K)}},L=`  
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
        `,r=t.EK(u,[L,p]),h=[t.S6.createCubeBufferInfo(u,2),t.S6.createSphereBufferInfo(u,1,24,12),t.S6.createPlaneBufferInfo(u,2,2),t.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1),t.S6.createCresentBufferInfo(u,1,1,.5,.1,24),t.S6.createCylinderBufferInfo(u,1,2,24,2),t.S6.createDiscBufferInfo(u,1,24),t.S6.createTorusBufferInfo(u,1,.4,24,12)],S=[1,8,-10],w=[1,1,1,1],s=a.identity(),P=a.identity(),D=a.identity(),g=t.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),U=[],j=[],_=100,m=i(0,360),x=0;x<_;++x){var O={u_lightWorldPos:S,u_lightColor:w,u_diffuseMult:T.hsv((m+i(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:g,u_viewInverse:s,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};j.push({programInfo:r,bufferInfo:h[x%h.length],uniforms:O}),U.push({translation:[i(-10,10),i(-10,10),i(-10,10)],ySpeed:i(.1,.3),zSpeed:i(.1,.3),uniforms:O})}return d.current=requestAnimationFrame(o),o}}});return(0,y.jsx)("canvas",{ref:F,style:{width:"100%",height:"300px"}})};A.default=n},14929:function(k,A,e){"use strict";e.r(A);var T=e(28670),f=e.n(T),I=e(67294),t=e(48460),C=e(43569),y=e(85893),n=function(){var F=(0,I.useRef)(null),d=(0,C.p)(F,function(){if(F.current){var v=F.current,u=t.m4,a=v.getContext("webgl");if(a){var i=function(l,E){return l+Math.random()*(E-l)},o=function(l){if(g){g.font="20px monospace";var E=g.measureText(l);return g.canvas.width=Math.ceil(E.width)+2,g.canvas.height=24,g.font="20px monospace",g.fillStyle="white",g.textAlign="center",g.textBaseAlign="middle",g.fillText(l,g.canvas.width/2|0,g.canvas.height/2|0),g.canvas}},L=function c(l){if(a){var E=l;E*=.001,t.Lo(v),a.viewport(0,0,a.canvas.width,a.canvas.height),a.enable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.clearColor(z[0],z[1],z[2],z[3]),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT);var G=u.perspective(30*Math.PI/180,v.clientWidth/v.clientHeight,.5,100),V=[1,4,-20],Y=[0,0,0],Z=[0,1,0];u.lookAt(V,Y,Z,w),u.inverse(w,s),u.multiply(G,s,P),_.forEach(function(R){var W=R.uniforms,X=R.texInfo;u.identity(D),u.rotateY(D,E*R.ySpeed,D),u.rotateZ(D,E*R.zSpeed,D),u.translate(D,R.translation,D),u.rotateX(D,E,D),u.scale(D,X.scale,D),u.multiply(s,D,D),u.multiply(G,D,W.u_worldViewProjection)}),t.bV(a,m),d.current=requestAnimationFrame(c)}},p=`
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
        `,h=t.EK(a,[p,r]),S=t.S6.createPlaneBufferInfo(a,1,1,1,1,u.rotationX(Math.PI*.5)),w=u.identity(),s=u.identity(),P=u.identity(),D=u.identity(),g=document.createElement("canvas").getContext("2d"),U=["al","joe","jill","brian","thomas","chrissy","jennifer","alexander"];a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);for(var j=U.map(function(c){var l=o(c),E=.01;return{tex:t.cU(a,{src:l}),scale:[l.width*E,l.height*E,1]}}),_=[],m=[],x=500,O=i(0,360),K=0;K<x;++K){var H=i(0,j.length)|0,b=j[H],M={u_texture:b.tex,u_worldViewProjection:u.identity(),u_color:T.hsv((O+i(0,60))%360,1,1).gl()};m.push({programInfo:h,bufferInfo:S,uniforms:M}),_.push({translation:[i(-10,10),i(-10,10),i(-10,10)],ySpeed:i(.1,.3),zSpeed:i(.1,.3),uniforms:M,texInfo:b})}var z=T.hsv((O+30)%360,.5,.5).gl();return d.current=requestAnimationFrame(L),L}}});return(0,y.jsx)("canvas",{ref:F,style:{width:"100%",height:"500px"}})};A.default=n},99038:function(k,A,e){"use strict";e.r(A);var T=e(28670),f=e.n(T),I=e(67294),t=e(48460),C=e(43569),y=e(85893),n=function(){var F=(0,I.useRef)(null),d=(0,C.p)(F,function(){if(F.current){var v=F.current,u=v.getContext("webgl");t.j_({attribPrefix:"a_"});var a=t.m4;if(u){var i=function(Q){_&&(_.fillStyle="#00f",_.strokeStyle="#ff0",_.lineWidth=10,_.fillRect(0,0,_.canvas.width,_.canvas.height),_.beginPath(),_.arc(_.canvas.width/2,_.canvas.height/2,_.canvas.width/2.2*Math.abs(Math.cos(Q)),0,Math.PI*2),_.stroke())},o=function $(Q){if(u){var q=Q;q*=.001,t.Lo(v),u.viewport(0,0,v.clientWidth,v.clientHeight),u.enable(u.DEPTH_TEST),u.enable(u.BLEND),u.blendFunc(u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var uu=20,J=q*.1,nu=a.perspective(30*Math.PI/180,u.canvas.width/u.canvas.height,.5,100),tu=[Math.cos(J)*uu,4,Math.sin(J)*uu],Eu=[0,0,0],iu=[0,1,0];a.lookAt(tu,Eu,iu,g),a.inverse(g,U),a.multiply(nu,U,j),i(q),_&&t.Mh(u,l.fromCanvas,_.canvas),V.forEach(function(vu){var ru=vu.uniforms,N=ru.u_world;a.identity(N),a.rotateY(N,q*vu.ySpeed,N),a.rotateZ(N,q*vu.zSpeed,N),a.translate(N,vu.translation,N),a.rotateX(N,q,N),a.transpose(a.inverse(N,ru.u_worldInverseTranspose),ru.u_worldInverseTranspose),a.multiply(j,ru.u_world,ru.u_worldViewProjection)}),t.bV(u,Y),d.current=requestAnimationFrame($)}},L=`  
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
        `,h=`  
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
        `,S=t.EK(u,[L,p]),w=t.EK(u,[r,h]),s=[t.S6.createCubeBufferInfo(u,2),t.S6.createSphereBufferInfo(u,1,24,12),t.S6.createPlaneBufferInfo(u,2,2),t.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],P=function(Q,q){var uu=Q,J=q;return J===void 0&&(J=uu,uu=0),uu+Math.random()*(J-uu)},D=P(360),g=a.identity(),U=a.identity(),j=a.identity(),_=document.createElement("canvas").getContext("2d");_&&(_.canvas.width=64,_.canvas.height=64),i(0);var m=document.createElement("canvas").getContext("2d"),x=40;if(m){m.canvas.width=x*6,m.canvas.height=x,m.fillStyle="#888";for(var O=0;O<6;++O){var K=T.hsv((D+O*10)%360,1-O/6,1);m.fillStyle=K.darken().hex(),m.fillRect(x*O,0,x,x),m.save(),m.translate(x*(O+.5),x*.5),m.beginPath(),m.arc(0,0,x*.3,0,Math.PI*2),m.fillStyle=K.hex(),m.fill(),m.restore()}}for(var H=[],b=0;b<6;++b){var M=document.createElement("canvas");M.width=128,M.height=128;var z=M.getContext("2d"),c=T.hsv((D+b*10)%360,1-b/6,1);z&&(z.fillStyle=c.darken().hex(),z.fillRect(0,0,128,128),z.translate(64,64),z.rotate(Math.PI*.25),z.fillStyle=c.hex(),z.fillRect(-40,-40,80,80)),H.push(M)}for(var l=t.cE(u,{hftIcon:{src:"images/hft-icon-16.png",mag:u.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:_==null?void 0:_.canvas},yokohama:{target:u.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:u.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:u.NEAREST,min:u.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:u.NEAREST,min:u.LINEAR,format:u.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:u.TEXTURE_CUBE_MAP,format:u.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:u.TEXTURE_CUBE_MAP,src:m==null?void 0:m.canvas},cubemapFrom6Canvases:{target:u.TEXTURE_CUBE_MAP,src:H}}),E=[l.checker,l.stripe,l.hftIcon,l.clover,l.fromCanvas],G=[l.yokohama,l.goldengate,l.cubemapFromCanvas,l.cubemapFrom6Canvases,l.cubemapFromArray],V=[],Y=[],Z=100,R=0;R<Z;++R){var W=void 0,X=void 0,eu=void 0,au=P(0,2)|0;switch(au){case 0:eu=s[R%s.length],X=S,W={u_diffuseMult:T.hsv((D+P(0,60))%360,.4,.8).gl(),u_diffuse:E[P(0,E.length)|0],u_viewInverse:g,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;case 1:eu=P(0,2)<1?s[1]:s[3],X=w,W={u_texture:G[P(0,G.length)|0],u_viewInverse:g,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;default:throw"wAT!"}Y.push({programInfo:X,bufferInfo:eu,uniforms:W}),V.push({translation:[P(-10,10),P(-10,10),P(-10,10)],ySpeed:P(.1,.3),zSpeed:P(.1,.3),uniforms:W})}return d.current=requestAnimationFrame(o),o}}});return(0,y.jsx)("canvas",{ref:F,style:{width:"100%",height:"300px"}})};A.default=n},52246:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(48460),I=e(85893),t=function(){var y=(0,T.useRef)(null);return(0,T.useEffect)(function(){if(y.current){var n=y.current,B=n.getContext("webgl");if(B){var F=function(){B&&(f.Lo(n),B.viewport(0,0,d,v),B.clear(B.COLOR_BUFFER_BIT),B.useProgram(i.program),f.o8(B,i,o),B.drawElements(B.TRIANGLES,o.numElements,B.UNSIGNED_SHORT,0))},d=B.canvas.width,v=B.canvas.height,u=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,a=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,i=f.EK(B,[u,a]),o=f.qX(B,{position:[-1,-1,0,.5,1,0,1,0,0],indices:[0,1,2]});F()}}},[]),(0,I.jsx)("canvas",{ref:y,width:100,height:100})};A.default=t},11696:function(k,A,e){"use strict";e.r(A);var T=e(67294),f=e(48460),I=e(43569),t=e(85893),C=function(){var n=(0,T.useRef)(null),B=(0,I.p)(n,function(){if(n.current){var F=n.current,d=f.m4,v=F.getContext("webgl");if(v){var u=function S(w){if(v){var s=w;s*=.001,f.Lo(F),v.viewport(0,0,v.canvas.width,v.canvas.height),v.enable(v.DEPTH_TEST),v.enable(v.CULL_FACE),v.clear(v.COLOR_BUFFER_BIT|v.DEPTH_BUFFER_BIT);var P=30*Math.PI/180,D=v.canvas.width/v.canvas.height,g=.5,U=10,j=d.perspective(P,D,g,U),_=[1,4,-6],m=[0,0,0],x=[0,1,0],O=d.lookAt(_,m,x),K=d.inverse(O),H=d.multiply(j,K),b=d.rotationY(s);h.u_viewInverse=O,h.u_world=b,h.u_worldInverseTranspose=d.transpose(d.inverse(b)),h.u_worldViewProjection=d.multiply(H,b),v.useProgram(o.program),f.o8(v,o,p),f.N9(o,h),v.drawElements(v.TRIANGLES,p.numElements,v.UNSIGNED_SHORT,0),B.current=requestAnimationFrame(S)}},a=`
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
        `,i=`  
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
        `,o=f.EK(v,[a,i]),L={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},p=f.qX(v,L),r=f.cU(v,{min:v.NEAREST,mag:v.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),h={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:r};return B.current=requestAnimationFrame(u),u}}});return(0,t.jsx)("canvas",{ref:n,width:100,height:100})};A.default=C},41732:function(k,A,e){"use strict";e.r(A);var T=e(28670),f=e.n(T),I=e(67294),t=e(48460),C=e(43569),y=e(85893),n=function(){var F=(0,I.useRef)(null),d=(0,C.p)(F,function(){if(F.current){var v=F.current,u=v.getContext("webgl"),a=t.m4;if(t.j_({attribPrefix:"a_"}),u){for(var i=function(b,M){return b+Math.random()*(M-b)},o=function H(b){if(u){var M=b;M*=.001,t.Lo(v),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),m[0]=Math.sin(M),m[1]=Math.sin(M*.13)*Math.PI*2,m[2]=Math.sin(M*.43)*.5+1,m[3]=Math.cos(M*.17)*.5+.5,x[0]=Math.sin(M*.163)*.5,x[1]=Math.cos(M*.267)*.5,x[2]=Math.sin(M*.367)*.5,x[3]=Math.cos(M*.497)*.5,O[1]=(Math.sin(M*.1)*.5+.5)*3;var z=v.clientWidth/v.clientHeight;a.ortho(-z,z,1,-1,-1,1,K.u_matrix),u.useProgram(r.program),t.o8(u,r,_),t.N9(r,K),t.y0(u,_,u.LINES),d.current=requestAnimationFrame(H)}},L=`  
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
        `,r=t.EK(u,[L,p]),h=100,S={position:t.S6.createAugmentedTypedArray(2,h*2),color:t.S6.createAugmentedTypedArray(3,h*2,Uint8Array)},w=i(0,360),s=0;s<h;++s){var P=s/h,D=(360+w+Math.abs(P-.5)*100)%360,g=Math.sin(P*Math.PI*2)*.25+.75,U=1,j=T.hsv(D,g,U);S.position.push(P,1),S.color.push(j.rgb()),S.position.push(P,0),S.color.push(j.brighten().desaturate().rgb())}var _=t.qX(u,S),m=[0,0,0,1],x=[0,0,0,0],O=[1,2,0,0],K={u_matrix:a.identity(),u_offsets:m,u_centers:x,u_mult:O};return d.current=requestAnimationFrame(o),o}}});return(0,y.jsx)("canvas",{ref:F,style:{width:"100%",height:"300px"}})};A.default=n},52109:function(k,A,e){"use strict";e.r(A);var T=e(28670),f=e.n(T),I=e(67294),t=e(48460),C=e(43569),y=e(85893),n=function(){var F=(0,I.useRef)(null),d=(0,C.p)(F,function(){if(F.current){var v=F.current,u=v.getContext("webgl");t.j_({attribPrefix:"a_"});var a=t.m4,i=t.v3;if(u){for(var o=function($,Q){return $+Math.random()*(Q-$)},L=function($,Q,q){var uu=q-Q,J=$/.5;return J<1?uu/2*J*J+Q:-uu/2*(--J*(J-2)-1)+Q},p=function au($){if(u){var Q=$;Q*=.001;var q=Q-eu;eu=Q,t.Lo(v),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var uu=30*Math.PI/180,J=a.perspective(uu,v.clientWidth/v.clientHeight,.5,200);if(_-=q,_<=0){_=M,m=0,j=(j+1)%V.length,z=i.copy(x),c=i.copy(O);var nu=V[j];E=nu.translation;var tu=nu.size*nu.scale*H*.5,Eu=tu/Math.tan(uu*.5),iu=i.normalize(i.subtract(x,E));l=i.add(E,i.mulScalar(iu,Eu))}m+=q;var vu=L(Math.min(1,m/b),0,1);x=i.lerp(z,l,vu),O=i.lerp(c,E,vu),a.lookAt(x,O,K,D),a.inverse(D,g),a.multiply(J,g,U),V.forEach(function(ru){var N=ru.uniforms,ou=N.u_world;a.identity(ou),a.translate(ou,ru.translation,ou),a.rotateX(ou,Q*ru.xSpeed,ou),a.rotateZ(ou,Q*ru.zSpeed,ou),a.scale(ou,[ru.scale,ru.scale,ru.scale],ou),a.transpose(a.inverse(ou,N.u_worldInverseTranspose),N.u_worldInverseTranspose),a.multiply(U,N.u_world,N.u_worldViewProjection)}),t.bV(u,Y),d.current=requestAnimationFrame(au)}},r=`  
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
        `,h=`  
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
        `,S=t.EK(u,[r,h]),w=[t.S6.createCubeBufferInfo(u,2),t.S6.createSphereBufferInfo(u,1,24,12),t.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],s=[1,8,-10],P=[1,1,1,1],D=a.identity(),g=a.identity(),U=a.identity(),j=0,_=0,m=0,x=i.copy([1,4,-60]),O=i.copy([0,0,0]),K=[0,1,0],H=1.4,b=2,M=3,z,c,l,E,G=t.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),V=[],Y=[],Z=100,R=o(0,360),W=0;W<Z;++W){var X={u_lightWorldPos:s,u_lightColor:P,u_diffuseMult:T.hsv((R+o(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:G,u_viewInverse:D,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};Y.push({programInfo:S,bufferInfo:w[W%w.length],uniforms:X}),V.push({translation:[o(-50,50),o(-50,50),o(-50,50)],scale:o(1,5),size:2,xSpeed:o(.2,.7),zSpeed:o(.2,.7),uniforms:X})}var eu=0;return d.current=requestAnimationFrame(p),p}}});return(0,y.jsx)("canvas",{ref:F,style:{width:"100%",height:"300px"}})};A.default=n},42480:function(){}}]);
