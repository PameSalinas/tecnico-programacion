const input = document.getElementById("inputNumero");
const btn = document.getElementById("btnAgregar");
const lista = document.getElementById("listaNumeros");
const numeros = [];

btn.addEventListener("click", () => {
  const valor = parseFloat(input.value.trim());
  if (isNaN(valor)) return;

  if (numeros.includes(valor)) {
    alert("Número duplicado");
    return;
  }

  numeros.push(valor);

//   for (let i = 0; i < numeros.length - 1; i++) {
//     for (let j = i + 1; j < numeros.length; j++) {
//       if (numeros[i] > numeros[j]) {
//         [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
//       }
//     }
//   }
  numeros.sort((a, b) => a - b)

  lista.innerHTML = "";

  numeros.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    li.classList.add("numero");
    if(numeros.length !== 1) {
        if (num === Math.max(...numeros)) li.classList.add("mayor");
        if (num === Math.min(...numeros)) li.classList.add("menor");
    }
    lista.appendChild(li);
  });
});
