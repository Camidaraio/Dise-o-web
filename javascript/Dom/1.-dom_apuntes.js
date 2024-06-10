// ------ DOM ------------

// - Nodo: Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrado, el mismo body o incluso las etiquetas de una lista.

// Document - Metodos de seleccion de elementos

// ---- document.getElementById() ---

// Selecciona un elemento ID

// - EJEMPLO -- 


// parrafo = document.getElementById("parrafo"); //Asi selecciono un objento entero
// document.write(parrafo)

// ---- getElementByIdTagName() ----
// Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada

// - EJEMPLO -- 

// parrafo = document.getElementByIdTagName("p"); 
// document.write(parrafo)

// ---- querySelector() ----
// Devuelve el primer elemento que coincida con el grupo especificado  de selectores
// con . (class)
// con # (id )

// - EJEMPLO -- 

// parrafo = document.querySelector("#rancio"); 
// document.write(parrafo)

// ---- querySelectoAll() ----
// Devuelve todos los elementos que coindidan con el grupo especificado de selectores
// selecciona todos los elementos

// ---- Metodos para definir, obtener y eliminar valores de atributos

// - setAttribute(): modifica o le agrega el valor del atributo

// - EJEMPLO -- 

const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type", "color")

// - getAttribute(): obtiene el valor de un atributo

// - EJEMPLO -- 
 
const rangoEtario1 = document.querySelector(".rangoEtario");
document.write(rangoEtario.getAttribute("type"))

// - removeAttribute(): remieve el valkor de un atributo