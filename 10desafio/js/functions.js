/* funciones de manejo del DOM */

/* validaciones al dejar los input*/
function inputProfundidadDejaFoco() {
    validarProfText = validarProfundidad(inputProfundidad.value);
    if (buceo.profunOk) {
        buceo.profReal = inputProfundidad.value;
        buceo.profTabla = estandarProfundidad(buceo.profReal);
        decoTiempo = traerDecoTime(buceo.profTabla);
        generoDecoGrupo(deco[decoTiempo]);
        habilitoTiempo();
        inputTiempoHTML.focus();
    } else {
        inputProfundidad.classList.add('invalidIngreso');
        errorIngresoProf.innerHTML = validarProfText;
        deshabilitoTiempo();
    }
}

function inputTiempoDejaFoco() {
    tiempoValidar = inputTiempo.value;
    tiempoValidado = estandarTiempo(tiempoValidar);
    if (buceo.tiempoOk) {
        buceo.tiempoReal = tiempoValidar;
        buceo.tiempoTabla = tiempoValidado;
        decoTiempo = traerDecoTime(buceo.profTabla);
        generoDecoGrupo(deco[decoTiempo]);
        habilitoBotonDive();
    } else {
        inputTiempo.classList.add('invalidIngreso');
        errorIngresoTime.innerHTML = tiempoValidado;
        deshabilitoBotonDive();
    }
}

/* limpia los errores cuando hace foco en los input*/
function inputProfundidadFoco() {
    if (inputProfundidad.classList.contains('invalidIngreso')) {
        inputProfundidad.classList.remove('invalidIngreso');
        errorIngresoProf.innerHTML = "";
    }
}

function inputTiempoFoco() {
    document.getElementById("labelTiempo").innerText = "Tiempo [1-" + decoTiempo + "]Min";
    if (inputTiempo.classList.contains('invalidIngreso')) {
        inputTiempo.classList.remove('invalidIngreso');
        errorIngresoTime.innerHTML = "";
    }
}

/*Habilitaciones + hacer visibles*/
function habilitoTiempo() {
    inputTiempoHTML.disabled = false;
}

function habilitoBotonDive() {
    buttonDiveLog.hidden = false;
}

function apareceIntervalo() {
    inputIntervaloHTML.hidden = false
}

/*deshabilitaciones + hacer invisibles*/
function deshabilitoTiempo() {
    inputTiempoHTML.disabled = true;
}

function deshabilitoBotonDive() {
    buttonDiveLog.hidden = true;
}

function desapareceIntervalo() {
    inputIntervaloHTML.hidden = true
}

/* funciones de trabajo */
function buceoDiveLog() {
    if (buceo.tiempoOk == true && buceo.profunOk == true) {
        buceo.grupoRep = estandarGrupoPres(buceo.tiempoTabla);
        buceo.dIndex = buceoCont;
        cargoLS([buceoCont, buceo.profReal, buceo.tiempoReal, buceo.profTabla, buceo.tiempoTabla, buceo.grupoRep]);
        tablaFromLS();
        buceoCont = buceoCont + 1;
        botonLimpiar();
        buceo.timeOKno();
        buceo.profOKno();
    }
}

function botonLimpiar() {
    deshabilitoTiempo()
    deshabilitoBotonDive()
    inputProfundidadHTML.value = "";
    inputTiempoHTML.value = "";
}

function mezclaDeco(mezcla) {
    switch (mezcla) {
        case 1: {
            recorro = profAire.length
            for (i = 0; i < recorro; i++) {
                profNoDeco.push(new BuceoMezcla(profAire[i], noDeco[i]))
            }
        }
    }

}

function generoDecoGrupo(decoArr) {
    for (i = 0; i < decoArr.length; i++) {
        noDecoGrupo[i] = new generoLetraTiempo(decoArr[i], grupo[i]);

    }
}

function traerDecoTime(traerDeco) {
    recorroDeco = profNoDeco.length;
    for (i = 0; i < recorroDeco; i++) {
        if (traerDeco == profNoDeco[i].tablaProfundidad) {
            return profNoDeco[i].tablaNoDeco;
        }
    }
}

