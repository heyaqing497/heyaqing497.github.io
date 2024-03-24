/**
 * title: 我是一个旋转立方体（threejs）
 */
import React, { useEffect, useRef, type FC } from 'react';
import * as THREE from 'three';

const Line: FC<{ title: string }> = () => {
  const webglRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = webglRef.current;

    let width = 10;
    let height = 10;

    // 创建 renderer 变量用于存储渲染器对象
    let renderer;
    // initThree 函数用来初始化 Three.js 运行所需的环境
    function initThree() {
      // 同原生 WebGL 环境搭建过程一样，Three.js 也需要先设置画布 canvas 元素的大小
      width = canvas.clientWidth; // 设置宽度属性为浏览器窗口宽度
      height = canvas.clientHeight; // 设置高度属性为浏览器窗口高度
      // 新建一个 WebGL 渲染器并赋值给 renderer 变量
      renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      // 设置画布大小为浏览器窗口大小
      renderer.setSize(width, height);
      // 将画布元素挂载到页面
      canvas.appendChild(renderer.domElement);
      // 设置清空画布的颜色为白色
      renderer.setClearColor(0xffffff, 1.0);
    }

    // 创建 camera 变量用于存储相机对象
    let camera;
    // 初始化相机函数 Three.js 中相机的类型有好几种可以根据具体需要进行选择这里我们要创建的是一个旋转的立方体所以采用的是透视相机，而如果需要创建 3D 阴影效果的场景则需要使用正交相机
    function initCamera() {
      /* 
        创建透一个视相机的实例语法 PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number ) 
        fov - 视角
        aspect - 物体的长宽比
        near - 相机近点截图
        far - 相机远点截图
      */
      camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
      camera.position.x = 0; // 设置相机在三维空间坐标中 x 轴的位置
      camera.position.y = 2; // 设置相机在三维空间坐标中 y 轴的位置
      camera.position.z = 1; // 设置相机在三维空间坐标中 z 轴的位置
      camera.up.x = 0;
      camera.up.y = 0;
      camera.up.z = 1;
      camera.lookAt(new THREE.Vector3(0, 0, 0)); // 设置相机的观察点
    }
    // 创建 scene 变量用于存储场景对象
    let scene;
    // initScene 函数创建一个场景并赋值给 scene 变量
    function initScene() {
      scene = new THREE.Scene();
    }

    // 创建一个 cube 变量用于存放几何立方体
    let cube;

    // initObject 函数就是我们创建场景的核心了
    function initObject() {
      // 首先创建一个一个几何类的实例并赋值给 geometry 变量
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      // 然后创建一种材质的实例 MeshBasicMaterial 材质的构造函数能够创建一种简单的不受场景灯光效果影响的材质
      // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

      // 创建一个材质(受灯光影响)
      const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
      });
      // Mesh 是一种三角形网格基本单元的构造函数，类似于我们原生 WebGL 中的片元着色器它用于连接几何体和材质
      cube = new THREE.Mesh(geometry, material);
      // 最后将创建好的几何立方体添加到场景中
      scene.add(cube);
    }

    // initLight 创建两个光源
    function initLight() {
      // 点光源-具备立体感
      const point = new THREE.PointLight(0xff0000);
      point.position.set(1, 1, -1); // 点光源位置
      const point2 = new THREE.PointLight(0x00ff00);
      point2.position.set(1, -1, 1); // 点光源位置
      scene.add(point); // 点光源添加到场景中
      scene.add(point2); // 点光源添加到场景中
    }

    // render 函数提供了浏览器的循环渲染功能
    function render() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    // 最后将 Threee.js 环境初始化，场景创建，相机创建渲染器创建以及渲染初始化等函数合成到一起执行我们就完成了一个旋转立方体的绘制
    function threeStart() {
      initThree();
      initCamera();
      initScene();
      initObject();
      initLight();
      render();
    }
    threeStart();
  }, []);
  // return <canvas ref={webglRef} width="100" height="100" />;
  return (
    <div
      ref={webglRef}
      style={{
        width: 150,
        height: 150,
      }}
    ></div>
  );
};

export default Line;
