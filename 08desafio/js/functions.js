class Buceo {
    constructor(pReal, pTabla, tReal, tTabla, gRep) {
        this.profReal = pReal;
        this.profTabla = pTabla;
        this.tiempoReal = tReal;
        this.tiempoTabla = tTabla;
        this.grupoRep = gRep;
        this.tiempoOk = false;
        this.profunOk = false;
    }
    timeOK() {
        this.tiempoOk = true;
    }
    profOK() {
        this.profunOk = true;

    }
}

class BuceoMezcla {
    constructor(tablaProf, noDeco) {
        this.tablaProfundidad = tablaProf;
        this.tablaNoDeco = noDeco;
    }
}

class generoLetraTiempo {
    constructor(decoTime, decoLetra) {
        this.decoTimeProf = decoTime;
        this.decoTimeLetra = decoLetra;
    }
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

function funNoDecoGrupo(valorDeco) {
    switch (valorDeco) {
        case 245: {
            generoDecoGrupo(deco245);
            return
        }
        case 217: {
            generoDecoGrupo(deco217);
            return
        }
        case 205: {
            generoDecoGrupo(deco205);
            return
        }
        case 166: {
            generoDecoGrupo(deco166);
            return
        }
        case 145: {
            generoDecoGrupo(deco145);
            return
        }
        case 131: {
            generoDecoGrupo(deco131);
            return
        }
        case 108: {
            generoDecoGrupo(deco108);
            return
        }
        case 63: {
            generoDecoGrupo(deco063);
            return
        }
        case 45: {
            generoDecoGrupo(deco045);
            return
        }
        case 37: {
            generoDecoGrupo(deco037);
            return
        }
        case 28: {
            generoDecoGrupo(deco028);
            return
        }
        case 24: {
            generoDecoGrupo(deco024);
            return
        }
        case 18: {
            generoDecoGrupo(deco018);
            return
        }
        case 16: {
            generoDecoGrupo(deco016);
            return
        }
        case 10: {
            generoDecoGrupo(deco010);
            return
        }
        case 6: {
            generoDecoGrupo(deco006);
            return
        }

    }

}

function validarProfundidad(profValidar) {

    if (profValidar > 39) {
        alert("la profundiad ingresada excede los limites del buceo deportivo");
        return
    } else if (profValidar <= 0) {
        alert("la profundiad no puede ser menor o igual a  0");
        return
    } else {
        buceo.profOK()
        return
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
        alert("El tiempo ingresado para ese buceo no puede ser menor o igual a 0");
        return
    } else if (tiempoEvaluar > noDecoGrupo[noDecoGrupo.length - 1].decoTimeProf) {
        alert("El tiempo ingresado para ese buceo excede los limites de tabla");
        return
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

function estandarGrupoPres(profundidadEvaluar, tiempoEvaluar) {
    switch (profundidadEvaluar) {
        case 3: {
            switch (tiempoEvaluar) {
                case 245:
                    letraPresion = "D";
                    break;
                case 158:
                    letraPresion = "C";
                    break;
                case 101:
                    letraPresion = "B";
                    break;
                case 57:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 4.5: {
            switch (tiempoEvaluar) {
                case 217:
                    letraPresion = "F";
                    break;
                case 163:
                    letraPresion = "E";
                    break;
                case 121:
                    letraPresion = "D";
                    break;
                case 88:
                    letraPresion = "C";
                    break;
                case 60:
                    letraPresion = "B";
                    break;
                case 30:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 6: {
            switch (tiempoEvaluar) {
                case 205:
                    letraPresion = "H";
                    break;
                case 165:
                    letraPresion = "G";
                    break;
                case 133:
                    letraPresion = "F";
                    break;
                case 106:
                    letraPresion = "E";
                    break;
                case 82:
                    letraPresion = "D";
                    break;
                case 61:
                    letraPresion = "C";
                    break;
                case 43:
                    letraPresion = "B";
                    break;
                case 26:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 7.5: {
            switch (tiempoEvaluar) {
                case 166:
                    letraPresion = "I";
                    break;
                case 140:
                    letraPresion = "H";
                    break;
                case 117:
                    letraPresion = "G";
                    break;
                case 97:
                    letraPresion = "F";
                    break;
                case 78:
                    letraPresion = "E";
                    break;
                case 62:
                    letraPresion = "D";
                    break;
                case 47:
                    letraPresion = "C";
                    break;
                case 33:
                    letraPresion = "B";
                    break;
                case 20:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 9: {
            switch (tiempoEvaluar) {
                case 145:
                    letraPresion = "J";
                    break;
                case 125:
                    letraPresion = "I";
                    break;
                case 107:
                    letraPresion = "H";
                    break;
                case 91:
                    letraPresion = "G";
                    break;
                case 76:
                    letraPresion = "F";
                    break;
                case 62:
                    letraPresion = "E";
                    break;
                case 50:
                    letraPresion = "D";
                    break;
                case 38:
                    letraPresion = "C";
                    break;
                case 27:
                    letraPresion = "B";
                    break;
                case 17:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 10.5: {
            switch (tiempoEvaluar) {
                case 131:
                    letraPresion = "K";
                    break;
                case 115:
                    letraPresion = "J";
                    break;
                case 100:
                    letraPresion = "I";
                    break;
                case 87:
                    letraPresion = "H";
                    break;
                case 74:
                    letraPresion = "G";
                    break;
                case 63:
                    letraPresion = "F";
                    break;
                case 52:
                    letraPresion = "E";
                    break;
                case 42:
                    letraPresion = "D";
                    break;
                case 32:
                    letraPresion = "C";
                    break;
                case 23:
                    letraPresion = "B";
                    break;
                case 14:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 12: {
            switch (tiempoEvaluar) {
                case 108:
                    letraPresion = "K";
                    break;
                case 95:
                    letraPresion = "J";
                    break;
                case 84:
                    letraPresion = "I";
                    break;
                case 73:
                    letraPresion = "H";
                    break;
                case 63:
                    letraPresion = "G";
                    break;
                case 53:
                    letraPresion = "F";
                    break;
                case 44:
                    letraPresion = "E";
                    break;
                case 36:
                    letraPresion = "D";
                    break;
                case 27:
                    letraPresion = "C";
                    break;
                case 20:
                    letraPresion = "B";
                    break;
                case 12:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 15: {
            switch (tiempoEvaluar) {
                case 63:
                    letraPresion = "I";
                    break;
                case 56:
                    letraPresion = "H";
                    break;
                case 48:
                    letraPresion = "G";
                    break;
                case 41:
                    letraPresion = "F";
                    break;
                case 34:
                    letraPresion = "E";
                    break;
                case 28:
                    letraPresion = "D";
                    break;
                case 21:
                    letraPresion = "C";
                    break;
                case 15:
                    letraPresion = "B";
                    break;
                case 9:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 18: {
            switch (tiempoEvaluar) {
                case 45:
                    letraPresion = "H";
                    break;
                case 39:
                    letraPresion = "G";
                    break;
                case 33:
                    letraPresion = "F";
                    break;
                case 28:
                    letraPresion = "E";
                    break;
                case 22:
                    letraPresion = "D";
                    break;
                case 17:
                    letraPresion = "C";
                    break;
                case 12:
                    letraPresion = "B";
                    break;
                case 7:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 21: {
            switch (tiempoEvaluar) {
                case 37:
                    letraPresion = "H";
                    break;
                case 32:
                    letraPresion = "G";
                    break;
                case 28:
                    letraPresion = "F";
                    break;
                case 23:
                    letraPresion = "E";
                    break;
                case 19:
                    letraPresion = "D";
                    break;
                case 14:
                    letraPresion = "C";
                    break;
                case 10:
                    letraPresion = "B";
                    break;
                case 6:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 24: {
            switch (tiempoEvaluar) {
                case 28:
                    letraPresion = "G";
                    break;
                case 24:
                    letraPresion = "F";
                    break;
                case 20:
                    letraPresion = "E";
                    break;
                case 16:
                    letraPresion = "D";
                    break;
                case 12:
                    letraPresion = "C";
                    break;
                case 9:
                    letraPresion = "B";
                    break;
                case 5:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 27: {
            switch (tiempoEvaluar) {
                case 24:
                    letraPresion = "G";
                    break;
                case 21:
                    letraPresion = "F";
                    break;
                case 17:
                    letraPresion = "E";
                    break;
                case 14:
                    letraPresion = "D";
                    break;
                case 11:
                    letraPresion = "C";
                    break;
                case 7:
                    letraPresion = "B";
                    break;
                case 4:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 30: {
            switch (tiempoEvaluar) {
                case 18:
                    letraPresion = "F";
                    break;
                case 15:
                    letraPresion = "E";
                    break;
                case 12:
                    letraPresion = "D";
                    break;
                case 9:
                    letraPresion = "C";
                    break;
                case 6:
                    letraPresion = "B";
                    break;
                case 4:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 33: {
            switch (tiempoEvaluar) {
                case 16:
                    letraPresion = "F";
                    break;
                case 14:
                    letraPresion = "E";
                    break;
                case 11:
                    letraPresion = "D";
                    break;
                case 8:
                    letraPresion = "C";
                    break;
                case 6:
                    letraPresion = "B";
                    break;
                case 3:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 36: {
            switch (tiempoEvaluar) {
                case 10:
                    letraPresion = "D";
                    break;
                case 7:
                    letraPresion = "C";
                    break;
                case 5:
                    letraPresion = "B";
                    break;
                case 3:
                    letraPresion = "A";
                    break;
            }
            break;
        }
        case 39: {
            switch (tiempoEvaluar) {
                case 6:
                    letraPresion = "C";
                    break;
                case 4:
                    letraPresion = "B";
                    break;
                case 2:
                    letraPresion = "A";
                    break;
            }
            break;
        }
    }
    return letraPresion;
}

// function creaTabla() {
//     let contenedor = document.createElement("table");
//      contenedor.innerHTML = `<table class="table-fill id="tablaBuceos">
//                                     <thead>
//                                         <tr>
//                                             <th class="text-center">Buceo</th>
//                                             <th class="text-center">Prof. Real</th>
//                                             <th class="text-center">Tiempo Real</th>
//                                             <th class="text-center">Prof. Tabla</th>
//                                             <th class="text-center">Tiempo Tabla</th>
//                                             <th class="text-center">Grupo Presion</th>
//                                         </tr>
//                                     </thead>
//                             </table>`
//     document.body.appendChild(contenedor);
// }

function primerBuceoTabla(tableId,buceo,indice,realProf,realTime,tablProf,tablTime,presGrp){
     let miTabla = document.getElementById(tableId);
     let fila = miTabla.insertRow(indice);
     let celda0 = fila.insertCell(0);
     let celda1 = fila.insertCell(1);
     let celda2 = fila.insertCell(2);
     let celda3 = fila.insertCell(3);
     let celda4 = fila.insertCell(4);
     let celda5 = fila.insertCell(5);
     celda0.innerHTML = buceo;
     celda1.innerHTML = realProf;
     celda2.innerHTML = realTime;
     celda3.innerHTML = tablProf;
     celda4.innerHTML = tablTime;
     celda5.innerHTML = presGrp;
     celda0.className = 'text-center'
     celda1.className = 'text-center'
     celda2.className = 'text-center'
     celda3.className = 'text-center'
     celda4.className = 'text-center'
     celda5.className = 'text-center'

}