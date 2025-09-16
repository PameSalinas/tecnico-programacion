import Layout from "./layout.js";
import { initRandomMainImage,shuffleArray } from "../utils.js";

function principalPage() {
  document.getElementById("app").innerHTML = "<h1>Cargando lugares...</h1>";

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
  const allImages = places.flatMap(place => place.images);
  const shuffledImages = shuffleArray(allImages);
  const backgroundImages = [...shuffledImages, ...shuffledImages]; // Para loop

  Layout(`
    <div class="carousel-wrapper">
      <!-- Fondo con imágenes aleatorias en bucle -->
      <div class="carousel-background" id="carousel-background">
        ${backgroundImages.map(src => `
          <img src="${src}" class="carousel-bg-image" loading="lazy">
        `).join("")}
      </div>

      <!-- Imagen principal al frente -->
      <div class="carousel-foreground">
        <img id="main-carousel-image" class="carousel-main-image" src="${allImages[0]}" alt="Lugar turístico">
      </div>
    </div>

    <!-- 🟡 Contenido adicional después del carrusel -->
    <section class="info-section">
      <h2 class="slogan">Descubre lo mejor de El Salvador 🇸🇻</h2>
      <p class="site-description">
        ExploreSV es tu guía visual para explorar los lugares turísticos más impresionantes de El Salvador.
        Desde majestuosas montañas hasta encantadores pueblos coloniales, te llevamos a recorrer el país
        a través de experiencias visuales únicas. ¡Prepárate para tu próxima aventura!
      </p>
    </section>
  `);

  initRandomMainImage(allImages);
}



export default principalPage;
