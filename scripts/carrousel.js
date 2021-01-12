import { validarDatos } from "./validation_node.js";

const d = document;
let desplazamientoX = 0;

export const carrousel = (btnleft, btnright, carrouselItems) => {
  validarDatos([btnleft, btnright, carrouselItems]);

  let $carrouselItems = d.querySelectorAll(carrouselItems);
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnleft)) {
      desplazamientoX += 100;
      $carrouselItems.forEach((item) => {
        if (desplazamientoX <= 0) {
          item.style.transform = `translateX(${desplazamientoX}%)`;
        } else {
          desplazamientoX = -300;
          item.style.transform = `translateX(${-300}%)`;
        }
      });
    }

    if (e.target.matches(btnright)) {
      desplazamientoX -= 100;
      $carrouselItems.forEach((item) => {
        if (desplazamientoX >= -300) {
          item.style.transform = `translateX(${desplazamientoX}%)`;
        } else {
          desplazamientoX = 0;
          item.style.transform = `translateX(${0}%)`;
        }
      });
    }
  });
};
