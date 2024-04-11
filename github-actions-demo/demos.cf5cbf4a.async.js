"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(X,y,a){a.r(y);var R=a(67294),h=a(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,u=T==null?void 0:T.getContext("experimental-webgl");if(u){var v=function i(){rotateX(B),rotateY(B),rotateZ(B),u.uniformMatrix4fv(D,!1,new Float32Array(n)),u.clearColor(.5,.5,.5,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,C.length/3),requestAnimationFrame(i)},E=`precision highp float;
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
      `,t=u.createShader(u.VERTEX_SHADER),e=u.createShader(u.FRAGMENT_SHADER),l=u.createProgram();u.shaderSource(t,E),u.shaderSource(e,r),u.compileShader(t),u.compileShader(e),u.attachShader(l,t),u.attachShader(l,e),u.linkProgram(l),u.useProgram(l);var A=function(P,g,W,F,_){var f=new Array,m=-F;function S(N,G,H){for(var Y=0,L=360/N,j=new Array,Q=0;Q<N;Q++)j.push(Math.sin(Math.PI/180*Y)*H,Math.cos(Math.PI/180*Y)*H,G),Y+=L;return j}for(var K=360/_,x=0,m=F,O=0,z=K,V=0;V<_/2;V++){if(V>=_/4)var b=Math.sin(Math.PI/180*x)*-F;else var b=Math.sin(Math.PI/180*x)*-F;x+=K;var s=S(_,b,m);V>=_/4?b=Math.sin(Math.PI/180*x)*-F:b=-Math.sin(Math.PI/180*x)*-F,m=Math.sqrt(F*F-F*Math.sin(Math.PI/180*x)*F*Math.sin(Math.PI/180*x));for(var d=S(_,b,m),o=0;o<s.length;o+=3)o==0?(f.push(s[o],s[o+1],s[o+2]),f.push(d[o],d[o+1],d[o+2]),f.push(s[s.length-3],s[s.length-2],s[s.length-1]),f.push(s[o],s[o+1],s[o+2]),f.push(d[o],d[o+1],d[o+2]),f.push(d[o+3],d[o+4],d[o+5])):o==s.length-3?(f.push(s[o],s[o+1],s[o+2]),f.push(d[o],d[o+1],d[o+2]),f.push(s[o-3],s[o-2],s[o-1]),f.push(s[o],s[o+1],s[o+2]),f.push(d[o],d[o+1],d[o+2]),f.push(d[0],d[1],d[2])):(f.push(s[o],s[o+1],s[o+2]),f.push(d[o],d[o+1],d[o+2]),f.push(s[o-3],s[o-2],s[o-1]),f.push(s[o],s[o+1],s[o+2]),f.push(d[o],d[o+1],d[o+2]),f.push(d[o+3],d[o+4],d[o+5]))}return f},C=A(0,0,0,.5,180),w=u.getAttribLocation(l,"position"),D=u.getUniformLocation(l,"mat"),n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];a.g.rotateX=function(i){var P=Math.cos(Math.PI/180*i),g=Math.sin(Math.PI/180*i),W=n[1],F=n[5],_=n[9];n[1]=P*n[1]-g*n[2],n[5]=P*n[5]-g*n[6],n[9]=P*n[9]-g*n[10],n[2]=g*W+P*n[2],n[6]=g*F+P*n[6],n[10]=g*_+P*n[10]},a.g.rotateY=function(i){var P=Math.cos(Math.PI/180*i),g=Math.sin(Math.PI/180*i),W=n[0],F=n[8],_=n[4];n[0]=P*n[0]+g*n[2],n[4]=P*n[4]+g*n[6],n[8]=P*n[8]+g*n[10],n[2]=P*n[2]-g*W,n[6]=P*n[6]-g*_,n[10]=P*n[10]-g*F},a.g.rotateZ=function(i){var P=Math.cos(Math.PI/180*i),g=Math.sin(Math.PI/180*i),W=n[0],F=n[4],_=n[8];n[0]=P*n[0]-g*n[1],n[4]=P*n[4]-g*n[5],n[8]=P*n[8]-g*n[9],n[1]=g*W+P*n[1],n[5]=g*F+P*n[5],n[9]=g*_+P*n[9]},a.g.moveX=function(i){n[0]=n[0]+i*n[3],n[4]=n[4]+i*n[7],n[8]=n[8]+i*n[11],n[12]=n[12]+i*n[15]},a.g.moveY=function(i){n[1]=i*n[3]+n[1],n[5]=i*n[7]+n[5],n[9]=i*n[11]+n[9],n[13]=i*n[15]+n[13]},a.g.moveZ=function(i){n[2]=i*n[3]+n[2],n[6]=i*n[7]+n[6],n[10]=i*n[11]+n[10],n[14]=i*n[15]+n[14]},a.g.scaleFun=function(i){n[0]=i*n[0],n[4]=i*n[4],n[8]=i*n[8],n[12]=i*n[12],n[1]=i*n[1],n[5]=i*n[5],n[9]=i*n[9],n[13]=i*n[13],n[2]=i*n[2],n[6]=i*n[6],n[10]=i*n[10],n[14]=i*n[14]};var p=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,p),u.bufferData(u.ARRAY_BUFFER,new Float32Array(C),u.STATIC_DRAW),u.vertexAttribPointer(w,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(w);var I=.05,B=.5;v()}},[]),(0,h.jsx)("canvas",{ref:M,width:"200",height:"200"})};y.default=U},27246:function(X,y,a){a.r(y);var R=a(67294),h=a(85893),U=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,c=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,M=function(){var u=(0,R.useRef)(null);function v(t,e,l,A,C){var w,D,n,p;return w=t*Math.pow(1-C,3),D=3*e*C*Math.pow(1-C,2),n=3*l*Math.pow(C,2)*(1-C),p=A*Math.pow(C,3),w+D+n+p}function E(t,e,l,A,C,w){return{x:v(t.x,e.x,l.x,A.x,C*w),y:v(t.y,e.y,l.y,A.y,C*w),z:v(t.z,e.z,l.z,A.z,C*w)}}function r(t,e,l,A,C,w){for(var D=C||100,n=w||1,p=n/(D-1),I=[],B=0;B<D;B++){var i=E(t,e,l,A,B,p);I.push(i.x),I.push(i.y),I.push(i.z)}return I}return(0,R.useEffect)(function(){var t=u.current,e=t==null?void 0:t.getContext("webgl");if(e){var l=e.createShader(e.VERTEX_SHADER),A=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(l,U),e.shaderSource(A,c),e.compileShader(l);var C=e.getShaderParameter(l,e.COMPILE_STATUS);if(!C)throw new Error("compile Shader is failed");e.compileShader(A);var w=e.getShaderParameter(A,e.COMPILE_STATUS);if(!w)throw new Error("compile Shader is failed");var D=e.createProgram();e.attachShader(D,l),e.attachShader(D,A),e.linkProgram(D);var n=e.getProgramParameter(D,e.LINK_STATUS);if(!n)throw new Error("link Shader is failed");e.useProgram(D);var p=e.getAttribLocation(D,"a_Position"),I=e.getUniformLocation(D,"u_FragColor");e.uniform4fv(I,[0,1,1,1]);var B=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),i=new Float32Array(B),P=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,P),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.vertexAttribPointer(p,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(p),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.LINE_STRIP,0,B.length/3)}},[]),(0,h.jsx)("canvas",{ref:u,width:"300",height:"200"})};y.default=M},38952:function(X,y,a){a.r(y);var R=a(67294),h=a(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,u=T==null?void 0:T.getContext("webgl");if(u){var v=function(f,S,K,x,m,O,z,V,b){var s=function(L){var j=Math.sqrt(L[0]*L[0]+L[1]*L[1]+L[2]*L[2]);return[L[0]/j,L[1]/j,L[2]/j]},d=function(L,j){return[L[0]-j[0],L[1]-j[1],L[2]-j[2]]},o=function(L,j){return[L[1]*j[2]-L[2]*j[1],L[2]*j[0]-L[0]*j[2],L[0]*j[1]-L[1]*j[0]]},N=s(d([f,S,K],[x,m,O])),G=s(o([z,V,b],N)),H=s(o(N,G));return new Float32Array([G[0],H[0],N[0],0,G[1],H[1],N[1],0,G[2],H[2],N[2],0,-(G[0]*f+G[1]*S+G[2]*K),-(H[0]*f+H[1]*S+H[2]*K),-(N[0]*f+N[1]*S+N[2]*K),1])},E=function(f){return Math.PI*f/180},r=function(f,S,K,x){f=E(f);var m=1/Math.tan(f/2),O=1/(K-x);return new Float32Array([m/S,0,0,0,0,m,0,0,0,0,(x+K)*O,-1,0,0,2*x*K*O,0])},t=`
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
        `,l=u.createShader(u.VERTEX_SHADER);u.shaderSource(l,t),u.compileShader(l);var A=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(A,e),u.compileShader(A);var C=u.createProgram();u.attachShader(C,l),u.attachShader(C,A),u.linkProgram(C),u.useProgram(C),u.program=C;var w=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),D=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),n=w.BYTES_PER_ELEMENT,p=u.createBuffer(),I=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,p),u.bufferData(u.ARRAY_BUFFER,w,u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,I),u.bufferData(u.ELEMENT_ARRAY_BUFFER,D,u.STATIC_DRAW);var B=u.getAttribLocation(u.program,"a_Position"),i=u.getAttribLocation(u.program,"a_Color"),P=u.getUniformLocation(u.program,"u_ViewMatrix"),g=v(3,4,8,0,0,0,0,1,0);u.uniformMatrix4fv(P,!1,g);var W=u.getUniformLocation(u.program,"u_ProjMatrix"),F=r(30,T.width/T.height,1,100);u.uniformMatrix4fv(W,!1,F),u.vertexAttribPointer(B,3,u.FLOAT,!1,n*6,0),u.enableVertexAttribArray(B),u.vertexAttribPointer(i,3,u.FLOAT,!1,n*6,n*3),u.enableVertexAttribArray(i),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,D.length,u.UNSIGNED_BYTE,0)}},[]),(0,h.jsx)("canvas",{ref:M,width:"200",height:"200"})};y.default=U},63296:function(X,y,a){a.r(y);var R=a(67294),h=a(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,u=T==null?void 0:T.getContext("2d");u&&(u.beginPath(),u.moveTo(20,20),u.lineTo(200,20),u.lineWidth=1,u.strokeStyle="#CC0000",u.stroke())},[]),(0,h.jsx)("canvas",{ref:M,width:"100",height:"100"})};y.default=U},2795:function(X,y,a){a.r(y);var R=a(67294),h=a(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,u=T==null?void 0:T.getContext("webgl");if(u){var v=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,E=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=u.createShader(u.VERTEX_SHADER),t=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(r,v),u.shaderSource(t,E),u.compileShader(r),u.compileShader(t);var e=u.createProgram();u.attachShader(e,r),u.attachShader(e,t),u.linkProgram(e),u.useProgram(e);var l=new Float32Array([1,1,-1,1,1,-1,-1,-1]),A=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,A),u.bufferData(u.ARRAY_BUFFER,l,u.STATIC_DRAW);var C=u.getAttribLocation(e,"a_Position");u.vertexAttribPointer(C,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(C),u.drawArrays(u.TRIANGLE_STRIP,0,4)}},[]),(0,h.jsx)("canvas",{ref:M,width:"100",height:"100"})};y.default=U},44091:function(X,y,a){a.r(y);var R=a(67294),h=a(99477),U=a(85893),c=function(){var T=(0,R.useRef)(null);return(0,R.useEffect)(function(){var u=T.current,v=10,E=10,r;function t(){v=u.clientWidth,E=u.clientHeight,r=new h.CP7({antialias:!0}),r.setSize(v,E),u.appendChild(r.domElement),r.setClearColor(16777215,1)}var e;function l(){e=new h.cPb(45,v/E,1,1e4),e.position.x=0,e.position.y=2,e.position.z=1,e.up.x=0,e.up.y=0,e.up.z=1,e.lookAt(new h.Pa4(0,0,0))}var A;function C(){A=new h.xsS}var w;function D(){var B=new h.DvJ(1,1,1),i=new h.YBo({color:16777215});w=new h.Kj0(B,i),A.add(w)}function n(){var B=new h.cek(16711680);B.position.set(1,1,-1);var i=new h.cek(65280);i.position.set(1,-1,1),A.add(B),A.add(i)}function p(){w.rotation.x+=.01,w.rotation.y+=.01,r.render(A,e),requestAnimationFrame(p)}function I(){t(),l(),C(),D(),n(),p()}I()},[]),(0,U.jsx)("div",{ref:T,style:{width:150,height:150}})};y.default=c},548:function(X,y,a){a.r(y);var R=a(27424),h=a.n(R),U=a(31723),c=a(53313),M=a(87269),T=a.n(M),u=a(67294),v=a(48460),E=a(85893),r=function(){var e=(0,u.useRef)(null),l=(0,u.useState)(!0),A=h()(l,2),C=A[0],w=A[1],D=(0,u.useState)(!1),n=h()(D,2),p=n[0],I=n[1],B=(0,u.useState)(0),i=h()(B,2),P=i[0],g=i[1];(0,U.Z)(function(){g(P+1)},1e3);var W=(0,u.useRef)(),F=new(window.AudioContext||window.webkitAudioContext),_=(0,u.useRef)(F),f=M.create({context:F,loop:!0}),S=(0,u.useRef)(f),K=F.createAnalyser(),x=(0,u.useRef)(K),m=function(){I(!0),S.current.play(),_.current.resume().then(function(){S.current.play(),S.current.getSource().connect(x.current),x.current.connect(_.current.destination)})},O=function(){if(e.current){var b=e.current,s=b.getContext("webgl"),d=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(v.j_({attribPrefix:"a_"}),s){for(var o=function Z(){s&&(v.Lo(b),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.lineWidth(2),s.useProgram(H.program),x.current.getByteFrequencyData(j),v.Ss(s,$.attribs.a_height,j),v.o8(s,H,$),v.y0(s,$,s.LINE_STRIP),W.current=requestAnimationFrame(Z))},N=`  
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
        `,G=`  
          precision mediump float; // \u5B9A\u4E49\u7247\u6BB5\u7740\u8272\u5668\u4F7F\u7528\u7684\u7CBE\u5EA6

          // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u6765\u7684\u989C\u8272\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272

          // \u7247\u6BB5\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_FragColor = v_color; // \u8BBE\u7F6E\u7247\u6BB5\u7684\u989C\u8272\u4E3A\u63A5\u6536\u5230\u7684\u989C\u8272
          }
        `,H=v.EK(s,[N,G]),Y=x.current.frequencyBinCount*(d?.25:1)|0,L=new Float32Array(Y),j=new Uint8Array(Y),Q=0;Q<Y;++Q)L[Q]=Q/Y*2-1;var uu={spread:{data:L,numComponents:1},height:{data:j,numComponents:1,drawType:s.DYNAMIC_DRAW}},$=v.qX(s,uu);W.current=requestAnimationFrame(o)}}};(0,u.useEffect)(function(){p&&(m(),O())},[p]),(0,u.useEffect)(function(){S.current.on("error",function(V){console.error("audio error:",V)}),S.current.on("newSource",function(){w(!1)}),S.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var z=function(){I(!1),S.current.stop(),W.current&&cancelAnimationFrame(W.current)};return(0,E.jsxs)(E.Fragment,{children:[p&&(0,E.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,E.jsx)("canvas",{ref:e,width:800,height:300}),(0,E.jsx)("div",{children:(0,E.jsx)(c.ZP,{type:"primary",onClick:function(){return z()},children:"\u505C\u6B62"})})]}),!C&&!p&&(0,E.jsx)(c.ZP,{type:"primary",onClick:function(){return I(!0)},children:"\u64AD\u653E"}),C&&(0,E.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",P,"\u79D2\uFF09..."]})]})};y.default=r},85790:function(X,y,a){a.r(y);var R=a(28670),h=a.n(R),U=a(67294),c=a(48460),M=a(85893),T=function(){var v=(0,U.useRef)(null);return(0,U.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");c.j_({attribPrefix:"a_"});var t=c.m4;if(r){for(var e=function(x,m){return x+Math.random()*(m-x)},l=function K(x){if(r){var m=x;m*=.001,c.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var O=t.perspective(30*Math.PI/180,E.clientWidth/E.clientHeight,.5,100),z=[1,4,-20],V=[0,0,0],b=[0,1,0];t.lookAt(z,V,b,I),t.inverse(I,B),t.multiply(O,B,i),g.forEach(function(s){var d=s.uniforms,o=d.u_world;t.identity(o),t.rotateY(o,m*s.ySpeed,o),t.rotateZ(o,m*s.zSpeed,o),t.translate(o,s.translation,o),t.rotateX(o,m,o),t.transpose(t.inverse(o,d.u_worldInverseTranspose),d.u_worldInverseTranspose),t.multiply(i,d.u_world,d.u_worldViewProjection)}),c.bV(r,W),requestAnimationFrame(K)}},A=`  
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
        `,C=`  
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
        `,w=c.EK(r,[A,C]),D=[c.S6.createCubeBufferInfo(r,2),c.S6.createSphereBufferInfo(r,1,24,12),c.S6.createPlaneBufferInfo(r,2,2),c.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1),c.S6.createCresentBufferInfo(r,1,1,.5,.1,24),c.S6.createCylinderBufferInfo(r,1,2,24,2),c.S6.createDiscBufferInfo(r,1,24),c.S6.createTorusBufferInfo(r,1,.4,24,12)],n=[1,8,-10],p=[1,1,1,1],I=t.identity(),B=t.identity(),i=t.identity(),P=c.cU(r,{min:r.NEAREST,mag:r.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),g=[],W=[],F=100,_=e(0,360),f=0;f<F;++f){var S={u_lightWorldPos:n,u_lightColor:p,u_diffuseMult:R.hsv((_+e(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:P,u_viewInverse:I,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};W.push({programInfo:w,bufferInfo:D[f%D.length],uniforms:S}),g.push({translation:[e(-10,10),e(-10,10),e(-10,10)],ySpeed:e(.1,.3),zSpeed:e(.1,.3),uniforms:S})}requestAnimationFrame(l)}}},[]),(0,M.jsx)("canvas",{ref:v,width:800,height:300})};y.default=T},99038:function(X,y,a){a.r(y);var R=a(28670),h=a.n(R),U=a(67294),c=a(48460),M=a(85893),T=function(){var v=(0,U.useRef)(null);return(0,U.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");c.j_({attribPrefix:"a_"});var t=c.m4;if(r){var e=function($){F&&(F.fillStyle="#00f",F.strokeStyle="#ff0",F.lineWidth=10,F.fillRect(0,0,F.canvas.width,F.canvas.height),F.beginPath(),F.arc(F.canvas.width/2,F.canvas.height/2,F.canvas.width/2.2*Math.abs(Math.cos($)),0,Math.PI*2),F.stroke())},l=function uu($){if(r){var Z=$;Z*=.001,c.Lo(E),r.viewport(0,0,E.clientWidth,E.clientHeight),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var k=20,q=Z*.1,eu=t.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),au=[Math.cos(q)*k,4,Math.sin(q)*k],tu=[0,0,0],ou=[0,1,0];t.lookAt(au,tu,ou,P),t.inverse(P,g),t.multiply(eu,g,W),e(Z),F&&c.Mh(r,b.fromCanvas,F.canvas),o.forEach(function(ru){var nu=ru.uniforms,J=nu.u_world;t.identity(J),t.rotateY(J,Z*ru.ySpeed,J),t.rotateZ(J,Z*ru.zSpeed,J),t.translate(J,ru.translation,J),t.rotateX(J,Z,J),t.transpose(t.inverse(J,nu.u_worldInverseTranspose),nu.u_worldInverseTranspose),t.multiply(W,nu.u_world,nu.u_worldViewProjection)}),c.bV(r,N),requestAnimationFrame(uu)}},A=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,C=`  
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
        `,w=`  
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
        `,n=c.EK(r,[A,C]),p=c.EK(r,[w,D]),I=[c.S6.createCubeBufferInfo(r,2),c.S6.createSphereBufferInfo(r,1,24,12),c.S6.createPlaneBufferInfo(r,2,2),c.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],B=function($,Z){var k=$,q=Z;return q===void 0&&(q=k,k=0),k+Math.random()*(q-k)},i=B(360),P=t.identity(),g=t.identity(),W=t.identity(),F=document.createElement("canvas").getContext("2d");F&&(F.canvas.width=64,F.canvas.height=64),e(0);var _=document.createElement("canvas").getContext("2d"),f=40;if(_){_.canvas.width=f*6,_.canvas.height=f,_.fillStyle="#888";for(var S=0;S<6;++S){var K=R.hsv((i+S*10)%360,1-S/6,1);_.fillStyle=K.darken().hex(),_.fillRect(f*S,0,f,f),_.save(),_.translate(f*(S+.5),f*.5),_.beginPath(),_.arc(0,0,f*.3,0,Math.PI*2),_.fillStyle=K.hex(),_.fill(),_.restore()}}for(var x=[],m=0;m<6;++m){var O=document.createElement("canvas");O.width=128,O.height=128;var z=O.getContext("2d"),V=R.hsv((i+m*10)%360,1-m/6,1);z&&(z.fillStyle=V.darken().hex(),z.fillRect(0,0,128,128),z.translate(64,64),z.rotate(Math.PI*.25),z.fillStyle=V.hex(),z.fillRect(-40,-40,80,80)),x.push(O)}for(var b=c.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:F==null?void 0:F.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:_==null?void 0:_.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:x}}),s=[b.checker,b.stripe,b.hftIcon,b.clover,b.fromCanvas],d=[b.yokohama,b.goldengate,b.cubemapFromCanvas,b.cubemapFrom6Canvases,b.cubemapFromArray],o=[],N=[],G=100,H=0;H<G;++H){var Y=void 0,L=void 0,j=void 0,Q=B(0,2)|0;switch(Q){case 0:j=I[H%I.length],L=n,Y={u_diffuseMult:R.hsv((i+B(0,60))%360,.4,.8).gl(),u_diffuse:s[B(0,s.length)|0],u_viewInverse:P,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};break;case 1:j=B(0,2)<1?I[1]:I[3],L=p,Y={u_texture:d[B(0,d.length)|0],u_viewInverse:P,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};break;default:throw"wAT!"}N.push({programInfo:L,bufferInfo:j,uniforms:Y}),o.push({translation:[B(-10,10),B(-10,10),B(-10,10)],ySpeed:B(.1,.3),zSpeed:B(.1,.3),uniforms:Y})}requestAnimationFrame(l)}}},[]),(0,M.jsx)("canvas",{ref:v,width:800,height:300})};y.default=T},52246:function(X,y,a){a.r(y);var R=a(67294),h=a(48460),U=a(85893),c=function(){var T=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(T.current){var u=T.current,v=u.getContext("webgl");if(v){var E=function(){if(v){v.viewport(0,0,r,t),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(A.program);var n=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,n);var p=new Uint16Array([0,1,2]);v.bufferData(v.ELEMENT_ARRAY_BUFFER,p,v.STATIC_DRAW),h.o8(v,A,w),v.drawElements(v.TRIANGLES,p.length,v.UNSIGNED_SHORT,0)}},r=v.canvas.width,t=v.canvas.height;h.Lo(u);var e=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,l=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,A=h.EK(v,[e,l]),C=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),w=h.qX(v,{position:C});E()}}},[]),(0,U.jsx)("canvas",{ref:T,width:100,height:100})};y.default=c},11696:function(X,y,a){a.r(y);var R=a(67294),h=a(48460),U=a(85893),c=function(){var T=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(T.current){var u=T.current,v=h.m4,E=u.getContext("webgl");if(E){var r=function n(p){if(E){var I=p;I*=.001,h.Lo(u),E.viewport(0,0,E.canvas.width,E.canvas.height),E.enable(E.DEPTH_TEST),E.enable(E.CULL_FACE),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT);var B=30*Math.PI/180,i=E.canvas.width/E.canvas.height,P=.5,g=10,W=v.perspective(B,i,P,g),F=[1,4,-6],_=[0,0,0],f=[0,1,0],S=v.lookAt(F,_,f),K=v.inverse(S),x=v.multiply(W,K),m=v.rotationY(I);D.u_viewInverse=S,D.u_world=m,D.u_worldInverseTranspose=v.transpose(v.inverse(m)),D.u_worldViewProjection=v.multiply(x,m),E.useProgram(l.program),h.o8(E,l,C),h.N9(l,D),E.drawElements(E.TRIANGLES,C.numElements,E.UNSIGNED_SHORT,0),requestAnimationFrame(n)}},t=`
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
        `,l=h.EK(E,[t,e]),A={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},C=h.qX(E,A),w=h.cU(E,{min:E.NEAREST,mag:E.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),D={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:w};requestAnimationFrame(r)}}},[]),(0,U.jsx)("canvas",{ref:T,width:100,height:100})};y.default=c},41732:function(X,y,a){a.r(y);var R=a(28670),h=a.n(R),U=a(67294),c=a(48460),M=a(85893),T=function(){var v=(0,U.useRef)(null);return(0,U.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl"),t=c.m4;if(c.j_({attribPrefix:"a_"}),r){for(var e=function(m,O){return m+Math.random()*(O-m)},l=function x(m){if(r){var O=m;O*=.001,c.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),_[0]=Math.sin(O),_[1]=Math.sin(O*.13)*Math.PI*2,_[2]=Math.sin(O*.43)*.5+1,_[3]=Math.cos(O*.17)*.5+.5,f[0]=Math.sin(O*.163)*.5,f[1]=Math.cos(O*.267)*.5,f[2]=Math.sin(O*.367)*.5,f[3]=Math.cos(O*.497)*.5,S[1]=(Math.sin(O*.1)*.5+.5)*3;var z=E.clientWidth/E.clientHeight;t.ortho(-z,z,1,-1,-1,1,K.u_matrix),r.useProgram(w.program),c.o8(r,w,F),c.N9(w,K),c.y0(r,F,r.LINES),requestAnimationFrame(x)}},A=`  
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
        `,C=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,w=c.EK(r,[A,C]),D=100,n={position:c.S6.createAugmentedTypedArray(2,D*2),color:c.S6.createAugmentedTypedArray(3,D*2,Uint8Array)},p=e(0,360),I=0;I<D;++I){var B=I/D,i=(360+p+Math.abs(B-.5)*100)%360,P=Math.sin(B*Math.PI*2)*.25+.75,g=1,W=R.hsv(i,P,g);n.position.push(B,1),n.color.push(W.rgb()),n.position.push(B,0),n.color.push(W.brighten().desaturate().rgb())}var F=c.qX(r,n),_=[0,0,0,1],f=[0,0,0,0],S=[1,2,0,0],K={u_matrix:t.identity(),u_offsets:_,u_centers:f,u_mult:S};requestAnimationFrame(l)}}},[]),(0,M.jsx)("canvas",{ref:v,width:800,height:300})};y.default=T}}]);
