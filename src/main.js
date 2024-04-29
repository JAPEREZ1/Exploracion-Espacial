"use strict";
var Direccion;
(function (Direccion) {
    Direccion["Norte"] = "norte";
    Direccion["Sur"] = "sur";
    Direccion["Este"] = "este";
    Direccion["Oeste"] = "oeste";
})(Direccion || (Direccion = {}));
class NaveEspacial {
    constructor(salud, capacidadCarga, velocidad, ubicacion) {
        this.salud = salud;
        this.capacidadCarga = capacidadCarga;
        this.velocidad = velocidad;
        this.ubicacion = ubicacion;
    }
    mover(direccion) {
    }
    recolectarRecursos(planeta) {
        return null;
    }
}
class Planeta {
    constructor(peligro, coordenadas) {
        this.peligro = peligro;
        this.coordenadas = coordenadas;
    }
}
class Evento {
    constructor(nombre, impactoSalud) {
        this.nombre = nombre;
        this.impactoSalud = impactoSalud;
    }
}
function generarEventoAleatorio() {
    return new Evento('Evento Aleatorio', 0);
}
var Navegacion;
(function (Navegacion) {
    function explorar(nave, direccion) {
        nave.mover(direccion);
    }
    Navegacion.explorar = explorar;
})(Navegacion || (Navegacion = {}));
var GestionEventos;
(function (GestionEventos) {
    function manejarEvento(nave, evento) {
        nave.salud += evento.impactoSalud;
    }
    GestionEventos.manejarEvento = manejarEvento;
})(GestionEventos || (GestionEventos = {}));
var InterfazUsuario;
(function (InterfazUsuario) {
    function capturarEntrada(mensaje) {
        return '';
    }
    InterfazUsuario.capturarEntrada = capturarEntrada;
})(InterfazUsuario || (InterfazUsuario = {}));
function simularViaje(nave, destino) {
}
function obtenerRecursoDelPlaneta(planeta) {
    return null;
}
