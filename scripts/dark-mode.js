import { validarDatos } from "./validation_node.js";

export const modoOscuro = (item, check, icon) => {
  const d = document,
    ls = localStorage,
    $html = d.documentElement,
    $checkDark = d.querySelector(check),
    $iconDark = d.querySelector(icon);
  validarDatos([item, check, icon]);

  const darkBg = getComputedStyle($html).getPropertyValue("--second-bg");

  const modoNoche = () => {
    $checkDark.checked = false;
    $html.style.backgroundColor = darkBg;
    $html.style.setProperty("--font-main-color", "white");
    $html.style.setProperty("--paragraph-color", "white");
    $html.style.setProperty("--small-color", "white");
    $iconDark.classList.replace("fa-moon", "fa-sun");
    ls.setItem("tema", "oscuro");
  };

  const modoLuz = () => {
    $checkDark.checked = true;
    $html.style.backgroundColor = "white";
    $html.style.setProperty("--font-main-color", darkBg);
    $iconDark.classList.replace("fa-sun", "fa-moon");
    $html.style.setProperty("--paragraph-color", "black");
    $html.style.setProperty("--small-color", "black");
    ls.setItem("tema", "claro");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(item) || e.target.matches(`${item} *`)) {
      if ($checkDark.checked) {
        modoLuz();
      } else {
        modoNoche();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("tema") === null) {
      ls.setItem("tema", "claro");
    } else if (ls.getItem("tema") === "claro") {
      modoLuz();
    } else if (ls.getItem("tema") === "oscuro") {
      modoNoche();
    }
  });
};
