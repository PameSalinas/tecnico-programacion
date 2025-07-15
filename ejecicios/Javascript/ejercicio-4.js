const verifyButton = document.getElementById("verify-button");

/**
 * Normal function
 * function functionName(args) {
 *      console.log('Haciendo la logico')
 * }
 *
 *
 * Arrow function
 * const arrowFunction = () => {
 *      console.log('Haciendo la logico')
 * }
 *
 */

const handleVerify = () => {
  const ageValue = document.getElementById("age").value;
  const resultView = document.getElementById("result");

  resultView.textContent =
    ageValue >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
};

verifyButton.addEventListener("click", handleVerify);
