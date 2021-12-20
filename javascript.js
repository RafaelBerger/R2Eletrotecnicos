let imagesBanner = document.querySelectorAll("#projetos-imagem img");
let imagesInst = document.querySelectorAll("#imagens-inst img");
let imagesQuadros = document.querySelectorAll("#imagens-quadros img");
let imagesIlum = document.querySelectorAll("#imagens-ilum img");

let maxBanner = imagesBanner.length;
let maxInst = imagesInst.length;
let maxQuadros = imagesQuadros.length;
let maxIlum = imagesIlum.length;

let currentImageIndex = 0;
let currentImageIndexInst = 0;
let currentImageIndexQuadros = 0;
let currentImageIndexIlum = 0;

let time = 4000;

function nextImageBanner() {
  imagesBanner[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= maxBanner) {
    currentImageIndex = 0;
  }

  imagesBanner[currentImageIndex].classList.add("selected");
}

function nextImageInst() {
  imagesInst[currentImageIndexInst].classList.remove("selected-inst");

  currentImageIndexInst++;

  if (currentImageIndexInst >= maxInst) {
    currentImageIndexInst = 0;
  }

  imagesInst[currentImageIndexInst].classList.add("selected-inst");
}

function nextImageQuadros() {
  imagesQuadros[currentImageIndexQuadros].classList.remove("selected-quadros");

  currentImageIndexQuadros++;

  if (currentImageIndexQuadros >= maxQuadros) {
    currentImageIndexQuadros = 0;
  }

  imagesQuadros[currentImageIndexQuadros].classList.add("selected-quadros");
}

function nextImageIlum() {
  imagesIlum[currentImageIndexIlum].classList.remove("selected-ilum");

  currentImageIndexIlum++;

  if (currentImageIndexIlum >= maxIlum) {
    currentImageIndexIlum = 0;
  }

  imagesIlum[currentImageIndexIlum].classList.add("selected-ilum");
}

function start() {
  setInterval(() => {
    nextImageBanner();
    nextImageInst();
    nextImageQuadros();
    nextImageIlum();
  }, time);
}

window.addEventListener("load", start);
