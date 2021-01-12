import { hamburgerMenu } from "./hamburger_menu.js";
import { relojAlarma, horaRegresiva } from "./reloj_alarma.js";
import { move } from "./teclado_mover.js";
import { scrolleando } from "./scroll.js";
import { modoOscuro } from "./dark-mode.js";
import { responsive } from "./responsive_web.js";
import { abrirPagina } from "./abrir_pagina.js";
import { userAgent } from "./user_agent.js";
import { offon } from "./desconexion.js";
import { cam } from "./webcam.js";
import { geo } from "./geolocalizacion.js";
import { filter } from "./filter_img.js";
import { sorteo } from "./sorteo.js";
import { carrousel } from "./carrousel.js";
import { scrollspy } from "./scrollspy.js";
import { videoHover } from "./videos.js";
import { validarFormulario } from "./validar_formulario.js";
import { narrator } from "./narrator.js";
import { xhml } from "./xhr.js";

const doc = document;

doc.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu__list", ".hamburger", ".menu__link");
  relojAlarma("#start-clock", "#stop-clock", "#start-alarm", "#stop-alarm");
  horaRegresiva(2020, 11, 25, 0, 0, 0, "#countdown");
  scrolleando("#scroll");
  responsive(
    "#video",
    `<iframe width="929" height="523" src="https://www.youtube.com/embed/r4_IVqlMfEY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<a href="https://www.youtube.com/watch?v=r4_IVqlMfEY" target="_blank" rel="noopener noreferrer">Ver video</a>`,
    "(min-width: 1024px)"
  );

  responsive(
    "#map",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6300515.913136642!2d-105.782067!3d39.550051!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1608649431023!5m2!1ses!2sve" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
    `<a href="https://goo.gl/maps/tsRXnThQX9XrR2ho8" target="_blank" rel="noopener noreferrer">Ver mapa</a>`,
    "(min-width: 1024px)"
  );

  abrirPagina("#formulario-abrir");
  userAgent("#navigator-user-agent");
  offon(".online");
  cam("#videoCam");
  geo("#latitud", "#longitud", "#precision", "#geoMap");
  filter("#container-card", "#texto-filtro");
  sorteo("#btn-sorteo", ".lista-sorteo");
  carrousel(".left-carrousel", ".right-carrousel", ".carrousel__item");
  scrollspy("(min-width: 1024px)", ".menu__list", ".hamburger", ".section");
  videoHover(".video--miniature", ".video");
  validarFormulario();
  xhml();
});

doc.addEventListener("keydown", (e) => {
  move("#player", "#scene", e);
});

modoOscuro(".btn-dark", "#darkcheck", ".dark-icon");
