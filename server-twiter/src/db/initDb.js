import getPool from './getPool.js';

// Función para crear tablas en la base de datos.
export const createTables = async () => {
    try {
        // Obtener el pool de conexiones.
        const pool = await getPool();

        console.log('Eliminando tablas...');

        // Eliminar tablas existentes.
        await pool.query(
            'DROP TABLE IF EXISTS posts'
        );

        console.log('Creando tablas...');

        // Crear la tabla posts.
        await pool.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id VARCHAR(40) PRIMARY KEY,
                title VARCHAR(250) NOT NULL,
                content TEXT NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('¡Tablas creadas exitosamente!');

        // Salir del proceso con el código 0 indicando éxito.
        process.exit(0);
    } catch (err) {
        console.error(err);

        // Salir del proceso con el código 1 indicando error.
        process.exit(1);
    }
};

// Llamar a la función para crear las tablas en la base de datos.
createTables();