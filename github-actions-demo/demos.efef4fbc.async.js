"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(G,y,o){o.r(y);var T=o(67294),A=o(85893),p=function(){var j=(0,T.useRef)(null);return(0,T.useEffect)(function(){var P=j.current,n=P==null?void 0:P.getContext("experimental-webgl");if(n){var v=function e(){rotateX(B),rotateY(B),rotateZ(B),n.uniformMatrix4fv(d,!1,new Float32Array(u)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,_.length/3),requestAnimationFrame(e)},E=`precision highp float;
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
      `,i=n.createShader(n.VERTEX_SHADER),a=n.createShader(n.FRAGMENT_SHADER),F=n.createProgram();n.shaderSource(i,E),n.shaderSource(a,r),n.compileShader(i),n.compileShader(a),n.attachShader(F,i),n.attachShader(F,a),n.linkProgram(F),n.useProgram(F);var C=function(D,w,N,s,c){var f=new Array,x=-s;function U(K,H,z){for(var Y=0,S=360/K,M=new Array,uu=0;uu<K;uu++)M.push(Math.sin(Math.PI/180*Y)*z,Math.cos(Math.PI/180*Y)*z,H),Y+=S;return M}for(var W=360/c,m=0,x=s,O=0,V=W,J=0;J<c/2;J++){if(J>=c/4)var b=Math.sin(Math.PI/180*m)*-s;else var b=Math.sin(Math.PI/180*m)*-s;console.log(b),m+=W;var l=U(c,b,x);J>=c/4?b=Math.sin(Math.PI/180*m)*-s:b=-Math.sin(Math.PI/180*m)*-s,x=Math.sqrt(s*s-s*Math.sin(Math.PI/180*m)*s*Math.sin(Math.PI/180*m));for(var R=U(c,b,x),t=0;t<l.length;t+=3)t==0?(f.push(l[t],l[t+1],l[t+2]),f.push(R[t],R[t+1],R[t+2]),f.push(l[l.length-3],l[l.length-2],l[l.length-1]),f.push(l[t],l[t+1],l[t+2]),f.push(R[t],R[t+1],R[t+2]),f.push(R[t+3],R[t+4],R[t+5])):t==l.length-3?(f.push(l[t],l[t+1],l[t+2]),f.push(R[t],R[t+1],R[t+2]),f.push(l[t-3],l[t-2],l[t-1]),f.push(l[t],l[t+1],l[t+2]),f.push(R[t],R[t+1],R[t+2]),f.push(R[0],R[1],R[2])):(f.push(l[t],l[t+1],l[t+2]),f.push(R[t],R[t+1],R[t+2]),f.push(l[t-3],l[t-2],l[t-1]),f.push(l[t],l[t+1],l[t+2]),f.push(R[t],R[t+1],R[t+2]),f.push(R[t+3],R[t+4],R[t+5]))}return f},_=C(0,0,0,.5,180),g=n.getAttribLocation(F,"position"),d=n.getUniformLocation(F,"mat");console.log(n.getShaderInfoLog(i));var u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];console.log(n.getShaderInfoLog(a)),o.g.rotateX=function(e){var D=Math.cos(Math.PI/180*e),w=Math.sin(Math.PI/180*e),N=u[1],s=u[5],c=u[9];u[1]=D*u[1]-w*u[2],u[5]=D*u[5]-w*u[6],u[9]=D*u[9]-w*u[10],u[2]=w*N+D*u[2],u[6]=w*s+D*u[6],u[10]=w*c+D*u[10]},o.g.rotateY=function(e){var D=Math.cos(Math.PI/180*e),w=Math.sin(Math.PI/180*e),N=u[0],s=u[8],c=u[4];u[0]=D*u[0]+w*u[2],u[4]=D*u[4]+w*u[6],u[8]=D*u[8]+w*u[10],u[2]=D*u[2]-w*N,u[6]=D*u[6]-w*c,u[10]=D*u[10]-w*s},o.g.rotateZ=function(e){var D=Math.cos(Math.PI/180*e),w=Math.sin(Math.PI/180*e),N=u[0],s=u[4],c=u[8];u[0]=D*u[0]-w*u[1],u[4]=D*u[4]-w*u[5],u[8]=D*u[8]-w*u[9],u[1]=w*N+D*u[1],u[5]=w*s+D*u[5],u[9]=w*c+D*u[9]},o.g.moveX=function(e){u[0]=u[0]+e*u[3],u[4]=u[4]+e*u[7],u[8]=u[8]+e*u[11],u[12]=u[12]+e*u[15]},o.g.moveY=function(e){u[1]=e*u[3]+u[1],u[5]=e*u[7]+u[5],u[9]=e*u[11]+u[9],u[13]=e*u[15]+u[13]},o.g.moveZ=function(e){u[2]=e*u[3]+u[2],u[6]=e*u[7]+u[6],u[10]=e*u[11]+u[10],u[14]=e*u[15]+u[14]},o.g.scaleFun=function(e){u[0]=e*u[0],u[4]=e*u[4],u[8]=e*u[8],u[12]=e*u[12],u[1]=e*u[1],u[5]=e*u[5],u[9]=e*u[9],u[13]=e*u[13],u[2]=e*u[2],u[6]=e*u[6],u[10]=e*u[10],u[14]=e*u[14]};var I=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,new Float32Array(_),n.STATIC_DRAW),n.vertexAttribPointer(g,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(g);var L=.05,B=.5;v()}},[]),(0,A.jsx)("canvas",{ref:j,width:"200",height:"200"})};y.default=p},27246:function(G,y,o){o.r(y);var T=o(67294),A=o(85893),p=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,h=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,j=function(){var n=(0,T.useRef)(null);function v(i,a,F,C,_){var g,d,u,I;return g=i*Math.pow(1-_,3),d=3*a*_*Math.pow(1-_,2),u=3*F*Math.pow(_,2)*(1-_),I=C*Math.pow(_,3),g+d+u+I}function E(i,a,F,C,_,g){return{x:v(i.x,a.x,F.x,C.x,_*g),y:v(i.y,a.y,F.y,C.y,_*g),z:v(i.z,a.z,F.z,C.z,_*g)}}function r(i,a,F,C,_,g){for(var d=_||100,u=g||1,I=u/(d-1),L=[],B=0;B<d;B++){var e=E(i,a,F,C,B,I);L.push(e.x),L.push(e.y),L.push(e.z)}return L}return(0,T.useEffect)(function(){var i=n.current,a=i==null?void 0:i.getContext("webgl");if(a){var F=a.createShader(a.VERTEX_SHADER),C=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(F,p),a.shaderSource(C,h),a.compileShader(F);var _=a.getShaderParameter(F,a.COMPILE_STATUS);if(!_)throw new Error("compile Shader is failed");a.compileShader(C);var g=a.getShaderParameter(C,a.COMPILE_STATUS);if(!g)throw new Error("compile Shader is failed");var d=a.createProgram();a.attachShader(d,F),a.attachShader(d,C),a.linkProgram(d);var u=a.getProgramParameter(d,a.LINK_STATUS);if(!u)throw new Error("link Shader is failed");a.useProgram(d);var I=a.getAttribLocation(d,"a_Position"),L=a.getUniformLocation(d,"u_FragColor");a.uniform4fv(L,[0,1,1,1]);var B=r({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),e=new Float32Array(B),D=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,D),a.bufferData(a.ARRAY_BUFFER,e,a.STATIC_DRAW),a.vertexAttribPointer(I,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(I),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.LINE_STRIP,0,B.length/3)}},[]),(0,A.jsx)("canvas",{ref:n,width:"300",height:"200"})};y.default=j},38952:function(G,y,o){o.r(y);var T=o(67294),A=o(85893),p=function(){var j=(0,T.useRef)(null);return(0,T.useEffect)(function(){var P=j.current,n=P==null?void 0:P.getContext("webgl");if(n){var v=function(f,U,W,m,x,O,V,J,b){var l=function(S){var M=Math.sqrt(S[0]*S[0]+S[1]*S[1]+S[2]*S[2]);return[S[0]/M,S[1]/M,S[2]/M]},R=function(S,M){return[S[0]-M[0],S[1]-M[1],S[2]-M[2]]},t=function(S,M){return[S[1]*M[2]-S[2]*M[1],S[2]*M[0]-S[0]*M[2],S[0]*M[1]-S[1]*M[0]]},K=l(R([f,U,W],[m,x,O])),H=l(t([V,J,b],K)),z=l(t(K,H));return new Float32Array([H[0],z[0],K[0],0,H[1],z[1],K[1],0,H[2],z[2],K[2],0,-(H[0]*f+H[1]*U+H[2]*W),-(z[0]*f+z[1]*U+z[2]*W),-(K[0]*f+K[1]*U+K[2]*W),1])},E=function(f){return Math.PI*f/180},r=function(f,U,W,m){f=E(f);var x=1/Math.tan(f/2),O=1/(W-m);return new Float32Array([x/U,0,0,0,0,x,0,0,0,0,(m+W)*O,-1,0,0,2*m*W*O,0])},i=`
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
        `,F=n.createShader(n.VERTEX_SHADER);n.shaderSource(F,i),n.compileShader(F);var C=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(C,a),n.compileShader(C);var _=n.createProgram();n.attachShader(_,F),n.attachShader(_,C),n.linkProgram(_),n.useProgram(_),n.program=_;var g=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),d=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),u=g.BYTES_PER_ELEMENT,I=n.createBuffer(),L=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,g,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,L),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW);var B=n.getAttribLocation(n.program,"a_Position"),e=n.getAttribLocation(n.program,"a_Color"),D=n.getUniformLocation(n.program,"u_ViewMatrix"),w=v(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(D,!1,w);var N=n.getUniformLocation(n.program,"u_ProjMatrix"),s=r(30,P.width/P.height,1,100);n.uniformMatrix4fv(N,!1,s),n.vertexAttribPointer(B,3,n.FLOAT,!1,u*6,0),n.enableVertexAttribArray(B),n.vertexAttribPointer(e,3,n.FLOAT,!1,u*6,u*3),n.enableVertexAttribArray(e),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,d.length,n.UNSIGNED_BYTE,0)}},[]),(0,A.jsx)("canvas",{ref:j,width:"200",height:"200"})};y.default=p},63296:function(G,y,o){o.r(y);var T=o(67294),A=o(85893),p=function(){var j=(0,T.useRef)(null);return(0,T.useEffect)(function(){var P=j.current,n=P==null?void 0:P.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,A.jsx)("canvas",{ref:j,width:"100",height:"100"})};y.default=p},2795:function(G,y,o){o.r(y);var T=o(67294),A=o(85893),p=function(){var j=(0,T.useRef)(null);return(0,T.useEffect)(function(){var P=j.current,n=P==null?void 0:P.getContext("webgl");if(n){var v=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,E=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,r=n.createShader(n.VERTEX_SHADER),i=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(r,v),n.shaderSource(i,E),n.compileShader(r),n.compileShader(i);var a=n.createProgram();n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),n.useProgram(a);var F=new Float32Array([1,1,-1,1,1,-1,-1,-1]),C=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,C),n.bufferData(n.ARRAY_BUFFER,F,n.STATIC_DRAW);var _=n.getAttribLocation(a,"a_Position");n.vertexAttribPointer(_,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(_),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,A.jsx)("canvas",{ref:j,width:"100",height:"100"})};y.default=p},44091:function(G,y,o){o.r(y);var T=o(67294),A=o(99477),p=o(85893),h=function(){var P=(0,T.useRef)(null);return(0,T.useEffect)(function(){var n=P.current,v=10,E=10,r;function i(){v=n.clientWidth,E=n.clientHeight,r=new A.CP7({antialias:!0}),r.setSize(v,E),n.appendChild(r.domElement),r.setClearColor(16777215,1)}var a;function F(){a=new A.cPb(45,v/E,1,1e4),a.position.x=0,a.position.y=2,a.position.z=1,a.up.x=0,a.up.y=0,a.up.z=1,a.lookAt(new A.Pa4(0,0,0))}var C;function _(){C=new A.xsS}var g;function d(){var B=new A.DvJ(1,1,1),e=new A.YBo({color:16777215});g=new A.Kj0(B,e),C.add(g)}function u(){var B=new A.cek(16711680);B.position.set(1,1,-1);var e=new A.cek(65280);e.position.set(1,-1,1),C.add(B),C.add(e)}function I(){g.rotation.x+=.01,g.rotation.y+=.01,r.render(C,a),requestAnimationFrame(I)}function L(){i(),F(),_(),d(),u(),I()}L()},[]),(0,p.jsx)("div",{ref:P,style:{width:150,height:150}})};y.default=h},99038:function(G,y,o){o.r(y);var T=o(28670),A=o.n(T),p=o(67294),h=o(48460),j=o(85893),P=function(){var v=(0,p.useRef)(null);return(0,p.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl");h.j_({attribPrefix:"a_"});var i=h.m4;if(r){var a=function(k){s&&(s.fillStyle="#00f",s.strokeStyle="#ff0",s.lineWidth=10,s.fillRect(0,0,s.canvas.width,s.canvas.height),s.beginPath(),s.arc(s.canvas.width/2,s.canvas.height/2,s.canvas.width/2.2*Math.abs(Math.cos(k)),0,Math.PI*2),s.stroke())},F=function au(k){if(r){var Q=k;Q*=.001,h.Lo(E),r.viewport(0,0,E.clientWidth,E.clientHeight),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);var Z=20,$=Q*.1,ru=i.perspective(30*Math.PI/180,r.canvas.width/r.canvas.height,.5,100),eu=[Math.cos($)*Z,4,Math.sin($)*Z],tu=[0,0,0],ou=[0,1,0];i.lookAt(eu,tu,ou,D),i.inverse(D,w),i.multiply(ru,w,N),a(Q),s&&h.Mh(r,b.fromCanvas,s.canvas),t.forEach(function(nu){var q=nu.uniforms,X=q.u_world;i.identity(X),i.rotateY(X,Q*nu.ySpeed,X),i.rotateZ(X,Q*nu.zSpeed,X),i.translate(X,nu.translation,X),i.rotateX(X,Q,X),i.transpose(i.inverse(X,q.u_worldInverseTranspose),q.u_worldInverseTranspose),i.multiply(N,q.u_world,q.u_worldViewProjection)}),h.bV(r,K),requestAnimationFrame(au)}},C=`  
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
        `,u=h.EK(r,[C,_]),I=h.EK(r,[g,d]),L=[h.S6.createCubeBufferInfo(r,2),h.S6.createSphereBufferInfo(r,1,24,12),h.S6.createPlaneBufferInfo(r,2,2),h.S6.createTruncatedConeBufferInfo(r,1,0,2,24,1)],B=function(k,Q){var Z=k,$=Q;return $===void 0&&($=Z,Z=0),Z+Math.random()*($-Z)},e=B(360),D=i.identity(),w=i.identity(),N=i.identity(),s=document.createElement("canvas").getContext("2d");s&&(s.canvas.width=64,s.canvas.height=64),a(0);var c=document.createElement("canvas").getContext("2d"),f=40;if(c){c.canvas.width=f*6,c.canvas.height=f,c.fillStyle="#888";for(var U=0;U<6;++U){var W=T.hsv((e+U*10)%360,1-U/6,1);c.fillStyle=W.darken().hex(),c.fillRect(f*U,0,f,f),c.save(),c.translate(f*(U+.5),f*.5),c.beginPath(),c.arc(0,0,f*.3,0,Math.PI*2),c.fillStyle=W.hex(),c.fill(),c.restore()}}for(var m=[],x=0;x<6;++x){var O=document.createElement("canvas");O.width=128,O.height=128;var V=O.getContext("2d"),J=T.hsv((e+x*10)%360,1-x/6,1);V&&(V.fillStyle=J.darken().hex(),V.fillRect(0,0,128,128),V.translate(64,64),V.rotate(Math.PI*.25),V.fillStyle=J.hex(),V.fillRect(-40,-40,80,80)),m.push(O)}for(var b=h.cE(r,{hftIcon:{src:"images/hft-icon-16.png",mag:r.NEAREST},clover:{src:"images/clover.jpg"},fromCanvas:{src:s==null?void 0:s.canvas},yokohama:{target:r.TEXTURE_CUBE_MAP,src:["images/yokohama/posx.jpg","images/yokohama/negx.jpg","images/yokohama/posy.jpg","images/yokohama/negy.jpg","images/yokohama/posz.jpg","images/yokohama/negz.jpg"]},goldengate:{target:r.TEXTURE_CUBE_MAP,src:"images/goldengate.jpg"},checker:{mag:r.NEAREST,min:r.LINEAR,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]},stripe:{mag:r.NEAREST,min:r.LINEAR,format:r.LUMINANCE,src:new Uint8Array([255,128,255,128,255,128,255,128]),width:1},cubemapFromArray:{target:r.TEXTURE_CUBE_MAP,format:r.RGBA,src:[240,128,128,255,128,224,128,255,128,128,208,255,192,128,128,255,128,176,128,255,128,128,0,255]},cubemapFromCanvas:{target:r.TEXTURE_CUBE_MAP,src:c==null?void 0:c.canvas},cubemapFrom6Canvases:{target:r.TEXTURE_CUBE_MAP,src:m}}),l=[b.checker,b.stripe,b.hftIcon,b.clover,b.fromCanvas],R=[b.yokohama,b.goldengate,b.cubemapFromCanvas,b.cubemapFrom6Canvases,b.cubemapFromArray],t=[],K=[],H=100,z=0;z<H;++z){var Y=void 0,S=void 0,M=void 0,uu=B(0,2)|0;switch(uu){case 0:M=L[z%L.length],S=u,Y={u_diffuseMult:T.hsv((e+B(0,60))%360,.4,.8).gl(),u_diffuse:l[B(0,l.length)|0],u_viewInverse:D,u_world:i.identity(),u_worldInverseTranspose:i.identity(),u_worldViewProjection:i.identity()};break;case 1:M=B(0,2)<1?L[1]:L[3],S=I,Y={u_texture:R[B(0,R.length)|0],u_viewInverse:D,u_world:i.identity(),u_worldInverseTranspose:i.identity(),u_worldViewProjection:i.identity()};break;default:throw"wAT!"}K.push({programInfo:S,bufferInfo:M,uniforms:Y}),t.push({translation:[B(-10,10),B(-10,10),B(-10,10)],ySpeed:B(.1,.3),zSpeed:B(.1,.3),uniforms:Y})}requestAnimationFrame(F)}}},[]),(0,j.jsx)("canvas",{ref:v,width:800,height:300})};y.default=P},52246:function(G,y,o){o.r(y);var T=o(67294),A=o(48460),p=o(85893),h=function(){var P=(0,T.useRef)(null);return(0,T.useEffect)(function(){if(P.current){var n=P.current,v=n.getContext("webgl");if(v){var E=function(){if(v){v.viewport(0,0,r,i),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(C.program);var u=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,u);var I=new Uint16Array([0,1,2]);v.bufferData(v.ELEMENT_ARRAY_BUFFER,I,v.STATIC_DRAW),A.o8(v,C,g),v.drawElements(v.TRIANGLES,I.length,v.UNSIGNED_SHORT,0)}},r=v.canvas.width,i=v.canvas.height;A.Lo(n);var a=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,F=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,C=A.EK(v,[a,F]),_=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),g=A.qX(v,{position:_});E()}}},[]),(0,p.jsx)("canvas",{ref:P,width:100,height:100})};y.default=h},11696:function(G,y,o){o.r(y);var T=o(67294),A=o(48460),p=o(85893),h=function(){var P=(0,T.useRef)(null);return(0,T.useEffect)(function(){if(P.current){var n=P.current,v=A.m4,E=n.getContext("webgl");if(E){var r=function u(I){if(E){var L=I;L*=.001,A.Lo(n),E.viewport(0,0,E.canvas.width,E.canvas.height),E.enable(E.DEPTH_TEST),E.enable(E.CULL_FACE),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT);var B=30*Math.PI/180,e=E.canvas.width/E.canvas.height,D=.5,w=10,N=v.perspective(B,e,D,w),s=[1,4,-6],c=[0,0,0],f=[0,1,0],U=v.lookAt(s,c,f),W=v.inverse(U),m=v.multiply(N,W),x=v.rotationY(L);d.u_viewInverse=U,d.u_world=x,d.u_worldInverseTranspose=v.transpose(v.inverse(x)),d.u_worldViewProjection=v.multiply(m,x),E.useProgram(F.program),A.o8(E,F,_),A.N9(F,d),E.drawElements(E.TRIANGLES,_.numElements,E.UNSIGNED_SHORT,0),requestAnimationFrame(u)}},i=`
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
        `,F=A.EK(E,[i,a]),C={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},_=A.qX(E,C),g=A.cU(E,{min:E.NEAREST,mag:E.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),d={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:g};requestAnimationFrame(r)}}},[]),(0,p.jsx)("canvas",{ref:P,width:100,height:100})};y.default=h},41732:function(G,y,o){o.r(y);var T=o(28670),A=o.n(T),p=o(67294),h=o(48460),j=o(85893),P=function(){var v=(0,p.useRef)(null);return(0,p.useEffect)(function(){if(v.current){var E=v.current,r=E.getContext("webgl"),i=h.m4;if(h.j_({attribPrefix:"a_"}),r){for(var a=function(x,O){return x+Math.random()*(O-x)},F=function m(x){if(r){var O=x;O*=.001,h.Lo(E),r.viewport(0,0,r.canvas.width,r.canvas.height),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),c[0]=Math.sin(O),c[1]=Math.sin(O*.13)*Math.PI*2,c[2]=Math.sin(O*.43)*.5+1,c[3]=Math.cos(O*.17)*.5+.5,f[0]=Math.sin(O*.163)*.5,f[1]=Math.cos(O*.267)*.5,f[2]=Math.sin(O*.367)*.5,f[3]=Math.cos(O*.497)*.5,U[1]=(Math.sin(O*.1)*.5+.5)*3;var V=E.clientWidth/E.clientHeight;i.ortho(-V,V,1,-1,-1,1,W.u_matrix),r.useProgram(g.program),h.o8(r,g,s),h.N9(g,W),h.y0(r,s,r.LINES),requestAnimationFrame(m)}},C=`  
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
        `,g=h.EK(r,[C,_]),d=100,u={position:h.S6.createAugmentedTypedArray(2,d*2),color:h.S6.createAugmentedTypedArray(3,d*2,Uint8Array)},I=a(0,360),L=0;L<d;++L){var B=L/d,e=(360+I+Math.abs(B-.5)*100)%360,D=Math.sin(B*Math.PI*2)*.25+.75,w=1,N=T.hsv(e,D,w);u.position.push(B,1),u.color.push(N.rgb()),u.position.push(B,0),u.color.push(N.brighten().desaturate().rgb())}var s=h.qX(r,u),c=[0,0,0,1],f=[0,0,0,0],U=[1,2,0,0],W={u_matrix:i.identity(),u_offsets:c,u_centers:f,u_mult:U};requestAnimationFrame(F)}}},[]),(0,j.jsx)("canvas",{ref:v,width:800,height:300})};y.default=P}}]);
