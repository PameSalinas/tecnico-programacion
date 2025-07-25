import { intentosMaximos } from "./variables.js";

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let totalIntentosActuales = intentosMaximos;

export const intentar = () => {
  const intento = parseInt(document.getElementById("adivinanza").value);
  const elementoMensaje = document.getElementById("mensaje");

  if (totalIntentosActuales != 1) {
    if (intento === numeroSecreto) {
      elementoMensaje.textContent = `¡Felicidades! Adivinastes el número. Número adivinado: ${numeroSecreto}`;
    } else {
      totalIntentosActuales--;
      elementoMensaje.textContent = `Intenta de nuevo. Te restan ${totalIntentosActuales} intentos`;
    }
  } else {
    elementoMensaje.textContent =
      "Lo sentimos has alcanzado el límite de intentos";
  }

  /*
  switch (true) {
    case totalIntentosActuales === 1:
      elementoMensaje.textContent =
        "Lo sentimos has alcanzado el límite de intentos";
      break;
    case intento === numeroSecreto:
      elementoMensaje.textContent = `¡Felicidades! Adivinastes el número. Número adivinado: ${numeroSecreto}`;
      break;
    default:
      totalIntentosActuales--;
      elementoMensaje.textContent = `Intenta de nuevo. Te restan ${totalIntentosActuales} intentos`;
      break;
  }
  */
};
