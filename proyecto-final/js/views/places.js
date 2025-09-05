import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function placesPage() {
  document.getElementById("app").innerHTML = "<h1>Cargando lugares...</h1>";

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
  const html = `
    ${Navbar()}
    <h1>Lugares para visitar</h1>
    <ul>
      ${places
        .map(
          (place) => `
        <li>
          <a href="/place/${encodeURIComponent(place.name)}">${
            place.name
          }</a> - ${place.description}
        </li>
      `
        )
        .join("")}
    </ul>

    ${Footer()}
  `;
  document.getElementById("app").innerHTML = html;
}

export default placesPage;
