import "modern-normalize";
import "./styles.css";
import template from './template.js';
import main from "./pageLoad.js";
import menu from "./menu.js";
import about from "./about.js";
template();
const container = document.getElementById('content');
container.appendChild(main());
let lastFocused = "tab--home";
document.querySelector(`.${lastFocused}`).classList.add("tab--active");
(function () {
  const TABS = {
    home: main,
    menu: menu,
    about: about
  };
  const tabs = document.querySelectorAll('.nav--tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (ev) => {
      const focusElement = ev.target.textContent.toLowerCase();
      document.querySelector(`.${lastFocused}`).classList.remove("tab--active");
      ev.target.classList.add("tab--active");
      container.innerHTML = "";
      container.appendChild(TABS[focusElement]());
      lastFocused = `tab--${focusElement}`;
    });
  })
})();