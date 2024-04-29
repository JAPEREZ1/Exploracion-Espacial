interface Coordenadas {
    x: number;
    y: number;
}

enum Direccion {
    Norte = 'norte',
    Sur = 'sur',
    Este = 'este',
    Oeste = 'oeste'
}

class NaveEspacial {
    constructor(
        public salud: number,
        public capacidadCarga: number,
        public velocidad: number,
        public ubicacion: Coordenadas
    ) {}

    mover(direccion: Direccion) {
    }

    recolectarRecursos<T>(planeta: Planeta): T | null {
        return null; 
    }
}


class Planeta {
    constructor(
        public peligro: boolean,
        public coordenadas: Coordenadas
    ) {}
}


class Evento {
    constructor(public nombre: string, public impactoSalud: number) {}
}


function generarEventoAleatorio(): Evento {
    return new Evento('Evento Aleatorio', 0);
}

namespace Navegacion {
    export function explorar(nave: NaveEspacial, direccion: Direccion) {
        nave.mover(direccion);
    }
}

namespace GestionEventos {
    export function manejarEvento(nave: NaveEspacial, evento: Evento) {
        nave.salud += evento.impactoSalud;
    }
}

namespace InterfazUsuario {
    export function capturarEntrada(mensaje: string): string {
        return '';
    }
}

function simularViaje(nave: NaveEspacial, destino: Planeta) {
}
function obtenerRecursoDelPlaneta(planeta: Planeta): any {
    return null; 
}
