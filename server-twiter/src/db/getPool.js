// Importamos las dependencias necesarias.
import mysql from "mysql2/promise.js";

// Importamos las variables de entorno.
import { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } from "../../env.js";

// Variable para almacenar el pool de conexiones.
let pool;

// Función para devolver un pool de conexiones.
const getPool = async () => {
  try {
    // Si no hay un pool de conexiones, creamos uno.
    if (!pool) {
      // Creamos un pool temporal para crear la base de datos si no existe.
      pool = await mysql.createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
      });

      // Ahora que tenemos un pool temporal, creamos la base de datos si no existe.
      await pool.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

      // Creamos el pool de conexiones final.
      pool = await mysql.createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        timezone: "Z",
      });
    }

    // Devolvemos el pool de conexiones.
    return pool;
  } catch (err) {
    console.error(err);
  }
};

// Exportamos la función para obtener el pool de conexiones.
export default getPool;
