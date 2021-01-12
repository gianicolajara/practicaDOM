import { hamburgerMenu } from "./hamburgerMenu.js";

const doc = document;

doc.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu__list", ".hamburger", ".menu__link");
});
