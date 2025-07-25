import { intentosMaximos } from "./variables.js";
import { intentar } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const textoIntentos = document.querySelector("#texto-intentos");
  textoIntentos.textContent = `Tienes ${intentosMaximos} intentos`;
});

const botonProbar = document.getElementById("boton-probar");
botonProbar.addEventListener("click", intentar);
