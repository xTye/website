import * as THREE from "three";

const MULTIPLIER = 3;

export const initVideo = (scene: THREE.Scene) => {
  const video = setUpVideo("/media-page/videos/zededit.mp4");

  const texture = new THREE.VideoTexture(video);
  texture.needsUpdate;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.format = THREE.RGBFormat;

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(MULTIPLIER * (16 / 9), MULTIPLIER * 1),
    new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
  );

  scene.add(plane);

  return plane;
};

function setUpVideo(inSrc: string) {
  const videlem = document.createElement("video");
  const sourceMP4 = document.createElement("source");
  sourceMP4.type = "video/mp4";
  sourceMP4.src = inSrc;

  videlem.appendChild(sourceMP4);

  videlem.autoplay = true;
  videlem.muted = true;
  videlem.loop = true;
  videlem.setAttribute("crossorigin", "anonymous");

  videlem.style.display = "none";

  videlem.load();
  videlem.play();
  return videlem;
}
