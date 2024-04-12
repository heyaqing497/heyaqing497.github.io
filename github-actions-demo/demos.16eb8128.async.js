"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(uu,R,t){t.r(R);var T=t(67294),D=t(85893),O=function(){var V=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=V.current,u=y==null?void 0:y.getContext("experimental-webgl");if(u){var c=function i(){rotateX(B),rotateY(B),rotateZ(B),u.uniformMatrix4fv(P,!1,new Float32Array(n)),u.clearColor(.5,.5,.5,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,F.length/3),requestAnimationFrame(i)},v=`precision highp float;
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
      `,a=u.createShader(u.VERTEX_SHADER),e=u.createShader(u.FRAGMENT_SHADER),l=u.createProgram();u.shaderSource(a,v),u.shaderSource(e,r),u.compileShader(a),u.compileShader(e),u.attachShader(l,a),u.attachShader(l,e),u.linkProgram(l),u.useProgram(l);var d=function(h,w,M,_,C){var f=new Array,p=-_;function m(X,Z,Y){for(var H=0,x=360/X,W=new Array,$=0;$<X;$++)W.push(Math.sin(Math.PI/180*H)*Y,Math.cos(Math.PI/180*H)*Y,Z),H+=x;return W}for(var j=360/C,S=0,p=_,U=0,N=j,z=0;z<C/2;z++){if(z>=C/4)var K=Math.sin(Math.PI/180*S)*-_;else var K=Math.sin(Math.PI/180*S)*-_;S+=j;var E=m(C,K,p);z>=C/4?K=Math.sin(Math.PI/180*S)*-_:K=-Math.sin(Math.PI/180*S)*-_,p=Math.sqrt(_*_-_*Math.sin(Math.PI/180*S)*_*Math.sin(Math.PI/180*S));for(var A=m(C,K,p),o=0;o<E.length;o+=3)o==0?(f.push(E[o],E[o+1],E[o+2]),f.push(A[o],A[o+1],A[o+2]),f.push(E[E.length-3],E[E.length-2],E[E.length-1]),f.push(E[o],E[o+1],E[o+2]),f.push(A[o],A[o+1],A[o+2]),f.push(A[o+3],A[o+4],A[o+5])):o==E.length-3?(f.push(E[o],E[o+1],E[o+2]),f.push(A[o],A[o+1],A[o+2]),f.push(E[o-3],E[o-2],E[o-1]),f.push(E[o],E[o+1],E[o+2]),f.push(A[o],A[o+1],A[o+2]),f.push(A[0],A[1],A[2])):(f.push(E[o],E[o+1],E[o+2]),f.push(A[o],A[o+1],A[o+2]),f.push(E[o-3],E[o-2],E[o-1]),f.push(E[o],E[o+1],E[o+2]),f.push(A[o],A[o+1],A[o+2]),f.push(A[o+3],A[o+4],A[o+5]))}return f},F=d(0,0,0,.5,180),g=u.getAttribLocation(l,"position"),P=u.getUniformLocation(l,"mat"),n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];t.g.rotateX=function(i){var h=Math.cos(Math.PI/180*i),w=Math.sin(Math.PI/180*i),M=n[1],_=n[5],C=n[9];n[1]=h*n[1]-w*n[2],n[5]=h*n[5]-w*n[6],n[9]=h*n[9]-w*n[10],n[2]=w*M+h*n[2],n[6]=w*_+h*n[6],n[10]=w*C+h*n[10]},t.g.rotateY=function(i){var h=Math.cos(Math.PI/180*i),w=Math.sin(Math.PI/180*i),M=n[0],_=n[8],C=n[4];n[0]=h*n[0]+w*n[2],n[4]=h*n[4]+w*n[6],n[8]=h*n[8]+w*n[10],n[2]=h*n[2]-w*M,n[6]=h*n[6]-w*C,n[10]=h*n[10]-w*_},t.g.rotateZ=function(i){var h=Math.cos(Math.PI/180*i),w=Math.sin(Math.PI/180*i),M=n[0],_=n[4],C=n[8];n[0]=h*n[0]-w*n[1],n[4]=h*n[4]-w*n[5],n[8]=h*n[8]-w*n[9],n[1]=w*M+h*n[1],n[5]=w*_+h*n[5],n[9]=w*C+h*n[9]},t.g.moveX=function(i){n[0]=n[0]+i*n[3],n[4]=n[4]+i*n[7],n[8]=n[8]+i*n[11],n[12]=n[12]+i*n[15]},t.g.moveY=function(i){n[1]=i*n[3]+n[1],n[5]=i*n[7]+n[5],n[9]=i*n[11]+n[9],n[13]=i*n[15]+n[13]},t.g.moveZ=function(i){n[2]=i*n[3]+n[2],n[6]=i*n[7]+n[6],n[10]=i*n[11]+n[10],n[14]=i*n[15]+n[14]},t.g.scaleFun=function(i){n[0]=i*n[0],n[4]=i*n[4],n[8]=i*n[8],n[12]=i*n[12],n[1]=i*n[1],n[5]=i*n[5],n[9]=i*n[9],n[13]=i*n[13],n[2]=i*n[2],n[6]=i*n[6],n[10]=i*n[10],n[14]=i*n[14]};var L=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,L),u.bufferData(u.ARRAY_BUFFER,new Float32Array(F),u.STATIC_DRAW),u.vertexAttribPointer(g,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(g);var I=.05,B=.5;c()}},[]),(0,D.jsx)("canvas",{ref:V,width:"200",height:"200"})};R.default=O},27246:function(uu,R,t){t.r(R);var T=t(67294),D=t(85893),O=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,s=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,V=function(){var u=(0,T.useRef)(null);function c(a,e,l,d,F){var g,P,n,L;return g=a*Math.pow(1-F,3),P=3*e*F*Math.pow(1-F,2),n=3*l*Math.pow(F,2)*(1-F),L=d*Math.pow(F,3),g+P+n+L}function v(a,e,l,d,F,g){return{x:c(a.x,e.x,l.x,d.x,F*g),y:c(a.y,e.y,l.y,d.y,F*g),z:c(a.z,e.z,l.z,d.z,F*g)}}function r(a,e,l,d,F,g){for(var P=F||100,n=g||1,L=n/(P-1),I=[],B=0;B<P;B++){var i=v(a,e,l,d,B,L);I.push(i.x),I.push(i.y),I.push(i.z)}return I}return(0,T.useEffect)(function(){var a=u.current,e=a==null?void 0:a.getContext("webgl");if(e){var l=e.createShader(e.VERTEX_SHADER),d=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(l,O),e.shaderSource(d,s),e.compileShader(l);var F=e.getShaderParameter(l,e.COMPILE_STATUS);if(!F)throw new Error("compile Shader is failed");e.compileShader(d);var g=e.getShaderParameter(d,e.COMPILE_STATUS);if(!g)throw new Error("compile Shader is failed");var P=e.createProgram();e.attachShader(P,l),e.attachShader(P,d),e.linkProgram(P);var n=e.getProgramParameter(P,e.LINK_STATUS);if(!n)throw new Error("link Shader is failed");e.useProgram(P);var L=e.getAttribLocation(P,"a_Position"),I=e.getUniformLocation(P,"u_FragColor");e.uniform4fv(I,[0,1,1,1]);var B=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),i=new Float32Array(B),h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.vertexAttribPointer(L,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(L),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.LINE_STRIP,0,B.length/3)}},[]),(0,D.jsx)("canvas",{ref:u,width:"300",height:"200"})};R.default=V},38952:function(uu,R,t){t.r(R);var T=t(67294),D=t(85893),O=function(){var V=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=V.current,u=y==null?void 0:y.getContext("webgl");if(u){var c=function(f,m,j,S,p,U,N,z,K){var E=function(x){var W=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);return[x[0]/W,x[1]/W,x[2]/W]},A=function(x,W){return[x[0]-W[0],x[1]-W[1],x[2]-W[2]]},o=function(x,W){return[x[1]*W[2]-x[2]*W[1],x[2]*W[0]-x[0]*W[2],x[0]*W[1]-x[1]*W[0]]},X=E(A([f,m,j],[S,p,U])),Z=E(o([N,z,K],X)),Y=E(o(X,Z));return new Float32Array([Z[0],Y[0],X[0],0,Z[1],Y[1],X[1],0,Z[2],Y[2],X[2],0,-(Z[0]*f+Z[1]*m+Z[2]*j),-(Y[0]*f+Y[1]*m+Y[2]*j),-(X[0]*f+X[1]*m+X[2]*j),1])},v=function(f){return Math.PI*f/180},r=function(f,m,j,S){f=v(f);var p=1/Math.tan(f/2),U=1/(j-S);return new Float32Array([p/m,0,0,0,0,p,0,0,0,0,(S+j)*U,-1,0,0,2*S*j*U,0])},a=`
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
        `,l=u.createShader(u.VERTEX_SHADER);u.shaderSource(l,a),u.compileShader(l);var d=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(d,e),u.compileShader(d);var F=u.createProgram();u.attachShader(F,l),u.attachShader(F,d),u.linkProgram(F),u.useProgram(F),u.program=F;var g=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),P=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),n=g.BYTES_PER_ELEMENT,L=u.createBuffer(),I=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,L),u.bufferData(u.ARRAY_BUFFER,g,u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,I),u.bufferData(u.ELEMENT_ARRAY_BUFFER,P,u.STATIC_DRAW);var B=u.getAttribLocation(u.program,"a_Position"),i=u.getAttribLocation(u.program,"a_Color"),h=u.getUniformLocation(u.program,"u_ViewMatrix"),w=c(3,4,8,0,0,0,0,1,0);u.uniformMatrix4fv(h,!1,w);var M=u.getUniformLocation(u.program,"u_ProjMatrix"),_=r(30,y.width/y.height,1,100);u.uniformMatrix4fv(M,!1,_),u.vertexAttribPointer(B,3,u.FLOAT,!1,n*6,0),u.enableVertexAttribArray(B),u.vertexAttribPointer(i,3,u.FLOAT,!1,n*6,n*3),u.enableVertexAttribArray(i),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,P.length,u.UNSIGNED_BYTE,0)}},[]),(0,D.jsx)("canvas",{ref:V,width:"200",height:"200"})};R.default=O},63296:function(uu,R,t){t.r(R);var T=t(67294),D=t(85893),O=function(){var V=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=V.current,u=y==null?void 0:y.getContext("2d");u&&(u.beginPath(),u.moveTo(20,20),u.lineTo(200,20),u.lineWidth=1,u.strokeStyle="#CC0000",u.stroke())},[]),(0,D.jsx)("canvas",{ref:V,width:"100",height:"100"})};R.default=O},2795:function(uu,R,t){t.r(R);var T=t(67294),D=t(85893),O=function(){var V=(0,T.useRef)(null);return(0,T.useEffect)(function(){var y=V.current,u=y==null?void 0:y.getContext("webgl");if(u){var c=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,v=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=u.createShader(u.VERTEX_SHADER),a=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(r,c),u.shaderSource(a,v),u.compileShader(r),u.compileShader(a);var e=u.createProgram();u.attachShader(e,r),u.attachShader(e,a),u.linkProgram(e),u.useProgram(e);var l=new Float32Array([1,1,-1,1,1,-1,-1,-1]),d=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,d),u.bufferData(u.ARRAY_BUFFER,l,u.STATIC_DRAW);var F=u.getAttribLocation(e,"a_Position");u.vertexAttribPointer(F,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(F),u.drawArrays(u.TRIANGLE_STRIP,0,4)}},[]),(0,D.jsx)("canvas",{ref:V,width:"100",height:"100"})};R.default=O},44091:function(uu,R,t){t.r(R);var T=t(67294),D=t(99477),O=t(85893),s=function(){var y=(0,T.useRef)(null);return(0,T.useEffect)(function(){var u=y.current,c=10,v=10,r;function a(){c=u.clientWidth,v=u.clientHeight,r=new D.CP7({antialias:!0}),r.setSize(c,v),u.appendChild(r.domElement),r.setClearColor(16777215,1)}var e;function l(){e=new D.cPb(45,c/v,1,1e4),e.position.x=0,e.position.y=2,e.position.z=1,e.up.x=0,e.up.y=0,e.up.z=1,e.lookAt(new D.Pa4(0,0,0))}var d;function F(){d=new D.xsS}var g;function P(){var B=new D.DvJ(1,1,1),i=new D.YBo({color:16777215});g=new D.Kj0(B,i),d.add(g)}function n(){var B=new D.cek(16711680);B.position.set(1,1,-1);var i=new D.cek(65280);i.position.set(1,-1,1),d.add(B),d.add(i)}function L(){g.rotation.x+=.01,g.rotation.y+=.01,r.render(d,e),requestAnimationFrame(L)}function I(){a(),l(),F(),P(),n(),L()}I()},[]),(0,O.jsx)("div",{ref:y,style:{width:150,height:150}})};R.default=s},548:function(uu,R,t){t.r(R);var T=t(27424),D=t.n(T),O=t(31723),s=t(53313),V=t(87269),y=t.n(V),u=t(67294),c=t(48460),v=t(85893),r=function(){var e=(0,u.useRef)(null),l=(0,u.useState)(!0),d=D()(l,2),F=d[0],g=d[1],P=(0,u.useState)(!1),n=D()(P,2),L=n[0],I=n[1],B=(0,u.useState)(0),i=D()(B,2),h=i[0],w=i[1];(0,O.Z)(function(){w(h+1)},1e3);var M=(0,u.useRef)(),_=new(window.AudioContext||window.webkitAudioContext),C=(0,u.useRef)(_),f=V.create({context:_,loop:!0}),m=(0,u.useRef)(f),j=_.createAnalyser(),S=(0,u.useRef)(j),p=function(){I(!0),m.current.play(),C.current.resume().then(function(){m.current.play(),m.current.getSource().connect(S.current),S.current.connect(C.current.destination)})},U=function(){if(e.current){var K=e.current,E=K.getContext("webgl"),A=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(c.j_({attribPrefix:"a_"}),E){for(var o=function J(){E&&(c.Lo(K),E.viewport(0,0,E.canvas.width,E.canvas.height),E.clearColor(0,0,0,1),E.clear(E.COLOR_BUFFER_BIT),E.lineWidth(2),E.useProgram(Y.program),S.current.getByteFrequencyData(W),c.Ss(E,b.attribs.a_height,W),c.o8(E,Y,b),c.y0(E,b,E.LINE_STRIP),M.current=requestAnimationFrame(J))},X=`  
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
        `,Z=`  
          precision mediump float; // \u5B9A\u4E49\u7247\u6BB5\u7740\u8272\u5668\u4F7F\u7528\u7684\u7CBE\u5EA6

          // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u6765\u7684\u989C\u8272\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272

          // \u7247\u6BB5\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_FragColor = v_color; // \u8BBE\u7F6E\u7247\u6BB5\u7684\u989C\u8272\u4E3A\u63A5\u6536\u5230\u7684\u989C\u8272
          }
        `,Y=c.EK(E,[X,Z]),H=S.current.frequencyBinCount*(A?.25:1)|0,x=new Float32Array(H),W=new Uint8Array(H),$=0;$<H;++$)x[$]=$/H*2-1;var nu={spread:{data:x,numComponents:1},height:{data:W,numComponents:1,drawType:E.DYNAMIC_DRAW}},b=c.qX(E,nu);M.current=requestAnimationFrame(o)}}};(0,u.useEffect)(function(){L&&(p(),U())},[L]),(0,u.useEffect)(function(){m.current.on("error",function(z){console.error("audio error:",z)}),m.current.on("newSource",function(){g(!1)}),m.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var N=function(){I(!1),m.current.stop(),M.current&&cancelAnimationFrame(M.current)};return(0,v.jsxs)(v.Fragment,{children:[L&&(0,v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,v.jsx)("canvas",{ref:e,width:800,height:300}),(0,v.jsx)("div",{children:(0,v.jsx)(s.ZP,{type:"primary",onClick:function(){return N()},children:"\u505C\u6B62"})})]}),!F&&!L&&(0,v.jsx)(s.ZP,{type:"primary",onClick:function(){return I(!0)},children:"\u64AD\u653E"}),F&&(0,v.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",h,"\u79D2\uFF09..."]})]})};R.default=r},85790:function(uu,R,t){t.r(R);var T=t(28670),D=t.n(T),O=t(67294),s=t(48460),V=t(85893),y=function(){var c=(0,O.useRef)(null);return(0,O.useEffect)(function(){if(c.current){var v=c.current,r=v.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4;if(r){for(var e=function(S,p){return S+Math.random()*(p-S)},l=function j(S){if(r){var p=S;p*=.001,s.Lo(v),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var U=a.perspective(30*Math.PI/180,v.clientWidth/v.clientHeight,.5,100),N=[1,4,-20],z=[0,0,0],K=[0,1,0];a.lookAt(N,z,K,I),a.inverse(I,B),a.multiply(U,B,i),w.forEach(function(E){var A=E.uniforms,o=A.u_world;a.identity(o),a.rotateY(o,p*E.ySpeed,o),a.rotateZ(o,p*E.zSpeed,o),a.translate(o,E.translation,o),a.rotateX(o,p,o),a.transpose(a.inverse(o,A.u_worldInverseTranspose),A.u_worldInverseTranspose),a.multiply(i,A.u_world,A.u_worldViewProjection)}),s.bV(r,M),requestAnimationFrame(j)}},d=`  
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
        `,F=`  
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
        `,g=s.EK(r,[d,F]),P=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createPlaneBufferInfo(r,2,2),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1),s.S6.createCresentBufferInfo(r,1,1,.5,.1,24),s.S6.createCylinderBufferInfo(r,1,2,24,2),s.S6.createDiscBufferInfo(r,1,24),s.S6.createTorusBufferInfo(r,1,.4,24,12)],n=[1,8,-10],L=[1,1,1,1],I=a.identity(),B=a.identity(),i=a.identity(),h=s.cU(r,{min:r.NEAREST,mag:r.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),w=[],M=[],_=100,C=e(0,360),f=0;f<_;++f){var m={u_lightWorldPos:n,u_lightColor:L,u_diffuseMult:T.hsv((C+e(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:h,u_viewInverse:I,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};M.push({programInfo:g,bufferInfo:P[f%P.length],uniforms:m}),w.push({translation:[e(-10,10),e(-10,10),e(-10,10)],ySpeed:e(.1,.3),zSpeed:e(.1,.3),uniforms:m})}requestAnimationFrame(l)}}},[]),(0,V.jsx)("canvas",{ref:c,width:800,height:300})};R.default=y},99038:function(uu,R,t){t.r(R);var T=t(28670),D=t.n(T),O=t(67294),s=t(48460),V=t(85893),y=function(){var c=(0,O.useRef)(null);return(0,O.useEffect)(function(){if(c.current){var v=c.current,r=v.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4;if(r){var e=function(b){_&&(_.fillStyle="#00f",_.strokeStyle="#ff0",_.lineWidth=10,_.fillRect(0,0,_.canvas.width,_.canvas.height),_.beginPath(),_.arc(_.canvas.width/2,_.canvas.height/2,_.canvas.width/2.2*Math.abs(Math.cos(b)),0,Math.PI*2),_.stroke())},l=function nu(b){if(r){var J=b;J*=.001,s.Lo(v),r.viewport(0,0,v.clientWidth,v.clientHeight),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var k=20,Q=J*.1,au=a.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),tu=[Math.cos(Q)*k,4,Math.sin(Q)*k],ou=[0,0,0],iu=[0,1,0];a.lookAt(tu,ou,iu,h),a.inverse(h,w),a.multiply(au,w,M),e(J),_&&s.Mh(r,K.fromCanvas,_.canvas),o.forEach(function(eu){var q=eu.uniforms,G=q.u_world;a.identity(G),a.rotateY(G,J*eu.ySpeed,G),a.rotateZ(G,J*eu.zSpeed,G),a.translate(G,eu.translation,G),a.rotateX(G,J,G),a.transpose(a.inverse(G,q.u_worldInverseTranspose),q.u_worldInverseTranspose),a.multiply(M,q.u_world,q.u_worldViewProjection)}),s.bV(r,X),requestAnimationFrame(nu)}},d=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,F=`  
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
        `,P=`  
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
        `,n=s.EK(r,[d,F]),L=s.EK(r,[g,P]),I=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createPlaneBufferInfo(r,2,2),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],B=function(b,J){var k=b,Q=J;return Q===void 0&&(Q=k,k=0),k+Math.random()*(Q-k)},i=B(360),h=a.identity(),w=a.identity(),M=a.identity(),_=document.createElement("canvas").getContext("2d");_&&(_.canvas.width=64,_.canvas.height=64),e(0);var C=document.createElement("canvas").getContext("2d"),f=40;if(C){C.canvas.width=f*6,C.canvas.height=f,C.fillStyle="#888";for(var m=0;m<6;++m){var j=T.hsv((i+m*10)%360,1-m/6,1);C.fillStyle=j.darken().hex(),C.fillRect(f*m,0,f,f),C.save(),C.translate(f*(m+.5),f*.5),C.beginPath(),C.arc(0,0,f*.3,0,Math.PI*2),C.fillStyle=j.hex(),C.fill(),C.restore()}}for(var S=[],p=0;p<6;++p){var U=document.createElement("canvas");U.width=128,U.height=128;var N=U.getContext("2d"),z=T.hsv((i+p*10)%360,1-p/6,1);N&&(N.fillStyle=z.darken().hex(),N.fillRect(0,0,128,128),N.translate(64,64),N.rotate(Math.PI*.25),N.fillStyle=z.hex(),N.fillRect(-40,-40,80,80)),S.push(U)}for(var K=s.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:_==null?void 0:_.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:C==null?void 0:C.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:S}}),E=[K.checker,K.stripe,K.hftIcon,K.clover,K.fromCanvas],A=[K.yokohama,K.goldengate,K.cubemapFromCanvas,K.cubemapFrom6Canvases,K.cubemapFromArray],o=[],X=[],Z=100,Y=0;Y<Z;++Y){var H=void 0,x=void 0,W=void 0,$=B(0,2)|0;switch($){case 0:W=I[Y%I.length],x=n,H={u_diffuseMult:T.hsv((i+B(0,60))%360,.4,.8).gl(),u_diffuse:E[B(0,E.length)|0],u_viewInverse:h,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;case 1:W=B(0,2)<1?I[1]:I[3],x=L,H={u_texture:A[B(0,A.length)|0],u_viewInverse:h,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;default:throw"wAT!"}X.push({programInfo:x,bufferInfo:W,uniforms:H}),o.push({translation:[B(-10,10),B(-10,10),B(-10,10)],ySpeed:B(.1,.3),zSpeed:B(.1,.3),uniforms:H})}requestAnimationFrame(l)}}},[]),(0,V.jsx)("canvas",{ref:c,width:800,height:300})};R.default=y},52246:function(uu,R,t){t.r(R);var T=t(67294),D=t(48460),O=t(85893),s=function(){var y=(0,T.useRef)(null);return(0,T.useEffect)(function(){if(y.current){var u=y.current,c=u.getContext("webgl");if(c){var v=function(){c&&(D.Lo(u),c.viewport(0,0,r,a),c.clear(c.COLOR_BUFFER_BIT),c.useProgram(d.program),D.o8(c,d,F),c.drawElements(c.TRIANGLES,F.numElements,c.UNSIGNED_SHORT,0))},r=c.canvas.width,a=c.canvas.height,e=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,l=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,d=D.EK(c,[e,l]),F=D.qX(c,{position:[-1,-1,0,.5,1,0,1,0,0],indices:[0,1,2]});v()}}},[]),(0,O.jsx)("canvas",{ref:y,width:100,height:100})};R.default=s},11696:function(uu,R,t){t.r(R);var T=t(67294),D=t(48460),O=t(85893),s=function(){var y=(0,T.useRef)(null);return(0,T.useEffect)(function(){if(y.current){var u=y.current,c=D.m4,v=u.getContext("webgl");if(v){var r=function n(L){if(v){var I=L;I*=.001,D.Lo(u),v.viewport(0,0,v.canvas.width,v.canvas.height),v.enable(v.DEPTH_TEST),v.enable(v.CULL_FACE),v.clear(v.COLOR_BUFFER_BIT|v.DEPTH_BUFFER_BIT);var B=30*Math.PI/180,i=v.canvas.width/v.canvas.height,h=.5,w=10,M=c.perspective(B,i,h,w),_=[1,4,-6],C=[0,0,0],f=[0,1,0],m=c.lookAt(_,C,f),j=c.inverse(m),S=c.multiply(M,j),p=c.rotationY(I);P.u_viewInverse=m,P.u_world=p,P.u_worldInverseTranspose=c.transpose(c.inverse(p)),P.u_worldViewProjection=c.multiply(S,p),v.useProgram(l.program),D.o8(v,l,F),D.N9(l,P),v.drawElements(v.TRIANGLES,F.numElements,v.UNSIGNED_SHORT,0),requestAnimationFrame(n)}},a=`
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
        `,l=D.EK(v,[a,e]),d={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},F=D.qX(v,d),g=D.cU(v,{min:v.NEAREST,mag:v.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),P={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:g};requestAnimationFrame(r)}}},[]),(0,O.jsx)("canvas",{ref:y,width:100,height:100})};R.default=s},41732:function(uu,R,t){t.r(R);var T=t(28670),D=t.n(T),O=t(67294),s=t(48460),V=t(85893),y=function(){var c=(0,O.useRef)(null);return(0,O.useEffect)(function(){if(c.current){var v=c.current,r=v.getContext("webgl"),a=s.m4;if(s.j_({attribPrefix:"a_"}),r){for(var e=function(p,U){return p+Math.random()*(U-p)},l=function S(p){if(r){var U=p;U*=.001,s.Lo(v),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),C[0]=Math.sin(U),C[1]=Math.sin(U*.13)*Math.PI*2,C[2]=Math.sin(U*.43)*.5+1,C[3]=Math.cos(U*.17)*.5+.5,f[0]=Math.sin(U*.163)*.5,f[1]=Math.cos(U*.267)*.5,f[2]=Math.sin(U*.367)*.5,f[3]=Math.cos(U*.497)*.5,m[1]=(Math.sin(U*.1)*.5+.5)*3;var N=v.clientWidth/v.clientHeight;a.ortho(-N,N,1,-1,-1,1,j.u_matrix),r.useProgram(g.program),s.o8(r,g,_),s.N9(g,j),s.y0(r,_,r.LINES),requestAnimationFrame(S)}},d=`  
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
        `,F=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,g=s.EK(r,[d,F]),P=100,n={position:s.S6.createAugmentedTypedArray(2,P*2),color:s.S6.createAugmentedTypedArray(3,P*2,Uint8Array)},L=e(0,360),I=0;I<P;++I){var B=I/P,i=(360+L+Math.abs(B-.5)*100)%360,h=Math.sin(B*Math.PI*2)*.25+.75,w=1,M=T.hsv(i,h,w);n.position.push(B,1),n.color.push(M.rgb()),n.position.push(B,0),n.color.push(M.brighten().desaturate().rgb())}var _=s.qX(r,n),C=[0,0,0,1],f=[0,0,0,0],m=[1,2,0,0],j={u_matrix:a.identity(),u_offsets:C,u_centers:f,u_mult:m};requestAnimationFrame(l)}}},[]),(0,V.jsx)("canvas",{ref:c,width:800,height:300})};R.default=y},52109:function(uu,R,t){t.r(R);var T=t(28670),D=t.n(T),O=t(67294),s=t(48460),V=t(85893),y=function(){var c=(0,O.useRef)(null);return(0,O.useEffect)(function(){if(c.current){var v=c.current,r=v.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4,e=s.v3;if(r){for(var l=function(nu,b){return nu+Math.random()*(b-nu)},d=function(nu,b,J){var k=J-b,Q=nu/.5;return Q<1?k/2*Q*Q+b:-k/2*(--Q*(Q-2)-1)+b},F=function $(nu){if(r){var b=nu;b*=.001;var J=b-W;W=b,s.Lo(v),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var k=30*Math.PI/180,Q=a.perspective(k,v.clientWidth/v.clientHeight,.5,200);if(_-=J,_<=0){_=U,C=0,M=(M+1)%o.length,N=e.copy(f),z=e.copy(m);var au=o[M];E=au.translation;var tu=au.size*au.scale*S*.5,ou=tu/Math.tan(k*.5),iu=e.normalize(e.subtract(f,E));K=e.add(E,e.mulScalar(iu,ou))}C+=J;var eu=d(Math.min(1,C/p),0,1);f=e.lerp(N,K,eu),m=e.lerp(z,E,eu),a.lookAt(f,m,j,i),a.inverse(i,h),a.multiply(Q,h,w),o.forEach(function(q){var G=q.uniforms,ru=G.u_world;a.identity(ru),a.translate(ru,q.translation,ru),a.rotateX(ru,b*q.xSpeed,ru),a.rotateZ(ru,b*q.zSpeed,ru),a.scale(ru,[q.scale,q.scale,q.scale],ru),a.transpose(a.inverse(ru,G.u_worldInverseTranspose),G.u_worldInverseTranspose),a.multiply(w,G.u_world,G.u_worldViewProjection)}),s.bV(r,X),requestAnimationFrame($)}},g=`  
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
        `,P=`  
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
        `,n=s.EK(r,[g,P]),L=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],I=[1,8,-10],B=[1,1,1,1],i=a.identity(),h=a.identity(),w=a.identity(),M=0,_=0,C=0,f=e.copy([1,4,-60]),m=e.copy([0,0,0]),j=[0,1,0],S=1.4,p=2,U=3,N,z,K,E,A=s.cU(r,{min:r.NEAREST,mag:r.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),o=[],X=[],Z=100,Y=l(0,360),H=0;H<Z;++H){var x={u_lightWorldPos:I,u_lightColor:B,u_diffuseMult:T.hsv((Y+l(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:A,u_viewInverse:i,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};X.push({programInfo:n,bufferInfo:L[H%L.length],uniforms:x}),o.push({translation:[l(-50,50),l(-50,50),l(-50,50)],scale:l(1,5),size:2,xSpeed:l(.2,.7),zSpeed:l(.2,.7),uniforms:x})}var W=0;requestAnimationFrame(F)}}},[]),(0,V.jsx)("canvas",{ref:c,width:800,height:300})};R.default=y}}]);
