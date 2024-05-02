// Importa la conexión a la base de datos
import { pool } from '../db/conexion';

// Define una función para consultar todos los elementos en la tabla Aprendizaje
export async function consultarAprendizajes() {
    try {
        // Consulta SQL para obtener todos los elementos en la tabla Aprendizaje
        const query = `
            SELECT a.*, i.descripcion AS idioma, ins.nombre AS instructor
            FROM Aprendizaje a
            JOIN Idioma i ON a.idIdioma = i.id
            JOIN Instructor ins ON a.idInstructor = ins.id;
        `;

        // Ejecuta la consulta SQL
        const result = await pool.query(query);

        // Verifica si se encontraron elementos
        if (result.rows.length > 0) {
            console.log('Elementos encontrados:');
            result.rows.forEach((row) => {
                console.log(row);
            });
        } else {
            console.log('No se encontraron elementos en la tabla Aprendizaje.');
        }
    } catch (error) {
        console.error('Error al consultar la tabla Aprendizaje:', error);
    }
}

// Llama a la función para consultar todos los elementos en la tabla Aprendizaje
async function main() {
    await consultarAprendizajes();
    // Llama a pool.end() solo una vez al final de tu aplicación
    pool.end();
}

main();
