
function validarProfundidad(profValidar) {

    if (profValidar > 39) {
        alert("la profundiad ingresada excede los limites del buceo deportivo");
        return false;
    } else if (profValidar <= 0) {
        alert("la profundiad no puede ser menor o igual a  0");
        return false;
    } else {
        return true
    }
}

function validaTiempo(tiempoAValidar) {
    if (tiempoAValidar == 221122) {
        alert("El tiempo ingresado para ese buceo excede los limites de tabla");
        return false;
    } else if (tiempoAValidar <= 0) {
        alert("El tiempo ingresado para ese buceo no puede ser menor o igual a 0");
        return false;
    } else {
        return true;
    }
}

function estandarProfundidad(profundidadEvaluar) {

    if (profundidadEvaluar > 36) {
        profundidadTabla = 39;
        return profundidadTabla;
    } else if (profundidadEvaluar > 33) {
        profundidadTabla = 36;
        return profundidadTabla;
    } else if (profundidadEvaluar > 30) {
        profundidadTabla = 33;
        return profundidadTabla;
    } else if (profundidadEvaluar > 27) {
        profundidadTabla = 30;
        return profundidadTabla;
    } else if (profundidadEvaluar > 24) {
        profundidadTabla = 27;
        return profundidadTabla;
    } else if (profundidadEvaluar > 21) {
        profundidadTabla = 24;
        return profundidadTabla;
    } else if (profundidadEvaluar > 18) {
        profundidadTabla = 21;
        return profundidadTabla;
    } else if (profundidadEvaluar > 15) {
        profundidadTabla = 18;
        return profundidadTabla;
    } else if (profundidadEvaluar > 12) {
        profundidadTabla = 15;
        return profundidadTabla;
    } else if (profundidadEvaluar > 10.5) {
        profundidadTabla = 12;
        return profundidadTabla;
    } else if (profundidadEvaluar > 9) {
        profundidadTabla = 10.5;
        return profundidadTabla;
    } else if (profundidadEvaluar > 7.5) {
        profundidadTabla = 9;
        return profundidadTabla;
    } else if (profundidadEvaluar > 6) {
        profundidadTabla = 7.5;
        return profundidadTabla;
    } else if (profundidadEvaluar > 4.5) {
        profundidadTabla = 6;
        return profundidadTabla;
    } else if (profundidadEvaluar > 3) {
        profundidadTabla = 4.5;
        return profundidadTabla;
    } else {
        profundidadTabla = 3;
        return profundidadTabla;
    }
}


/*------------------------*/

