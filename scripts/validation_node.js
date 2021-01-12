export const validarDatos = ([...datos]) => {
  const doc = document;
  for (let dato of datos) {
    if (typeof dato !== "string")
      throw new Error(`El nombre del nodo debe ser string: ${dato}`);
    if (!dato) throw new Error(`Debe ingresar un dato con al menos 1 caracter`);
    if (dato.charAt(0) === "." || dato.charAt(0) === "#") {
      if (!document.body.contains(doc.querySelector(dato)))
        throw new Error(`No existe este nodo: ${dato}`);
    }
  }
};
