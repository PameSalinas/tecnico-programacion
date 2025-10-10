import { getParams } from "../utils.js";
import Layout from "./layout.js";
import { ArrowIconNext, ArrowIconPrev } from "../components/Icons.js";
import Spinner from "../components/Spinner.js";

function placePage() {
  document.getElementById("app").innerHTML = Spinner();

  fetch("/data/places.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar lugares");
      return response.json();
    })
    .then((data) => {
      renderPlace(data);
    })
    .catch((error) => {
      document.getElementById(
        "app"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

function initCarousel() {
  const imageContainer = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  let intervalId;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    imageContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function startAutoplay() {
    intervalId = setInterval(nextImage, 3500);
  }

  function stopAutoplay() {
    clearInterval(intervalId);
  }

  nextBtn.addEventListener("click", () => {
    nextImage();
    stopAutoplay();
    startAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    prevImage();
    stopAutoplay();
    startAutoplay();
  });

  updateCarousel();
  startAutoplay();
}

function renderPlace(places) {
  const params = getParams("/place/:name", window.location.pathname);
  const placeName = params.name;
  const place = places.find((p) => p.name === placeName);

  const placeContent = `
    <div class="place-wrapper">
      <h1>${place.name}</h1>
      <section class="place-container">
        <div>
          <div class="place-container-left">
            <p>${place.description}</p>
            <p>Precio de entrada: <strong>$${place.price}</strong></p>
            <p>Afluencia turística: <strong>${place.touristInflux}</strong></p>
            <p>Clima: <strong>${place.weather}</strong></p>
            <h2>Actividades</h2>
            <ul>
              ${place.attractions.map((a) => `<li>${a}</li>`).join("")}
            </ul>
          </div>
          <div class="place-container-right">
            <img src="${place.image}" alt="Imagen de ${place.name}"/>
          </div>
        </div>

        <div class="location-container">
          <h2>Ubicación</h2>
          <iframe src="${
            place.googleMapsLink
          }" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      <div class="carousel">
        <h2>Imágenes</h2>
        <div class="carousel-images">
          ${place.images
            .map(
              (img, index) => `
                <img src="${img}" class="carousel-img${
                index === 0 ? " active" : ""
              }" alt="Imagen de ${place.name} ${index + 1}"/>
                `
            )
            .join("")}
        </div>
        <button class="carousel-btn prev">${ArrowIconPrev()}</button>
        <button class="carousel-btn next">${ArrowIconNext()}</button>
      </div>

      <div class="place-experiences">
        <h2>Reseñas de Turistas</h2>
        <ul class="experience-list">
          ${place.experiences
            .map(
              (exp) => `
            <li class="experience-item">
              <h3>${exp.name}</h3>
              <div class="experience-stars">
                ${"★".repeat(exp.score)}${"☆".repeat(5 - exp.score)}
              </div>
              <p>${exp.description}</p>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      </section> 
    </div>
  `;

  Layout(placeContent);
  initCarousel();
}

export default placePage;
