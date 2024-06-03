import 'dotenv/config';

// Obtenemos las variables de entorno.
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, PORT} =
    process.env;

// Exportamos las variables.
export { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, PORT };