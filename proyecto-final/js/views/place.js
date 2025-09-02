import { getParams } from "../utils.js";

function placePage() {
  const params = getParams("/place/:name", window.location.pathname);

  console.log(params);
  const name = params.name || "Lugar desconocido";

  document.getElementById("content").innerHTML = `<h1>${name}</h1>`;
}

export default placePage;
