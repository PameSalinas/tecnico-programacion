import {frutas} from "./constantes.js"
import functions from "./functions.js"

frutas.forEach((fruta) => {
    console.log(fruta)
})


// saludar("Hola")
functions.mostrarNumero(67, 30)

function obtenerNumeroAleatorio() {
    return parseInt(Math.random() * 100)
}

console.log(obtenerNumeroAleatorio)
console.log(obtenerNumeroAleatorio())



