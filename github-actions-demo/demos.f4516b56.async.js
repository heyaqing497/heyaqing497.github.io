"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(J,w,i){i.r(w);var R=i(67294),F=i(85893),x=function(){var m=(0,R.useRef)(null);return(0,R.useEffect)(function(){var D=m.current,u=D==null?void 0:D.getContext("experimental-webgl");if(u){var v=function e(){rotateX(C),rotateY(C),rotateZ(C),u.uniformMatrix4fv(P,!1,new Float32Array(n)),u.clearColor(.5,.5,.5,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,h.length/3),requestAnimationFrame(e)},f=`precision highp float;
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
      `,o=u.createShader(u.VERTEX_SHADER),a=u.createShader(u.FRAGMENT_SHADER),c=u.createProgram();u.shaderSource(o,f),u.shaderSource(a,r),u.compileShader(o),u.compileShader(a),u.attachShader(c,o),u.attachShader(c,a),u.linkProgram(c),u.useProgram(c);var B=function(d,T,W,E,_){var s=new Array,j=-E;function p(V,z,K){for(var M=0,S=360/V,L=new Array,uu=0;uu<V;uu++)L.push(Math.sin(Math.PI/180*M)*K,Math.cos(Math.PI/180*M)*K,z),M+=S;return L}for(var N=360/_,b=0,j=E,H=0,Y=N,X=0;X<_/2;X++){if(X>=_/4)var U=Math.sin(Math.PI/180*b)*-E;else var U=Math.sin(Math.PI/180*b)*-E;console.log(U),b+=N;var l=p(_,U,j);X>=_/4?U=Math.sin(Math.PI/180*b)*-E:U=-Math.sin(Math.PI/180*b)*-E,j=Math.sqrt(E*E-E*Math.sin(Math.PI/180*b)*E*Math.sin(Math.PI/180*b));for(var A=p(_,U,j),t=0;t<l.length;t+=3)t==0?(s.push(l[t],l[t+1],l[t+2]),s.push(A[t],A[t+1],A[t+2]),s.push(l[l.length-3],l[l.length-2],l[l.length-1]),s.push(l[t],l[t+1],l[t+2]),s.push(A[t],A[t+1],A[t+2]),s.push(A[t+3],A[t+4],A[t+5])):t==l.length-3?(s.push(l[t],l[t+1],l[t+2]),s.push(A[t],A[t+1],A[t+2]),s.push(l[t-3],l[t-2],l[t-1]),s.push(l[t],l[t+1],l[t+2]),s.push(A[t],A[t+1],A[t+2]),s.push(A[0],A[1],A[2])):(s.push(l[t],l[t+1],l[t+2]),s.push(A[t],A[t+1],A[t+2]),s.push(l[t-3],l[t-2],l[t-1]),s.push(l[t],l[t+1],l[t+2]),s.push(A[t],A[t+1],A[t+2]),s.push(A[t+3],A[t+4],A[t+5]))}return s},h=B(0,0,0,.5,180),g=u.getAttribLocation(c,"position"),P=u.getUniformLocation(c,"mat");console.log(u.getShaderInfoLog(o));var n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];console.log(u.getShaderInfoLog(a)),i.g.rotateX=function(e){var d=Math.cos(Math.PI/180*e),T=Math.sin(Math.PI/180*e),W=n[1],E=n[5],_=n[9];n[1]=d*n[1]-T*n[2],n[5]=d*n[5]-T*n[6],n[9]=d*n[9]-T*n[10],n[2]=T*W+d*n[2],n[6]=T*E+d*n[6],n[10]=T*_+d*n[10]},i.g.rotateY=function(e){var d=Math.cos(Math.PI/180*e),T=Math.sin(Math.PI/180*e),W=n[0],E=n[8],_=n[4];n[0]=d*n[0]+T*n[2],n[4]=d*n[4]+T*n[6],n[8]=d*n[8]+T*n[10],n[2]=d*n[2]-T*W,n[6]=d*n[6]-T*_,n[10]=d*n[10]-T*E},i.g.rotateZ=function(e){var d=Math.cos(Math.PI/180*e),T=Math.sin(Math.PI/180*e),W=n[0],E=n[4],_=n[8];n[0]=d*n[0]-T*n[1],n[4]=d*n[4]-T*n[5],n[8]=d*n[8]-T*n[9],n[1]=T*W+d*n[1],n[5]=T*E+d*n[5],n[9]=T*_+d*n[9]},i.g.moveX=function(e){n[0]=n[0]+e*n[3],n[4]=n[4]+e*n[7],n[8]=n[8]+e*n[11],n[12]=n[12]+e*n[15]},i.g.moveY=function(e){n[1]=e*n[3]+n[1],n[5]=e*n[7]+n[5],n[9]=e*n[11]+n[9],n[13]=e*n[15]+n[13]},i.g.moveZ=function(e){n[2]=e*n[3]+n[2],n[6]=e*n[7]+n[6],n[10]=e*n[11]+n[10],n[14]=e*n[15]+n[14]},i.g.scaleFun=function(e){n[0]=e*n[0],n[4]=e*n[4],n[8]=e*n[8],n[12]=e*n[12],n[1]=e*n[1],n[5]=e*n[5],n[9]=e*n[9],n[13]=e*n[13],n[2]=e*n[2],n[6]=e*n[6],n[10]=e*n[10],n[14]=e*n[14]};var I=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,I),u.bufferData(u.ARRAY_BUFFER,new Float32Array(h),u.STATIC_DRAW),u.vertexAttribPointer(g,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(g);var O=.05,C=.5;v()}},[]),(0,F.jsx)("canvas",{ref:m,width:"200",height:"200"})};w.default=x},27246:function(J,w,i){i.r(w);var R=i(67294),F=i(85893),x=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,y=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,m=function(){var u=(0,R.useRef)(null);function v(o,a,c,B,h){var g,P,n,I;return g=o*Math.pow(1-h,3),P=3*a*h*Math.pow(1-h,2),n=3*c*Math.pow(h,2)*(1-h),I=B*Math.pow(h,3),g+P+n+I}function f(o,a,c,B,h,g){return{x:v(o.x,a.x,c.x,B.x,h*g),y:v(o.y,a.y,c.y,B.y,h*g),z:v(o.z,a.z,c.z,B.z,h*g)}}function r(o,a,c,B,h,g){for(var P=h||100,n=g||1,I=n/(P-1),O=[],C=0;C<P;C++){var e=f(o,a,c,B,C,I);O.push(e.x),O.push(e.y),O.push(e.z)}return O}return(0,R.useEffect)(function(){var o=u.current,a=o==null?void 0:o.getContext("webgl");if(a){var c=a.createShader(a.VERTEX_SHADER),B=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(c,x),a.shaderSource(B,y),a.compileShader(c);var h=a.getShaderParameter(c,a.COMPILE_STATUS);if(!h)throw new Error("compile Shader is failed");a.compileShader(B);var g=a.getShaderParameter(B,a.COMPILE_STATUS);if(!g)throw new Error("compile Shader is failed");var P=a.createProgram();a.attachShader(P,c),a.attachShader(P,B),a.linkProgram(P);var n=a.getProgramParameter(P,a.LINK_STATUS);if(!n)throw new Error("link Shader is failed");a.useProgram(P);var I=a.getAttribLocation(P,"a_Position"),O=a.getUniformLocation(P,"u_FragColor");a.uniform4fv(O,[0,1,1,1]);var C=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),e=new Float32Array(C),d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,e,a.STATIC_DRAW),a.vertexAttribPointer(I,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(I),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.LINE_STRIP,0,C.length/3)}},[]),(0,F.jsx)("canvas",{ref:u,width:"300",height:"200"})};w.default=m},38952:function(J,w,i){i.r(w);var R=i(67294),F=i(85893),x=function(){var m=(0,R.useRef)(null);return(0,R.useEffect)(function(){var D=m.current,u=D==null?void 0:D.getContext("webgl");if(u){var v=function(s,p,N,b,j,H,Y,X,U){var l=function(S){var L=Math.sqrt(S[0]*S[0]+S[1]*S[1]+S[2]*S[2]);return[S[0]/L,S[1]/L,S[2]/L]},A=function(S,L){return[S[0]-L[0],S[1]-L[1],S[2]-L[2]]},t=function(S,L){return[S[1]*L[2]-S[2]*L[1],S[2]*L[0]-S[0]*L[2],S[0]*L[1]-S[1]*L[0]]},V=l(A([s,p,N],[b,j,H])),z=l(t([Y,X,U],V)),K=l(t(V,z));return new Float32Array([z[0],K[0],V[0],0,z[1],K[1],V[1],0,z[2],K[2],V[2],0,-(z[0]*s+z[1]*p+z[2]*N),-(K[0]*s+K[1]*p+K[2]*N),-(V[0]*s+V[1]*p+V[2]*N),1])},f=function(s){return Math.PI*s/180},r=function(s,p,N,b){s=f(s);var j=1/Math.tan(s/2),H=1/(N-b);return new Float32Array([j/p,0,0,0,0,j,0,0,0,0,(b+N)*H,-1,0,0,2*b*N*H,0])},o=`
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
        `,c=u.createShader(u.VERTEX_SHADER);u.shaderSource(c,o),u.compileShader(c);var B=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(B,a),u.compileShader(B);var h=u.createProgram();u.attachShader(h,c),u.attachShader(h,B),u.linkProgram(h),u.useProgram(h),u.program=h;var g=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),P=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),n=g.BYTES_PER_ELEMENT,I=u.createBuffer(),O=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,I),u.bufferData(u.ARRAY_BUFFER,g,u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,O),u.bufferData(u.ELEMENT_ARRAY_BUFFER,P,u.STATIC_DRAW);var C=u.getAttribLocation(u.program,"a_Position"),e=u.getAttribLocation(u.program,"a_Color"),d=u.getUniformLocation(u.program,"u_ViewMatrix"),T=v(3,4,8,0,0,0,0,1,0);u.uniformMatrix4fv(d,!1,T);var W=u.getUniformLocation(u.program,"u_ProjMatrix"),E=r(30,D.width/D.height,1,100);u.uniformMatrix4fv(W,!1,E),u.vertexAttribPointer(C,3,u.FLOAT,!1,n*6,0),u.enableVertexAttribArray(C),u.vertexAttribPointer(e,3,u.FLOAT,!1,n*6,n*3),u.enableVertexAttribArray(e),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,P.length,u.UNSIGNED_BYTE,0)}},[]),(0,F.jsx)("canvas",{ref:m,width:"200",height:"200"})};w.default=x},63296:function(J,w,i){i.r(w);var R=i(67294),F=i(85893),x=function(){var m=(0,R.useRef)(null);return(0,R.useEffect)(function(){var D=m.current,u=D==null?void 0:D.getContext("2d");u&&(u.beginPath(),u.moveTo(20,20),u.lineTo(200,20),u.lineWidth=1,u.strokeStyle="#CC0000",u.stroke())},[]),(0,F.jsx)("canvas",{ref:m,width:"100",height:"100"})};w.default=x},2795:function(J,w,i){i.r(w);var R=i(67294),F=i(85893),x=function(){var m=(0,R.useRef)(null);return(0,R.useEffect)(function(){var D=m.current,u=D==null?void 0:D.getContext("webgl");if(u){var v=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,f=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=u.createShader(u.VERTEX_SHADER),o=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(r,v),u.shaderSource(o,f),u.compileShader(r),u.compileShader(o);var a=u.createProgram();u.attachShader(a,r),u.attachShader(a,o),u.linkProgram(a),u.useProgram(a);var c=new Float32Array([1,1,-1,1,1,-1,-1,-1]),B=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,B),u.bufferData(u.ARRAY_BUFFER,c,u.STATIC_DRAW);var h=u.getAttribLocation(a,"a_Position");u.vertexAttribPointer(h,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(h),u.drawArrays(u.TRIANGLE_STRIP,0,4)}},[]),(0,F.jsx)("canvas",{ref:m,width:"100",height:"100"})};w.default=x},44091:function(J,w,i){i.r(w);var R=i(67294),F=i(99477),x=i(85893),y=function(){var D=(0,R.useRef)(null);return(0,R.useEffect)(function(){var u=D.current,v=10,f=10,r;function o(){v=u.clientWidth,f=u.clientHeight,r=new F.CP7({antialias:!0}),r.setSize(v,f),u.appendChild(r.domElement),r.setClearColor(16777215,1)}var a;function c(){a=new F.cPb(45,v/f,1,1e4),a.position.x=0,a.position.y=2,a.position.z=1,a.up.x=0,a.up.y=0,a.up.z=1,a.lookAt(new F.Pa4(0,0,0))}var B;function h(){B=new F.xsS}var g;function P(){var C=new F.DvJ(1,1,1),e=new F.YBo({color:16777215});g=new F.Kj0(C,e),B.add(g)}function n(){var C=new F.cek(16711680);C.position.set(1,1,-1);var e=new F.cek(65280);e.position.set(1,-1,1),B.add(C),B.add(e)}function I(){g.rotation.x+=.01,g.rotation.y+=.01,r.render(B,a),requestAnimationFrame(I)}function O(){o(),c(),h(),P(),n(),I()}O()},[]),(0,x.jsx)("div",{ref:D,style:{width:150,height:150}})};w.default=y},99038:function(J,w,i){i.r(w);var R=i(28670),F=i.n(R),x=i(67294),y=i(48460),m=i(85893),D=function(){var v=(0,x.useRef)(null);return(0,x.useEffect)(function(){if(v.current){var f=v.current,r=f.getContext("webgl");y.j_({attribPrefix:"a_"});var o=y.m4;if(r){var a=function($){E&&(E.fillStyle="#00f",E.strokeStyle="#ff0",E.lineWidth=10,E.fillRect(0,0,E.canvas.width,E.canvas.height),E.beginPath(),E.arc(E.canvas.width/2,E.canvas.height/2,E.canvas.width/2.2*Math.abs(Math.cos($)),0,Math.PI*2),E.stroke())},c=function au($){if(r){var Q=$;Q*=.001,y.Lo(f),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var k=20,Z=Q*.1,eu=o.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),ru=[Math.cos(Z)*k,4,Math.sin(Z)*k],tu=[0,0,0],ou=[0,1,0];o.lookAt(ru,tu,ou,d),o.inverse(d,T),o.multiply(eu,T,W),a(Q),E&&y.Mh(r,U.fromCanvas,E.canvas),t.forEach(function(nu){var q=nu.uniforms,G=q.u_world;o.identity(G),o.rotateY(G,Q*nu.ySpeed,G),o.rotateZ(G,Q*nu.zSpeed,G),o.translate(G,nu.translation,G),o.rotateX(G,Q,G),o.transpose(o.inverse(G,q.u_worldInverseTranspose),q.u_worldInverseTranspose),o.multiply(W,q.u_world,q.u_worldViewProjection)}),y.bV(r,V),requestAnimationFrame(au)}},B=`  
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
        `,n=y.EK(r,[B,h]),I=y.EK(r,[g,P]),O=[y.S6.createCubeBufferInfo(r,2),y.S6.createSphereBufferInfo(r,1,24,12),y.S6.createPlaneBufferInfo(r,2,2),y.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],C=function($,Q){var k=$,Z=Q;return Z===void 0&&(Z=k,k=0),k+Math.random()*(Z-k)},e=C(360),d=o.identity(),T=o.identity(),W=o.identity(),E=document.createElement("canvas").getContext("2d");E&&(E.canvas.width=64,E.canvas.height=64),a(0);var _=document.createElement("canvas").getContext("2d"),s=40;if(_){_.canvas.width=s*6,_.canvas.height=s,_.fillStyle="#888";for(var p=0;p<6;++p){var N=R.hsv((e+p*10)%360,1-p/6,1);_.fillStyle=N.darken().hex(),_.fillRect(s*p,0,s,s),_.save(),_.translate(s*(p+.5),s*.5),_.beginPath(),_.arc(0,0,s*.3,0,Math.PI*2),_.fillStyle=N.hex(),_.fill(),_.restore()}}for(var b=[],j=0;j<6;++j){var H=document.createElement("canvas");H.width=128,H.height=128;var Y=H.getContext("2d"),X=R.hsv((e+j*10)%360,1-j/6,1);Y&&(Y.fillStyle=X.darken().hex(),Y.fillRect(0,0,128,128),Y.translate(64,64),Y.rotate(Math.PI*.25),Y.fillStyle=X.hex(),Y.fillRect(-40,-40,80,80)),b.push(H)}for(var U=y.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:E==null?void 0:E.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:_==null?void 0:_.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:b}}),l=[U.checker,U.stripe,U.hftIcon,U.clover,U.fromCanvas],A=[U.yokohama,U.goldengate,U.cubemapFromCanvas,U.cubemapFrom6Canvases,U.cubemapFromArray],t=[],V=[],z=100,K=0;K<z;++K){var M=void 0,S=void 0,L=void 0,uu=C(0,2)|0;switch(uu){case 0:L=O[K%O.length],S=n,M={u_diffuseMult:R.hsv((e+C(0,60))%360,.4,.8).gl(),u_diffuse:l[C(0,l.length)|0],u_viewInverse:d,u_world:o.identity(),u_worldInverseTranspose:o.identity(),u_worldViewProjection:o.identity()};break;case 1:L=C(0,2)<1?O[1]:O[3],S=I,M={u_texture:A[C(0,A.length)|0],u_viewInverse:d,u_world:o.identity(),u_worldInverseTranspose:o.identity(),u_worldViewProjection:o.identity()};break;default:throw"wAT!"}V.push({programInfo:S,bufferInfo:L,uniforms:M}),t.push({translation:[C(-10,10),C(-10,10),C(-10,10)],ySpeed:C(.1,.3),zSpeed:C(.1,.3),uniforms:M})}requestAnimationFrame(c)}}},[]),(0,m.jsx)("canvas",{ref:v,width:800,height:300})};w.default=D},52246:function(J,w,i){i.r(w);var R=i(67294),F=i(48460),x=i(85893),y=function(){var D=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(D.current){var u=D.current,v=u.getContext("webgl");if(v){var f=function(){if(v){v.viewport(0,0,r,o),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(B.program);var n=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,n);var I=new Uint16Array([0,1,2]);v.bufferData(v.ELEMENT_ARRAY_BUFFER,I,v.STATIC_DRAW),F.o8(v,B,g),v.drawElements(v.TRIANGLES,I.length,v.UNSIGNED_SHORT,0)}},r=v.canvas.width,o=v.canvas.height;F.Lo(u);var a=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,c=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,B=F.EK(v,[a,c]),h=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),g=F.qX(v,{position:h});f()}}},[]),(0,x.jsx)("canvas",{ref:D,width:100,height:100})};w.default=y},11696:function(J,w,i){i.r(w);var R=i(67294),F=i(48460),x=i(85893),y=function(){var D=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(D.current){var u=D.current,v=F.m4,f=u.getContext("webgl");if(f){var r=function n(I){if(f){var O=I;O*=.001,F.Lo(u),f.viewport(0,0,f.canvas.width,f.canvas.height),f.enable(f.DEPTH_TEST),f.enable(f.CULL_FACE),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT);var C=30*Math.PI/180,e=f.canvas.width/f.canvas.height,d=.5,T=10,W=v.perspective(C,e,d,T),E=[1,4,-6],_=[0,0,0],s=[0,1,0],p=v.lookAt(E,_,s),N=v.inverse(p),b=v.multiply(W,N),j=v.rotationY(O);P.u_viewInverse=p,P.u_world=j,P.u_worldInverseTranspose=v.transpose(v.inverse(j)),P.u_worldViewProjection=v.multiply(b,j),f.useProgram(c.program),F.o8(f,c,h),F.N9(c,P),f.drawElements(f.TRIANGLES,h.numElements,f.UNSIGNED_SHORT,0),requestAnimationFrame(n)}},o=`
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
        `,a=`  
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
        `,c=F.EK(f,[o,a]),B={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},h=F.qX(f,B),g=F.cU(f,{min:f.NEAREST,mag:f.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),P={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:g};requestAnimationFrame(r)}}},[]),(0,x.jsx)("canvas",{ref:D,width:100,height:100})};w.default=y}}]);
