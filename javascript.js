let images = document.querySelectorAll("#projetos-imagem img");
let time = 4000;
let currentImageIndex = 0;
let max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

window.addEventListener("load", start);
