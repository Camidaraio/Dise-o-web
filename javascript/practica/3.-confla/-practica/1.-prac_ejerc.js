/* 
const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: dividion, 2: multiplicacion")

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar")
    let numero2 = prompt("segundo numero para sumar")
    resultado = sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion == 2){
    let numero1 = prompt("primer numero para restar")
    let numero2 = prompt("segundo numero para restar")
    resultado = restar(numero1, numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion == 3){
    let numero1 = prompt("primer numero para dividir")
    let numero2 = prompt("segundo numero para dividir")
    resultado = dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`)
}

else if  (operacion == 4){
    let numero1 = prompt("primer numero para multiplicar")
    let numero2 = prompt("segundo numero para multiplicar")
    resultado = multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`)
}

else {
    alert("Ese numero no existe")
}
 */



function calculadora (){
    alert("¿Que operacion deseas realizar?");
    let operacion = parseInt(prompt("1: suma, 2: resta, 3: dividion, 4: multiplicacion"))
    if (isNaN(operacion) || operacion < 1 || operacion > 4) {
        alert("Opción incorrecta");
        return;
    }
    else{
        let numero1 = parseInt(prompt("primer numero"))
        let numero2 = parseInt(prompt("segundo numero"))
        switch(operacion){
            case 1:
            resultado = numero1 + numero2;
            alert(`El resultado de la suma es: ${resultado}`);

            case 2:
                resultado = numero1 - numero2;
                alert(`El resultado de la resta es: ${resultado}`);

            case 3:
                if (numero2 === 0) {
                    alert("No se puede dividir por cero");
                    return;
                }
                resultado = numero1 / numero2;
                alert(`El resultado de la división es: ${resultado}`);
    
            case 4:
                resultado = numero1 * numero2;
                alert(`El resultado de la multiplicación es: ${resultado}`);
           
        }
    }

}

calculadora()



