
interface Observador {
    notificar(equipo: Equipo): void
}

// recibirá notificaciones cuando un equipo llegue a un cierto tiempo de uso
export class DepartamentoMantenimiento implements Observador {
    private nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }

    // recibe notificación
    notificar(equipo: Equipo): void {
        console.log(`El departamento ${this.nombre} ha sido notificado: El equipo ${equipo.getNombre()} necesita mantenimiento. Tiempo de uso: ${equipo.getTiempoUso()} horas.`);
    }
}

// permite agregar observadores (departamentos de mantenimiento) 
// y los notifica cuando el equipo alcanza el umbral de uso
export class Equipo {
    private observadores: Observador[] = []
    private nombre: string
    private tipo: string
    private estado: string
    private tiempoUso: number
    private umbralMant: number

    constructor(nombre: string, tipo: string, estado: string, tiempoUso: number, umbralMant: number) {
        this.nombre = nombre
        this.tipo = tipo
        this.estado = estado
        this.tiempoUso = tiempoUso
        this.umbralMant = umbralMant
    }

    agregarObs(observador: Observador): void {
        this.observadores.push(observador)
    }

    actualizartiempoUso(horas: number) {
        this.tiempoUso += horas
        console.log(`El equipo ${this.nombre} ha sido usado por ${horas} horas. Tiempo total: ${this.tiempoUso} horas.`);
        if (this.tiempoUso >= this.umbralMant) {
            this.notificarObservadores()
        }
    }

    private notificarObservadores(): void {
        this.observadores.forEach(observador => observador.notificar(this));
    }

    getNombre(): string {
        return this.nombre;
    }

    getTiempoUso(): number {
        return this.tiempoUso;
    }
};