/*Funciones de Validaciones  */

function validarProfundidad(profValidar) {

    if (profValidar > 39) {
        buceo.profOKno()
        profValidaText = "Profundiad excede los limites"
        return profValidaText
    } else if (profValidar <= 0) {
        buceo.profOKno()
        profValidaText = "Profundiad no puede ser menor a 1mt"
        return profValidaText
    } else {
        buceo.profOK()
        profValidaText = ""
        return profValidaText
    }
}

function estandarProfundidad(profundidadEvaluar) {

    for (let i = 0; i < profAire.length; i++) {
        if (profundidadEvaluar <= profAire[i]) {
            profundidadTabla = profAire[i];
            return profundidadTabla;
        }
    }
}

function estandarTiempo(tiempoEvaluar) {
    if (tiempoEvaluar <= 0) {
        textoTiempo = "El tiempo ingresado para ese buceo no puede ser menor o igual a 0";
        buceo.timeOKno()
        return textoTiempo
    } else if (tiempoEvaluar > noDecoGrupo[noDecoGrupo.length - 1].decoTimeProf) {
        textoTiempo = "El tiempo ingresado para ese buceo excede los limites de tabla";
        buceo.timeOKno()
        return textoTiempo
    } else {
        for (let i = 0; i < noDecoGrupo.length; i++) {
            if (tiempoEvaluar <= noDecoGrupo[i].decoTimeProf) {
                tiempoDeTabla = noDecoGrupo[i].decoTimeProf;
                buceo.timeOK()
                return tiempoDeTabla;
            }
        }
    }
}

function estandarGrupoPres(tiempoEvaluar) {
    let letraPresion = "";
    for (i = 0; i < noDecoGrupo.length; i++) {
        if (tiempoEvaluar == noDecoGrupo[i].decoTimeProf) {
            letraPresion = noDecoGrupo[i].decoTimeLetra;
            break
        }
    }
    return letraPresion

}

/*Funciones de Tabla */
function cargoTabla(tableId, indice, arrayBuceo) {
    const miTabla = document.getElementById(tableId);
    let fila = miTabla.insertRow(indice);
    for (i = 0; i <= arrayBuceo.length - 1; i++) {
        const celda = fila.insertCell(i);
        celda.innerHTML = arrayBuceo[i];
        celda.className = 'text-center';
    }
}

function vacioTabla(tableID) {
    const countFiles = document.getElementById(tableID).rows.length;
    if (countFiles > 1) {
        for (k = 1; k < countFiles; k++) {
            document.getElementById(tableID).deleteRow(1);
        }
    }
}

/* funciones con LocalStorage   */


function limpioLS() {
    localStorage.clear();
}

function tablaFromLS() {
    vacioTabla("tablaBuceos")
    let arrayParaTabla = cargoArrayfromLS("BUCEO");
    for (j = 1; j < arrayParaTabla.length; j++) {
        cargoTabla("tablaBuceos", j, arrayParaTabla[j]);
    }
}
function cargoArrayfromLS(NombreItem) {
    largoLS = localStorage.length;
    let arrayFromLS = [];
    for (l = 1; l <= largoLS; l++) {
        localIndex = NombreItem + l;
        arrayFromLS[l] = JSON.parse(localStorage.getItem(localIndex));
    }
    return arrayFromLS
}

function cargoLS(buceosArray) {
    buceoVarLS = "BUCEO" + buceo.dIndex
    localStorage.setItem(buceoVarLS, JSON.stringify(buceosArray));
}



/* funciones en desarrollo para eliminado de localstorage */
/*
function cargoLSfromArray(buceosArray) {
    buceoVarLS = "BUCEO" + buceo.dIndex
    localStorage.setItem(buceoVarLS, JSON.stringify(buceosArray));
}

function eliminoBuceo(buceoAEliminar) {
    largo = localStorage.length;
    let localALimpiar = cargoArrayfromLS("BUCEO");
    localALimpiar.splice(buceoAEliminar, 1);
    cargoLSfromArray(localALimpiar)
}
*/