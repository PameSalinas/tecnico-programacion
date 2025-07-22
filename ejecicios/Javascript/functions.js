function saludar(mensaje) {
    alert(mensaje)
}

const mostrarNumero = (numero, cantidad) => {
    for (let i = 0; i < cantidad; i++) {
        console.log(numero)
    }
}

const objetoAExportar = {
    saludar,
    mostrarNumero
}

export default objetoAExportar;