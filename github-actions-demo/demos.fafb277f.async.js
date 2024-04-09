"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(H,g,i){i.r(g);var C=i(67294),l=i(85893),U=function(){var O=(0,C.useRef)(null);return(0,C.useEffect)(function(){var _=O.current,n=_==null?void 0:_.getContext("experimental-webgl");if(n){var o=function a(){rotateX(w),rotateY(w),rotateZ(w),n.uniformMatrix4fv(A,!1,new Float32Array(t)),n.clearColor(.5,.5,.5,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,c.length/3),requestAnimationFrame(a)},u=`precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `,L=`
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `,d=n.createShader(n.VERTEX_SHADER),e=n.createShader(n.FRAGMENT_SHADER),f=n.createProgram();n.shaderSource(d,u),n.shaderSource(e,L),n.compileShader(d),n.compileShader(e),n.attachShader(f,d),n.attachShader(f,e),n.linkProgram(f),n.useProgram(f);var h=function(R,T,z,D,x){var s=new Array,N=-D;function W(j,K,V){for(var X=0,S=360/j,I=new Array,Q=0;Q<j;Q++)I.push(Math.sin(Math.PI/180*X)*V,Math.cos(Math.PI/180*X)*V,K),X+=S;return I}for(var b=360/x,B=0,N=D,m=0,J=b,G=0;G<x/2;G++){if(G>=x/4)var Y=Math.sin(Math.PI/180*B)*-D;else var Y=Math.sin(Math.PI/180*B)*-D;console.log(Y),B+=b;var v=W(x,Y,N);G>=x/4?Y=Math.sin(Math.PI/180*B)*-D:Y=-Math.sin(Math.PI/180*B)*-D,N=Math.sqrt(D*D-D*Math.sin(Math.PI/180*B)*D*Math.sin(Math.PI/180*B));for(var E=W(x,Y,N),r=0;r<v.length;r+=3)r==0?(s.push(v[r],v[r+1],v[r+2]),s.push(E[r],E[r+1],E[r+2]),s.push(v[v.length-3],v[v.length-2],v[v.length-1]),s.push(v[r],v[r+1],v[r+2]),s.push(E[r],E[r+1],E[r+2]),s.push(E[r+3],E[r+4],E[r+5])):r==v.length-3?(s.push(v[r],v[r+1],v[r+2]),s.push(E[r],E[r+1],E[r+2]),s.push(v[r-3],v[r-2],v[r-1]),s.push(v[r],v[r+1],v[r+2]),s.push(E[r],E[r+1],E[r+2]),s.push(E[0],E[1],E[2])):(s.push(v[r],v[r+1],v[r+2]),s.push(E[r],E[r+1],E[r+2]),s.push(v[r-3],v[r-2],v[r-1]),s.push(v[r],v[r+1],v[r+2]),s.push(E[r],E[r+1],E[r+2]),s.push(E[r+3],E[r+4],E[r+5]))}return s},c=h(0,0,0,.5,180),P=n.getAttribLocation(f,"position"),A=n.getUniformLocation(f,"mat");console.log(n.getShaderInfoLog(d));var t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];console.log(n.getShaderInfoLog(e)),i.g.rotateX=function(a){var R=Math.cos(Math.PI/180*a),T=Math.sin(Math.PI/180*a),z=t[1],D=t[5],x=t[9];t[1]=R*t[1]-T*t[2],t[5]=R*t[5]-T*t[6],t[9]=R*t[9]-T*t[10],t[2]=T*z+R*t[2],t[6]=T*D+R*t[6],t[10]=T*x+R*t[10]},i.g.rotateY=function(a){var R=Math.cos(Math.PI/180*a),T=Math.sin(Math.PI/180*a),z=t[0],D=t[8],x=t[4];t[0]=R*t[0]+T*t[2],t[4]=R*t[4]+T*t[6],t[8]=R*t[8]+T*t[10],t[2]=R*t[2]-T*z,t[6]=R*t[6]-T*x,t[10]=R*t[10]-T*D},i.g.rotateZ=function(a){var R=Math.cos(Math.PI/180*a),T=Math.sin(Math.PI/180*a),z=t[0],D=t[4],x=t[8];t[0]=R*t[0]-T*t[1],t[4]=R*t[4]-T*t[5],t[8]=R*t[8]-T*t[9],t[1]=T*z+R*t[1],t[5]=T*D+R*t[5],t[9]=T*x+R*t[9]},i.g.moveX=function(a){t[0]=t[0]+a*t[3],t[4]=t[4]+a*t[7],t[8]=t[8]+a*t[11],t[12]=t[12]+a*t[15]},i.g.moveY=function(a){t[1]=a*t[3]+t[1],t[5]=a*t[7]+t[5],t[9]=a*t[11]+t[9],t[13]=a*t[15]+t[13]},i.g.moveZ=function(a){t[2]=a*t[3]+t[2],t[6]=a*t[7]+t[6],t[10]=a*t[11]+t[10],t[14]=a*t[15]+t[14]},i.g.scaleFun=function(a){t[0]=a*t[0],t[4]=a*t[4],t[8]=a*t[8],t[12]=a*t[12],t[1]=a*t[1],t[5]=a*t[5],t[9]=a*t[9],t[13]=a*t[13],t[2]=a*t[2],t[6]=a*t[6],t[10]=a*t[10],t[14]=a*t[14]};var F=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,F),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),n.vertexAttribPointer(P,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(P);var y=.05,w=.5;o()}},[]),(0,l.jsx)("canvas",{ref:O,width:"200",height:"200"})};g.default=U},27246:function(H,g,i){i.r(g);var C=i(67294),l=i(85893),U=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,p=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,O=function(){var n=(0,C.useRef)(null);function o(d,e,f,h,c){var P,A,t,F;return P=d*Math.pow(1-c,3),A=3*e*c*Math.pow(1-c,2),t=3*f*Math.pow(c,2)*(1-c),F=h*Math.pow(c,3),P+A+t+F}function u(d,e,f,h,c,P){return{x:o(d.x,e.x,f.x,h.x,c*P),y:o(d.y,e.y,f.y,h.y,c*P),z:o(d.z,e.z,f.z,h.z,c*P)}}function L(d,e,f,h,c,P){for(var A=c||100,t=P||1,F=t/(A-1),y=[],w=0;w<A;w++){var a=u(d,e,f,h,w,F);y.push(a.x),y.push(a.y),y.push(a.z)}return y}return(0,C.useEffect)(function(){var d=n.current,e=d==null?void 0:d.getContext("webgl");if(e){var f=e.createShader(e.VERTEX_SHADER),h=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(f,U),e.shaderSource(h,p),e.compileShader(f);var c=e.getShaderParameter(f,e.COMPILE_STATUS);if(!c)throw new Error("compile Shader is failed");e.compileShader(h);var P=e.getShaderParameter(h,e.COMPILE_STATUS);if(!P)throw new Error("compile Shader is failed");var A=e.createProgram();e.attachShader(A,f),e.attachShader(A,h),e.linkProgram(A);var t=e.getProgramParameter(A,e.LINK_STATUS);if(!t)throw new Error("link Shader is failed");e.useProgram(A);var F=e.getAttribLocation(A,"a_Position"),y=e.getUniformLocation(A,"u_FragColor");e.uniform4fv(y,[0,1,1,1]);var w=L({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),a=new Float32Array(w),R=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,R),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.vertexAttribPointer(F,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(F),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.LINE_STRIP,0,w.length/3)}},[]),(0,l.jsx)("canvas",{ref:n,width:"300",height:"200"})};g.default=O},38952:function(H,g,i){i.r(g);var C=i(67294),l=i(85893),U=function(){var O=(0,C.useRef)(null);return(0,C.useEffect)(function(){var _=O.current,n=_==null?void 0:_.getContext("webgl");if(n){var o=function(s,W,b,B,N,m,J,G,Y){var v=function(S){var I=Math.sqrt(S[0]*S[0]+S[1]*S[1]+S[2]*S[2]);return[S[0]/I,S[1]/I,S[2]/I]},E=function(S,I){return[S[0]-I[0],S[1]-I[1],S[2]-I[2]]},r=function(S,I){return[S[1]*I[2]-S[2]*I[1],S[2]*I[0]-S[0]*I[2],S[0]*I[1]-S[1]*I[0]]},j=v(E([s,W,b],[B,N,m])),K=v(r([J,G,Y],j)),V=v(r(j,K));return new Float32Array([K[0],V[0],j[0],0,K[1],V[1],j[1],0,K[2],V[2],j[2],0,-(K[0]*s+K[1]*W+K[2]*b),-(V[0]*s+V[1]*W+V[2]*b),-(j[0]*s+j[1]*W+j[2]*b),1])},u=function(s){return Math.PI*s/180},L=function(s,W,b,B){s=u(s);var N=1/Math.tan(s/2),m=1/(b-B);return new Float32Array([N/W,0,0,0,0,N,0,0,0,0,(B+b)*m,-1,0,0,2*B*b*m,0])},d=`
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
        `,f=n.createShader(n.VERTEX_SHADER);n.shaderSource(f,d),n.compileShader(f);var h=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(h,e),n.compileShader(h);var c=n.createProgram();n.attachShader(c,f),n.attachShader(c,h),n.linkProgram(c),n.useProgram(c),n.program=c;var P=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),A=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),t=P.BYTES_PER_ELEMENT,F=n.createBuffer(),y=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,F),n.bufferData(n.ARRAY_BUFFER,P,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,y),n.bufferData(n.ELEMENT_ARRAY_BUFFER,A,n.STATIC_DRAW);var w=n.getAttribLocation(n.program,"a_Position"),a=n.getAttribLocation(n.program,"a_Color"),R=n.getUniformLocation(n.program,"u_ViewMatrix"),T=o(3,4,8,0,0,0,0,1,0);n.uniformMatrix4fv(R,!1,T);var z=n.getUniformLocation(n.program,"u_ProjMatrix"),D=L(30,_.width/_.height,1,100);n.uniformMatrix4fv(z,!1,D),n.vertexAttribPointer(w,3,n.FLOAT,!1,t*6,0),n.enableVertexAttribArray(w),n.vertexAttribPointer(a,3,n.FLOAT,!1,t*6,t*3),n.enableVertexAttribArray(a),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,A.length,n.UNSIGNED_BYTE,0)}},[]),(0,l.jsx)("canvas",{ref:O,width:"200",height:"200"})};g.default=U},63296:function(H,g,i){i.r(g);var C=i(67294),l=i(85893),U=function(){var O=(0,C.useRef)(null);return(0,C.useEffect)(function(){var _=O.current,n=_==null?void 0:_.getContext("2d");n&&(n.beginPath(),n.moveTo(20,20),n.lineTo(200,20),n.lineWidth=1,n.strokeStyle="#CC0000",n.stroke())},[]),(0,l.jsx)("canvas",{ref:O,width:"100",height:"100"})};g.default=U},2795:function(H,g,i){i.r(g);var C=i(67294),l=i(85893),U=function(){var O=(0,C.useRef)(null);return(0,C.useEffect)(function(){var _=O.current,n=_==null?void 0:_.getContext("webgl");if(n){var o=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,u=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,L=n.createShader(n.VERTEX_SHADER),d=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(L,o),n.shaderSource(d,u),n.compileShader(L),n.compileShader(d);var e=n.createProgram();n.attachShader(e,L),n.attachShader(e,d),n.linkProgram(e),n.useProgram(e);var f=new Float32Array([1,1,-1,1,1,-1,-1,-1]),h=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,f,n.STATIC_DRAW);var c=n.getAttribLocation(e,"a_Position");n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(c),n.drawArrays(n.TRIANGLE_STRIP,0,4)}},[]),(0,l.jsx)("canvas",{ref:O,width:"100",height:"100"})};g.default=U},44091:function(H,g,i){i.r(g);var C=i(67294),l=i(99477),U=i(85893),p=function(){var _=(0,C.useRef)(null);return(0,C.useEffect)(function(){var n=_.current,o=10,u=10,L;function d(){o=n.clientWidth,u=n.clientHeight,L=new l.CP7({antialias:!0}),L.setSize(o,u),n.appendChild(L.domElement),L.setClearColor(16777215,1)}var e;function f(){e=new l.cPb(45,o/u,1,1e4),e.position.x=0,e.position.y=2,e.position.z=1,e.up.x=0,e.up.y=0,e.up.z=1,e.lookAt(new l.Pa4(0,0,0))}var h;function c(){h=new l.xsS}var P;function A(){var w=new l.DvJ(1,1,1),a=new l.YBo({color:16777215});P=new l.Kj0(w,a),h.add(P)}function t(){var w=new l.cek(16711680);w.position.set(1,1,-1);var a=new l.cek(65280);a.position.set(1,-1,1),h.add(w),h.add(a)}function F(){P.rotation.x+=.01,P.rotation.y+=.01,L.render(h,e),requestAnimationFrame(F)}function y(){d(),f(),c(),A(),t(),F()}y()},[]),(0,U.jsx)("div",{ref:_,style:{width:150,height:150}})};g.default=p},52246:function(H,g,i){i.r(g);var C=i(67294),l=i(48460),U=i(85893),p=function(){var _=(0,C.useRef)(null);return(0,C.useEffect)(function(){if(_.current){var n=_.current,o=n.getContext("webgl");if(o){var u=function(){if(o){o.viewport(0,0,L,d),o.clear(o.COLOR_BUFFER_BIT),o.useProgram(h.program);var t=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t);var F=new Uint16Array([0,1,2]);o.bufferData(o.ELEMENT_ARRAY_BUFFER,F,o.STATIC_DRAW),l.o8(o,h,P),o.drawElements(o.TRIANGLES,F.length,o.UNSIGNED_SHORT,0)}},L=o.canvas.width,d=o.canvas.height;l.Lo(n);var e=`  
          attribute vec4 position;  
          void main() {  
            gl_Position = position;  
          }  
        `,f=`  
          precision mediump float;  
          void main() {  
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272  
          }  
        `,h=l.EK(o,[e,f]),c=new Float32Array([-1,-1,0,.5,1,0,1,0,0]),P=l.qX(o,{position:c});u()}}},[]),(0,U.jsx)("canvas",{ref:_,width:100,height:100})};g.default=p},31417:function(H,g,i){i.r(g);var C=i(67294),l=i(48460),U=i(85893),p=function(){var _=(0,C.useRef)(null);return(0,C.useEffect)(function(){if(_.current){var n=_.current,o=l.m4,u=n.getContext("webgl");if(u){var L=function t(F){if(u){F*=.001,l.Lo(n),u.viewport(0,0,u.canvas.width,u.canvas.height),u.enable(u.DEPTH_TEST),u.enable(u.CULL_FACE),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);var y=30*Math.PI/180,w=u.canvas.width/u.canvas.height,a=.5,R=10,T=o.perspective(y,w,a,R),z=[1,4,-6],D=[0,0,0],x=[0,1,0],s=o.lookAt(z,D,x),W=o.inverse(s),b=o.multiply(T,W),B=o.rotationY(F);A.u_viewInverse=s,A.u_world=B,A.u_worldInverseTranspose=o.transpose(o.inverse(B)),A.u_worldViewProjection=o.multiply(b,B),u.useProgram(f.program),l.o8(u,f,c),l.N9(f,A),u.drawElements(u.TRIANGLES,c.numElements,u.UNSIGNED_SHORT,0),requestAnimationFrame(t)}},d=`  
          uniform mat4 u_worldViewProjection;
          uniform vec3 u_lightWorldPos;
          uniform mat4 u_world;
          uniform mat4 u_viewInverse;
          uniform mat4 u_worldInverseTranspose;
          
          attribute vec4 position;
          attribute vec3 normal;
          attribute vec2 texcoord;
          
          varying vec4 v_position;
          varying vec2 v_texCoord;
          varying vec3 v_normal;
          varying vec3 v_surfaceToLight;
          varying vec3 v_surfaceToView;
          
          void main() {
            v_texCoord = texcoord;
            v_position = u_worldViewProjection * position;
            v_normal = (u_worldInverseTranspose * vec4(normal, 0)).xyz;
            v_surfaceToLight = u_lightWorldPos - (u_world * position).xyz;
            v_surfaceToView = (u_viewInverse[3] - (u_world * position)).xyz;
            gl_Position = v_position;
          }
        `,e=`  
          precision mediump float;

          varying vec4 v_position;
          varying vec2 v_texCoord;
          varying vec3 v_normal;
          varying vec3 v_surfaceToLight;
          varying vec3 v_surfaceToView;
          
          uniform vec4 u_lightColor;
          uniform vec4 u_ambient;
          uniform sampler2D u_diffuse;
          uniform vec4 u_specular;
          uniform float u_shininess;
          uniform float u_specularFactor;
          
          vec4 lit(float l ,float h, float m) {
            return vec4(1.0,
                        max(l, 0.0),
                        (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
                        1.0);
          }
          
          void main() {
            vec4 diffuseColor = texture2D(u_diffuse, v_texCoord);
            vec3 a_normal = normalize(v_normal);
            vec3 surfaceToLight = normalize(v_surfaceToLight);
            vec3 surfaceToView = normalize(v_surfaceToView);
            vec3 halfVector = normalize(surfaceToLight + surfaceToView);
            vec4 litR = lit(dot(a_normal, surfaceToLight),
                              dot(a_normal, halfVector), u_shininess);
            vec4 outColor = vec4((
            u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
                          u_specular * litR.z * u_specularFactor)).rgb,
                diffuseColor.a);
            gl_FragColor = outColor;
          } 
        `,f=l.EK(u,[d,e]),h={position:[1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1],normal:[1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1],texcoord:[1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},c=l.qX(u,h),P=l.cU(u,{min:u.NEAREST,mag:u.NEAREST,src:[255,255,255,255,192,192,192,255,192,192,192,255,255,255,255,255]}),A={u_lightWorldPos:[1,8,-10],u_lightColor:[1,.8,.8,1],u_ambient:[0,0,0,1],u_specular:[1,1,1,1],u_shininess:50,u_specularFactor:1,u_diffuse:P};requestAnimationFrame(L)}}},[]),(0,U.jsx)("canvas",{ref:_,width:100,height:100})};g.default=p}}]);
