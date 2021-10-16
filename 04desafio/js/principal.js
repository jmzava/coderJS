// definicion de variables

let profundidadValida = Boolean(true);
// let profundidadIngresada

// ingreso de datos por usuario

while(profundidadValida) {
    let profundidadIngresada = parseFloat(prompt("ingrese una profundiad de buceo a validar"));
    if (profundidadIngresada > 39) {
        profundidadValida = true;
        alert("la profundiad ingresada excede los limites del buceo deportivo");
    } else {
        profundiadDeTabla = estandarProfundidad(profundidadIngresada);
        profundidadValida = false;
    }
}


alert("la profundiad de Tablas es : " + profundiadDeTabla);


// // funciones

function estandarProfundidad(profundidadEvaluar) {

    if (profundidadEvaluar > 36) {
        profundidadTabla = 39;
    } else if (profundidadEvaluar > 33) {
        profundidadTabla = 36;
    } else if (profundidadEvaluar > 30) {
        profundidadTabla = 33;
    } else if (profundidadEvaluar > 27) {
        profundidadTabla = 30;
    } else if (profundidadEvaluar > 24) {
        profundidadTabla = 27;
    } else if (profundidadEvaluar > 21) {
        profundidadTabla = 24;
    } else if (profundidadEvaluar > 18) {
        profundidadTabla = 21;
    } else if (profundidadEvaluar > 15) {
        profundidadTabla = 18;
    } else if (profundidadEvaluar > 12) {
        profundidadTabla = 15;
    } else if (profundidadEvaluar > 10.5) {
        profundidadTabla = 12;
    } else if (profundidadEvaluar > 9) {
        profundidadTabla = 10.5;
    } else if (profundidadEvaluar > 7.5) {
        profundidadTabla = 9;
    } else if (profundidadEvaluar > 6) {
        profundidadTabla = 7.5;
    } else if (profundidadEvaluar > 4.5) {
        profundidadTabla = 6;
    } else if (profundidadEvaluar > 3) {
        profundidadTabla = 4.5;
    } else {
        profundidadTabla = 3;
    }

    return profundidadTabla;
}