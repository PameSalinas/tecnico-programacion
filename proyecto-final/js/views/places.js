function placesPage() {
  document.getElementById("content").innerHTML =
    "<h1>Cargando lugares...</h1>";

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
        "content"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}


function renderPlaces(places) {
  const html = `
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
  `;
  document.getElementById("content").innerHTML = html;
}

export default placesPage;
