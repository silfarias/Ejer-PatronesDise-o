interface IObs {
    actualizarVis(message: string): void
}

export class InterfazUsuario implements IObs {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    actualizarVis(mensaje: string): void {
        console.log(`Interfaz ${this.nombre} actualizada: ${mensaje}`);
    }
}

export class Inventario {
    private equipos: string[] = [];
    private observadores: IObs[] = [];

    agregarObservador(observador: IObs): void {
        this.observadores.push(observador);
        this.notificarObservadores("Ha ocurrido un cambio en la lista de equipos, se agregó un nuevo equipo");
    }

    private notificarObservadores(mensaje: string): void {
        this.observadores.forEach(observador => observador.actualizarVis(mensaje));
    }

    agregarEquipo(equipo: string): void {
        this.equipos.push(equipo);
        this.notificarObservadores(`Se agregó el equipo ${equipo} al inventario.`);
    }

    eliminarEquipo(equipo: string): void { 
        this.equipos = this.equipos.filter(e => e !== equipo);
        this.notificarObservadores(`Se elimino el equipo ${equipo}`);
    }

    modificarEquipo(equipoAntiguo: string, equipoNuevo: string): void {
        const indice = this.equipos.indexOf(equipoAntiguo);
        if (indice !== -1) {
            this.equipos[indice] = equipoNuevo;
            this.notificarObservadores(`Se modificó el equipo ${equipoAntiguo} a ${equipoNuevo}.`);
        } else {
            console.log(`El equipo ${equipoAntiguo} no está en el inventario.`);
        }
    }

    mostrarEquipos(): void {
        console.log("Inventario actual:", this.equipos);
    }
}