let count;

const online = ($id) => {
  $id.children[0].textContent = `Conectado`;
  $id.classList.add("online--on");
  if ($id.matches(".offline--color")) {
    $id.classList.replace("offline--color", "online--color");
  } else {
    $id.classList.add("online--color");
  }

  animacion($id);
};

const offline = ($id) => {
  $id.children[0].textContent = `Desconectado`;
  $id.classList.add("online--on");

  if ($id.matches(".online--color")) {
    $id.classList.replace("online--color", "offline--color");
  } else {
    $id.classList.add("offline--color");
  }
  animacion($id);
};

const animacion = ($id) => {
  if (count) clearTimeout(count);
  count = setTimeout(() => {
    $id.classList.remove("online--on");
  }, 5000);
};

export const offon = (id) => {
  const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent,
    $id = d.querySelector(id);

  w.addEventListener("online", (e) => online($id));
  w.addEventListener("offline", (e) => offline($id));
};
