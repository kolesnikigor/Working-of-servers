"use strict";

const url = "https://trevadim.github.io/vue/data/data.json";
const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);

let createMercury = ({title, info, img}) => {
  let li = document.createElement("li");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let image = document.createElement("img");
  h3.innerText = title;
  h3.classList.add(title);
  p.innerText = info;
  image.style.height = "100px";
  image.setAttribute("src", `${img}`);
  ul.appendChild(li);
  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(image);
};

let createVenus = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createEarth = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createMars = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createJupiter = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createSaturn = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createUran = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createNeptun = ({title, info, img}) => {
  createMercury.call(this, {title, info, img});
};

let createMarkUp = ({planets}) => {
    createMercury({title: planets.mercury.title, info: planets.mercury.info, img: planets.mercury.url}); 
    createVenus({title: planets.venus.title, info: planets.venus.info, img: planets.venus.url}); 
    createEarth({title: planets.earth.title, info: planets.earth.info, img: planets.earth.url}); 
    createMars({title: planets.mars.title, info: planets.mars.info, img: planets.mars.url}); 
    createJupiter({title: planets.jupiter.title, info: planets.jupiter.info, img: planets.jupiter.url}); 
    createSaturn({title: planets.saturn.title, info: planets.saturn.info, img: planets.saturn.url}); 
    createUran({title: planets.uran.title, info: planets.uran.info, img: planets.uran.url}); 
    createNeptun({title: planets.neptun.title, info: planets.neptun.info, img: planets.neptun.url}); 
};

fetch(url)
  .then(response => response.json())
  .then(data => createMarkUp(data))
  .catch(error => console.log(error));
