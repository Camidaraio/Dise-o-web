/*
MANERAS DE MOSTRAR EN LA PANTALLA
ALERT();: se muestra en forma de notificacion
document.write();: se escribe en la pestaña
*/
/**/

/*reipiente = "hola"
alert(reipiente) */
/**/

//------------------------------------------------
// tipo de datos:   
/* String = "cadena de texto"
 Number =
 Booleano = true, false
*/
//------------------------------------------------

// como definir una variable

// var: Se puede mof¿dificar una variable   
// let: se usa mas, 
// const: Es una contaste, no se puede modificar.

// manera de difinir variables
/*
 let numero1 = 23, numero2 = 39
  alert(numero1)
  alert(numero2)*/

//------------------------------------------------

// Casos espeiales de datos 
/* 
undefined: indefinido
null: Vacio
nan: Not a Number / No es un numero (intentar hacer una operacion con algo que no es un numero )

let numero = null;
 */


//------------------------------------------------

// PROMPT 
/*
let nombre = prompt("decime tu nombre")
alert("Hola " + nombre)
*/

//------------------------------------------------

// TIPOS DE OPERADORES

/*
Operadores aritmeticos:


Operadores de asignacion: asigna un valor de izquierda a derecha

let numero = 10;

numero += 5

document.write(numero)

-- le resta 1 al numero
*/

//------------------------------------------------


// MANERAS DE CONCATENAR UN TEXTO


/*
Se puede hacer con el + o de esta manera con las comillas backticks
nombre = "Camila Daraio";

frase = `soy ${nombre} y estoy caminando`;

document.write(frase);

(Va siempre con comillas backticks ``, son mejores y puedo agregar comillas simples o dobles en el mismo texto)

Existe 
-Escape de comillas simples
-Escape de comillas dobles

Si quiero poner comillas dobles en el texto, debo usar comillas simples al princio y despues comillas dobles


nombre = "Camila Daraio";

frase = 'soy "camila" y estoy caminando';

document.write(frase);
*/


//------------------------------------------------

// Operadores logicos y operadores de operacion

/*
Operadores de operacion:

== : Igual
!= : Distinto
=== : Identidad (Compara que sean identicos, incluso si uno es un string "" y el otro es un int)
!== : No-identidad (que no sea estrictamente igual)
< : menor
<= : menos igual
> : mayor
>= : mayor o igual

Operadores logicos:

True - False
and : && (Las dos tiene que ser true para que de true)
or : || (Alguna de las dos tiene que ser true para que de true)
Not (!): Me devuelve lo contrario que hay a continuacion

---- Ejercicio de operadores----


num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) ||num3 != num3)

document.write(op)

da true

*/

//------------------------------------------------

/*
----------- Camel case ------
la primer letra en minuscula y la segunda o las siguientes nuevas palabra comienza en mayuscula

Ejemplo:

palabra1Palabra2Palabra3

document.getElementById}

*/

//------------------------------------------------

/*
----------------- CONDICIONALES -------------

if, else if, else

Ejemplos:
if (true) {
  alert("hola")
}

*/

//------------------------------------------------

/*
Fuciones:

parseInt(): Lo convierte a entero
*/


//------------------------------------------------/**/

/*
-------------------- ARRAYS --------------------------
Contiene varios elementos, parecido a las ley
Arrays, formas de crear uno:

arrays = ["camila", 21, "Buenos Aires"];


frutas = ["banana", "frutilla", "pera"];

document.write(frutas)

se llama a la posicion/indice desde el 0 

document.write(frutas[1])

---- ARRAYS ASOCIATIVOS ---

Tiene un dato asociado.


//se separa por comas ,
let pc1 = {
  nombre: "Cami",
  procesador: "Intel core",
  ram: "16GB",
  espacio: "1TB",
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: ${nombre} <br>
         el procesador es: ${procesador} <br>
         la memomoria es: ${ram} <br>
         el espacio en disco es de ${espacio}`;




document.write(frase)
*/

//------------------------------------------------
/*
------------- BUCLES --------------

--- WHILE ---

- EJEMPLO -
let numero = 0

while (numero < 6) {

  numero++;

  document.write(numero + "<br>")
}

--- DO WHILE ---

- EJEMPLO -


let numero = 0

do  {

  numero++;

  document.write(numero + "<br>")
}

while (numero < 6)

// Primero ejecuta el codigo y despues pregunta por la condicion

--- FOR ---
// Dentro del for, se declara la variable, se define la condicion y en este caso incrementamos su valor. 

- EJEMPLOS -

for(let i = 0; i < 6; i++) {

  document.write(i + "<br>")
}

// Otro ejemplo y uso
// *No se muestra el 12*
for(let i = 0; i < 20; i++) {
  if(i == 12) {
    break;
  }
  document.write(i + "<br>")
}
// *Se muestra el 12*
for(let i = 0; i < 20; i++) {
 

  document.write(i + "<br>") 
  if(i == 12) {
    break;
  }
}
---- CONTINUE -----

// Como me salteo el 12. Con continue (Se saltea el numero que le pisa en la condicion)

-EJEMPLOS-

for(let i = 0; i < 20; i++) { //Si numero es menor que 20, incrementa su valor ++
  if(i == 4) { //aca le pido que me saltee el numero 4
      continue;
    }

  document.write(i + "<br>") 
  
}

----- FOR  IN -----

Devuelve la posicion/indice de cada elemento

-EJEMPLOS-

let animales = ["gatos", "perro", "tiranosaurio rex"];

for (animal in animales){
    document.write(animal + "<br>")

}

----- FOR  ON -----

Devuelve el valor de esos elementos


-EJEMPLOS-

for (animal of animales){
  document.write(animal + "<br>")

  
}

----- LABEL -----



-EJEMPLOS-

array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forBucle: //Nombre de todo el bucle for
for (let array in array2){
  if (array == 2) {
    for (let array of array1){
      document.write(array + "<br>")
      continue forBucle; //uso el nombre de todo el bucle for para que haga el stop al principio del bucle
    }
  } else {
    document.write(array2[array] + "<br>");
  }
} 

//------------------------------------------------
------------- FUNCIONES --------------

// El return es el corte de la funcion,todo lo que se pongadespues no se va a mostrar ni a ejecutar

-EJEMPLOS-

function edad(numero){
    if (numero >= 18){
        return "Es mayor";
    } else {
        return "Es menor"
    }
}

document.write(edad(2))

- PARAMETROS-

*/


let num1;
let num2;

function suma(num1, num2){
  let suma = num1 + num2;
  document.write(suma)
  document.write("<br>")
}

suma(20,55)








