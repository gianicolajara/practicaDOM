import { validarDatos } from "./validation_node.js";

const d = document;

export const filter = (containerCards, inputFilter) => {
  validarDatos([containerCards, inputFilter]);

  const $containerCards = d.querySelector(containerCards),
    $inputFilter = d.querySelector(inputFilter);

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(inputFilter)) {
      for (const card of $containerCards.children) {
        const regexp = RegExp(`${$inputFilter.value}`, "gi").test(
          card.children[1].textContent
        );

        !regexp
          ? card.classList.add("card--invisible")
          : card.classList.remove("card--invisible");
      }
    }
  });
};
