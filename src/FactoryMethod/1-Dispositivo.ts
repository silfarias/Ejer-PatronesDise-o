interface IDispositivoEntrada {
    detalles(): string;
}

class Teclado implements IDispositivoEntrada {
    private marca: string;
    private tipoConexion: string;
    private cantidadTeclas: number;

    constructor(marca: string, tipoConexion: string, cantidadTeclas: number) {
        this.marca = marca;
        this.tipoConexion = tipoConexion;
        this.cantidadTeclas = cantidadTeclas;
    }

    detalles(): string {
        return `Teclado: Marca: ${this.marca}, Tipo de conexión: ${this.tipoConexion}, Cantidad de teclas: ${this.cantidadTeclas}`;
    }
}

class Raton implements IDispositivoEntrada {
    private marca: string;
    private tipoConexion: string;

    constructor(marca: string, tipoConexion: string) {
        this.marca = marca;
        this.tipoConexion = tipoConexion;
    }

    detalles(): string {
        return `Ratón: Marca: ${this.marca}, Tipo de conexión: ${this.tipoConexion}`;
    }
}

class Scanner implements IDispositivoEntrada {
    private marca: string;
    private resolucion: string;

    constructor(marca: string, resolucion: string) {
        this.marca = marca;
        this.resolucion = resolucion;
    }

    detalles(): string {
        return `Scanner: Marca: ${this.marca}, Resolución: ${this.resolucion}`;
    }
}

// Tipo de propiedades específicas para cada dispositivo
type TecladoProps = {
    marca: string;
    tipoConexion: string;
    cantidadTeclas: number;
};

type RatonProps = {
    marca: string;
    tipoConexion: string;
};

type ScannerProps = {
    marca: string;
    resolucion: string;
};

// definimos un tipo de unión para los tipos de dispositivos
type DispositivoProps = 
    | { tipo: "Teclado"; props: TecladoProps }
    | { tipo: "Ratón"; props: RatonProps }
    | { tipo: "Scanner"; props: ScannerProps };


// factory para crear dispositivos de entrada
export class DispositivoEntradaFactory {
    public crearDispositivo(dispositivo: DispositivoProps): IDispositivoEntrada {
        const { tipo, props } = dispositivo;

        switch (tipo) {
            case "Teclado":
                return new Teclado(props.marca, props.tipoConexion, props.cantidadTeclas);
            case "Ratón":
                return new Raton(props.marca, props.tipoConexion);
            case "Scanner":
                return new Scanner(props.marca, props.resolucion);
            default:
                throw new Error("Tipo de dispositivo no reconocido.");
        }
    }
};