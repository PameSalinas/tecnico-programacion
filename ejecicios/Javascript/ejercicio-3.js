const botonPresionar = document.getElementById("boton-presionar");

function handlePress() {
  const textoBoton = botonPresionar.innerText;
  if (textoBoton === "No presionado") {
    botonPresionar.innerText = "Presionado";
  } else {
    botonPresionar.innerText = "No presionado";
  }
}

botonPresionar.addEventListener("click", handlePress);
