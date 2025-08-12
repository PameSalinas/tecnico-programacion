function calcular() {
  const input = document.getElementById("expresion").value;
  const resultadoDiv = document.getElementById("resultado");
  try {
    /*
    const tokens = input.match(/(\d+|\+|\-|\*|\/)/g);
    if (!tokens || tokens.length % 2 === 0) throw "Sintaxis inválida";

    let total = parseInt(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operador = tokens[i];
      const numero = parseInt(tokens[i + 1]);
      if (isNaN(numero)) throw "Número inválido";

      switch (operador) {
        case "+":
          total += numero;
          break;
        case "-":
          total -= numero;
          break;
        case "*":
          total *= numero;
          break;
        case "/":
          total /= numero;
          break;
        default:
          throw "Operador inválido";
      }
    }*/

    const total = eval(input);

    resultadoDiv.textContent = `Resultado: ${total}`;
    resultadoDiv.classList.remove("error");
  } catch (e) {
    resultadoDiv.textContent = e;
    resultadoDiv.classList.add("error");
  }
}
