// definicion de objetivos
// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert

//definicion de variables

// ingreso de datos por usuario
let numero1 = parseInt(prompt("ingrese un numero"));

//  operaciones
if (numero1 == 1000) {
    resultadoNumero1 = "El numero ingresado es 1000";
} else if (numero1 < 1000) {
    resultadoNumero1 = "El numero ingresado es menor que 1000";
} else {
    resultadoNumero1 = "El numero ingresado es mayor que 1000";
}

// Muestra de resultados
alert(resultadoNumero1);

// ---------------------------------------------------------- //
// ingreso de datos por usuario
let texto = prompt("Ingrese por favor una palabra");

//  operaciones
if (texto == "Hola") {
    resultadoTexto = "La palabra ingresada fue " + texto + " y es la palabra correcta";
} else {
    resultadoTexto = "La palabra ingresada fue " + texto + " y NO es la palabra correcta";
}

// Muestra de resultados
console.log(resultadoTexto);

// ---------------------------------------------------------- //

// ingreso de datos por usuario
let numero2 = parseInt(prompt("ingrese un numero"));

//  operaciones
if (numero2 >= 10 && numero2 <= 50) {
    resultadoNumero2 = "El numero ingresado se encuentra entre 10 y 50";
} else if (numero2 < 10) {
    resultadoNumero2 = "El numero ingresado es menor que 10";
} else {
    resultadoNumero2 = "El numero ingresado es mayor que 50";
}

// Muestra de resultados
alert(resultadoNumero2);