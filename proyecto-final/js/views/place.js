import { getParams } from "../utils.js";
import Layout from "./layout.js";

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

function renderPlace(places) {
  const params = getParams("/place/:name", window.location.pathname);
  const placeName = params.name;
  const place = places.find((p) => p.name === placeName)
  console.log(place.atractions)

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
          <iframe src="${place.googleMapsLink}" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section> 
    </div>
  `;

  Layout(placeContent);
}

export default placePage;
