import { validarDatos } from "./validation_node.js";

const d = document,
  w = window;

export const responsive = (lugar, escritorio, telefono, tamanioEscritorio) => {
  validarDatos([lugar]);
  const $lugar = document.querySelector(lugar);

  let breakpoint = matchMedia(tamanioEscritorio);

  const redimencionar = (e) => {
    if (e.matches) {
      $lugar.innerHTML = escritorio;
    } else {
      $lugar.innerHTML = telefono;
    }
  };

  breakpoint.addEventListener("change", redimencionar);
  redimencionar(breakpoint);
};
