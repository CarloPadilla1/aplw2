// Importa la conexión a la base de datos
import { pool } from '../db/conexion';

// Define una función para buscar un elemento en la tabla Aprendizaje por su ID
export async function buscarAprendizaje(id: number) {
    try {
        // Consulta SQL para buscar un elemento en la tabla Aprendizaje por su ID
        const query = `
            SELECT * FROM Aprendizaje WHERE id = $1;
        `;

        // Ejecuta la consulta SQL
        const result = await pool.query(query, [id]);

        // Verifica si se encontró un elemento
        if (result.rows.length > 0) {
            const aprendizaje = result.rows[0];
            console.log('Elemento encontrado:');
            console.log(aprendizaje);
        } else {
            console.log('No se encontró ningún elemento con el ID de transacción proporcionado.');
        }
    } catch (error) {
        console.error('Error al buscar en la tabla Aprendizaje:', error);
    }
}

// Llama a la función para buscar un elemento en la tabla Aprendizaje por su ID
async function main() {
    await buscarAprendizaje(1); // Reemplaza el 1 con el ID de la transacción que deseas buscar
    // Llama a pool.end() solo una vez al final de tu aplicación
    pool.end();
}

main();
