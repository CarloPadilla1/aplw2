import { cursos, obtenerCursoPorId } from "./aprendizaje";
import {listIdioma,listInstructores,listCursos } from "./recorridos";
import { obtenerPersonajes } from "./api/morty";


// Funciones de recorrido de los arreglos
listCursos();
listIdioma();
listInstructores();

// Funcion utilizando callback
function mostrarCursoPorId(id: number) {
    obtenerCursoPorId(cursos, id, (curso) => {
        if (curso) {
            console.log(curso);
        } else {
            console.log("No se encontró ningún curso con el ID proporcionado.");
        }
    });
}
mostrarCursoPorId(2); 

//. Buscar un servicio REST de acceso libre en el web distinto al utilizado en clases y aplicar 
// Fetch con Promises y Async/await para su consumo

obtenerPersonajes().then(personajes => {
    if (personajes) {
        console.log('Personajes:', personajes);
    } else {
        console.log('No se pudieron obtener los personajes');
    }
});