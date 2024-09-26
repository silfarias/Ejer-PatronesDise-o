import { DispositivoEntradaFactory } from "./FactoryMethod/1-Dispositivo";
import { PerifericoSalidaFactory } from "./FactoryMethod/2-Perifericos";
import { DepartamentoMantenimiento, Equipo } from "./Observer/1-Notificacion";
import { Configuracion } from "./Singleton/1-Configuracion";
import { ConexionDB } from "./Singleton/2-ConexionDB";


// Patrón Singleton

// Ejercicio 1
const config = Configuracion.getInstance();
config.updateIdioma('español');
const obtenerConfig = 'Idioma: ' + config.getIdioma() + ', RutaBD: ' + config.getRutaBD() + ', Registro: ' + config.getNivelRegistro();
// console.log(obtenerConfig);


// // Ejercicio 2
const conexionDataBase = ConexionDB.getInstance();
// conexionDataBase.conectionDB();



// Patrón Factory Method

// Ejercicio 1:
const factory = new DispositivoEntradaFactory();

const dispositivo1 = factory.crearDispositivo({
    tipo: "Teclado",
    props: { 
        marca: "Redragon", 
        tipoConexion: "USB", 
        cantidadTeclas: 104 
    }
});
// console.log(dispositivo1.detalles());

const dispositivo2 = factory.crearDispositivo({
    tipo: "Ratón",
    props: { 
        marca: "Noga", 
        tipoConexion: "USB" 
    }
});
// console.log(dispositivo2.detalles());

const dispositivo3 = factory.crearDispositivo({
    tipo: "Scanner",
    props: { 
        marca: "Epson", 
        resolucion: "1200x1200" 
    }
});
// console.log(dispositivo3.detalles());

// Ejercicio 2

const factoryPerif = new PerifericoSalidaFactory();

const monitor1 = factoryPerif.crearPeriferico({ 
    tipo: "Monitor", 
    props: { 
        marca: "LG", 
        resolucion: "1920x1080" 
    } 
});
// console.log(monitor1.detalles());


const equipo1 = new Equipo("Compresor", "Industrial", "Operativo", 480, 500); // Umbral de 500 horas
const deptoMantenimiento1 = new DepartamentoMantenimiento("Mantenimiento Principal");
equipo1.agregarObs(deptoMantenimiento1);
equipo1.actualizartiempoUso(30);