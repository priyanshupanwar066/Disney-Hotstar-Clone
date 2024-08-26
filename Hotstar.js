const images = document.querySelectorAll(".Upcoming img");
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

setInterval(showNextImage, 4000);

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const nextButton = document.querySelector(".next-button");
  const titleDisplay = document.getElementById("title");
  const detailsDisplay = document.getElementById("details");
  const descriptionDisplay = document.getElementById("description");
  const genresDisplay = document.getElementById("genres");
  const languagesDisplay = document.getElementById("languages");
  let currentIndex = 0;

  function updateCarousel() {
    thumbnails.forEach((thumbnail, index) => {
      if (index === currentIndex) {
        thumbnail.classList.add("active");
        titleDisplay.textContent = thumbnail.getAttribute("data-title");
        detailsDisplay.textContent = `${thumbnail.getAttribute(
          "data-year"
        )} • ${thumbnail.getAttribute(
          "data-duration"
        )} • ${thumbnail.getAttribute(
          "data-languages"
        )} • ${thumbnail.getAttribute("data-rating")}`;
        descriptionDisplay.textContent =
          thumbnail.getAttribute("data-description");
        genresDisplay.textContent = thumbnail.getAttribute("data-genres");
        languagesDisplay.textContent = `${thumbnail.getAttribute(
          "data-original"
        )} Original ${
          thumbnail.getAttribute("data-dubbed")
            ? " • " + thumbnail.getAttribute("data-dubbed")
            : ""
        }`;
        moImg.src = thumbnail.getAttribute("data-img-src");
      } else {
        thumbnail.classList.remove("active");
      }
    });
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateCarousel();
  });

  // Initial call to display the first thumbnail and text
  texts;
  updateCarousel();
});

const thumbnailsContainer = document.querySelector(".thumbnails");
const thumbnails = document.querySelectorAll(".thumbnail");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  thumbnailsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("mouseover", () => {
    const video = thumbnail.querySelector("video");
    video.play();
  });

  thumbnail.addEventListener("mouseout", () => {
    const video = thumbnail.querySelector("video");
    video.pause();
    video.currentTime = 0;
  });
});

const texts = [
  {
    movieName: "Show Time",
    releaseDate: "on 10 July",
    description: "An exciting journey through the world of cinema.",
  },
  {
    movieName: "The Championships",
    releaseDate: "on 15 July",
    description: "A thrilling story of competition and glory.",
  },
  {
    movieName: "Aavesham",
    releaseDate: "on 28 July",
    description: "A suspenseful tale of mystery and intrigue.",
  },
  {
    movieName: "The Legend Of Hanuman",
    releaseDate: "on 1 August",
    description: "A heartwarming story of love and friendship.",
  },
  {
    movieName: "The Jungle Book",
    releaseDate: "on 5 August",
    description: "An action-packed adventure through time and space.",
  },
];

let CurrentIndex = 0;
const movieNameElement = document.getElementById("movie-name");
const movieDescriptionElement = document.getElementById("movie-description");
const movieReleaseDateElement = document.getElementById("movie-release-date");

function changeText() {
  movieNameElement.textContent = texts[currentIndex].movieName;
  movieDescriptionElement.textContent = texts[currentIndex].description;
  movieReleaseDateElement.textContent = texts[currentIndex].releaseDate;
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 4000);

document.querySelectorAll(".logo-item").forEach((item) => {
  const video = item.querySelector("video");
  item.addEventListener("mouseover", () => {
    video.play();
    video.style.opacity = 1;
  });

  item.addEventListener("mouseout", () => {
    video.pause();
    video.style.opacity = 0;
  });
});

