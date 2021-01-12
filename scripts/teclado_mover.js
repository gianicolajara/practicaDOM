import { validarDatos } from "./validation_node.js";

let doc = document,
  x = 0,
  y = 0,
  speed = 5;

export const move = (player, scene, e) => {
  validarDatos([player, scene]);

  let $circle = doc.querySelector(player),
    $scene = doc.querySelector(scene),
    circleData = $circle.getBoundingClientRect(),
    sceneData = $scene.getBoundingClientRect(),
    btnPress = e.key;

  if (btnPress === "ArrowRight") {
    if (circleData.right < sceneData.right) {
      x += speed;
    }
  }

  if (btnPress === "ArrowLeft") {
    if (circleData.left > sceneData.left) {
      x -= speed;
    }
  }

  if (btnPress === "ArrowUp") {
    if (circleData.top > sceneData.top) {
      e.preventDefault();
      y -= speed;
    }
  }

  if (btnPress === "ArrowDown") {
    if (circleData.bottom < sceneData.bottom) {
      e.preventDefault();
      y += speed;
    }
  }

  $circle.style.transform = `translate(${x}px, ${y}px)`;

  if (e.ctrlKey && btnPress === "a") {
    alert("presionaste control + a");
  }

  if (e.ctrlKey && btnPress === "p") {
    prompt("presionaste control + p");
  }

  if (e.ctrlKey && btnPress === "c") {
    confirm("presionaste control + c");
  }
};
