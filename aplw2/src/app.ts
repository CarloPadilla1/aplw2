import { cursos, obtenerCursoPorId } from "./aprendizaje";
import {listIdioma,listInstructores,listCursos } from "./recorridos";
import { obtenerPersonajes } from "./api/morty";
import './db/tablas';
// import { insertarAprendizaje } from "./funciones practica2/llenardatos";
import { buscarAprendizaje } from "./funciones practica2/buscardato";
import { consultarAprendizajes } from "./funciones practica2/consultaraprendizaje";

// Funciones de recorrido de los arreglos
// listCursos();
// listIdioma();
// listInstructores();

// // Funcion utilizando callback
// function mostrarCursoPorId(id: number) {
//     obtenerCursoPorId(cursos, id, (curso) => {
//         if (curso) {
//             console.log(curso);n
//         } else {
//             console.log("No se encontró ningún curso con el ID proporcionado.");
//         }
//     });
// }
// mostrarCursoPorId(2); 

// //. Buscar un servicio REST de acceso libre en el web distinto al utilizado en clases y aplicar 
// // Fetch con Promises y Async/await para su consumo

// obtenerPersonajes().then(personajes => {
//     if (personajes) {
//         console.log('Personajes:', personajes);
//     } else {
//         console.log('No se pudieron obtener los personajes');
//     }
// });


// Aplicar una función LLENAR que permita insertar 10 elementos en su entidad transaccional.
// for (let i = 0; i < 10; i++) {
//      insertarAprendizaje();
// }



// Crear una función BUSCAR que reciba el ID de una transacción y proceda a mostrar el elemento encontrado con todos sus atributos por consola.
// buscarAprendizaje(5);


// Crear una función CONSULTAR que le permita mostrar todos los elementos de su entidad transaccional y los atributos principales de sus entidades maestras relacionadas.
consultarAprendizajes();
console.log('h asdadola');