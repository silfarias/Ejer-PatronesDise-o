interface MonitorProps {
    marca: string;
    resolucion: string;
}

interface ImpresoraProps {
    marca: string;
    tipoImpresion: string;
}

interface ProyectorProps {
    marca: string;
    brillo: number;
}

type PerifericoProps = 
    | { tipo: "Monitor"; props: MonitorProps }
    | { tipo: "Impresora"; props: ImpresoraProps }
    | { tipo: "Proyector"; props: ProyectorProps };


abstract class PerifericoSalida {
    abstract detalles(): string;
}

class Monitor extends PerifericoSalida {
    constructor(private marca: string, private resolucion: string) {
        super();
    }
    detalles(): string {
        return `Monitor: Marca: ${this.marca}, Resolución: ${this.resolucion}`;
    }
}

class Impresora extends PerifericoSalida {
    constructor(private marca: string, private tipoImpresion: string) {
        super();
    }
    detalles(): string {
        return `Impresora: Marca: ${this.marca}, Tipo: ${this.tipoImpresion}`;
    }
}

class Proyector extends PerifericoSalida {
    constructor(private marca: string, private brillo: number) {
        super();
    }
    detalles(): string {
        return `Proyector: Marca: ${this.marca}, Brillo: ${this.brillo} lúmenes`;
    }
}

export class PerifericoSalidaFactory {
    crearPeriferico(props: PerifericoProps): PerifericoSalida {
        const { tipo, props: perifericoProps } = props;

        switch (tipo) {
            case "Monitor":
                return new Monitor(perifericoProps.marca, perifericoProps.resolucion);
            case "Impresora":
                return new Impresora(perifericoProps.marca, perifericoProps.tipoImpresion);
            case "Proyector":
                return new Proyector(perifericoProps.marca, perifericoProps.brillo);
            default:
                throw new Error("Tipo de periférico no reconocido.");
        }
    }
}