// definicion de variables

let profundidadNoValida = Boolean(true);
let tiempoNoValido = Boolean(true);
const buceo = new Buceo(0, 0, 0, 0, "A");

// ingreso de datos por usuario

while (profundidadNoValida) {
    buceo.profReal = parseFloat(prompt("ingrese la profundidad del buceo que desea realizar"));
    validarProfundidad(buceo.profReal);
    if (buceo.profunOk) {
        buceo.profTabla = estandarProfundidad(buceo.profReal);
        profundidadNoValida = false;
    }
}

while (tiempoNoValido) {
    buceo.tiempoReal = parseInt(prompt("por favor ingrese el tiempo del Buceo a " + buceo.profReal + " mts que desea Realizar"));
    buceo.tiempoTabla = estandarTiempo(buceo.profTabla, buceo.tiempoReal);
    validaTiempo(buceo.tiempoTabla);
    if (buceo.tiempoOk) {
        tiempoNoValido = false;
    }

}

buceo.grupoRep = estandarGrupoPres(buceo.profTabla, buceo.tiempoTabla)

alert("Usted quiere realizar un buceo a " + buceo.profReal + " mts durante " + buceo.tiempoReal + " minutos. \nPara las tablas es un buceo de " + buceo.profTabla + " mts durante " + buceo.tiempoTabla + " minutos. \nEL grupo de presion resultante es : " + buceo.grupoRep);