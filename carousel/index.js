const url = "https://picsum.photos/v2/list?limit=3";

const carouselDiv = document.getElementById("carouselDiv");
const currentImg = document.getElementById("currentImg");
var imageSrcArray = [];
var currentImageIndex = 0;
var previousImageIndex = 0;
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const indicators = document.querySelectorAll(".fa-circle");

previous.addEventListener("click", () => {
  if (currentImageIndex === 0) {
    currentImageIndex = 2;
    previousImageIndex = 0;
  } else {
    previousImageIndex = currentImageIndex;
    currentImageIndex--;
  }
  currentImg.src = imageSrcArray[currentImageIndex];
  indicators[previousImageIndex].classList.remove("currentScroll");
  indicators[currentImageIndex].classList.add("currentScroll");
});

next.addEventListener("click", () => {
  if (currentImageIndex === 2) {
    currentImageIndex = 0;
    previousImageIndex = 2;
  } else {
    previousImageIndex = currentImageIndex;
    currentImageIndex++;
  }
  currentImg.src = imageSrcArray[currentImageIndex];
  indicators[previousImageIndex].classList.remove("currentScroll");
  indicators[currentImageIndex].classList.add("currentScroll");
});

const storeImages = (data) => {
  imageSrcArray = data.map((el) => el.download_url);
  currentImg.src = imageSrcArray[0];
  indicators[0].classList.add("currentScroll");
};

const getImages = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => storeImages(data));
};

getImages();
