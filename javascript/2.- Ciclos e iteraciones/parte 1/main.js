/*  Estructura del if:

    if (condicion) {
        codigo a ejecutar cuando la condicion sea verdadera
    }

*/

/*  Estructura del else

    if (condicion) {
        codigo a ejecutar cuando la condicion sea verdadera;
    }else if (condicion) {
        codigo a ejecutar cuando la condicion anterior sea falsa y esta verdadera;
    }else if (condicion) {
        codigo a ejecutar cuando las condiciones anteriores sean falsas y esta verdadera;
    }else {
        codigo a ejecutar cuando todas las condiciones anteriores son falsas
    }

*/


// ejemplo basico de como funciona el if

if (0 == 0) {
    console.log("Hola")
}


// recibiendo un valor booleano de una funcion

let edad = 6;
let respuesta = edad > 4;

console.log(respuesta);


// un prompt para que al ingresar el nombre, te lo devuelva: 

let nombre = prompt("Ingrese su nombre").toLowerCase(); // uso .toLowerCase() para que la respuesta me la pase a minuscula

if (nombre == "pepito") {
    alert("Bienvenido pepito");
}else if (nombre == "juan") {
    alert("Bienvenido juan");
}else {
    alert(`Bienvenido ${nombre}`);
}


// usando los operadores logicos not y and

let firstname = prompt("Ingrese su nombre");
let lastname = prompt("Ingrese su apellido");

if (firstname != "" && lastname != "") {
    alert("Nombre: " + firstname + " Apellido: " + lastname);
} else {
    alert("Nombre y apellido obligatorio");
}


// usando el operador logico or 

let residencia = prompt("Ingrese su provincia");
if (residencia === "Buenos Aires" || residencia === "buenos aires") {
    alert("Bienvenido hijo de kici");
} else {
    alert("No sos hijo de kici");
}


// ejercicio practico 1h 19m

let number = prompt("Ingrese un numero");
let text = prompt("Saludenos");

if (number > 1000) {
    alert("Tu numero es mayor a 1000");
}

if (text === "Hola") {
    alert("Bienvenido al sitio web");
}

if (number > 10 && number < 50) {
    alert("Tu numero está entre 10 y 50");
}
