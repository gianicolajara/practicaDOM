import { validarDatos } from "./validation_node.js";

const d = document,
  $body = d.querySelector("body");

export const scrollspy = (tamatioEscritorio, menu, btnMenu, section) => {
  validarDatos([menu, btnMenu, section]);
  const breakPoint = matchMedia(tamatioEscritorio),
    $menuList = d.querySelector(menu),
    $btnMenu = d.querySelector(btnMenu),
    sections = d.querySelectorAll(section);

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        d.querySelector(
          `a[href="#${entry.target.id}"]`
        ).parentElement.classList.add("menu__item--intersecting");
        d.querySelector(`a[href="#${entry.target.id}"]`).classList.add(
          "menu__link--intersecting"
        );
      } else if (!entry.isIntersecting) {
        d.querySelector(
          `a[href="#${entry.target.id}"]`
        ).parentElement.classList.remove("menu__item--intersecting");
        d.querySelector(`a[href="#${entry.target.id}"]`).classList.remove(
          "menu__link--intersecting"
        );
      }
    });
  };

  const resize = (e) => {
    if (e.matches) {
      let observer = new IntersectionObserver(callback, {
        threshold: [0.4, 0.7],
      });
      sections.forEach((elem) => {
        observer.observe(elem);
      });
    }
  };

  breakPoint.addEventListener("change", (e) => resize(e));
  resize(breakPoint);
};
