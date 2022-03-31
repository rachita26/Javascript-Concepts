const url = "https://dog.ceo/api/breeds/image/random";

const containerDiv = document.querySelector("#container");

const noOfImg = 10;

function getData() {
  for (let i = 0; i < noOfImg; i++) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        containerDiv.appendChild(img);
      });
  }
}

document.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getData();
  }
});

getData();
