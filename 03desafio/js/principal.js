// definicion de objetivos
// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

// definicion de variables

let sumaNumeros = 0;
let espacioFrase = " ";
let textoCiclo = " ";
// ingreso de datos por usuario

let numero1 = parseInt(prompt("ingrese un numero"));

//  operaciones

for (let i = 0; i <= numero1; i++) {
    sumaNumeros = sumaNumeros + i;

}
// Muestra de resultados

alert("la suma de todos los numeros desde 1 hasta " + numero1 + " es " + sumaNumeros);

// ---------------------------------------------------------- //
// ingreso de datos por usuario

let texto = prompt("Ingrese por favor una palabra para comenzar la frase");

frase = texto + espacioFrase;

// //  operaciones

while (textoCiclo != 'ESC') {
    textoCiclo = prompt("ingrese otra palabra para la frase o ESC para terminar");
    if(textoCiclo!= "ESC"){
        frase = frase + espacioFrase + textoCiclo;
        alert("La frase hasta el momento es: " + frase);
    }
    
}
// Muestra de resultados
alert("la frase final es: " + frase);

// ---------------------------------------------------------- //

// ingreso de datos por usuario

let numero2 = parseInt(prompt("ingrese un numero"));

// //  operaciones

for (let i = 1; i <= numero2; i++) {
    console.log("Hola");
}

// // Muestra de resultados