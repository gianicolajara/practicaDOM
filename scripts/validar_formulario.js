const d = document;

export const validarFormulario = () => {
  const $form = d.querySelector(".form-message"),
    inputs = d.querySelectorAll(".form-message [required]");

  inputs.forEach(($input) => {
    const $label = d.createElement("label");
    $label.id = `error-${$input.id}`;
    $label.textContent = $input.title;
    $label.classList.add("input-error");
    $input.insertAdjacentElement("afterend", $label);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form-message [required]")) {
      let $input = e.target;
      const pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        const reg = new RegExp(pattern);

        reg.exec($input.value)
          ? d
              .querySelector(`.group-form #error-${$input.id}`)
              .classList.remove("is-active")
          : d
              .querySelector(`.group-form #error-${$input.id}`)
              .classList.add("is-active");
      }

      if (!pattern) {
        $input.value === ""
          ? d
              .querySelector(`.group-form #error-${$input.id}`)
              .classList.add("is-active")
          : d
              .querySelector(`.group-form #error-${$input.id}`)
              .classList.remove("is-active");
      }
    }
  });
};

const validarReg = (reg, campo, mensaje) => {};
