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
  const name = params.name;

  const placeContent = `
    <div class="place-wrapper">
      <h1></h1>
      <section class="place-container">
        
      </section>
    </div>
  `;

  Layout(placeContent);
}

export default placePage;
