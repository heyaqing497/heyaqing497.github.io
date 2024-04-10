"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(G,y,i){i.r(y);var R=i(67294),P=i(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("experimental-webgl");if(n){var v=function o(){rotateX(C),rotateY(C),rotateZ(C),n.uniformMatrix4fv(d,!1,new Float32Array(u)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,_.length/3),requestAnimationFrame(o)},E=`precision highp float;
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
      `,a=n.createShader(n.VERTEX_SHADER),e=n.createShader(n.FRAGMENT_SHADER),l=n.createProgram();n.shaderSource(a,E),n.shaderSource(e,r),n.compileShader(a),n.compileShader(e),n.attachShader(l,a),n.attachShader(l,e),n.linkProgram(l),n.useProgram(l);var h=function(D,g,b,F,B){var f=new Array,I=-F;function x(N,Y,z){for(var X=0,p=360/N,V=new Array,uu=0;uu<N;uu++)V.push(Math.sin(Math.PI/180*X)*z,Math.cos(Math.PI/180*X)*z,Y),X+=p;return V}for(var W=360/B,L=0,I=F,O=0,K=W,H=0;H<B/2;H++){if(H>=B/4)var j=Math.sin(Math.PI/180*L)*-F;else var j=Math.sin(Math.PI/180*L)*-F;console.log(j),L+=W;var c=x(B,j,I);H>=B/4?j=Math.sin(Math.PI/180*L)*-F:j=-Math.sin(Math.PI/180*L)*-F,I=Math.sqrt(F*F-F*Math.sin(Math.PI/180*L)*F*Math.sin(Math.PI/180*L));for(var A=x(B,j,I),t=0;t<c.length;t+=3)t==0?(f.push(c[t],c[t+1],c[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(c[c.length-3],c[c.length-2],c[c.length-1]),f.push(c[t],c[t+1],c[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(A[t+3],A[t+4],A[t+5])):t==c.length-3?(f.push(c[t],c[t+1],c[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(c[t-3],c[t-2],c[t-1]),f.push(c[t],c[t+1],c[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(A[0],A[1],A[2])):(f.push(c[t],c[t+1],c[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(c[t-3],c[t-2],c[t-1]),f.push(c[t],c[t+1],c[t+2]),f.push(A[t],A[t+1],A[t+2]),f.push(A[t+3],A[t+4],A[t+5]))}return f},_=h(0,0,0,.5,180),w=n.getAttribLocation(l,"position"),d=n.getUniformLocation(l,"mat");console.log(n.getShaderInfoLog(a));var u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];console.log(n.getShaderInfoLog(e)),i.g.rotateX=function(o){var D=Math.cos(Math.PI/180*o),g=Math.sin(Math.PI/180*o),b=u[1],F=u[5],B=u[9];u[1]=D*u[1]-g*u[2],u[5]=D*u[5]-g*u[6],u[9]=D*u[9]-g*u[10],u[2]=g*b+D*u[2],u[6]=g*F+D*u[6],u[10]=g*B+D*u[10]},i.g.rotateY=function(o){var D=Math.cos(Math.PI/180*o),g=Math.sin(Math.PI/180*o),b=u[0],F=u[8],B=u[4];u[0]=D*u[0]+g*u[2],u[4]=D*u[4]+g*u[6],u[8]=D*u[8]+g*u[10],u[2]=D*u[2]-g*b,u[6]=D*u[6]-g*B,u[10]=D*u[10]-g*F},i.g.rotateZ=function(o){var D=Math.cos(Math.PI/180*o),g=Math.sin(Math.PI/180*o),b=u[0],F=u[4],B=u[8];u[0]=D*u[0]-g*u[1],u[4]=D*u[4]-g*u[5],u[8]=D*u[8]-g*u[9],u[1]=g*b+D*u[1],u[5]=g*F+D*u[5],u[9]=g*B+D*u[9]},i.g.moveX=function(o){u[0]=u[0]+o*u[3],u[4]=u[4]+o*u[7],u[8]=u[8]+o*u[11],u[12]=u[12]+o*u[15]},i.g.moveY=function(o){u[1]=o*u[3]+u[1],u[5]=o*u[7]+u[5],u[9]=o*u[11]+u[9],u[13]=o*u[15]+u[13]},i.g.moveZ=function(o){u[2]=o*u[3]+u[2],u[6]=o*u[7]+u[6],u[10]=o*u[11]+u[10],u[14]=o*u[15]+u[14]},i.g.scaleFun=function(o){u[0]=o*u[0],u[4]=o*u[4],u[8]=o*u[8],u[12]=o*u[12],u[1]=o*u[1],u[5]=o*u[5],u[9]=o*u[9],u[13]=o*u[13],u[2]=o*u[2],u[6]=o*u[6],u[10]=o*u[10],u[14]=o*u[14]};var m=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,m),n.bufferData(n.ARRAY_BUFFER,new Float32Array(_),n.STATIC_DRAW),n.vertexAttribPointer(w,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(w);var S=.05,C=.5;v()}},[]),(0,P.jsx)("canvas",{ref:M,width:"200",height:"200"})};y.default=U},27246:function(G,y,i){i.r(y);var R=i(67294),P=i(85893),U=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,s=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,M=function(){var n=(0,R.useRef)(null);function v(a,e,l,h,_){var w,d,u,m;return w=a*Math.pow(1-_,3),d=3*e*_*Math.pow(1-_,2),u=3*l*Math.pow(_,2)*(1-_),m=h*Math.pow(_,3),w+d+u+m}function E(a,e,l,h,_,w){return{x:v(a.x,e.x,l.x,h.x,_*w),y:v(a.y,e.y,l.y,h.y,_*w),z:v(a.z,e.z,l.z,h.z,_*w)}}function r(a,e,l,h,_,w){for(var d=_||100,u=w||1,m=u/(d-1),S=[],C=0;C<d;C++){var o=E(a,e,l,h,C,m);S.push(o.x),S.push(o.y),S.push(o.z)}return S}return(0,R.useEffect)(function(){var a=n.current,e=a==null?void 0:a.getContext("webgl");if(e){var l=e.createShader(e.VERTEX_SHADER),h=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(l,U),e.shaderSource(h,s),e.compileShader(l);var _=e.getShaderParameter(l,e.COMPILE_STATUS);if(!_)throw new Error("compile Shader is failed");e.compileShader(h);var w=e.getShaderParameter(h,e.COMPILE_STATUS);if(!w)throw new Error("compile Shader is failed");var d=e.createProgram();e.attachShader(d,l),e.attachShader(d,h),e.linkProgram(d);var u=e.getProgramParameter(d,e.LINK_STATUS);if(!u)throw new Error("link Shader is failed");e.useProgram(d);var m=e.getAttribLocation(d,"a_Position"),S=e.getUniformLocation(d,"u_FragColor");e.uniform4fv(S,[0,1,1,1]);var C=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),o=new Float32Array(C),D=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,D),e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW),e.vertexAttribPointer(m,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(m),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.LINE_STRIP,0,C.length/3)}},[]),(0,P.jsx)("canvas",{ref:n,width:"300",height:"200"})};y.default=M},38952:function(G,y,i){i.r(y);var R=i(67294),P=i(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("webgl");if(n){var v=function(f,x,W,L,I,O,K,H,j){var c=function(p){var V=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);return[p[0]/V,p[1]/V,p[2]/V]},A=function(p,V){return[p[0]-V[0],p[1]-V[1],p[2]-V[2]]},t=function(p,V){return[p[1]*V[2]-p[2]*V[1],p[2]*V[0]-p[0]*V[2],p[0]*V[1]-p[1]*V[0]]},N=c(A([f,x,W],[L,I,O])),Y=c(t([K,H,j],N)),z=c(t(N,Y));return new Float32Array([Y[0],z[0],N[0],0,Y[1],z[1],N[1],0,Y[2],z[2],N[2],0,-(Y[0]*f+Y[1]*x+Y[2]*W),-(z[0]*f+z[1]*x+z[2]*W),-(N[0]*f+N[1]*x+N[2]*W),1])},E=function(f){return Math.PI*f/180},r=function(f,x,W,L){f=E(f);var I=1/Math.tan(f/2),O=1/(W-L);return new Float32Array([I/x,0,0,0,0,I,0,0,0,0,(L+W)*O,-1,0,0,2*L*W*O,0])},a=`
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
        `,l=n.createShader(n.VERTEX_SHADER);n.shaderSource(l,a),n.compileShader(l);var h=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(h,e),n.compileShader(h);var _=n.createProgram();n.attachShader(_,l),n.attachShader(_,h),n.linkProgram(_),n.useProgram(_),n.program=_;var w=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),d=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),u=w.BYTES_PER_ELEMENT,m=n.createBuffer(),S=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,m),n.bufferData(n.ARRAY_BUFFER,w,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,S),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW);var C=n.getAttribLocation(n.program,"a_Position"),o=n.getAttribLocation(n.program,"a_Color"),D=n.getUniformLocation(n.program,"u_ViewMatrix"),g=v(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(D,!1,g);var b=n.getUniformLocation(n.program,"u_ProjMatrix"),F=r(30,T.width/T.height,1,100);n.uniformMatrix4fv(b,!1,F),n.vertexAttribPointer(C,3,n.FLOAT,!1,u*6,0),n.enableVertexAttribArray(C),n.vertexAttribPointer(o,3,n.FLOAT,!1,u*6,u*3),n.enableVertexAttribArray(o),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,d.length,n.UNSIGNED_BYTE,0)}},[]),(0,P.jsx)("canvas",{ref:M,width:"200",height:"200"})};y.default=U},63296:function(G,y,i){i.r(y);var R=i(67294),P=i(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,P.jsx)("canvas",{ref:M,width:"100",height:"100"})};y.default=U},2795:function(G,y,i){i.r(y);var R=i(67294),P=i(85893),U=function(){var M=(0,R.useRef)(null);return(0,R.useEffect)(function(){var T=M.current,n=T==null?void 0:T.getContext("webgl");if(n){var v=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,E=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=n.createShader(n.VERTEX_SHADER),a=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(r,v),n.shaderSource(a,E),n.compileShader(r),n.compileShader(a);var e=n.createProgram();n.attachShader(e,r),n.attachShader(e,a),n.linkProgram(e),n.useProgram(e);var l=new Float32Array([1,1,-1,1,1,-1,-1,-1]),h=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,l,n.STATIC_DRAW);var _=n.getAttribLocation(e,"a_Position");n.vertexAttribPointer(_,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(_),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,P.jsx)("canvas",{ref:M,width:"100",height:"100"})};y.default=U},44091:function(G,y,i){i.r(y);var R=i(67294),P=i(99477),U=i(85893),s=function(){var T=(0,R.useRef)(null);return(0,R.useEffect)(function(){var n=T.current,v=10,E=10,r;function a(){v=n.clientWidth,E=n.clientHeight,r=new P.CP7({antialias:!0}),r.setSize(v,E),n.appendChild(r.domElement),r.setClearColor(16777215,1)}var e;function l(){e=new P.cPb(45,v/E,1,1e4),e.position.x=0,e.position.y=2,e.position.z=1,e.up.x=0,e.up.y=0,e.up.z=1,e.lookAt(new P.Pa4(0,0,0))}var h;function _(){h=new P.xsS}var w;function d(){var C=new P.DvJ(1,1,1),o=new P.YBo({color:16777215});w=new P.Kj0(C,o),h.add(w)}function u(){var C=new P.cek(16711680);C.position.set(1,1,-1);var o=new P.cek(65280);o.position.set(1,-1,1),h.add(C),h.add(o)}function m(){w.rotation.x+=.01,w.rotation.y+=.01,r.render(h,e),requestAnimationFrame(m)}function S(){a(),l(),_(),d(),u(),m()}S()},[]),(0,U.jsx)("div",{ref:T,style:{width:150,height:150}})};y.default=s},85790:function(G,y,i){i.r(y);var R=i(28670),P=i.n(R),U=i(67294),s=i(48460),M=i(85893),T=function(){var v=(0,U.useRef)(null);return(0,U.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4;if(r){for(var e=function(L,I){return L+Math.random()*(I-L)},l=function W(L){if(r){var I=L;I*=.001,s.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var O=a.perspective(30*Math.PI/180,E.clientWidth/E.clientHeight,.5,100),K=[1,4,-20],H=[0,0,0],j=[0,1,0];a.lookAt(K,H,j,S),a.inverse(S,C),a.multiply(O,C,o),g.forEach(function(c){var A=c.uniforms,t=A.u_world;a.identity(t),a.rotateY(t,I*c.ySpeed,t),a.rotateZ(t,I*c.zSpeed,t),a.translate(t,c.translation,t),a.rotateX(t,I,t),a.transpose(a.inverse(t,A.u_worldInverseTranspose),A.u_worldInverseTranspose),a.multiply(o,A.u_world,A.u_worldViewProjection)}),s.bV(r,b),requestAnimationFrame(W)}},h=`  
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
        `,_=`  
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
        `,w=s.EK(r,[h,_]),d=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createPlaneBufferInfo(r,2,2),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1),s.S6.createCresentBufferInfo(r,1,1,.5,.1,24),s.S6.createCylinderBufferInfo(r,1,2,24,2),s.S6.createDiscBufferInfo(r,1,24),s.S6.createTorusBufferInfo(r,1,.4,24,12)],u=[1,8,-10],m=[1,1,1,1],S=a.identity(),C=a.identity(),o=a.identity(),D=s.cU(r,{min:r.NEAREST,mag:r.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),g=[],b=[],F=100,B=e(0,360),f=0;f<F;++f){var x={u_lightWorldPos:u,u_lightColor:m,u_diffuseMult:R.hsv((B+e(0,60))%360,.4,.8).gl(),u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:D,u_viewInverse:S,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};b.push({programInfo:w,bufferInfo:d[f%d.length],uniforms:x}),g.push({translation:[e(-10,10),e(-10,10),e(-10,10)],ySpeed:e(.1,.3),zSpeed:e(.1,.3),uniforms:x})}requestAnimationFrame(l)}}},[]),(0,M.jsx)("canvas",{ref:v,width:800,height:300})};y.default=T},99038:function(G,y,i){i.r(y);var R=i(28670),P=i.n(R),U=i(67294),s=i(48460),M=i(85893),T=function(){var v=(0,U.useRef)(null);return(0,U.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");s.j_({attribPrefix:"a_"});var a=s.m4;if(r){var e=function(k){F&&(F.fillStyle="#00f",F.strokeStyle="#ff0",F.lineWidth=10,F.fillRect(0,0,F.canvas.width,F.canvas.height),F.beginPath(),F.arc(F.canvas.width/2,F.canvas.height/2,F.canvas.width/2.2*Math.abs(Math.cos(k)),0,Math.PI*2),F.stroke())},l=function ru(k){if(r){var Q=k;Q*=.001,s.Lo(E),r.viewport(0,0,E.clientWidth,E.clientHeight),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var Z=20,$=Q*.1,eu=a.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),au=[Math.cos($)*Z,4,Math.sin($)*Z],tu=[0,0,0],ou=[0,1,0];a.lookAt(au,tu,ou,D),a.inverse(D,g),a.multiply(eu,g,b),e(Q),F&&s.Mh(r,j.fromCanvas,F.canvas),t.forEach(function(nu){var q=nu.uniforms,J=q.u_world;a.identity(J),a.rotateY(J,Q*nu.ySpeed,J),a.rotateZ(J,Q*nu.zSpeed,J),a.translate(J,nu.translation,J),a.rotateX(J,Q,J),a.transpose(a.inverse(J,q.u_worldInverseTranspose),q.u_worldInverseTranspose),a.multiply(b,q.u_world,q.u_worldViewProjection)}),s.bV(r,N),requestAnimationFrame(ru)}},h=`  
          uniform mat4 u_worldViewProjection; // \u4E16\u754C\u89C6\u56FE\u6295\u5F71\u77E9\u9635

          attribute vec4 a_position; // \u9876\u70B9\u4F4D\u7F6E\u5C5E\u6027
          attribute vec2 a_texcoord; // \u9876\u70B9\u7EB9\u7406\u5750\u6807\u5C5E\u6027
          
          varying vec4 v_position; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u4F4D\u7F6E
          varying vec2 v_texCoord; // \u4F20\u9012\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u9876\u70B9\u7EB9\u7406\u5750\u6807
          
          void main() {
            v_texCoord = a_texcoord; // \u7EB9\u7406\u5750\u6807
            gl_Position = u_worldViewProjection * a_position; // \u8BA1\u7B97\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E
          }
        `,_=`  
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
        `,d=`  
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
        `,u=s.EK(r,[h,_]),m=s.EK(r,[w,d]),S=[s.S6.createCubeBufferInfo(r,2),s.S6.createSphereBufferInfo(r,1,24,12),s.S6.createPlaneBufferInfo(r,2,2),s.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],C=function(k,Q){var Z=k,$=Q;return $===void 0&&($=Z,Z=0),Z+Math.random()*($-Z)},o=C(360),D=a.identity(),g=a.identity(),b=a.identity(),F=document.createElement("canvas").getContext("2d");F&&(F.canvas.width=64,F.canvas.height=64),e(0);var B=document.createElement("canvas").getContext("2d"),f=40;if(B){B.canvas.width=f*6,B.canvas.height=f,B.fillStyle="#888";for(var x=0;x<6;++x){var W=R.hsv((o+x*10)%360,1-x/6,1);B.fillStyle=W.darken().hex(),B.fillRect(f*x,0,f,f),B.save(),B.translate(f*(x+.5),f*.5),B.beginPath(),B.arc(0,0,f*.3,0,Math.PI*2),B.fillStyle=W.hex(),B.fill(),B.restore()}}for(var L=[],I=0;I<6;++I){var O=document.createElement("canvas");O.width=128,O.height=128;var K=O.getContext("2d"),H=R.hsv((o+I*10)%360,1-I/6,1);K&&(K.fillStyle=H.darken().hex(),K.fillRect(0,0,128,128),K.translate(64,64),K.rotate(Math.PI*.25),K.fillStyle=H.hex(),K.fillRect(-40,-40,80,80)),L.push(O)}for(var j=s.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:F==null?void 0:F.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:B==null?void 0:B.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:L}}),c=[j.checker,j.stripe,j.hftIcon,j.clover,j.fromCanvas],A=[j.yokohama,j.goldengate,j.cubemapFromCanvas,j.cubemapFrom6Canvases,j.cubemapFromArray],t=[],N=[],Y=100,z=0;z<Y;++z){var X=void 0,p=void 0,V=void 0,uu=C(0,2)|0;switch(uu){case 0:V=S[z%S.length],p=u,X={u_diffuseMult:R.hsv((o+C(0,60))%360,.4,.8).gl(),u_diffuse:c[C(0,c.length)|0],u_viewInverse:D,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;case 1:V=C(0,2)<1?S[1]:S[3],p=m,X={u_texture:A[C(0,A.length)|0],u_viewInverse:D,u_world:a.identity(),u_worldInverseTranspose:a.identity(),u_worldViewProjection:a.identity()};break;default:throw"wAT!"}N.push({programInfo:p,bufferInfo:V,uniforms:X}),t.push({translation:[C(-10,10),C(-10,10),C(-10,10)],ySpeed:C(.1,.3),zSpeed:C(.1,.3),uniforms:X})}requestAnimationFrame(l)}}},[]),(0,M.jsx)("canvas",{ref:v,width:800,height:300})};y.default=T},52246:function(G,y,i){i.r(y);var R=i(67294),P=i(48460),U=i(85893),s=function(){var T=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(T.current){var n=T.current,v=n.getContext("webgl");if(v){var E=function(){if(v){v.viewport(0,0,r,a),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(h.program);var u=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,u);var m=new Uint16Array([0,1,2]);v.bufferData(v.ELEMENT_ARRAY_BUFFER,m,v.STATIC_DRAW),P.o8(v,h,w),v.drawElements(v.TRIANGLES,m.length,v.UNSIGNED_SHORT,0)}},r=v.canvas.width,a=v.canvas.height;P.Lo(n);var e=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,l=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,h=P.EK(v,[e,l]),_=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),w=P.qX(v,{position:_});E()}}},[]),(0,U.jsx)("canvas",{ref:T,width:100,height:100})};y.default=s},11696:function(G,y,i){i.r(y);var R=i(67294),P=i(48460),U=i(85893),s=function(){var T=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(T.current){var n=T.current,v=P.m4,E=n.getContext("webgl");if(E){var r=function u(m){if(E){var S=m;S*=.001,P.Lo(n),E.viewport(0,0,E.canvas.width,E.canvas.height),E.enable(E.DEPTH_TEST),E.enable(E.CULL_FACE),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT);var C=30*Math.PI/180,o=E.canvas.width/E.canvas.height,D=.5,g=10,b=v.perspective(C,o,D,g),F=[1,4,-6],B=[0,0,0],f=[0,1,0],x=v.lookAt(F,B,f),W=v.inverse(x),L=v.multiply(b,W),I=v.rotationY(S);d.u_viewInverse=x,d.u_world=I,d.u_worldInverseTranspose=v.transpose(v.inverse(I)),d.u_worldViewProjection=v.multiply(L,I),E.useProgram(l.program),P.o8(E,l,_),P.N9(l,d),E.drawElements(E.TRIANGLES,_.numElements,E.UNSIGNED_SHORT,0),requestAnimationFrame(u)}},a=`
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
        `,l=P.EK(E,[a,e]),h={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},_=P.qX(E,h),w=P.cU(E,{min:E.NEAREST,mag:E.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),d={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:w};requestAnimationFrame(r)}}},[]),(0,U.jsx)("canvas",{ref:T,width:100,height:100})};y.default=s},41732:function(G,y,i){i.r(y);var R=i(28670),P=i.n(R),U=i(67294),s=i(48460),M=i(85893),T=function(){var v=(0,U.useRef)(null);return(0,U.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl"),a=s.m4;if(s.j_({attribPrefix:"a_"}),r){for(var e=function(I,O){return I+Math.random()*(O-I)},l=function L(I){if(r){var O=I;O*=.001,s.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),B[0]=Math.sin(O),B[1]=Math.sin(O*.13)*Math.PI*2,B[2]=Math.sin(O*.43)*.5+1,B[3]=Math.cos(O*.17)*.5+.5,f[0]=Math.sin(O*.163)*.5,f[1]=Math.cos(O*.267)*.5,f[2]=Math.sin(O*.367)*.5,f[3]=Math.cos(O*.497)*.5,x[1]=(Math.sin(O*.1)*.5+.5)*3;var K=E.clientWidth/E.clientHeight;a.ortho(-K,K,1,-1,-1,1,W.u_matrix),r.useProgram(w.program),s.o8(r,w,F),s.N9(w,W),s.y0(r,F,r.LINES),requestAnimationFrame(L)}},h=`  
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
        `,_=`  
          precision mediump float; // \u5B9A\u4E49\u4E2D\u7B49\u7CBE\u5EA6\u6D6E\u70B9\u6570

          varying vec4 v_color; // \u63A5\u6536\u4ECE\u9876\u70B9\u7740\u8272\u5668\u4F20\u9012\u7684\u989C\u8272
    
          void main() { // \u4E3B\u51FD\u6570\uFF1A\u8BBE\u7F6E\u50CF\u7D20\u989C\u8272
            gl_FragColor = v_color; // \u76F4\u63A5\u4F7F\u7528\u63A5\u6536\u7684\u989C\u8272\u8BBE\u7F6E\u50CF\u7D20
          }
        `,w=s.EK(r,[h,_]),d=100,u={position:s.S6.createAugmentedTypedArray(2,d*2),color:s.S6.createAugmentedTypedArray(3,d*2,Uint8Array)},m=e(0,360),S=0;S<d;++S){var C=S/d,o=(360+m+Math.abs(C-.5)*100)%360,D=Math.sin(C*Math.PI*2)*.25+.75,g=1,b=R.hsv(o,D,g);u.position.push(C,1),u.color.push(b.rgb()),u.position.push(C,0),u.color.push(b.brighten().desaturate().rgb())}var F=s.qX(r,u),B=[0,0,0,1],f=[0,0,0,0],x=[1,2,0,0],W={u_matrix:a.identity(),u_offsets:B,u_centers:f,u_mult:x};requestAnimationFrame(l)}}},[]),(0,M.jsx)("canvas",{ref:v,width:800,height:300})};y.default=T}}]);
