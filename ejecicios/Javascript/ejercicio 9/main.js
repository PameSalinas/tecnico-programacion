const generarTabla = () => {
    const numero = parseInt(document.getElementById("numero").value);
    const lista = document.getElementById("tabla");
    lista.innerHTML = ""; 

    for (let i = 1 i <= 10; i++) {
        const multiplo = numero * i;

        if (multiplo  === ) {
            console.log(multiplo es par);
        } else {
            console.log(multiplo es impar);
        }
    }
}