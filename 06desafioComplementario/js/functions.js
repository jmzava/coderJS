function ingresoArray(tipoDeArray) {

    switch (tipoArray) {
        case 1:
            ingresoNoValido = false;
            aDividir = prompt("ingrese una secuencia de palabras separadas por un espacio");
            cicloPedido = aDividir.split(" ");
            arrTipo = 1;
            return ingresoNoValido

        case 2:
            ingresoNoValido = false;
            aNumeros = parseInt(prompt("cuantos valores desea ingresar ?"));
            for (i = 0; i < aNumeros; i++) {
                cicloPedido.push(parseInt(prompt("ingrese el " + (i + 1) + " Valor")));

            }
            arrTipo = 2;
            return ingresoNoValido

        default:
            return ingresoNoValido

    }
}

function tipoOrdenArray(tipoOrdenArr) {

    switch (tipoOrdenArr) {
        case 1:
            tipoOrden = false;
            if (arrTipo == 1) {
                cicloPedido.sort();
            } else {
                cicloPedido.sort((function (a, b) {
                    return a - b
                }))
            }
            return tipoOrden
        case 2:
            tipoOrden = false;
            if (arrTipo == 1) {
                cicloPedido.reverse();
            } else {
                cicloPedido.sort((function (a, b) {
                    return b - a
                }))
            }
            return tipoOrden
        default:
            return tipoOrden

    }
}

function mostrarArray(){
    cicloArray = cicloPedido.length;
    for (i = 0; i < cicloArray; i++) {
        console.log("Posicion " + (i + 1) + " valor " + cicloPedido[i]);
    
    }
}