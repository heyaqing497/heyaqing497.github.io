"use strict";(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[433],{16894:function(Q,T,v){v.r(T);var F=v(67294),b=v(85893),O=function(){var C=(0,F.useRef)(null);return(0,F.useEffect)(function(){var R=C.current,a=R==null?void 0:R.getContext("experimental-webgl");if(a){var U=function e(){rotateX(B),rotateY(B),rotateZ(B),a.uniformMatrix4fv(P,!1,new Float32Array(t)),a.clearColor(.5,.5,.5,1),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.LINE_STRIP,0,l.length/3),requestAnimationFrame(e)},K=`precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `,w=`
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `,s=a.createShader(a.VERTEX_SHADER),n=a.createShader(a.FRAGMENT_SHADER),f=a.createProgram();a.shaderSource(s,K),a.shaderSource(n,w),a.compileShader(s),a.compileShader(n),a.attachShader(f,s),a.attachShader(f,n),a.linkProgram(f),a.useProgram(f);var E=function(h,c,j,g,S){var i=new Array,z=-g;function W(L,N,Y){for(var p=0,A=360/L,d=new Array,$=0;$<L;$++)d.push(Math.sin(Math.PI/180*p)*Y,Math.cos(Math.PI/180*p)*Y,N),p+=A;return d}for(var x=360/S,D=0,z=g,X=0,J=x,V=0;V<S/2;V++){if(V>=S/4)var H=Math.sin(Math.PI/180*D)*-g;else var H=Math.sin(Math.PI/180*D)*-g;console.log(H),D+=x;var o=W(S,H,z);V>=S/4?H=Math.sin(Math.PI/180*D)*-g:H=-Math.sin(Math.PI/180*D)*-g,z=Math.sqrt(g*g-g*Math.sin(Math.PI/180*D)*g*Math.sin(Math.PI/180*D));for(var u=W(S,H,z),r=0;r<o.length;r+=3)r==0?(i.push(o[r],o[r+1],o[r+2]),i.push(u[r],u[r+1],u[r+2]),i.push(o[o.length-3],o[o.length-2],o[o.length-1]),i.push(o[r],o[r+1],o[r+2]),i.push(u[r],u[r+1],u[r+2]),i.push(u[r+3],u[r+4],u[r+5])):r==o.length-3?(i.push(o[r],o[r+1],o[r+2]),i.push(u[r],u[r+1],u[r+2]),i.push(o[r-3],o[r-2],o[r-1]),i.push(o[r],o[r+1],o[r+2]),i.push(u[r],u[r+1],u[r+2]),i.push(u[0],u[1],u[2])):(i.push(o[r],o[r+1],o[r+2]),i.push(u[r],u[r+1],u[r+2]),i.push(o[r-3],o[r-2],o[r-1]),i.push(o[r],o[r+1],o[r+2]),i.push(u[r],u[r+1],u[r+2]),i.push(u[r+3],u[r+4],u[r+5]))}return i},l=E(0,0,0,.5,180),_=a.getAttribLocation(f,"position"),P=a.getUniformLocation(f,"mat");console.log(a.getShaderInfoLog(s));var t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];console.log(a.getShaderInfoLog(n)),v.g.rotateX=function(e){var h=Math.cos(Math.PI/180*e),c=Math.sin(Math.PI/180*e),j=t[1],g=t[5],S=t[9];t[1]=h*t[1]-c*t[2],t[5]=h*t[5]-c*t[6],t[9]=h*t[9]-c*t[10],t[2]=c*j+h*t[2],t[6]=c*g+h*t[6],t[10]=c*S+h*t[10]},v.g.rotateY=function(e){var h=Math.cos(Math.PI/180*e),c=Math.sin(Math.PI/180*e),j=t[0],g=t[8],S=t[4];t[0]=h*t[0]+c*t[2],t[4]=h*t[4]+c*t[6],t[8]=h*t[8]+c*t[10],t[2]=h*t[2]-c*j,t[6]=h*t[6]-c*S,t[10]=h*t[10]-c*g},v.g.rotateZ=function(e){var h=Math.cos(Math.PI/180*e),c=Math.sin(Math.PI/180*e),j=t[0],g=t[4],S=t[8];t[0]=h*t[0]-c*t[1],t[4]=h*t[4]-c*t[5],t[8]=h*t[8]-c*t[9],t[1]=c*j+h*t[1],t[5]=c*g+h*t[5],t[9]=c*S+h*t[9]},v.g.moveX=function(e){t[0]=t[0]+e*t[3],t[4]=t[4]+e*t[7],t[8]=t[8]+e*t[11],t[12]=t[12]+e*t[15]},v.g.moveY=function(e){t[1]=e*t[3]+t[1],t[5]=e*t[7]+t[5],t[9]=e*t[11]+t[9],t[13]=e*t[15]+t[13]},v.g.moveZ=function(e){t[2]=e*t[3]+t[2],t[6]=e*t[7]+t[6],t[10]=e*t[11]+t[10],t[14]=e*t[15]+t[14]},v.g.scaleFun=function(e){t[0]=e*t[0],t[4]=e*t[4],t[8]=e*t[8],t[12]=e*t[12],t[1]=e*t[1],t[5]=e*t[5],t[9]=e*t[9],t[13]=e*t[13],t[2]=e*t[2],t[6]=e*t[6],t[10]=e*t[10],t[14]=e*t[14]};var I=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,I),a.bufferData(a.ARRAY_BUFFER,new Float32Array(l),a.STATIC_DRAW),a.vertexAttribPointer(_,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(_);var y=.05,B=.5;U()}},[]),(0,b.jsx)("canvas",{ref:C,width:"200",height:"200"})};T.default=O},27246:function(Q,T,v){v.r(T);var F=v(67294),b=v(85893),O=`attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
}
`,G=`precision mediump float;
uniform vec4 u_FragColor;
void main() {
  gl_FragColor = u_FragColor;
}
`,C=function(){var a=(0,F.useRef)(null);function U(s,n,f,E,l){var _,P,t,I;return _=s*Math.pow(1-l,3),P=3*n*l*Math.pow(1-l,2),t=3*f*Math.pow(l,2)*(1-l),I=E*Math.pow(l,3),_+P+t+I}function K(s,n,f,E,l,_){return{x:U(s.x,n.x,f.x,E.x,l*_),y:U(s.y,n.y,f.y,E.y,l*_),z:U(s.z,n.z,f.z,E.z,l*_)}}function w(s,n,f,E,l,_){for(var P=l||100,t=_||1,I=t/(P-1),y=[],B=0;B<P;B++){var e=K(s,n,f,E,B,I);y.push(e.x),y.push(e.y),y.push(e.z)}return y}return(0,F.useEffect)(function(){var s=a.current,n=s==null?void 0:s.getContext("webgl");if(n){var f=n.createShader(n.VERTEX_SHADER),E=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(f,O),n.shaderSource(E,G),n.compileShader(f);var l=n.getShaderParameter(f,n.COMPILE_STATUS);if(!l)throw new Error("compile Shader is failed");n.compileShader(E);var _=n.getShaderParameter(E,n.COMPILE_STATUS);if(!_)throw new Error("compile Shader is failed");var P=n.createProgram();n.attachShader(P,f),n.attachShader(P,E),n.linkProgram(P);var t=n.getProgramParameter(P,n.LINK_STATUS);if(!t)throw new Error("link Shader is failed");n.useProgram(P);var I=n.getAttribLocation(P,"a_Position"),y=n.getUniformLocation(P,"u_FragColor");n.uniform4fv(y,[0,1,1,1]);var B=w({x:-.7,y:0,z:0},{x:-.25,y:.5,z:0},{x:.25,y:.5,z:0},{x:.7,y:0,z:0},20,1),e=new Float32Array(B),h=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),n.vertexAttribPointer(I,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(I),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.LINE_STRIP,0,B.length/3)}},[]),(0,b.jsx)("canvas",{ref:a,width:"200",height:"200"})};T.default=C},38952:function(Q,T,v){v.r(T);var F=v(67294),b=v(85893),O=function(){var C=(0,F.useRef)(null);return(0,F.useEffect)(function(){var R=C.current,a=R==null?void 0:R.getContext("webgl");if(a){var U=function(i,W,x,D,z,X,J,V,H){var o=function(A){var d=Math.sqrt(A[0]*A[0]+A[1]*A[1]+A[2]*A[2]);return[A[0]/d,A[1]/d,A[2]/d]},u=function(A,d){return[A[0]-d[0],A[1]-d[1],A[2]-d[2]]},r=function(A,d){return[A[1]*d[2]-A[2]*d[1],A[2]*d[0]-A[0]*d[2],A[0]*d[1]-A[1]*d[0]]},L=o(u([i,W,x],[D,z,X])),N=o(r([J,V,H],L)),Y=o(r(L,N));return new Float32Array([N[0],Y[0],L[0],0,N[1],Y[1],L[1],0,N[2],Y[2],L[2],0,-(N[0]*i+N[1]*W+N[2]*x),-(Y[0]*i+Y[1]*W+Y[2]*x),-(L[0]*i+L[1]*W+L[2]*x),1])},K=function(i){return Math.PI*i/180},w=function(i,W,x,D){i=K(i);var z=1/Math.tan(i/2),X=1/(x-D);return new Float32Array([z/W,0,0,0,0,z,0,0,0,0,(D+x)*X,-1,0,0,2*D*x*X,0])},s=`
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
        `,n=`
        precision highp float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
        `,f=a.createShader(a.VERTEX_SHADER);a.shaderSource(f,s),a.compileShader(f);var E=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(E,n),a.compileShader(E);var l=a.createProgram();a.attachShader(l,f),a.attachShader(l,E),a.linkProgram(l),a.useProgram(l),a.program=l;var _=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),P=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),t=_.BYTES_PER_ELEMENT,I=a.createBuffer(),y=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,I),a.bufferData(a.ARRAY_BUFFER,_,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y),a.bufferData(a.ELEMENT_ARRAY_BUFFER,P,a.STATIC_DRAW);var B=a.getAttribLocation(a.program,"a_Position"),e=a.getAttribLocation(a.program,"a_Color"),h=a.getUniformLocation(a.program,"u_ViewMatrix"),c=U(3,4,8,0,0,0,0,1,0);a.uniformMatrix4fv(h,!1,c);var j=a.getUniformLocation(a.program,"u_ProjMatrix"),g=w(30,R.width/R.height,1,100);a.uniformMatrix4fv(j,!1,g),a.vertexAttribPointer(B,3,a.FLOAT,!1,t*6,0),a.enableVertexAttribArray(B),a.vertexAttribPointer(e,3,a.FLOAT,!1,t*6,t*3),a.enableVertexAttribArray(e),a.clearColor(0,0,0,1),a.enable(a.DEPTH_TEST),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.drawElements(a.TRIANGLES,P.length,a.UNSIGNED_BYTE,0)}},[]),(0,b.jsx)("canvas",{ref:C,width:"200",height:"200"})};T.default=O},63296:function(Q,T,v){v.r(T);var F=v(67294),b=v(85893),O=function(){var C=(0,F.useRef)(null);return(0,F.useEffect)(function(){var R=C.current,a=R==null?void 0:R.getContext("2d");a&&(a.beginPath(),a.moveTo(20,20),a.lineTo(200,20),a.lineWidth=1,a.strokeStyle="#CC0000",a.stroke())},[]),(0,b.jsx)("canvas",{ref:C,width:"100",height:"100"})};T.default=O},2795:function(Q,T,v){v.r(T);var F=v(67294),b=v(85893),O=function(){var C=(0,F.useRef)(null);return(0,F.useEffect)(function(){var R=C.current,a=R==null?void 0:R.getContext("webgl");if(a){var U=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,K=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // \u7EA2\u8272
        }
      `,w=a.createShader(a.VERTEX_SHADER),s=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(w,U),a.shaderSource(s,K),a.compileShader(w),a.compileShader(s);var n=a.createProgram();a.attachShader(n,w),a.attachShader(n,s),a.linkProgram(n),a.useProgram(n);var f=new Float32Array([1,1,-1,1,1,-1,-1,-1]),E=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,E),a.bufferData(a.ARRAY_BUFFER,f,a.STATIC_DRAW);var l=a.getAttribLocation(n,"a_Position");a.vertexAttribPointer(l,2,a.FLOAT,!1,0,0),a.enableVertexAttribArray(l),a.drawArrays(a.TRIANGLE_STRIP,0,4)}},[]),(0,b.jsx)("canvas",{ref:C,width:"100",height:"100"})};T.default=O}}]);
