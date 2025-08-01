const LONGITUD_POR_DEFECTO = 10;
const NUMERO_POR_DEFECTO = 1;

const generarTabla = (numero = 1, longitud = 10) => {
  const lista = document.getElementById("tabla");
  lista.innerHTML = "";

  for (let i = 1; i <= longitud; i++) {
    const multiplo = (numero * i).toLocaleString("en-US");
    const liElement = document.createElement("li");

    liElement.textContent = `${numero} × ${i} = ${multiplo} ${
      multiplo % 2 === 0 ? "es par" : "es impar"
    } `;
    lista.appendChild(liElement);
  }
};

const generarBoton = document.getElementById("generarBoton");
generarBoton.addEventListener("click", () => {
  const valorNumero = document.getElementById("numero").value;
  const numero = valorNumero != "" ? parseInt(valorNumero) : undefined;

  const valorLongitud = document.getElementById("longitud").value;
  const longitud =
    valorLongitud != "" ? parseInt(valorLongitud) : undefined;

  generarTabla(numero, longitud);
});
