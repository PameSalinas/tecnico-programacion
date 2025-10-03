import { getParams } from "../utils.js";
import Layout from "./layout.js";
import { RightIcon, LeftIcon } from "../components/Icons.js";

function placePage() {
  document.getElementById("app").innerHTML = "<h1>Cargando lugares...</h1>";

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
  const images = document.querySelectorAll(".carousel-img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let current = 0;
  let intervalId;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }

  function startAutoplay() {
    intervalId = setInterval(nextImage, 3000); // cambia cada 3 segundos
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

  showImage(current);
  startAutoplay();
}

function renderPlace(places) {
  const params = getParams("/place/:name", window.location.pathname);
  const placeName = params.name;
  const place = places.find((p) => p.name === placeName);
  console.log(place.atractions);

  const placeContent = `
    <div class="place-wrapper">
      <h1>${place.name}</h1>
      <section class="place-container">
        <div>
          <div class="place-container-left">
            <p>${place.description}</p>
            <p>Precio de entrada: <strong>$${place.price}</strong></p>
            <p>Afluencia turística: ${place.touristInflux}</p>
            <p>Clima: ${place.weather}</p>
            <h2>Actividades</h2>
            <ul>
              ${place.attractions.map((a) => `<li>${a}</li>`).join("")}
            </ul>
          </div>
          <div class="place-container-right">
            <img src="${place.image}" alt="Imagen de ${place.name}"/>
          </div>
        </div>

        <div>
          <iframe src="${
            place.googleMapsLink
          }" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      <div class="carousel">
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
        <button class="carousel-btn prev">${LeftIcon()}</button>
        <button class="carousel-btn next">${RightIcon()}</button>
      </div>

      <div>
      </div>
      </section> 
    </div>
  `;

  Layout(placeContent);
  initCarousel();
}

export default placePage;
