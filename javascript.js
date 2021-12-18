let imagesBanner = document.querySelectorAll("#projetos-imagem img");
let imagesInst = document.querySelectorAll("#imagens-inst img");
let imagesQuadros = document.querySelectorAll("#imagens-quadros img");
let imagesIlum = document.querySelectorAll("#imagens-ilum img");

let time = 1000;
let currentImageIndex = 0;
let maxBanner = imagesBanner.length;
let maxInst = imagesInst.length;
let maxQuadros = imagesQuadros.length;
let maxIlum = imagesIlum.length;

function nextImageBanner() {
  imagesBanner[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= maxBanner) {
    currentImageIndex = 0;
  }

  imagesBanner[currentImageIndex].classList.add("selected");
}

function nextImageInst() {
  imagesInst[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= maxInst) {
    currentImageIndex = 0;
  }

  imagesInst[currentImageIndex].classList.add("selected");
}

function nextImageQuadros() {
  imagesInst[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= maxQuadros) {
    currentImageIndex = 0;
  }

  imagesInst[currentImageIndex].classList.add("selected");
}

function nextImageIlum() {
  imagesInst[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= maxIlum) {
    currentImageIndex = 0;
  }

  imagesInst[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    nextImageBanner();
    nextImageInst();
  }, time);
}

window.addEventListener("load", start);
