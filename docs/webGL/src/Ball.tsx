/**
 * title: 我是一个球
 */
import React, { useEffect, useRef, type FC } from 'react';

const Ball: FC<{ title: string }> = () => {
  const webglRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = webglRef.current;
    // 2d/webgl
    const gl = canvas?.getContext('experimental-webgl');
    if (gl) {
      const vertexText = `precision highp float;
      attribute vec3 position;
      uniform mat4 mat;
      varying vec4 color;
      void main(){
        gl_Position=mat*vec4(position,1.0);
     
        color=vec4(gl_Position.x,gl_Position.y,gl_Position.z,0.8);}
      `;
      const fragmentText = `
      #ifdef GL_ES
          precision mediump float;
      #endif
          varying vec4 color;
          void main(){
              gl_FragColor=color;
          }
      `
      // var cvs = document.getElementById("cvs");
      //  var gl = cvs.getContext("experimental-webgl");
      var vertex = gl.createShader(gl.VERTEX_SHADER);
      var fragment = gl.createShader(gl.FRAGMENT_SHADER);
      var paogram = gl.createProgram();

      gl.shaderSource(vertex, vertexText);
      gl.shaderSource(fragment, fragmentText);
      gl.compileShader(vertex);
      gl.compileShader(fragment);
      gl.attachShader(paogram, vertex);
      gl.attachShader(paogram, fragment);
      gl.linkProgram(paogram);
      gl.useProgram(paogram);

      var drawQiu02 = function (rX, rY, rZ, r, m) {
        var arr = new Array();

        var bufR = -r;
        function getMaxY(a, z, r) {
          var angle = 0;
          var addAng = 360 / a;
          var d = new Array();

          for (var i = 0; i < a; i++) {
            d.push(Math.sin(Math.PI / 180 * angle) * r, Math.cos(Math.PI / 180 * angle) * r, z);
            angle += addAng;
          }
          return d;
        }
        var addAng = 360 / m;
        var angle = 0;
        var bufR = r;
        var angle02 = 0;
        var addAng02 = addAng;


        for (var i = 0; i < m / 2; i++) {

          if (i >= m / 4) {
            var z = Math.sin(Math.PI / 180 * angle) * -r;
          } else {
            var z = Math.sin(Math.PI / 180 * angle) * -r;
          }
          console.log(z);
          angle += addAng;

          var arr1 = getMaxY(m, z, bufR);
          if (i >= m / 4) {
            z = Math.sin(Math.PI / 180 * angle) * -r
          } else {
            z = -Math.sin(Math.PI / 180 * angle) * -r;
          }
          bufR = Math.sqrt(r * r - r * Math.sin(Math.PI / 180 * angle) * r * Math.sin(Math.PI / 180 * angle));
          var arr2 = getMaxY(m, z, bufR);

          for (var q = 0; q < arr1.length; q += 3) {
            if (q == 0) {
              arr.push(arr1[q], arr1[q + 1], arr1[q + 2]);
              arr.push(arr2[q], arr2[q + 1], arr2[q + 2]);
              arr.push(arr1[arr1.length - 3], arr1[arr1.length - 2], arr1[arr1.length - 1]);
              arr.push(arr1[q], arr1[q + 1], arr1[q + 2]);
              arr.push(arr2[q], arr2[q + 1], arr2[q + 2]);
              arr.push(arr2[q + 3], arr2[q + 4], arr2[q + 5]);
            } else if (q == arr1.length - 3) {
              arr.push(arr1[q], arr1[q + 1], arr1[q + 2]);
              arr.push(arr2[q], arr2[q + 1], arr2[q + 2]);
              arr.push(arr1[q - 3], arr1[q - 2], arr1[q - 1]);
              arr.push(arr1[q], arr1[q + 1], arr1[q + 2]);
              arr.push(arr2[q], arr2[q + 1], arr2[q + 2]);
              arr.push(arr2[0], arr2[1], arr2[2]);
            } else {
              arr.push(arr1[q], arr1[q + 1], arr1[q + 2]);
              arr.push(arr2[q], arr2[q + 1], arr2[q + 2]);
              arr.push(arr1[q - 3], arr1[q - 2], arr1[q - 1]);
              arr.push(arr1[q], arr1[q + 1], arr1[q + 2]);
              arr.push(arr2[q], arr2[q + 1], arr2[q + 2]);
              arr.push(arr2[q + 3], arr2[q + 4], arr2[q + 5]);
            }

          }
        }
        return arr;
      }

      var data = drawQiu02(0, 0, 0, 0.5, 180);
      var positionIndex = gl.getAttribLocation(paogram, "position");
      var matIndex = gl.getUniformLocation(paogram, "mat");
      console.log(gl.getShaderInfoLog(vertex));
      var mM = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ];
      console.log(gl.getShaderInfoLog(fragment));


      global.rotateX = function (angle) {
        var c = Math.cos(Math.PI / 180 * angle);
        var s = Math.sin(Math.PI / 180 * angle);
        var mM1 = mM[1], mM5 = mM[5], mM9 = mM[9];
        mM[1] = c * mM[1] - s * mM[2];
        mM[5] = c * mM[5] - s * mM[6];
        mM[9] = c * mM[9] - s * mM[10];

        mM[2] = s * mM1 + c * mM[2];
        mM[6] = s * mM5 + c * mM[6];
        mM[10] = s * mM9 + c * mM[10];

      };
      global.rotateY = function (angle) {
        var c = Math.cos(Math.PI / 180 * angle);
        var s = Math.sin(Math.PI / 180 * angle);
        var mM0 = mM[0], mM8 = mM[8], mM4 = mM[4];
        mM[0] = c * mM[0] + s * mM[2];
        mM[4] = c * mM[4] + s * mM[6];
        mM[8] = c * mM[8] + s * mM[10];

        mM[2] = c * mM[2] - s * mM0;
        mM[6] = c * mM[6] - s * mM4;
        mM[10] = c * mM[10] - s * mM8;
      };
      global.rotateZ = function (angle) {
        var c = Math.cos(Math.PI / 180 * angle);
        var s = Math.sin(Math.PI / 180 * angle);
        var mM0 = mM[0], mM4 = mM[4], mM8 = mM[8];
        mM[0] = c * mM[0] - s * mM[1];
        mM[4] = c * mM[4] - s * mM[5];
        mM[8] = c * mM[8] - s * mM[9];

        mM[1] = s * mM0 + c * mM[1];
        mM[5] = s * mM4 + c * mM[5];
        mM[9] = s * mM8 + c * mM[9];
      };
      global.moveX = function (distance) {
        mM[0] = mM[0] + distance * mM[3];
        mM[4] = mM[4] + distance * mM[7];
        mM[8] = mM[8] + distance * mM[11];
        mM[12] = mM[12] + distance * mM[15];
      };
      global.moveY = function (distance) {
        mM[1] = distance * mM[3] + mM[1];
        mM[5] = distance * mM[7] + mM[5];
        mM[9] = distance * mM[11] + mM[9];
        mM[13] = distance * mM[15] + mM[13];
      };
      global.moveZ = function (distance) {
        mM[2] = distance * mM[3] + mM[2];
        mM[6] = distance * mM[7] + mM[6];
        mM[10] = distance * mM[11] + mM[10];
        mM[14] = distance * mM[15] + mM[14];
      };
      global.scaleFun = function (scale) {
        mM[0] = scale * mM[0];
        mM[4] = scale * mM[4];
        mM[8] = scale * mM[8];
        mM[12] = scale * mM[12];
        mM[1] = scale * mM[1];
        mM[5] = scale * mM[5];
        mM[9] = scale * mM[9];
        mM[13] = scale * mM[13];
        mM[2] = scale * mM[2];
        mM[6] = scale * mM[6];
        mM[10] = scale * mM[10];
        mM[14] = scale * mM[14];
      };
      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      gl.vertexAttribPointer(positionIndex, 3, gl.FLOAT, false, 0, 0);

      gl.enableVertexAttribArray(positionIndex);
      var dis = 0.05;
      var angle = 0.5;
      function fun() {

        rotateX(angle);
        rotateY(angle);
        rotateZ(angle);

        gl.uniformMatrix4fv(matIndex, false, new Float32Array(mM));
        gl.clearColor(0.5, 0.5, 0.5, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.LINE_STRIP, 0, data.length / 3);
        requestAnimationFrame(fun);
      }
      fun();
    }
  }, []);
  return <canvas ref={webglRef} width="200" height="200" />;
};

export default Ball;
