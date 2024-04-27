import { cursos } from "./aprendizaje";
import { instructores } from "./instructor";
import { idiomas } from "./idioma";



function listCursos() {
    cursos.forEach(curso => {
        console.log(`ID del curso: ${curso.id}`);
        console.log(`ID del curso: ${curso.id_curso}`);
        console.log(`ID del instructor: ${curso.id_instructor}`);
        console.log(`Fecha: ${curso.fecha}`);
        console.log(`Hora: ${curso.hora}`);
        console.log(`Horas Totales: ${curso.horastotal}`);
        console.log(`Nivel: ${curso.nivel}`);
        console.log("xdxdxdxdxdxdxdxdxdxdxdxdxdx");
    });
}

function listInstructores() {
    for (const instructor of instructores) {
        console.log(`ID: ${instructor.id}`);
        console.log(`Nombre: ${instructor.nombre}`);
        console.log(`Fecha de nacimiento: ${instructor.nacimiento}`);
        console.log(`Experiencia: ${instructor.experiencia} años`);
        console.log("------------");
    }
}

function listIdioma() 
    {for (const idioma of idiomas) {
        console.log(`ID: ${idioma.id}`);
        console.log(`Descripción: ${idioma.description}`);
        console.log("------------");
    }
}
export{listInstructores, listIdioma, listCursos}