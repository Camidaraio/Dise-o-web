const materias = {
      fisica: ["Perez", "pedro","pepito", "cofla", "maria"],
      programacion: ["Rodriguez","pedro", "juan", "pepito"],
      logica: ["Hernandez", "pedro","juan", "pepito", "cofla", "maria"],
      quimica: ["Dalto", "pedro","juan", "pepito", "cofla", "maria"],
    };

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if (alumno.length >= 20) {
      document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas`);
    } else {
      if (materia == "fisica") {
        
      }
    }
}

inscribir("p", "fisica")