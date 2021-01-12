import { validarDatos } from "./validation_node.js";

const d = document;

export const sorteo = (btn, lista) => {
  validarDatos([btn, lista]);

  const $btn = d.querySelector(btn),
    $lista = d.querySelector(lista);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const numeroRandom = Math.floor(Math.random() * $lista.children.length);

      console.log(numeroRandom);

      alert(`el ganador es : ${$lista.children[numeroRandom].textContent}`);
    }
  });
};
