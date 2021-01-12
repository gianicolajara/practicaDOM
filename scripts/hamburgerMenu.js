export function hamburgerMenu(menu, btn, menuLink) {
  try {
    const doc = document;
    validarDatos([menu, btn, menuLink]);

    doc.addEventListener("click", (e) => {
      if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
        doc.querySelector(btn).classList.toggle("is-active");
        doc.querySelector(menu).classList.toggle("menu__list--open");
        doc.querySelector(btn).classList.toggle("hamburger--white");
      }

      if (e.target.matches(menuLink)) {
        doc.querySelector(menu).classList.remove("menu__list--open");
        doc
          .querySelector(btn)
          .classList.remove("hamburger--white", "is-active");
      }
    });
  } catch (error) {
    console.error(error);
  }
}

const validarDatos = ([...datos]) => {
  const doc = document;
  for (let dato of datos) {
    if (typeof dato !== "string" || !dato)
      throw new Error(`El nombre del nodo debe ser string: ${dato}`);
    if (dato.charAt(0) !== "." && dato.charAt(0) !== "#") {
      throw new Error(`Debe ser una clase o id valido: ${dato}`);
    }
    if (!document.body.contains(doc.querySelector(dato)))
      throw new Error(`No existe este nodo: ${dato}`);
  }
};
