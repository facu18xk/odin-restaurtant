import image1 from './assets/about1.png';
import image2 from './assets/about2.png';
import truck from './assets/factory.png';
import timer from './assets/timer.png';
import hamburger from './assets/hamburguer.png';
import factory from './assets/factory.png';
function imagesComponent() {
  const images = document.createElement('div');
  images.classList.add("about--gallery")
  images.innerHTML = `
    <img src="${image1}" class="gallery--image1" alt="A person cutting an onion"> 
    <img src="${image2}" class="gallery--image2" alt="A salad plate next to a glass of orange juice">
  `
  return images;
}
function infoComponent() {
  const article = document.createElement('section');
  article.classList.add("about--article");
  article.innerHTML = `
    <p class="article--why" >Why choose us</p>
    <h2 class="article--title"> Why we are the best?</h2>
    <p class="article--p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Varius sed pharetra dictum neque massa congue
    </p>
    <div class="article--grid">
      <div class="grid--item">
        <img src="${truck}" alt="truck">
        <p>Fast Delivery</p>
      </div> 
      <div class="grid--item">
        <img src="${timer}" alt="timer">
        <p>24/7 services</p>
      </div> 
      <div class="grid--item">
        <img src="${hamburger}" alt="burger">
        <p>Fresh food</p>
      </div> 
      <div class="grid--item">
        <img src="${factory}" alt="factory">
        <p>Quality maintain</p>
      </div>
    </div>
  `;
  return article;
}

export default function about() {
  const container = document.createElement('div');
  container.classList.add("about");
  container.appendChild(imagesComponent());
  container.appendChild(infoComponent());
  return container;
}