function estandarTiempo(profundidadEvaluar, tiempoEvaluar) {
    switch (profundidadEvaluar) {
        case 3:
            if (tiempoEvaluar >= 246) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 158) {
                tiempoDeTabla = 245;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 101) {
                tiempoDeTabla = 158;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 57) {
                tiempoDeTabla = 101;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 57;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 4.5:
            if (tiempoEvaluar >= 218) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 163) {
                tiempoDeTabla = 217;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 121) {
                tiempoDeTabla = 163;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 88) {
                tiempoDeTabla = 121;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 60) {
                tiempoDeTabla = 88;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 30) {
                tiempoDeTabla = 60;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 30;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 6:
            if (tiempoEvaluar >= 206) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 165) {
                tiempoDeTabla = 205;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 133) {
                tiempoDeTabla = 165;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 106) {
                tiempoDeTabla = 133;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 82) {
                tiempoDeTabla = 106;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 61) {
                tiempoDeTabla = 82;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 43) {
                tiempoDeTabla = 61;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 26) {
                tiempoDeTabla = 43;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 26;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 7.5:
            if (tiempoEvaluar >= 167) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 140) {
                tiempoDeTabla = 166;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 117) {
                tiempoDeTabla = 140;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 97) {
                tiempoDeTabla = 117;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 78) {
                tiempoDeTabla = 97;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 62) {
                tiempoDeTabla = 78;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 47) {
                tiempoDeTabla = 62;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 33) {
                tiempoDeTabla = 47;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 20) {
                tiempoDeTabla = 33;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 20;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 9:
            if (tiempoEvaluar >= 146) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 125) {
                tiempoDeTabla = 145;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 107) {
                tiempoDeTabla = 125;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 91) {
                tiempoDeTabla = 107;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 76) {
                tiempoDeTabla = 91;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 62) {
                tiempoDeTabla = 76;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 50) {
                tiempoDeTabla = 62;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 38) {
                tiempoDeTabla = 50;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 27) {
                tiempoDeTabla = 38;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 17) {
                tiempoDeTabla = 27;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 17;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 10.5:
            if (tiempoEvaluar >= 132) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 115) {
                tiempoDeTabla = 131;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 100) {
                tiempoDeTabla = 115;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 87) {
                tiempoDeTabla = 100;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 74) {
                tiempoDeTabla = 87;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 63) {
                tiempoDeTabla = 74;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 52) {
                tiempoDeTabla = 63;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 42) {
                tiempoDeTabla = 52;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 32) {
                tiempoDeTabla = 42;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 23) {
                tiempoDeTabla = 32;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 14) {
                tiempoDeTabla = 23;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 14;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 12:
            if (tiempoEvaluar >= 109) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 95) {
                tiempoDeTabla = 108;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 84) {
                tiempoDeTabla = 95;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 73) {
                tiempoDeTabla = 84;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 63) {
                tiempoDeTabla = 73;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 53) {
                tiempoDeTabla = 63;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 44) {
                tiempoDeTabla = 53;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 36) {
                tiempoDeTabla = 44;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 27) {
                tiempoDeTabla = 36;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 20) {
                tiempoDeTabla = 27;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 12) {
                tiempoDeTabla = 20;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 12;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
            }
            break;
        case 15:
            if (tiempoEvaluar >= 64) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 56) {
                tiempoDeTabla = 63;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 48) {
                tiempoDeTabla = 56;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 41) {
                tiempoDeTabla = 48;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 34) {
                tiempoDeTabla = 41;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 28) {
                tiempoDeTabla = 34;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 21) {
                tiempoDeTabla = 28;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 15) {
                tiempoDeTabla = 21;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 9) {
                tiempoDeTabla = 15;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 9;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
            }
            break;
        case 18:
            if (tiempoEvaluar >= 46) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 39) {
                tiempoDeTabla = 45;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 33) {
                tiempoDeTabla = 39;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 28) {
                tiempoDeTabla = 33;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 22) {
                tiempoDeTabla = 28;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 17) {
                tiempoDeTabla = 22;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 12) {
                tiempoDeTabla = 17;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 7) {
                tiempoDeTabla = 12;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 7;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 21:
            if (tiempoEvaluar >= 38) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 32) {
                tiempoDeTabla = 37;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 28) {
                tiempoDeTabla = 32;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 23) {
                tiempoDeTabla = 28;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 19) {
                tiempoDeTabla = 23;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 14) {
                tiempoDeTabla = 19;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 10) {
                tiempoDeTabla = 14;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 6) {
                tiempoDeTabla = 10;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 6;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
            }
            break;
        case 24:
            if (tiempoEvaluar >= 29) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 24) {
                tiempoDeTabla = 28;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 20) {
                tiempoDeTabla = 24;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 16) {
                tiempoDeTabla = 20;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 12) {
                tiempoDeTabla = 16;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 9) {
                tiempoDeTabla = 12;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 5) {
                tiempoDeTabla = 9;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 5;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 27:
            if (tiempoEvaluar >= 25) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 21) {
                tiempoDeTabla = 24;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 17) {
                tiempoDeTabla = 21;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 14) {
                tiempoDeTabla = 17;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 11) {
                tiempoDeTabla = 14;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 7) {
                tiempoDeTabla = 11;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 4) {
                tiempoDeTabla = 7;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 4;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 30:
            if (tiempoEvaluar >= 19) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 15) {
                tiempoDeTabla = 18;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 12) {
                tiempoDeTabla = 15;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 9) {
                tiempoDeTabla = 12;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 6) {
                tiempoDeTabla = 9;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 4) {
                tiempoDeTabla = 6;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 4;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 33:
            if (tiempoEvaluar >= 17) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 14) {
                tiempoDeTabla = 16;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 11) {
                tiempoDeTabla = 14;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 8) {
                tiempoDeTabla = 11;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 6) {
                tiempoDeTabla = 8;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 3) {
                tiempoDeTabla = 6;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 3;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 36:
            if (tiempoEvaluar >= 11) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 7) {
                tiempoDeTabla = 10;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 5) {
                tiempoDeTabla = 7;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 3) {
                tiempoDeTabla = 5;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 3;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
        case 39:
            if (tiempoEvaluar >= 7) {
                tiempoDeTabla = 221122;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 4) {
                tiempoDeTabla = 6;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 2) {
                tiempoDeTabla = 4;
                return tiempoDeTabla;
            } else if (tiempoEvaluar > 0) {
                tiempoDeTabla = 2;
                return tiempoDeTabla;
            } else {
                tiempoDeTabla = 0;
                return tiempoDeTabla;
            }
            break;
    }
}



/*--------*/

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