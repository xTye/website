import * as THREE from "three";

export const particles = (scene: THREE.Scene): THREE.Group => {
  const loader = new THREE.TextureLoader();
  const triangle = loader.load("./trianglebigger.png");

  const planeGeometry = new THREE.PlaneGeometry(1, 1);
  const planeMaterial = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: triangle,
    transparent: true,
    alphaToCoverage: true,
  });

  const group = new THREE.Group();

  const particlesCount = 200;
  for (let i = 0; i < particlesCount; i++) {
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.scale.set(0.05, 0.05, 0.05);
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    plane.rotation.x = Math.random();
    plane.rotation.y = Math.random();
    plane.rotation.z = Math.random();
    plane.position.set(x, y, z);
    plane.updateMatrix();
    group.add(plane);
  }

  scene.add(group);

  return group;
};
