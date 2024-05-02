// Importa la conexión a la base de datos
import { pool } from '../db/conexion';

// Define una función para insertar un elemento en la tabla Aprendizaje
export async function insertarAprendizaje() {
    try {
        const idIdioma = Math.floor(Math.random() * 6) + 1; // ID del idioma entre 1 y 6
        const idInstructor = Math.floor(Math.random() * 6) + 1; // ID del instructor entre 1 y 6
        const fecha = new Date().toISOString(); // Fecha actual
        const hora = '12:00'; // Hora
        const numHorasCurso = 10; // Número de horas del curso
        const nivel = 'Nivel 1'; // Nivel del curso

        // Consulta SQL para insertar un elemento en la tabla Aprendizaje
        const query = `
            INSERT INTO Aprendizaje (idIdioma, idInstructor, fecha, hora, numHorasCurso, nivel)
            VALUES ($1, $2, $3, $4, $5, $6);
        `;

        // Ejecuta la consulta SQL
        const result = await pool.query(query, [idIdioma, idInstructor, fecha, hora, numHorasCurso, nivel]);

        console.log('Elemento insertado en la tabla Aprendizaje');
    } catch (error) {
        console.error('Error al insertar en la tabla Aprendizaje:', error);
    }
}

// Llama a la función para insertar un elemento en la tabla Aprendizaje
async function main() {
    await insertarAprendizaje();
    // Llama a pool.end() solo una vez al final de tu aplicación
    pool.end();
}

main();

