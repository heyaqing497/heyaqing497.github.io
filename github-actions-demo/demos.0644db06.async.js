"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{43569:function(Q,D,a){a.d(D,{p:function(){return m}});var A=a(27424),P=a.n(A),z=a(19474),v=a(67294),M=function(){};function m(n,d){var l=(0,v.useRef)(),h=(0,z.Z)(n),o=P()(h,1),u=o[0],e=(0,v.useCallback)(function(){var s=d();return s||M},[]);return(0,v.useEffect)(function(){!u&&l.current?cancelAnimationFrame(l.current):u&&(l.current=requestAnimationFrame(e))},[u]),l}},16894:function(Q,D,a){a.r(D);var A=a(67294),P=a(85893),z=function(){var M=(0,A.useRef)(null);return(0,A.useEffect)(function(){var m=M.current,n=m==null?void 0:m.getContext("experimental-webgl");if(n){var d=function i(){rotateX(L),rotateY(L),rotateZ(L),n.uniformMatrix4fv(S,!1,new Float32Array(r)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,f.length/3),requestAnimationFrame(i)},l=`precision highp float;
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
      `,o=n.createShader(n.VERTEX_SHADER),u=n.createShader(n.FRAGMENT_SHADER),e=n.createProgram();n.shaderSource(o,l),n.shaderSource(u,h),n.compileShader(o),n.compileShader(u),n.attachShader(e,o),n.attachShader(e,u),n.linkProgram(e),n.useProgram(e);var s=function(F,C,T,w,x){var E=new Array,b=-w;function B(N,U,X){for(var Y=0,O=360/N,W=new Array,Z=0;Z<N;Z++)W.push(Math.sin(Math.PI/180*Y)*X,Math.cos(Math.PI/180*Y)*X,U),Y+=O;return W}for(var R=360/x,y=0,b=w,H=0,j=R,g=0;g<x/2;g++){if(g>=x/4)var V=Math.sin(Math.PI/180*y)*-w;else var V=Math.sin(Math.PI/180*y)*-w;y+=R;var _=B(x,V,b);g>=x/4?V=Math.sin(Math.PI/180*y)*-w:V=-Math.sin(Math.PI/180*y)*-w,b=Math.sqrt(w*w-w*Math.sin(Math.PI/180*y)*w*Math.sin(Math.PI/180*y));for(var c=B(x,V,b),t=0;t<_.length;t+=3)t==0?(E.push(_[t],_[t+1],_[t+2]),E.push(c[t],c[t+1],c[t+2]),E.push(_[_.length-3],_[_.length-2],_[_.length-1]),E.push(_[t],_[t+1],_[t+2]),E.push(c[t],c[t+1],c[t+2]),E.push(c[t+3],c[t+4],c[t+5])):t==_.length-3?(E.push(_[t],_[t+1],_[t+2]),E.push(c[t],c[t+1],c[t+2]),E.push(_[t-3],_[t-2],_[t-1]),E.push(_[t],_[t+1],_[t+2]),E.push(c[t],c[t+1],c[t+2]),E.push(c[0],c[1],c[2])):(E.push(_[t],_[t+1],_[t+2]),E.push(c[t],c[t+1],c[t+2]),E.push(_[t-3],_[t-2],_[t-1]),E.push(_[t],_[t+1],_[t+2]),E.push(c[t],c[t+1],c[t+2]),E.push(c[t+3],c[t+4],c[t+5]))}return E},f=s(0,0,0,.5,180),p=n.getAttribLocation(e,"position"),S=n.getUniformLocation(e,"mat"),r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];a.g.rotateX=function(i){var F=Math.cos(Math.PI/180*i),C=Math.sin(Math.PI/180*i),T=r[1],w=r[5],x=r[9];r[1]=F*r[1]-C*r[2],r[5]=F*r[5]-C*r[6],r[9]=F*r[9]-C*r[10],r[2]=C*T+F*r[2],r[6]=C*w+F*r[6],r[10]=C*x+F*r[10]},a.g.rotateY=function(i){var F=Math.cos(Math.PI/180*i),C=Math.sin(Math.PI/180*i),T=r[0],w=r[8],x=r[4];r[0]=F*r[0]+C*r[2],r[4]=F*r[4]+C*r[6],r[8]=F*r[8]+C*r[10],r[2]=F*r[2]-C*T,r[6]=F*r[6]-C*x,r[10]=F*r[10]-C*w},a.g.rotateZ=function(i){var F=Math.cos(Math.PI/180*i),C=Math.sin(Math.PI/180*i),T=r[0],w=r[4],x=r[8];r[0]=F*r[0]-C*r[1],r[4]=F*r[4]-C*r[5],r[8]=F*r[8]-C*r[9],r[1]=C*T+F*r[1],r[5]=C*w+F*r[5],r[9]=C*x+F*r[9]},a.g.moveX=function(i){r[0]=r[0]+i*r[3],r[4]=r[4]+i*r[7],r[8]=r[8]+i*r[11],r[12]=r[12]+i*r[15]},a.g.moveY=function(i){r[1]=i*r[3]+r[1],r[5]=i*r[7]+r[5],r[9]=i*r[11]+r[9],r[13]=i*r[15]+r[13]},a.g.moveZ=function(i){r[2]=i*r[3]+r[2],r[6]=i*r[7]+r[6],r[10]=i*r[11]+r[10],r[14]=i*r[15]+r[14]},a.g.scaleFun=function(i){r[0]=i*r[0],r[4]=i*r[4],r[8]=i*r[8],r[12]=i*r[12],r[1]=i*r[1],r[5]=i*r[5],r[9]=i*r[9],r[13]=i*r[13],r[2]=i*r[2],r[6]=i*r[6],r[10]=i*r[10],r[14]=i*r[14]};var I=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,new Float32Array(f),n.STATIC_DRAW),n.vertexAttribPointer(p,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(p);var K=.05,L=.5;d()}},[]),(0,P.jsx)("canvas",{ref:M,width:"200",height:"200"})};D.default=z},27246:function(Q,D,a){a.r(D);var A=a(67294),P=a(85893),z=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,v=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,M=function(){var n=(0,A.useRef)(null);function d(o,u,e,s,f){var p,S,r,I;return p=o*Math.pow(1-f,3),S=3*u*f*Math.pow(1-f,2),r=3*e*Math.pow(f,2)*(1-f),I=s*Math.pow(f,3),p+S+r+I}function l(o,u,e,s,f,p){return{x:d(o.x,u.x,e.x,s.x,f*p),y:d(o.y,u.y,e.y,s.y,f*p),z:d(o.z,u.z,e.z,s.z,f*p)}}function h(o,u,e,s,f,p){for(var S=f||100,r=p||1,I=r/(S-1),K=[],L=0;L<S;L++){var i=l(o,u,e,s,L,I);K.push(i.x),K.push(i.y),K.push(i.z)}return K}return(0,A.useEffect)(function(){var o=n.current,u=o==null?void 0:o.getContext("webgl");if(u){var e=u.createShader(u.VERTEX_SHADER),s=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(e,z),u.shaderSource(s,v),u.compileShader(e);var f=u.getShaderParameter(e,u.COMPILE_STATUS);if(!f)throw new Error("compile Shader is failed");u.compileShader(s);var p=u.getShaderParameter(s,u.COMPILE_STATUS);if(!p)throw new Error("compile Shader is failed");var S=u.createProgram();u.attachShader(S,e),u.attachShader(S,s),u.linkProgram(S);var r=u.getProgramParameter(S,u.LINK_STATUS);if(!r)throw new Error("link Shader is failed");u.useProgram(S);var I=u.getAttribLocation(S,"a_Position"),K=u.getUniformLocation(S,"u_FragColor");u.uniform4fv(K,[0,1,1,1]);var L=h({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),i=new Float32Array(L),F=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,F),u.bufferData(u.ARRAY_BUFFER,i,u.STATIC_DRAW),u.vertexAttribPointer(I,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(I),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,L.length/3)}},[]),(0,P.jsx)("canvas",{ref:n,width:"300",height:"200"})};D.default=M},38952:function(Q,D,a){a.r(D);var A=a(67294),P=a(85893),z=function(){var M=(0,A.useRef)(null);return(0,A.useEffect)(function(){var m=M.current,n=m==null?void 0:m.getContext("webgl");if(n){var d=function(E,B,R,y,b,H,j,g,V){var _=function(O){var W=Math.sqrt(O[0]*O[0]+O[1]*O[1]+O[2]*O[2]);return[O[0]/W,O[1]/W,O[2]/W]},c=function(O,W){return[O[0]-W[0],O[1]-W[1],O[2]-W[2]]},t=function(O,W){return[O[1]*W[2]-O[2]*W[1],O[2]*W[0]-O[0]*W[2],O[0]*W[1]-O[1]*W[0]]},N=_(c([E,B,R],[y,b,H])),U=_(t([j,g,V],N)),X=_(t(N,U));return new Float32Array([U[0],X[0],N[0],0,U[1],X[1],N[1],0,U[2],X[2],N[2],0,-(U[0]*E+U[1]*B+U[2]*R),-(X[0]*E+X[1]*B+X[2]*R),-(N[0]*E+N[1]*B+N[2]*R),1])},l=function(E){return Math.PI*E/180},h=function(E,B,R,y){E=l(E);var b=1/Math.tan(E/2),H=1/(R-y);return new Float32Array([b/B,0,0,0,0,b,0,0,0,0,(y+R)*H,-1,0,0,2*y*R*H,0])},o=`
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
        `,e=n.createShader(n.VERTEX_SHADER);n.shaderSource(e,o),n.compileShader(e);var s=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(s,u),n.compileShader(s);var f=n.createProgram();n.attachShader(f,e),n.attachShader(f,s),n.linkProgram(f),n.useProgram(f),n.program=f;var p=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),S=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),r=p.BYTES_PER_ELEMENT,I=n.createBuffer(),K=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,p,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,K),n.bufferData(n.ELEMENT_ARRAY_BUFFER,S,n.STATIC_DRAW);var L=n.getAttribLocation(n.program,"a_Position"),i=n.getAttribLocation(n.program,"a_Color"),F=n.getUniformLocation(n.program,"u_ViewMatrix"),C=d(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(F,!1,C);var T=n.getUniformLocation(n.program,"u_ProjMatrix"),w=h(30,m.width/m.height,1,100);n.uniformMatrix4fv(T,!1,w),n.vertexAttribPointer(L,3,n.FLOAT,!1,r*6,0),n.enableVertexAttribArray(L),n.vertexAttribPointer(i,3,n.FLOAT,!1,r*6,r*3),n.enableVertexAttribArray(i),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,S.length,n.UNSIGNED_BYTE,0)}},[]),(0,P.jsx)("canvas",{ref:M,width:"200",height:"200"})};D.default=z},63296:function(Q,D,a){a.r(D);var A=a(67294),P=a(85893),z=function(){var M=(0,A.useRef)(null);return(0,A.useEffect)(function(){var m=M.current,n=m==null?void 0:m.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,P.jsx)("canvas",{ref:M,width:"100",height:"100"})};D.default=z},2795:function(Q,D,a){a.r(D);var A=a(67294),P=a(85893),z=function(){var M=(0,A.useRef)(null);return(0,A.useEffect)(function(){var m=M.current,n=m==null?void 0:m.getContext("webgl");if(n){var d=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,l=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,h=n.createShader(n.VERTEX_SHADER),o=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(h,d),n.shaderSource(o,l),n.compileShader(h),n.compileShader(o);var u=n.createProgram();n.attachShader(u,h),n.attachShader(u,o),n.linkProgram(u),n.useProgram(u);var e=new Float32Array([1,1,-1,1,1,-1,-1,-1]),s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW);var f=n.getAttribLocation(u,"a_Position");n.vertexAttribPointer(f,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(f),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,P.jsx)("canvas",{ref:M,width:"100",height:"100"})};D.default=z},44091:function(Q,D,a){a.r(D);var A=a(67294),P=a(99477),z=a(85893),v=function(){var m=(0,A.useRef)(null);return(0,A.useEffect)(function(){var n=m.current,d=10,l=10,h;function o(){d=n.clientWidth,l=n.clientHeight,h=new P.CP7({antialias:!0}),h.setSize(d,l),n.appendChild(h.domElement),h.setClearColor(16777215,1)}var u;function e(){u=new P.cPb(45,d/l,1,1e4),u.position.x=0,u.position.y=2,u.position.z=1,u.up.x=0,u.up.y=0,u.up.z=1,u.lookAt(new P.Pa4(0,0,0))}var s;function f(){s=new P.xsS}var p;function S(){var L=new P.DvJ(1,1,1),i=new P.YBo({color:16777215});p=new P.Kj0(L,i),s.add(p)}function r(){var L=new P.cek(16711680);L.position.set(1,1,-1);var i=new P.cek(65280);i.position.set(1,-1,1),s.add(L),s.add(i)}function I(){p.rotation.x+=.01,p.rotation.y+=.01,h.render(s,u),requestAnimationFrame(I)}function K(){o(),e(),f(),S(),r(),I()}K()},[]),(0,z.jsx)("div",{ref:m,style:{width:150,height:150}})};D.default=v},548:function(Q,D,a){a.r(D);var A=a(27424),P=a.n(A),z=a(69234),v=a(53313),M=a(87269),m=a.n(M),n=a(67294),d=a(48460),l=a(85893),h=function(){var u=(0,n.useRef)(null),e=(0,n.useState)(!0),s=P()(e,2),f=s[0],p=s[1],S=(0,n.useState)(!1),r=P()(S,2),I=r[0],K=r[1],L=(0,n.useState)(0),i=P()(L,2),F=i[0],C=i[1];(0,z.Z)(function(){C(F+1)},1e3);var T=(0,n.useRef)(),w=new(window.AudioContext||window.webkitAudioContext),x=(0,n.useRef)(w),E=M.create({context:w,loop:!0}),B=(0,n.useRef)(E),R=w.createAnalyser(),y=(0,n.useRef)(R),b=function(){K(!0),B.current.play(),x.current.resume().then(function(){B.current.play(),B.current.getSource().connect(y.current),y.current.connect(x.current.destination)})},H=function(){if(u.current){var V=u.current,_=V.getContext("webgl"),c=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(d.j_({attribPrefix:"a_"}),_){for(var t=function nu(){_&&(d.Lo(V),_.viewport(0,0,_.canvas.width,_.canvas.height),_.clearColor(0,0,0,1),_.clear(_.COLOR_BUFFER_BIT),_.lineWidth(2),_.useProgram(X.program),y.current.getByteFrequencyData(W),d.Ss(_,eu.attribs.a_height,W),d.o8(_,X,eu),d.y0(_,eu,_.LINE_STRIP),T.current=requestAnimationFrame(nu))},N=`  
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
        `,U=`  
          precision mediump float; // \u5B9A\u4E49\u7247\u6BB5\u7740\u8272\u5668\u4F7F\u7528\u7684\u7CBE\u5EA6

          // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u6765\u7684\u989C\u8272\u53D8\u91CF
          varying vec4 v_color; // \u7528\u4E8E\u4F20\u9012\u989C\u8272

          // \u7247\u6BB5\u7740\u8272\u5668\u7684\u4E3B\u51FD\u6570
          void main() {
            gl_FragColor = v_color; // \u8BBE\u7F6E\u7247\u6BB5\u7684\u989C\u8272\u4E3A\u63A5\u6536\u5230\u7684\u989C\u8272
          }
        `,X=d.EK(_,[N,U]),Y=y.current.frequencyBinCount*(c?.25:1)|0,O=new Float32Array(Y),W=new Uint8Array(Y),Z=0;Z<Y;++Z)O[Z]=Z/Y*2-1;var au={spread:{data:O,numComponents:1},height:{data:W,numComponents:1,drawType:_.DYNAMIC_DRAW}},eu=d.qX(_,au);T.current=requestAnimationFrame(t)}}};(0,n.useEffect)(function(){I&&(b(),H())},[I]),(0,n.useEffect)(function(){B.current.on("error",function(g){console.error("audio error:",g)}),B.current.on("newSource",function(){p(!1)}),B.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var j=function(){K(!1),B.current.stop(),T.current&&cancelAnimationFrame(T.current)};return(0,l.jsxs)(l.Fragment,{children:[I&&(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)("canvas",{ref:u,width:800,height:300}),(0,l.jsx)("div",{children:(0,l.jsx)(v.ZP,{type:"primary",onClick:function(){return j()},children:"\u505C\u6B62"})})]}),!f&&!I&&(0,l.jsx)(v.ZP,{type:"primary",onClick:function(){return K(!0)},children:"\u64AD\u653E"}),f&&(0,l.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",F,"\u79D2\uFF09..."]})]})};D.default=h},85790:function(Q,D,a){a.r(D);var A=a(28670),P=a.n(A),z=a(67294),v=a(48460),M=a(43569),m=a(85893),n=function(){var l=(0,z.useRef)(null),h=(0,M.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl");v.j_({attribPrefix:"a_"});var e=v.m4;if(u){for(var s=function(H,j){return H+Math.random()*(j-H)},f=function b(H){if(u){var j=H;j*=.001,v.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var g=e.perspective(30*Math.PI/180,o.clientWidth/o.clientHeight,.5,100),V=[1,4,-20],_=[0,0,0],c=[0,1,0];e.lookAt(V,_,c,i),e.inverse(i,F),e.multiply(g,F,C),w.forEach(function(t){var N=t.uniforms,U=N.u_world;e.identity(U),e.rotateY(U,j*t.ySpeed,U),e.rotateZ(U,j*t.zSpeed,U),e.translate(U,t.translation,U),e.rotateX(U,j,U),e.transpose(e.inverse(U,N.u_worldInverseTranspose),N.u_worldInverseTranspose),e.multiply(C,N.u_world,N.u_worldViewProjection)}),v.bV(u,x),h.current=requestAnimationFrame(b)}},p=`  
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
        `,S=`  
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
        `,r=v.EK(u,[p,S]),I=[v.S6.createCubeBufferInfo(u,2),v.S6.createSphereBufferInfo(u,1,24,12),v.S6.createPlaneBufferInfo(u,2,2),v.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1),v.S6.createCresentBufferInfo(u,1,1,.5,.1,24),v.S6.createCylinderBufferInfo(u,1,2,24,2),v.S6.createDiscBufferInfo(u,1,24),v.S6.createTorusBufferInfo(u,1,.4,24,12)],K=[1,8,-10],L=[1,1,1,1],i=e.identity(),F=e.identity(),C=e.identity(),T=v.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),w=[],x=[],E=100,B=s(0,360),R=0;R<E;++R){var y={u_lightWorldPos:K,u_lightColor:L,u_diffuseMult:A.hsv((B+s(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:T,u_viewInverse:i,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};x.push({programInfo:r,bufferInfo:I[R%I.length],uniforms:y}),w.push({translation:[s(-10,10),s(-10,10),s(-10,10)],ySpeed:s(.1,.3),zSpeed:s(.1,.3),uniforms:y})}return h.current=requestAnimationFrame(f),f}}});return(0,m.jsx)("canvas",{ref:l,width:800,height:300})};D.default=n},14929:function(Q,D,a){a.r(D);var A=a(28670),P=a.n(A),z=a(67294),v=a(48460),M=a(43569),m=a(85893),n=function(){var l=(0,z.useRef)(null),h=(0,M.p)(l,function(){if(l.current){var o=l.current,u=v.m4,e=o.getContext("webgl");if(e){var s=function(c,t){return c+Math.random()*(t-c)},f=function(c){if(T){T.font="20px monospace";var t=T.measureText(c);return T.canvas.width=Math.ceil(t.width)+2,T.canvas.height=24,T.font="20px monospace",T.fillStyle="white",T.textAlign="center",T.textBaseAlign="middle",T.fillText(c,T.canvas.width/2|0,T.canvas.height/2|0),T.canvas}},p=function _(c){if(e){var t=c;t*=.001,v.Lo(o),e.viewport(0,0,e.canvas.width,e.canvas.height),e.enable(e.DEPTH_TEST),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.clearColor(V[0],V[1],V[2],V[3]),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);var N=u.perspective(30*Math.PI/180,o.clientWidth/o.clientHeight,.5,100),U=[1,4,-20],X=[0,0,0],Y=[0,1,0];u.lookAt(U,X,Y,L),u.inverse(L,i),u.multiply(N,i,F),E.forEach(function(O){var W=O.uniforms,Z=O.texInfo;u.identity(C),u.rotateY(C,t*O.ySpeed,C),u.rotateZ(C,t*O.zSpeed,C),u.translate(C,O.translation,C),u.rotateX(C,t,C),u.scale(C,Z.scale,C),u.multiply(i,C,C),u.multiply(N,C,W.u_worldViewProjection)}),v.bV(e,B),h.current=requestAnimationFrame(_)}},S=`
          uniform mat4 u_worldViewProjection;

          attribute vec4 a_position;
          attribute vec2 a_texcoord;
          
          varying vec2 v_texcoord;
          
          void main() {
            v_texcoord = a_texcoord;
            gl_Position = u_worldViewProjection * a_position;
          }
        `,r=`  
          precision mediump float;

          varying vec2 v_texcoord;
          uniform sampler2D u_texture;
          uniform vec4 u_color;
          
          void main() {
            vec4 color = texture2D(u_texture, v_texcoord) * u_color;
            if (color.a < 0.1) {
              discard;
            }
            gl_FragColor = color;
          }
        `,I=v.EK(e,[S,r]),K=v.S6.createPlaneBufferInfo(e,1,1,1,1,u.rotationX(Math.PI*.5)),L=u.identity(),i=u.identity(),F=u.identity(),C=u.identity(),T=document.createElement("canvas").getContext("2d"),w=["al","joe","jill","brian","thomas","chrissy","jennifer","alexander"];e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);for(var x=w.map(function(_){var c=f(_),t=.01;return{tex:v.cU(e,{src:c}),scale:[c.width*t,c.height*t,1]}}),E=[],B=[],R=500,y=s(0,360),b=0;b<R;++b){var H=s(0,x.length)|0,j=x[H],g={u_texture:j.tex,u_worldViewProjection:u.identity(),u_color:A.hsv((y+s(0,60))%360,1,1).gl()};B.push({programInfo:I,bufferInfo:K,uniforms:g}),E.push({translation:[s(-10,10),s(-10,10),s(-10,10)],ySpeed:s(.1,.3),zSpeed:s(.1,.3),uniforms:g,texInfo:j})}var V=A.hsv((y+30)%360,.5,.5).gl();return h.current=requestAnimationFrame(p),p}}});return(0,m.jsx)("canvas",{ref:l,width:800,height:500})};D.default=n},99038:function(Q,D,a){a.r(D);var A=a(28670),P=a.n(A),z=a(67294),v=a(48460),M=a(43569),m=a(85893),n=function(){var l=(0,z.useRef)(null),h=(0,M.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl");v.j_({attribPrefix:"a_"});var e=v.m4;if(u){var s=function(G){E&&(E.fillStyle="#00f",E.strokeStyle="#ff0",E.lineWidth=10,E.fillRect(0,0,E.canvas.width,E.canvas.height),E.beginPath(),E.arc(E.canvas.width/2,E.canvas.height/2,E.canvas.width/2.2*Math.abs(Math.cos(G)),0,Math.PI*2),E.stroke())},f=function nu(G){if(u){var k=G;k*=.001,v.Lo(o),u.viewport(0,0,o.clientWidth,o.clientHeight),u.enable(u.DEPTH_TEST),u.enable(u.BLEND),u.blendFunc(u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var q=20,$=k*.1,ou=e.perspective(30*Math.PI/180,u.canvas.width/u.canvas.height,.5,100),iu=[Math.cos($)*q,4,Math.sin($)*q],vu=[0,0,0],su=[0,1,0];e.lookAt(iu,vu,su,T),e.inverse(T,w),e.multiply(ou,w,x),s(k),E&&v.Mh(u,c.fromCanvas,E.canvas),U.forEach(function(tu){var uu=tu.uniforms,J=uu.u_world;e.identity(J),e.rotateY(J,k*tu.ySpeed,J),e.rotateZ(J,k*tu.zSpeed,J),e.translate(J,tu.translation,J),e.rotateX(J,k,J),e.transpose(e.inverse(J,uu.u_worldInverseTranspose),uu.u_worldInverseTranspose),e.multiply(x,uu.u_world,uu.u_worldViewProjection)}),v.bV(u,X),h.current=requestAnimationFrame(nu)}},p=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,S=`  
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
        `,I=`  
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
        `,K=v.EK(u,[p,S]),L=v.EK(u,[r,I]),i=[v.S6.createCubeBufferInfo(u,2),v.S6.createSphereBufferInfo(u,1,24,12),v.S6.createPlaneBufferInfo(u,2,2),v.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],F=function(G,k){var q=G,$=k;return $===void 0&&($=q,q=0),q+Math.random()*($-q)},C=F(360),T=e.identity(),w=e.identity(),x=e.identity(),E=document.createElement("canvas").getContext("2d");E&&(E.canvas.width=64,E.canvas.height=64),s(0);var B=document.createElement("canvas").getContext("2d"),R=40;if(B){B.canvas.width=R*6,B.canvas.height=R,B.fillStyle="#888";for(var y=0;y<6;++y){var b=A.hsv((C+y*10)%360,1-y/6,1);B.fillStyle=b.darken().hex(),B.fillRect(R*y,0,R,R),B.save(),B.translate(R*(y+.5),R*.5),B.beginPath(),B.arc(0,0,R*.3,0,Math.PI*2),B.fillStyle=b.hex(),B.fill(),B.restore()}}for(var H=[],j=0;j<6;++j){var g=document.createElement("canvas");g.width=128,g.height=128;var V=g.getContext("2d"),_=A.hsv((C+j*10)%360,1-j/6,1);V&&(V.fillStyle=_.darken().hex(),V.fillRect(0,0,128,128),V.translate(64,64),V.rotate(Math.PI*.25),V.fillStyle=_.hex(),V.fillRect(-40,-40,80,80)),H.push(g)}for(var c=v.cE(u,{hftIcon:{src:"images/hft-icon-16.png",mag:u.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:E==null?void 0:E.canvas},yokohama:{target:u.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:u.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:u.NEAREST,min:u.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:u.NEAREST,min:u.LINEAR,format:u.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:u.TEXTURE_CUBE_MAP,format:u.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:u.TEXTURE_CUBE_MAP,src:B==null?void 0:B.canvas},cubemapFrom6Canvases:{target:u.TEXTURE_CUBE_MAP,src:H}}),t=[c.checker,c.stripe,c.hftIcon,c.clover,c.fromCanvas],N=[c.yokohama,c.goldengate,c.cubemapFromCanvas,c.cubemapFrom6Canvases,c.cubemapFromArray],U=[],X=[],Y=100,O=0;O<Y;++O){var W=void 0,Z=void 0,au=void 0,eu=F(0,2)|0;switch(eu){case 0:au=i[O%i.length],Z=K,W={u_diffuseMult:A.hsv((C+F(0,60))%360,.4,.8).gl(),u_diffuse:t[F(0,t.length)|0],u_viewInverse:T,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};break;case 1:au=F(0,2)<1?i[1]:i[3],Z=L,W={u_texture:N[F(0,N.length)|0],u_viewInverse:T,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};break;default:throw"wAT!"}X.push({programInfo:Z,bufferInfo:au,uniforms:W}),U.push({translation:[F(-10,10),F(-10,10),F(-10,10)],ySpeed:F(.1,.3),zSpeed:F(.1,.3),uniforms:W})}return h.current=requestAnimationFrame(f),f}}});return(0,m.jsx)("canvas",{ref:l,width:800,height:300})};D.default=n},52246:function(Q,D,a){a.r(D);var A=a(67294),P=a(48460),z=a(85893),v=function(){var m=(0,A.useRef)(null);return(0,A.useEffect)(function(){if(m.current){var n=m.current,d=n.getContext("webgl");if(d){var l=function(){d&&(P.Lo(n),d.viewport(0,0,h,o),d.clear(d.COLOR_BUFFER_BIT),d.useProgram(s.program),P.o8(d,s,f),d.drawElements(d.TRIANGLES,f.numElements,d.UNSIGNED_SHORT,0))},h=d.canvas.width,o=d.canvas.height,u=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,e=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,s=P.EK(d,[u,e]),f=P.qX(d,{position:[-1,-1,0,.5,1,0,1,0,0],indices:[0,1,2]});l()}}},[]),(0,z.jsx)("canvas",{ref:m,width:100,height:100})};D.default=v},11696:function(Q,D,a){a.r(D);var A=a(67294),P=a(48460),z=a(43569),v=a(85893),M=function(){var n=(0,A.useRef)(null),d=(0,z.p)(n,function(){if(n.current){var l=n.current,h=P.m4,o=l.getContext("webgl");if(o){var u=function K(L){if(o){var i=L;i*=.001,P.Lo(l),o.viewport(0,0,o.canvas.width,o.canvas.height),o.enable(o.DEPTH_TEST),o.enable(o.CULL_FACE),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var F=30*Math.PI/180,C=o.canvas.width/o.canvas.height,T=.5,w=10,x=h.perspective(F,C,T,w),E=[1,4,-6],B=[0,0,0],R=[0,1,0],y=h.lookAt(E,B,R),b=h.inverse(y),H=h.multiply(x,b),j=h.rotationY(i);I.u_viewInverse=y,I.u_world=j,I.u_worldInverseTranspose=h.transpose(h.inverse(j)),I.u_worldViewProjection=h.multiply(H,j),o.useProgram(f.program),P.o8(o,f,S),P.N9(f,I),o.drawElements(o.TRIANGLES,S.numElements,o.UNSIGNED_SHORT,0),d.current=requestAnimationFrame(K)}},e=`
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
        `,s=`  
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
        `,f=P.EK(o,[e,s]),p={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},S=P.qX(o,p),r=P.cU(o,{min:o.NEAREST,mag:o.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),I={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:r};return d.current=requestAnimationFrame(u),u}}});return(0,v.jsx)("canvas",{ref:n,width:100,height:100})};D.default=M},41732:function(Q,D,a){a.r(D);var A=a(28670),P=a.n(A),z=a(67294),v=a(48460),M=a(43569),m=a(85893),n=function(){var l=(0,z.useRef)(null),h=(0,M.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl"),e=v.m4;if(v.j_({attribPrefix:"a_"}),u){for(var s=function(j,g){return j+Math.random()*(g-j)},f=function H(j){if(u){var g=j;g*=.001,v.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),B[0]=Math.sin(g),B[1]=Math.sin(g*.13)*Math.PI*2,B[2]=Math.sin(g*.43)*.5+1,B[3]=Math.cos(g*.17)*.5+.5,R[0]=Math.sin(g*.163)*.5,R[1]=Math.cos(g*.267)*.5,R[2]=Math.sin(g*.367)*.5,R[3]=Math.cos(g*.497)*.5,y[1]=(Math.sin(g*.1)*.5+.5)*3;var V=o.clientWidth/o.clientHeight;e.ortho(-V,V,1,-1,-1,1,b.u_matrix),u.useProgram(r.program),v.o8(u,r,E),v.N9(r,b),v.y0(u,E,u.LINES),h.current=requestAnimationFrame(H)}},p=`  
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
        `,S=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,r=v.EK(u,[p,S]),I=100,K={position:v.S6.createAugmentedTypedArray(2,I*2),color:v.S6.createAugmentedTypedArray(3,I*2,Uint8Array)},L=s(0,360),i=0;i<I;++i){var F=i/I,C=(360+L+Math.abs(F-.5)*100)%360,T=Math.sin(F*Math.PI*2)*.25+.75,w=1,x=A.hsv(C,T,w);K.position.push(F,1),K.color.push(x.rgb()),K.position.push(F,0),K.color.push(x.brighten().desaturate().rgb())}var E=v.qX(u,K),B=[0,0,0,1],R=[0,0,0,0],y=[1,2,0,0],b={u_matrix:e.identity(),u_offsets:B,u_centers:R,u_mult:y};return h.current=requestAnimationFrame(f),f}}});return(0,m.jsx)("canvas",{ref:l,width:800,height:300})};D.default=n},52109:function(Q,D,a){a.r(D);var A=a(28670),P=a.n(A),z=a(67294),v=a(48460),M=a(43569),m=a(85893),n=function(){var l=(0,z.useRef)(null),h=(0,M.p)(l,function(){if(l.current){var o=l.current,u=o.getContext("webgl");v.j_({attribPrefix:"a_"});var e=v.m4,s=v.v3;if(u){for(var f=function(nu,G){return nu+Math.random()*(G-nu)},p=function(nu,G,k){var q=k-G,$=nu/.5;return $<1?q/2*$*$+G:-q/2*(--$*($-2)-1)+G},S=function eu(nu){if(u){var G=nu;G*=.001;var k=G-au;au=G,v.Lo(o),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var q=30*Math.PI/180,$=e.perspective(q,o.clientWidth/o.clientHeight,.5,200);if(E-=k,E<=0){E=g,B=0,x=(x+1)%U.length,V=s.copy(R),_=s.copy(y);var ou=U[x];t=ou.translation;var iu=ou.size*ou.scale*H*.5,vu=iu/Math.tan(q*.5),su=s.normalize(s.subtract(R,t));c=s.add(t,s.mulScalar(su,vu))}B+=k;var tu=p(Math.min(1,B/j),0,1);R=s.lerp(V,c,tu),y=s.lerp(_,t,tu),e.lookAt(R,y,b,C),e.inverse(C,T),e.multiply($,T,w),U.forEach(function(uu){var J=uu.uniforms,ru=J.u_world;e.identity(ru),e.translate(ru,uu.translation,ru),e.rotateX(ru,G*uu.xSpeed,ru),e.rotateZ(ru,G*uu.zSpeed,ru),e.scale(ru,[uu.scale,uu.scale,uu.scale],ru),e.transpose(e.inverse(ru,J.u_worldInverseTranspose),J.u_worldInverseTranspose),e.multiply(w,J.u_world,J.u_worldViewProjection)}),v.bV(u,X),h.current=requestAnimationFrame(eu)}},r=`  
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
        `,I=`  
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
        `,K=v.EK(u,[r,I]),L=[v.S6.createCubeBufferInfo(u,2),v.S6.createSphereBufferInfo(u,1,24,12),v.S6.createTruncatedConeBufferInfo(u,1,0,2,24,1)],i=[1,8,-10],F=[1,1,1,1],C=e.identity(),T=e.identity(),w=e.identity(),x=0,E=0,B=0,R=s.copy([1,4,-60]),y=s.copy([0,0,0]),b=[0,1,0],H=1.4,j=2,g=3,V,_,c,t,N=v.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),U=[],X=[],Y=100,O=f(0,360),W=0;W<Y;++W){var Z={u_lightWorldPos:i,u_lightColor:F,u_diffuseMult:A.hsv((O+f(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:N,u_viewInverse:C,u_world:e.identity(),u_worldInverseTranspose:e.identity(),u_worldViewProjection:e.identity()};X.push({programInfo:K,bufferInfo:L[W%L.length],uniforms:Z}),U.push({translation:[f(-50,50),f(-50,50),f(-50,50)],scale:f(1,5),size:2,xSpeed:f(.2,.7),zSpeed:f(.2,.7),uniforms:Z})}var au=0;return h.current=requestAnimationFrame(S),S}}});return(0,m.jsx)("canvas",{ref:l,width:800,height:300})};D.default=n}}]);
