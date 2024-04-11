"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(G,w,a){a.r(w);var R=a(67294),A=a(85893),j=function(){var K=(0,R.useRef)(null);return(0,R.useEffect)(function(){var y=K.current,u=y==null?void 0:y.getContext("experimental-webgl");if(u){var v=function i(){rotateX(C),rotateY(C),rotateZ(C),u.uniformMatrix4fv(D,!1,new Float32Array(n)),u.clearColor(.5,.5,.5,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,l.length/3),requestAnimationFrame(i)},E=`precision highp float;
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
      `,t=u.createShader(u.VERTEX_SHADER),e=u.createShader(u.FRAGMENT_SHADER),B=u.createProgram();u.shaderSource(t,E),u.shaderSource(e,r),u.compileShader(t),u.compileShader(e),u.attachShader(B,t),u.attachShader(B,e),u.linkProgram(B),u.useProgram(B);var d=function(P,S,b,c,F){var s=new Array,m=-c;function O(N,Y,z){for(var X=0,p=360/N,W=new Array,q=0;q<N;q++)W.push(Math.sin(Math.PI/180*X)*z,Math.cos(Math.PI/180*X)*z,Y),X+=p;return W}for(var U=360/F,L=0,m=c,M=0,V=U,H=0;H<F/2;H++){if(H>=F/4)var T=Math.sin(Math.PI/180*L)*-c;else var T=Math.sin(Math.PI/180*L)*-c;L+=U;var _=O(F,T,m);H>=F/4?T=Math.sin(Math.PI/180*L)*-c:T=-Math.sin(Math.PI/180*L)*-c,m=Math.sqrt(c*c-c*Math.sin(Math.PI/180*L)*c*Math.sin(Math.PI/180*L));for(var h=O(F,T,m),o=0;o<_.length;o+=3)o==0?(s.push(_[o],_[o+1],_[o+2]),s.push(h[o],h[o+1],h[o+2]),s.push(_[_.length-3],_[_.length-2],_[_.length-1]),s.push(_[o],_[o+1],_[o+2]),s.push(h[o],h[o+1],h[o+2]),s.push(h[o+3],h[o+4],h[o+5])):o==_.length-3?(s.push(_[o],_[o+1],_[o+2]),s.push(h[o],h[o+1],h[o+2]),s.push(_[o-3],_[o-2],_[o-1]),s.push(_[o],_[o+1],_[o+2]),s.push(h[o],h[o+1],h[o+2]),s.push(h[0],h[1],h[2])):(s.push(_[o],_[o+1],_[o+2]),s.push(h[o],h[o+1],h[o+2]),s.push(_[o-3],_[o-2],_[o-1]),s.push(_[o],_[o+1],_[o+2]),s.push(h[o],h[o+1],h[o+2]),s.push(h[o+3],h[o+4],h[o+5]))}return s},l=d(0,0,0,.5,180),g=u.getAttribLocation(B,"position"),D=u.getUniformLocation(B,"mat"),n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];a.g.rotateX=function(i){var P=Math.cos(Math.PI/180*i),S=Math.sin(Math.PI/180*i),b=n[1],c=n[5],F=n[9];n[1]=P*n[1]-S*n[2],n[5]=P*n[5]-S*n[6],n[9]=P*n[9]-S*n[10],n[2]=S*b+P*n[2],n[6]=S*c+P*n[6],n[10]=S*F+P*n[10]},a.g.rotateY=function(i){var P=Math.cos(Math.PI/180*i),S=Math.sin(Math.PI/180*i),b=n[0],c=n[8],F=n[4];n[0]=P*n[0]+S*n[2],n[4]=P*n[4]+S*n[6],n[8]=P*n[8]+S*n[10],n[2]=P*n[2]-S*b,n[6]=P*n[6]-S*F,n[10]=P*n[10]-S*c},a.g.rotateZ=function(i){var P=Math.cos(Math.PI/180*i),S=Math.sin(Math.PI/180*i),b=n[0],c=n[4],F=n[8];n[0]=P*n[0]-S*n[1],n[4]=P*n[4]-S*n[5],n[8]=P*n[8]-S*n[9],n[1]=S*b+P*n[1],n[5]=S*c+P*n[5],n[9]=S*F+P*n[9]},a.g.moveX=function(i){n[0]=n[0]+i*n[3],n[4]=n[4]+i*n[7],n[8]=n[8]+i*n[11],n[12]=n[12]+i*n[15]},a.g.moveY=function(i){n[1]=i*n[3]+n[1],n[5]=i*n[7]+n[5],n[9]=i*n[11]+n[9],n[13]=i*n[15]+n[13]},a.g.moveZ=function(i){n[2]=i*n[3]+n[2],n[6]=i*n[7]+n[6],n[10]=i*n[11]+n[10],n[14]=i*n[15]+n[14]},a.g.scaleFun=function(i){n[0]=i*n[0],n[4]=i*n[4],n[8]=i*n[8],n[12]=i*n[12],n[1]=i*n[1],n[5]=i*n[5],n[9]=i*n[9],n[13]=i*n[13],n[2]=i*n[2],n[6]=i*n[6],n[10]=i*n[10],n[14]=i*n[14]};var x=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,x),u.bufferData(u.ARRAY_BUFFER,new Float32Array(l),u.STATIC_DRAW),u.vertexAttribPointer(g,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(g);var I=.05,C=.5;v()}},[]),(0,A.jsx)("canvas",{ref:K,width:"200",height:"200"})};w.default=j},27246:function(G,w,a){a.r(w);var R=a(67294),A=a(85893),j=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,f=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,K=function(){var u=(0,R.useRef)(null);function v(t,e,B,d,l){var g,D,n,x;return g=t*Math.pow(1-l,3),D=3*e*l*Math.pow(1-l,2),n=3*B*Math.pow(l,2)*(1-l),x=d*Math.pow(l,3),g+D+n+x}function E(t,e,B,d,l,g){return{x:v(t.x,e.x,B.x,d.x,l*g),y:v(t.y,e.y,B.y,d.y,l*g),z:v(t.z,e.z,B.z,d.z,l*g)}}function r(t,e,B,d,l,g){for(var D=l||100,n=g||1,x=n/(D-1),I=[],C=0;C<D;C++){var i=E(t,e,B,d,C,x);I.push(i.x),I.push(i.y),I.push(i.z)}return I}return(0,R.useEffect)(function(){var t=u.current,e=t==null?void 0:t.getContext("webgl");if(e){var B=e.createShader(e.VERTEX_SHADER),d=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(B,j),e.shaderSource(d,f),e.compileShader(B);var l=e.getShaderParameter(B,e.COMPILE_STATUS);if(!l)throw new Error("compile Shader is failed");e.compileShader(d);var g=e.getShaderParameter(d,e.COMPILE_STATUS);if(!g)throw new Error("compile Shader is failed");var D=e.createProgram();e.attachShader(D,B),e.attachShader(D,d),e.linkProgram(D);var n=e.getProgramParameter(D,e.LINK_STATUS);if(!n)throw new Error("link Shader is failed");e.useProgram(D);var x=e.getAttribLocation(D,"a_Position"),I=e.getUniformLocation(D,"u_FragColor");e.uniform4fv(I,[0,1,1,1]);var C=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),i=new Float32Array(C),P=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,P),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.vertexAttribPointer(x,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(x),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.LINE_STRIP,0,C.length/3)}},[]),(0,A.jsx)("canvas",{ref:u,width:"300",height:"200"})};w.default=K},38952:function(G,w,a){a.r(w);var R=a(67294),A=a(85893),j=function(){var K=(0,R.useRef)(null);return(0,R.useEffect)(function(){var y=K.current,u=y==null?void 0:y.getContext("webgl");if(u){var v=function(s,O,U,L,m,M,V,H,T){var _=function(p){var W=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);return[p[0]/W,p[1]/W,p[2]/W]},h=function(p,W){return[p[0]-W[0],p[1]-W[1],p[2]-W[2]]},o=function(p,W){return[p[1]*W[2]-p[2]*W[1],p[2]*W[0]-p[0]*W[2],p[0]*W[1]-p[1]*W[0]]},N=_(h([s,O,U],[L,m,M])),Y=_(o([V,H,T],N)),z=_(o(N,Y));return new Float32Array([Y[0],z[0],N[0],0,Y[1],z[1],N[1],0,Y[2],z[2],N[2],0,-(Y[0]*s+Y[1]*O+Y[2]*U),-(z[0]*s+z[1]*O+z[2]*U),-(N[0]*s+N[1]*O+N[2]*U),1])},E=function(s){return Math.PI*s/180},r=function(s,O,U,L){s=E(s);var m=1/Math.tan(s/2),M=1/(U-L);return new Float32Array([m/O,0,0,0,0,m,0,0,0,0,(L+U)*M,-1,0,0,2*L*U*M,0])},t=`
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
        `,B=u.createShader(u.VERTEX_SHADER);u.shaderSource(B,t),u.compileShader(B);var d=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(d,e),u.compileShader(d);var l=u.createProgram();u.attachShader(l,B),u.attachShader(l,d),u.linkProgram(l),u.useProgram(l),u.program=l;var g=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),D=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),n=g.BYTES_PER_ELEMENT,x=u.createBuffer(),I=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,x),u.bufferData(u.ARRAY_BUFFER,g,u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,I),u.bufferData(u.ELEMENT_ARRAY_BUFFER,D,u.STATIC_DRAW);var C=u.getAttribLocation(u.program,"a_Position"),i=u.getAttribLocation(u.program,"a_Color"),P=u.getUniformLocation(u.program,"u_ViewMatrix"),S=v(3,4,8,0,0,0,0,1,0);u.uniformMatrix4fv(P,!1,S);var b=u.getUniformLocation(u.program,"u_ProjMatrix"),c=r(30,y.width/y.height,1,100);u.uniformMatrix4fv(b,!1,c),u.vertexAttribPointer(C,3,u.FLOAT,!1,n*6,0),u.enableVertexAttribArray(C),u.vertexAttribPointer(i,3,u.FLOAT,!1,n*6,n*3),u.enableVertexAttribArray(i),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,D.length,u.UNSIGNED_BYTE,0)}},[]),(0,A.jsx)("canvas",{ref:K,width:"200",height:"200"})};w.default=j},63296:function(G,w,a){a.r(w);var R=a(67294),A=a(85893),j=function(){var K=(0,R.useRef)(null);return(0,R.useEffect)(function(){var y=K.current,u=y==null?void 0:y.getContext("2d");u&&(u.beginPath(),u.moveTo(20,20),u.lineTo(200,20),u.lineWidth=1,u.strokeStyle="#CC0000",u.stroke())},[]),(0,A.jsx)("canvas",{ref:K,width:"100",height:"100"})};w.default=j},2795:function(G,w,a){a.r(w);var R=a(67294),A=a(85893),j=function(){var K=(0,R.useRef)(null);return(0,R.useEffect)(function(){var y=K.current,u=y==null?void 0:y.getContext("webgl");if(u){var v=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,E=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=u.createShader(u.VERTEX_SHADER),t=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(r,v),u.shaderSource(t,E),u.compileShader(r),u.compileShader(t);var e=u.createProgram();u.attachShader(e,r),u.attachShader(e,t),u.linkProgram(e),u.useProgram(e);var B=new Float32Array([1,1,-1,1,1,-1,-1,-1]),d=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,d),u.bufferData(u.ARRAY_BUFFER,B,u.STATIC_DRAW);var l=u.getAttribLocation(e,"a_Position");u.vertexAttribPointer(l,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(l),u.drawArrays(u.TRIANGLE_STRIP,0,4)}},[]),(0,A.jsx)("canvas",{ref:K,width:"100",height:"100"})};w.default=j},44091:function(G,w,a){a.r(w);var R=a(67294),A=a(99477),j=a(85893),f=function(){var y=(0,R.useRef)(null);return(0,R.useEffect)(function(){var u=y.current,v=10,E=10,r;function t(){v=u.clientWidth,E=u.clientHeight,r=new A.CP7({antialias:!0}),r.setSize(v,E),u.appendChild(r.domElement),r.setClearColor(16777215,1)}var e;function B(){e=new A.cPb(45,v/E,1,1e4),e.position.x=0,e.position.y=2,e.position.z=1,e.up.x=0,e.up.y=0,e.up.z=1,e.lookAt(new A.Pa4(0,0,0))}var d;function l(){d=new A.xsS}var g;function D(){var C=new A.DvJ(1,1,1),i=new A.YBo({color:16777215});g=new A.Kj0(C,i),d.add(g)}function n(){var C=new A.cek(16711680);C.position.set(1,1,-1);var i=new A.cek(65280);i.position.set(1,-1,1),d.add(C),d.add(i)}function x(){g.rotation.x+=.01,g.rotation.y+=.01,r.render(d,e),requestAnimationFrame(x)}function I(){t(),B(),l(),D(),n(),x()}I()},[]),(0,j.jsx)("div",{ref:y,style:{width:150,height:150}})};w.default=f},548:function(G,w,a){a.r(w);var R=a(27424),A=a.n(R),j=a(31723),f=a(53313),K=a(87269),y=a.n(K),u=a(67294),v=a(48460),E=a(85893),r=function(){var e=(0,u.useRef)(null),B=(0,u.useState)(!0),d=A()(B,2),l=d[0],g=d[1],D=(0,u.useState)(!1),n=A()(D,2),x=n[0],I=n[1],C=(0,u.useState)(0),i=A()(C,2),P=i[0],S=i[1];(0,j.Z)(function(){S(P+1)},1e3);var b=new(window.AudioContext||window.webkitAudioContext),c=(0,u.useRef)(b),F=K.create({context:b,loop:!0}),s=(0,u.useRef)(F),O=b.createAnalyser(),U=(0,u.useRef)(O),L=function(){I(!0),s.current.play(),c.current.resume().then(function(){s.current.play(),s.current.getSource().connect(U.current),U.current.connect(c.current.destination)})},m=function(){if(e.current){var H=e.current,T=H.getContext("webgl"),_=/Mobi|Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent);if(v.j_({attribPrefix:"a_"}),T){for(var h=function $(){T&&(v.Lo(H),T.viewport(0,0,T.canvas.width,T.canvas.height),T.clearColor(0,0,0,1),T.clear(T.COLOR_BUFFER_BIT),T.lineWidth(2),T.useProgram(Y.program),U.current.getByteFrequencyData(p),v.Ss(T,Q.attribs.a_height,p),v.o8(T,Y,Q),v.y0(T,Q,T.LINE_STRIP),requestAnimationFrame($))},o=`  
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
        `,N=`  
          precision mediump float;

          varying vec4 v_color;
          void main() {
            gl_FragColor = v_color;
          }
        `,Y=v.EK(T,[o,N]),z=U.current.frequencyBinCount*(_?.25:1)|0,X=new Float32Array(z),p=new Uint8Array(z),W=0;W<z;++W)X[W]=W/z*2-1;var q={spread:{data:X,numComponents:1},height:{data:p,numComponents:1,drawType:T.DYNAMIC_DRAW}},Q=v.qX(T,q);requestAnimationFrame(h)}}};(0,u.useEffect)(function(){x&&(L(),m())},[x]),(0,u.useEffect)(function(){s.current.on("error",function(V){console.error("audio error:",V)}),s.current.on("newSource",function(){g(!1)}),s.current.setSource("sounds/DOCTOR VOX - Level Up.mp3","sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3")},[]);var M=function(){I(!1),s.current.stop()};return(0,E.jsxs)(E.Fragment,{children:[x&&(0,E.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,E.jsx)("canvas",{ref:e,width:800,height:300}),(0,E.jsx)("div",{children:(0,E.jsx)(f.ZP,{type:"primary",onClick:function(){return M()},children:"\u505C\u6B62"})})]}),!l&&!x&&(0,E.jsx)(f.ZP,{type:"primary",onClick:function(){return I(!0)},children:"\u64AD\u653E"}),l&&(0,E.jsxs)("div",{children:["Loading\uFF08\u79FB\u52D5\u7AEF\u52A0\u8F09\u8CC7\u6E90\u8F03\u4E45\uFF0C\u5DF2\u52A0\u8F09",P,"\u79D2\uFF09..."]})]})};w.default=r},85790:function(G,w,a){a.r(w);var R=a(28670),A=a.n(R),j=a(67294),f=a(48460),K=a(85893),y=function(){var v=(0,j.useRef)(null);return(0,j.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");f.j_({attribPrefix:"a_"});var t=f.m4;if(r){for(var e=function(L,m){return L+Math.random()*(m-L)},B=function U(L){if(r){var m=L;m*=.001,f.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var M=t.perspective(30*Math.PI/180,E.clientWidth/E.clientHeight,.5,100),V=[1,4,-20],H=[0,0,0],T=[0,1,0];t.lookAt(V,H,T,I),t.inverse(I,C),t.multiply(M,C,i),S.forEach(function(_){var h=_.uniforms,o=h.u_world;t.identity(o),t.rotateY(o,m*_.ySpeed,o),t.rotateZ(o,m*_.zSpeed,o),t.translate(o,_.translation,o),t.rotateX(o,m,o),t.transpose(t.inverse(o,h.u_worldInverseTranspose),h.u_worldInverseTranspose),t.multiply(i,h.u_world,h.u_worldViewProjection)}),f.bV(r,b),requestAnimationFrame(U)}},d=`  
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
        `,l=`  
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
        `,g=f.EK(r,[d,l]),D=[f.S6.createCubeBufferInfo(r,2),f.S6.createSphereBufferInfo(r,1,24,12),f.S6.createPlaneBufferInfo(r,2,2),f.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1),f.S6.createCresentBufferInfo(r,1,1,.5,.1,24),f.S6.createCylinderBufferInfo(r,1,2,24,2),f.S6.createDiscBufferInfo(r,1,24),f.S6.createTorusBufferInfo(r,1,.4,24,12)],n=[1,8,-10],x=[1,1,1,1],I=t.identity(),C=t.identity(),i=t.identity(),P=f.cU(r,{min:r.NEAREST,mag:r.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),S=[],b=[],c=100,F=e(0,360),s=0;s<c;++s){var O={u_lightWorldPos:n,u_lightColor:x,u_diffuseMult:R.hsv((F+e(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:P,u_viewInverse:I,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};b.push({programInfo:g,bufferInfo:D[s%D.length],uniforms:O}),S.push({translation:[e(-10,10),e(-10,10),e(-10,10)],ySpeed:e(.1,.3),zSpeed:e(.1,.3),uniforms:O})}requestAnimationFrame(B)}}},[]),(0,K.jsx)("canvas",{ref:v,width:800,height:300})};w.default=y},99038:function(G,w,a){a.r(w);var R=a(28670),A=a.n(R),j=a(67294),f=a(48460),K=a(85893),y=function(){var v=(0,j.useRef)(null);return(0,j.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");f.j_({attribPrefix:"a_"});var t=f.m4;if(r){var e=function($){c&&(c.fillStyle="#00f",c.strokeStyle="#ff0",c.lineWidth=10,c.fillRect(0,0,c.canvas.width,c.canvas.height),c.beginPath(),c.arc(c.canvas.width/2,c.canvas.height/2,c.canvas.width/2.2*Math.abs(Math.cos($)),0,Math.PI*2),c.stroke())},B=function Q($){if(r){var J=$;J*=.001,f.Lo(E),r.viewport(0,0,E.clientWidth,E.clientHeight),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var k=20,uu=J*.1,eu=t.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),au=[Math.cos(uu)*k,4,Math.sin(uu)*k],tu=[0,0,0],ou=[0,1,0];t.lookAt(au,tu,ou,P),t.inverse(P,S),t.multiply(eu,S,b),e(J),c&&f.Mh(r,T.fromCanvas,c.canvas),o.forEach(function(ru){var nu=ru.uniforms,Z=nu.u_world;t.identity(Z),t.rotateY(Z,J*ru.ySpeed,Z),t.rotateZ(Z,J*ru.zSpeed,Z),t.translate(Z,ru.translation,Z),t.rotateX(Z,J,Z),t.transpose(t.inverse(Z,nu.u_worldInverseTranspose),nu.u_worldInverseTranspose),t.multiply(b,nu.u_world,nu.u_worldViewProjection)}),f.bV(r,N),requestAnimationFrame(Q)}},d=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,l=`  
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
        `,n=f.EK(r,[d,l]),x=f.EK(r,[g,D]),I=[f.S6.createCubeBufferInfo(r,2),f.S6.createSphereBufferInfo(r,1,24,12),f.S6.createPlaneBufferInfo(r,2,2),f.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],C=function($,J){var k=$,uu=J;return uu===void 0&&(uu=k,k=0),k+Math.random()*(uu-k)},i=C(360),P=t.identity(),S=t.identity(),b=t.identity(),c=document.createElement("canvas").getContext("2d");c&&(c.canvas.width=64,c.canvas.height=64),e(0);var F=document.createElement("canvas").getContext("2d"),s=40;if(F){F.canvas.width=s*6,F.canvas.height=s,F.fillStyle="#888";for(var O=0;O<6;++O){var U=R.hsv((i+O*10)%360,1-O/6,1);F.fillStyle=U.darken().hex(),F.fillRect(s*O,0,s,s),F.save(),F.translate(s*(O+.5),s*.5),F.beginPath(),F.arc(0,0,s*.3,0,Math.PI*2),F.fillStyle=U.hex(),F.fill(),F.restore()}}for(var L=[],m=0;m<6;++m){var M=document.createElement("canvas");M.width=128,M.height=128;var V=M.getContext("2d"),H=R.hsv((i+m*10)%360,1-m/6,1);V&&(V.fillStyle=H.darken().hex(),V.fillRect(0,0,128,128),V.translate(64,64),V.rotate(Math.PI*.25),V.fillStyle=H.hex(),V.fillRect(-40,-40,80,80)),L.push(M)}for(var T=f.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:c==null?void 0:c.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:F==null?void 0:F.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:L}}),_=[T.checker,T.stripe,T.hftIcon,T.clover,T.fromCanvas],h=[T.yokohama,T.goldengate,T.cubemapFromCanvas,T.cubemapFrom6Canvases,T.cubemapFromArray],o=[],N=[],Y=100,z=0;z<Y;++z){var X=void 0,p=void 0,W=void 0,q=C(0,2)|0;switch(q){case 0:W=I[z%I.length],p=n,X={u_diffuseMult:R.hsv((i+C(0,60))%360,.4,.8).gl(),u_diffuse:_[C(0,_.length)|0],u_viewInverse:P,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};break;case 1:W=C(0,2)<1?I[1]:I[3],p=x,X={u_texture:h[C(0,h.length)|0],u_viewInverse:P,u_world:t.identity(),u_worldInverseTranspose:t.identity(),u_worldViewProjection:t.identity()};break;default:throw"wAT!"}N.push({programInfo:p,bufferInfo:W,uniforms:X}),o.push({translation:[C(-10,10),C(-10,10),C(-10,10)],ySpeed:C(.1,.3),zSpeed:C(.1,.3),uniforms:X})}requestAnimationFrame(B)}}},[]),(0,K.jsx)("canvas",{ref:v,width:800,height:300})};w.default=y},52246:function(G,w,a){a.r(w);var R=a(67294),A=a(48460),j=a(85893),f=function(){var y=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(y.current){var u=y.current,v=u.getContext("webgl");if(v){var E=function(){if(v){v.viewport(0,0,r,t),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(d.program);var n=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,n);var x=new Uint16Array([0,1,2]);v.bufferData(v.ELEMENT_ARRAY_BUFFER,x,v.STATIC_DRAW),A.o8(v,d,g),v.drawElements(v.TRIANGLES,x.length,v.UNSIGNED_SHORT,0)}},r=v.canvas.width,t=v.canvas.height;A.Lo(u);var e=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,B=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,d=A.EK(v,[e,B]),l=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),g=A.qX(v,{position:l});E()}}},[]),(0,j.jsx)("canvas",{ref:y,width:100,height:100})};w.default=f},11696:function(G,w,a){a.r(w);var R=a(67294),A=a(48460),j=a(85893),f=function(){var y=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(y.current){var u=y.current,v=A.m4,E=u.getContext("webgl");if(E){var r=function n(x){if(E){var I=x;I*=.001,A.Lo(u),E.viewport(0,0,E.canvas.width,E.canvas.height),E.enable(E.DEPTH_TEST),E.enable(E.CULL_FACE),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT);var C=30*Math.PI/180,i=E.canvas.width/E.canvas.height,P=.5,S=10,b=v.perspective(C,i,P,S),c=[1,4,-6],F=[0,0,0],s=[0,1,0],O=v.lookAt(c,F,s),U=v.inverse(O),L=v.multiply(b,U),m=v.rotationY(I);D.u_viewInverse=O,D.u_world=m,D.u_worldInverseTranspose=v.transpose(v.inverse(m)),D.u_worldViewProjection=v.multiply(L,m),E.useProgram(B.program),A.o8(E,B,l),A.N9(B,D),E.drawElements(E.TRIANGLES,l.numElements,E.UNSIGNED_SHORT,0),requestAnimationFrame(n)}},t=`
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
        `,B=A.EK(E,[t,e]),d={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},l=A.qX(E,d),g=A.cU(E,{min:E.NEAREST,mag:E.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),D={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:g};requestAnimationFrame(r)}}},[]),(0,j.jsx)("canvas",{ref:y,width:100,height:100})};w.default=f},41732:function(G,w,a){a.r(w);var R=a(28670),A=a.n(R),j=a(67294),f=a(48460),K=a(85893),y=function(){var v=(0,j.useRef)(null);return(0,j.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl"),t=f.m4;if(f.j_({attribPrefix:"a_"}),r){for(var e=function(m,M){return m+Math.random()*(M-m)},B=function L(m){if(r){var M=m;M*=.001,f.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),F[0]=Math.sin(M),F[1]=Math.sin(M*.13)*Math.PI*2,F[2]=Math.sin(M*.43)*.5+1,F[3]=Math.cos(M*.17)*.5+.5,s[0]=Math.sin(M*.163)*.5,s[1]=Math.cos(M*.267)*.5,s[2]=Math.sin(M*.367)*.5,s[3]=Math.cos(M*.497)*.5,O[1]=(Math.sin(M*.1)*.5+.5)*3;var V=E.clientWidth/E.clientHeight;t.ortho(-V,V,1,-1,-1,1,U.u_matrix),r.useProgram(g.program),f.o8(r,g,c),f.N9(g,U),f.y0(r,c,r.LINES),requestAnimationFrame(L)}},d=`  
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
        `,l=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,g=f.EK(r,[d,l]),D=100,n={position:f.S6.createAugmentedTypedArray(2,D*2),color:f.S6.createAugmentedTypedArray(3,D*2,Uint8Array)},x=e(0,360),I=0;I<D;++I){var C=I/D,i=(360+x+Math.abs(C-.5)*100)%360,P=Math.sin(C*Math.PI*2)*.25+.75,S=1,b=R.hsv(i,P,S);n.position.push(C,1),n.color.push(b.rgb()),n.position.push(C,0),n.color.push(b.brighten().desaturate().rgb())}var c=f.qX(r,n),F=[0,0,0,1],s=[0,0,0,0],O=[1,2,0,0],U={u_matrix:t.identity(),u_offsets:F,u_centers:s,u_mult:O};requestAnimationFrame(B)}}},[]),(0,K.jsx)("canvas",{ref:v,width:800,height:300})};w.default=y}}]);
