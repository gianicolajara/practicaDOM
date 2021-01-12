import { validarDatos } from "./validation_node.js";

const d = document,
  w = window;

export const abrirPagina = (form) => {
  let ventanaAbierta;
  validarDatos([form]);

  const $form = d.querySelector(form);

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target === $form) {
      const url = $form.url.value,
        ancho = $form.ancho.value,
        alto = $form.alto.value;

      if (e.submitter.name === "ver") {
        ventanaAbierta = w.open(
          url,
          "Nueva ventana",
          `innerWidth=${ancho}px, innerHeight=${alto}px`
        );
      } else if (e.submitter.name === "cerrar") {
        ventanaAbierta.close();
      }
    }
  });
};
