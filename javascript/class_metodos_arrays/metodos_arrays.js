/*
//------ METODOS DE ARRAYS ----

//splice(): cambia el contenido de un array eliminando elementos existentes o agregando nuevos elementos. (en los parametros le indico primero desde que posicion empieza, cuantos elementos quiero eliminar y por ultimo puedo indicarle que elemento)

// Cuando indico que la posicion es -1, me refiero al ultimo lugar del array
*/
let numeros = ["abecedario", "manzana", "pedro"];

document.write("splice: " + "<br>" + numeros + "<br>");

numeros.splice(2, 0, "hola");

document.write(numeros + "<br>" + "<br>");
/*
//------ METODOS ACCESORES DE UN ARRAYS ----

- En estos metodos, no se modifica el array principal si no que se crea uno nuevo al que se le modifica

// join(): une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.

*/
let numeros1 = ["abecedario", "manzana", "pedro"];

document.write("join: " + "<br>" + "Array: " + numeros1 + "<br>");

let resultado1 = numeros1.join("<br>elemento:  ");

document.write("elemento: " + resultado1 + "<br>" + "<br>");

//Devuelve una  cadena de texto

//slice(): devuelve una parte del array dentro de un nuevo array empezando por el inicio hasta el fin (fin no incluido)

let numeros2 = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

document.write("slice: " + "<br>" + numeros2 + "<br>");

let resultado2 = numeros2.slice(0, 2); // Le indico desde que elemento quiero que me muestre, hasta que elemento (ese no esta incluido)

document.write(resultado2 + "<br>" + "<br>");

// Metodos ya visto en cadenas: tostring(), indeOf(), lastIndexOf(), includes()

//------ METODOS DE REPETICION DE UN ARRAYS ----

// filter(): crea un nuevo array con todos los elementos que cumplan la condiciones
//forEach(): ejecutsa la funcion indicada una vez por cada elementos del array

// Ambos son iguales y devuelven lo mismo, la diferencia es que en filter nos permite crear un nuevo array con una funcion que cumpla cierta condicion

let numeros3 = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write("filter: " + "<br>");

numeros3.filter(function (numero) {
  document.write(numero + "<br>");
});

let numeros4 = ["abecedario", "manzana", "ped", "dedo", "bobo"];
document.write("<br>" + "filter:" + "<br>");

resultado4 = numeros4.filter((numeros4) => numeros4.length < 4);

document.write(resultado4 + "<br>");
