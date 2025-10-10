import Layout from "./layout.js";
import { initRandomMainImage, shuffleArray } from "../utils.js";
import Spinner from "../components/Spinner.js";

function principalPage() {
  document.getElementById("app").innerHTML = Spinner();

  fetch("/data/places.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar lugares");
      return response.json();
    })
    .then((data) => {
      renderPrincipalPage(data);
    })
    .catch((error) => {
      document.getElementById(
        "app"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

function renderPrincipalPage(places) {
  const allImages = places.flatMap((place) => place.images);
  const shuffledImages = shuffleArray(allImages);
  const backgroundImages = [...shuffledImages, ...shuffledImages];

  const mainContent = `
    <section class="carousel-wrapper">
      <div class="carousel-background" id="carousel-background">
        ${backgroundImages
          .map(
            (src) => `
          <img src="${src}" class="carousel-bg-image" loading="lazy">
        `
          )
          .join("")}
      </div>

      <div class="carousel-foreground">
        <img id="main-carousel-image" class="carousel-main-image" src="${
          allImages[0]
        }" alt="Lugar turístico">
      </div>
    </section>

    <section class="info-section">
      <h2 class="slogan">Descubre lo mejor de El Salvador</h2>
      <p class="site-description">
        ExploreSV es tu guía visual para explorar los lugares turísticos más impresionantes de El Salvador.
        Desde majestuosas montañas hasta encantadores pueblos coloniales, te llevamos a recorrer el país
        a través de experiencias visuales únicas. ¡Prepárate para tu próxima aventura!
      </p>
      <a class="site-startButton" href="/places">
        Empieza tu viaje aquí
        <div class="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </a>
    </section>
  `;

  Layout(mainContent);

  initRandomMainImage(allImages);
}

export default principalPage;
