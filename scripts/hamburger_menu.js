import { validarDatos } from "./validation_node.js";

export function hamburgerMenu(menu, btn, menuLink) {
  try {
    const doc = document;
    validarDatos([menu, btn, menuLink]);

    doc.addEventListener("click", (e) => {
      if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
        doc.querySelector(btn).classList.toggle("is-active");
        doc.querySelector(menu).classList.toggle("menu__list--open");
        doc.querySelector(btn).classList.toggle("hamburger--white");
        doc.querySelector("body").classList.toggle("scroll--hidden");
      }

      if (e.target.matches(menuLink)) {
        doc.querySelector(menu).classList.remove("menu__list--open");
        doc
          .querySelector(btn)
          .classList.remove("hamburger--white", "is-active");
        doc.querySelector("body").classList.remove("scroll--hidden");
      }
    });
  } catch (error) {
    console.error(error);
  }
}
