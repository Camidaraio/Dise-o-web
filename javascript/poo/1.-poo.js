class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
        // Asi se escriben las funciones dentro de una clase, y se le cambia el nombre por metodos
    }
}

let perro = new animal("perro", 5, "marron");
let gato = new animal("gato", 2, "naranja");
let pajaro = new animal("pajaro", 10, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
