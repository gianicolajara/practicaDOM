const d = document;

export const xhml = () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      const $select = d.querySelector("#xhr"),
        $fragment = d.createDocumentFragment(),
        json = JSON.parse(xhr.responseText);

      json.forEach((user) => {
        const $option = d.createElement("option");
        $option.textContent = `${user.name} ${user.email} ${user.website}`;

        $fragment.appendChild($option);
      });

      $select.appendChild($fragment);
    } else {
      console.error("error");
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
};
