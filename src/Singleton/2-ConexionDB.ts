// Ejercicio 2: Control de Conexiones a la Base de Datos
export class ConexionDB {
    private host: string;
    private port: number;
    private user: string;
    private connected: boolean = false;

    private static instance: ConexionDB;

    private constructor() {
        this.host = 'localhost';
        this.port = 3306;
        this.user = 'root';
    }

    public static getInstance(): ConexionDB {
        if (!this.instance) {
            this.instance = new ConexionDB();
        }
        return this.instance;
    }

    public conectionDB(): void {
        if (this.connected) {
            console.log('Ya existe una conexión activa a la base de datos.');
        } else {
            this.connected = true;
            console.log(`Se ha conectado a la base de datos en ${this.host} en el puerto ${this.port} como usuario ${this.user}.`);
        }
    }

    public disconnectDB(): void {
        if (this.connected) {
            this.connected = false;
            console.log('Conexión a la base de datos cerrada.');
        } else {
            console.log('No hay ninguna conexión activa que cerrar.');
        }
    }
}