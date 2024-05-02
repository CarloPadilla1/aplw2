import { pool } from './conexion';

pool.connect()
    .then(() => {
        // tabla Curso
        pool.query(`
            CREATE TABLE IF NOT EXISTS Curso (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(255) NOT NULL,
                descripcion TEXT
            );
        `);

        // tabla Idioma
        pool.query(`
            CREATE TABLE IF NOT EXISTS Idioma (
                id SERIAL PRIMARY KEY,
                descripcion VARCHAR(255) NOT NULL
            );
        `);

        // tabla Instructor
        pool.query(`
            CREATE TABLE IF NOT EXISTS Instructor (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(255) NOT NULL,
                fechaNacimiento DATE,
                experiencia TEXT
            );
        `);

        //tabla Aprendizaje
        pool.query(`
            CREATE TABLE IF NOT EXISTS Aprendizaje (
                id SERIAL PRIMARY KEY,
                idIdioma INTEGER REFERENCES Idioma(id),
                idInstructor INTEGER REFERENCES Instructor(id),
                fecha DATE,
                hora TIME,
                numHorasCurso INTEGER,
                nivel VARCHAR(255)
            );
        `);
    })
    .catch(err => console.error('Error en la conexión a la base de datos:', err))
    .finally(() => pool.end());
