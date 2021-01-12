import { validarDatos } from "./validation_node.js";

let interval, alarmAudio;

const obtenerHora = (el) => {
  interval = setInterval(() => {
    const hora = new Date().toLocaleTimeString();
    el.textContent = hora;
  }, 1000);
};

export const horaRegresiva = (a, m, d, h, mi, s, h1) => {
  const date = new Date(a, m, d, h, mi, s),
    doc = document;
  validarDatos([h1]);
  const $hora = doc.querySelector(h1);
  setInterval(() => {
    const dateActual = Date.now(),
      dateFuturo = date.getTime();
    if (dateFuturo - dateActual <= 0) {
      $hora.textContent = `Tiempo estimado superado`;
    } else {
      const calculo = dateFuturo - dateActual,
        segundos = 1000,
        minutos = segundos * 60,
        horas = minutos * 60,
        dias = horas * 24,
        tiempoSegundos = Math.floor((calculo % minutos) / segundos),
        tiempoMinutos = Math.floor((calculo % horas) / minutos),
        tiempoHoras = Math.floor((calculo % dias) / horas),
        tiempoDias = Math.floor(calculo / dias);
      $hora.textContent = `Faltan ${tiempoDias} dias, ${tiempoHoras} horas, ${tiempoMinutos} minutos y ${tiempoSegundos} segundos`;
    }
  }, 1000);
};

export const relojAlarma = (btnStart, btnStop, alarmStart, alarmStop) => {
  const doc = document;

  validarDatos([btnStart, btnStop]);
  doc.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      e.target.disabled = true;
      const textHour = document.createElement("h1");
      textHour.classList.add("reloj");
      obtenerHora(textHour);
      doc
        .querySelector(btnStart)
        .parentElement.insertAdjacentElement("beforebegin", textHour);
    }

    if (e.target.matches(btnStop)) {
      doc.querySelector(btnStart).disabled = false;
      if (interval) {
        clearInterval(interval);
        doc.querySelector(".reloj").remove();
        interval = false;
      }
    }

    if (e.target.matches(alarmStart)) {
      alarmAudio = new Audio("../assets/alarma.mp3");
      alarmAudio.play();
      e.target.disabled = true;
    }

    if (e.target.matches(alarmStop)) {
      if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
        alarmAudio = false;
        doc.querySelector(alarmStart).disabled = false;
      }
    }
  });
};
