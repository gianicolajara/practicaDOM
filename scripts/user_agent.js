import { validarDatos } from "./validation_node.js";

export const userAgent = (id) => {
  validarDatos([id]);
  const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent,
    $id = d.querySelector(id),
    escritorio = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.windows() || this.mac();
      },
    },
    movil = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/ipad|iphone|ipod/i),
      windows: () => ua.match(/windows phone/i),
      nokia: () => ua.match(/nokia/i),
      any: function () {
        return this.android() || this.ios() || this.windows() || this.nokia();
      },
    },
    navegador = {
      opera: () => ua.match(/opera|opera mini|OPR/i),
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge|edg/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.opera() ||
          this.chrome() ||
          this.firefox() ||
          this.safari()
        );
      },
    };
  $id.textContent = `${ua}, sistema: ${
    movil.any() ? movil.any() : escritorio.any()
  } navegador: ${navegador.any()}`;
};
