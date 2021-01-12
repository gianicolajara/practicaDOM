import { validarDatos } from "./validation_node.js";

const d = document,
  n = navigator;

export const geo = (latitud, longitud, precision, id) => {
  validarDatos([latitud, longitud, precision]);

  const $latitud = d.querySelector(latitud),
    $longitud = d.querySelector(longitud),
    $precision = d.querySelector(precision),
    $id = d.querySelector(id);

  if ("geolocation" in navigator) {
    const g = n.geolocation;

    g.getCurrentPosition(
      (position) => {
        $latitud.textContent = `Latitud: ${position.coords.latitude}`;
        $longitud.textContent = `Longitud: ${position.coords.longitude}`;
        $precision.textContent = `Precision: ${position.coords.accuracy}`;
        $id.href = `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},19z?hl=es`;
        $id.textContent = `Ir a la posición actual`;
      },
      (error) => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  } else {
    console.error("geolocalización no disponible");
  }
};
