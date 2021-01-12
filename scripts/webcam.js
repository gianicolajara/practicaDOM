import { validarDatos } from "./validation_node.js";

const d = document,
  n = navigator,
  md = n.mediaDevices;

export const cam = async (id) => {
  const $id = d.querySelector(id);
  try {
    const constraints = { audio: true, video: { width: 1280, height: 720 } };
    validarDatos([id]);

    let p = await md.getUserMedia(constraints);
    $id.srcObject = p;
    $id.play();
  } catch (error) {
    console.error(error);
    $id.insertAdjacentHTML("beforebegin", `<p><mark>Error${error}</mark></p>`);
  }
};
