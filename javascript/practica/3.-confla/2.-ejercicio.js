const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["Perez", "pedro","pepito", "cofla", "maria"],
    programacion: ["Rodriguez","pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro","juan", "pepito", "cofla", "maria"],
    quimica: ["Dalto", "pedro","juan", "pepito", "cofla", "maria"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};



const mostrarInformacion = (materia)=> {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0]
        let alumnos = informacion[0] 
        alumnos.shift(); // el .shift es para eliminar el primer elemento de un array
        document.write(`El profesor de en <b>${informacion[1]}</b>: <b style="color:red">${profesor}</b> <br>
        Los alumnos son: <b style="color:blue">${alumnos}</b> <br><br>
        
        `);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    for (info in informacion){
      if (informacion[info].includes(alumno)) {
        cantidadTotal ++;
      }
    }
    return alumno + " esta en: " + cantidadTotal + " clases" + "<br>";
    
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("maria" ))



