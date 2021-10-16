// // definicion de variables

let ingresoNoValido = Boolean(true);
let tipoOrdenNoValido = Boolean(true);
cicloPedido = new Array();
let arrTipo=0;


// // ingreso de datos por usuario



while (ingresoNoValido) {
    tipoArray = parseInt(prompt("Ingrese si quiere ordenar (1) Palabras o (2) Numeros"));
    ingresoNoValido = ingresoArray(tipoArray)
}
while (tipoOrdenNoValido) {
    tipoOrden = parseInt(prompt("ingrese el tipo de orden para el Array. [1] para Orden Ascendente o [2] para orden descendente "))
    tipoOrdenNoValido = tipoOrdenArray(tipoOrden)
}

console.log("el array quedo ordenado de la siguiente manera ");

mostrarArray()
