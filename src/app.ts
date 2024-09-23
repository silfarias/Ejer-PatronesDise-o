import { Configuracion } from "./Singleton/1-Configuracion";
import { ConexionDB } from "./Singleton/2-ConexionDB";


// Patrón Singleton

// Ejercicio 1
const config = Configuracion.getInstance();
config.updateIdioma('español');
const obtenerConfig = 'Idioma: ' + config.getIdioma() + ', RutaBD: ' + config.getRutaBD() + ', Registro: ' + config.getNivelRegistro();
console.log(obtenerConfig);


// Ejercicio 2
const conexionDataBase = ConexionDB.getInstance();
conexionDataBase.conectionDB();