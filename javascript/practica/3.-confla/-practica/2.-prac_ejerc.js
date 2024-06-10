/* function calculadora (){
    alert("¿Que operacion deseas realizar?");
    let operacion = parseInt(prompt("1: suma, 2: resta, 3: dividion, 4: multiplicacion"));
    if (operacion < 1 || operacion > 4){
        alert("Opcion incorrecta");
    }
    else{
        let numero1 = Number(prompt("primer numero"));
        let numero2 = Number(prompt("segundo numero"));
        if (operacion == 1) {
            let resultado = (numero1 + numero2);
            alert(`tu resultado de la suma es ${resultado}`);
            

        }

        else if (operacion == 2) {
            let resultado = (numero1 - numero2);
            alert(`tu resultado de la resta es ${resultado}`);
            


        }

        else if (operacion == 3) {
            let resultado = (numero1 / numero2);
            alert(`tu resultado de la division es ${resultado}`);
            


        }

        else if (operacion == 4) {
            let resultado = (numero1 * numero2);
            alert(`tu resultado de la multiplicacion es ${resultado}`);
            


        }
    }

}

calculadora()


// Actividad: hacer el redondeo del numero, si en el prompt se coloca un numero con , */

function calculadora() {
    while (true) {
        alert("¿Qué operación deseas realizar?");
        alert("1: suma, 2: resta, 3: división, 4: multiplicación");
        let operacion = parseInt(prompt("Ingresa el número de la operación deseada"));

        if (operacion < 1 || operacion > 4 || isNaN(operacion)) {
            alert("Opción incorrecta. Por favor, ingresa un número válido del 1 al 4.");
            continue; // El bucle volverá a preguntar por la operación
        }

        let numero1 = parseFloat(prompt("Ingresa el primer número"));
        let numero2 = parseFloat(prompt("Ingresa el segundo número"));

        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingresa números válidos");
            continue; // El bucle volverá a preguntar por los números
        }

        let resultado;
        switch (operacion) {
            case 1:
                resultado = numero1 + numero2;
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case 2:
                resultado = numero1 - numero2;
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case 3:
                if (numero2 === 0) {
                    alert("No se puede dividir por cero");
                    continue; // El bucle volverá a preguntar por los números
                }
                resultado = numero1 / numero2;
                alert(`El resultado de la división es: ${resultado}`);
                break;
            case 4:
                resultado = numero1 * numero2;
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
            default:
                alert("Operación no válida");
        }

        // Preguntar si desea realizar otra operación
        let continuar = prompt("¿Deseas realizar otra operación? (Sí/No)").toLowerCase();
        if (continuar !== "si" && continuar !== "sí") {
            break; // Salir del bucle si no se desea continuar
        }
    }
}

calculadora();
