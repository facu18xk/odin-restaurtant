import background from './assets/bgPlate.png';
import plate from './assets/plate.png';
import lettuce from './assets/lettuce.png';
import leaf from './assets/leaf.png'
function rightComponent() {
  const container = document.createElement('div');
  container.classList.add('main--right');
  container.innerHTML = `
  <img class="right--bg" src="${background}" alt="green background almost like a leaf" > 
  <img class="right--plate" src="${plate}" alt="plate" >
  <img class="right--lettuce" src="${lettuce}" alt="lettuce" >
  <img class="right--leaf1" src="${leaf}" alt="leaf" >
  <img class="right--leaf2" src="${leaf}" alt="leaf" >
  `;
  return container;
}

function leftComponent() {
  const container = document.createElement('div');
  container.classList.add('main--left');
  container.innerHTML = `
  <p class="left--subtitle">Healthy & Testy Food</p>
  <h1 class="left--title">Enjoy Healthy life & Testy Food</h1> 
  <p class="left--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Varius sed pharetra dictum neque massa congue</p>
  <div class="left--buttons">
    <button class="buttons--order">Order</button>
    <button class="buttons--show">Show more</button>
  </div>
  `;
  return container;
}

export default function main() {
  const container = document.createElement('div');
  container.classList.add("main");
  container.appendChild(leftComponent());
  container.appendChild(rightComponent());
  return container;
}