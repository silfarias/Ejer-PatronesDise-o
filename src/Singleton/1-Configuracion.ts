// Ejercicio 1: Gestionar configuración global del sistema
export class Configuracion {

    private idioma: string;
    private rutaBaseDatos: string;
    private nivelRegistro: string;


    private static instance: Configuracion;

    private constructor() {
        this.idioma = 'es';
        this.rutaBaseDatos = 'data/db';
        this.nivelRegistro = 'debug';
    }

    public static getInstance(): Configuracion {
        if (!Configuracion.instance) {
            Configuracion.instance = new Configuracion();
        }
        return Configuracion.instance;
    }

    // obtener
    getIdioma(): string {
        return this.idioma;
    }
    getRutaBD(): string {
        return this.rutaBaseDatos;
    }
    getNivelRegistro(): string {
        return this.nivelRegistro;
    }

    // actualizar
    updateIdioma(idioma: string): void {
        this.idioma = idioma;
    }
    updateRutaBD(ruta: string): void {
        this.rutaBaseDatos = ruta;
    }
    updateNivelRegistro(nivel: string): void {
        this.nivelRegistro = nivel;
    }
}