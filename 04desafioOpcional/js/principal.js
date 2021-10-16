// definicion de variables

let profundidadNoValida = Boolean(true);
let tiempoNoValido = Boolean(true);

// let profundidadIngresada

// ingreso de datos por usuario

while (profundidadNoValida) {
    profundidadIngresada = parseFloat(prompt("ingrese la profundidad del buceo que desea realizar"));
    validaProf = validarProfundidad(profundidadIngresada);
    if (validaProf) {
        profundidad = profundidadIngresada;
        profundiadDeTabla = estandarProfundidad(profundidadIngresada);
        profTiempo = profundiadDeTabla;
        profundidadNoValida = false;
    }
}
while (tiempoNoValido) {
    tiempoIngresado = parseInt(prompt("por favor ingrese el tiempo del Buceo a " + profundidad + " mts que desea Realizar"));
    tiempo = tiempoIngresado;
    tiempoTabla = estandarTiempo(profTiempo, tiempoIngresado);
    tiempoValido = validaTiempo(tiempoTabla);
    if (tiempoValido) {
        tiempoNoValido = false;
    }

}
grupoPres = estandarGrupoPres(profundiadDeTabla, tiempoTabla)
alert("Usted quiere realizar un buceo a " + profundidad + " mts durante " + tiempo + " minutos. \nPara las tablas es un buceo de " + profundiadDeTabla + " mts durante " + tiempoTabla + " minutos. \nEL grupo de presion resultante es : " + grupoPres);
