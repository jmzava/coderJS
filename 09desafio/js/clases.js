/* Clases */

class Buceo {
    constructor(dIndex, pReal, pTabla, tReal, tTabla, gRep) {
        this.diveIndex = dIndex;
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
    timeOKno() {
        this.tiempoOk = false;
    }
    profOKno() {
        this.profunOk = false;
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
class BuceoLStorage {
    constructor(dIndex2, pReal2, pTabla2, tReal2, tTabla2, gRep2) {
        this.diveIndex = dIndex2;
        this.profReal = pReal2;
        this.profTabla = pTabla2;
        this.tiempoReal = tReal2;
        this.tiempoTabla = tTabla2;
        this.grupoRep = gRep2;
    }

}