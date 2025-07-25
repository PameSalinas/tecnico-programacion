import { add, subtract, multiply, divide } from "./operations.js";

const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const result = document.getElementById("result");

  if (isNaN(n1) || isNaN(n2)) {
    result.textcontent = "✖️ Ingresa números válidos";
    return;
  }

  let resultFinal;
  switch (operation) {
    case "add":
      resultFinal = add(n1, n2);
      break;
    case "subtract":
      resultFinal = subtract(n1, n2);
      break;
    case "multiply":
      resultFinal = multiply(n1, n2);
      break;
    case "divide":
      resultFinal = divide(n1, n2);
      break;
    default:
      resultFinal = "Operación no válida";
  }

  result.textContent = resultFinal;
});
