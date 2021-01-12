import { validarDatos } from "./validation_node.js";

const d = document,
  synth = speechSynthesis;

let voices = [];

export const narrator = async (select) => {
  validarDatos([select]);

  const $select = d.querySelector(select);
  voices = await obtainVoices();

  voices.voices.forEach((voice) => {
    const $option = d.createElement("option");
    $option.textContent = voice.name;
    $select.appendChild($option);
  });
};

const obtainVoices = () => {
  return new Promise((resolve, reject) => {
    resolve({
      voices: synth.getVoices(),
    }),
      reject({
        error: new Error("Error with voices"),
      });
  });
};
