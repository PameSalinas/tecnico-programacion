import { getParams } from "../utils.js";
import Layout from "./layout.js";

function placePage() {
  const params = getParams("/place/:name", window.location.pathname);

  console.log(params);
  const name = params.name || "Lugar desconocido";

  const placeContent = `<h1>${name}</h1>`

  Layout(placeContent)
}

export default placePage;
