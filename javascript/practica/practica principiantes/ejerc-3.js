// mostrar si es par o impar

function esParOImpar (numero) {
    if (numero % 2 === 0){
        return "Es par";
    } else {
        return "No es par"
    }
}

alert(esParOImpar(8));