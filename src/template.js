import logo from './assets/Foodtuck.svg';
const body = document.body;

export default function template() {
  body.innerHTML = `
    <header class="header">
    <img src="${logo}" alt="logo food tuck">
    <nav class="header--nav">
      <button class="nav--tab tab--home">Home</button>
      <button class="nav--tab tab--menu">Menu</button>
      <button class="nav--tab tab--about">About</button>
    </nav>
  </header>
  <div id="content" class="content">
  </div>  `
}