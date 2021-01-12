import { validarDatos } from "./validation_node.js";

const d = document;
export const scrolleando = (item) => {
  validarDatos([item]);
  const itemScroll = d.querySelector(item);
  d.addEventListener("scroll", (e) => {
    if (scrollY >= 300) {
      itemScroll.classList.add("scroll-ver");
    } else {
      itemScroll.classList.remove("scroll-ver");
    }
  });

  itemScroll.addEventListener("click", () => {
    scroll({
      top: 0,
    });
  });
};
