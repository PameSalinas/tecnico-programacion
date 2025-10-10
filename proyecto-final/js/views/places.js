import Layout from "./layout.js";
import Spinner from "../components/Spinner.js";

function placesPage() {
  document.getElementById("app").innerHTML = Spinner();

  fetch("/data/places.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar lugares");
      return response.json();
    })
    .then((data) => {
      renderPlaces(data);
    })
    .catch((error) => {
      document.getElementById(
        "app"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

function renderPlaces(places) {
  const placesContent = `
    <div class="places-wrapper">
      <h1>Elije tu destino</h1>
      <section class="places-container">
        ${places
          .map(
            (place) => `
              <article class="place-card">
                <div class="place-image-section">
                  <img src="${place.image}" alt="${place.name}" />
                  <h2>${place.name}</h2>
                </div>
                <div class="place-info-section">
                  <p>${place.description}</p>
                  <a href="/place/${encodeURIComponent(place.name)}">
                    Descubrir
                  </a>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    </div>
  `;

  Layout(placesContent);
}

export default placesPage;
