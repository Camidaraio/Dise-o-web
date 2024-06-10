/* 
--- Objetos MATH

- sqrt(): Devuelve la raiz cuadrada de un numero.
- cbrt(): Devuelve la raiz cubica de un numero.
- max(): Devuelve el mayor de cero o mas numeros.
- min(): Devuelve el menor de cero o mas numeros.
- random(): Devuelve un numero aleatorio entre 0 y 1.
- round(): Devuelve el valor de un numero decimal redondeado a entero.
- fround(): Devuelve la representacion flotante de precision simple mas vercana de un numero.
- floor(): Devuelve el mayor entero menor que o igual a un numero,
- trunc(): Devuelve la parte enyera del numero x, la eliminacion de los digitos fraccionarios. (elimina los digitos fraccionarios)

--PROPIEDADES--

- pi: Radio de la circunferencia


*/

// - EJEMPLOS -

document.write("EJEMPLO DE RAMDON - FLOOR" + "<br>")
for (let i = 0; i < 5; i++) {
    let numero = Math.random()*99;
    numero = Math.floor(numero+1);

    document.write(numero + "<br>") 
}

