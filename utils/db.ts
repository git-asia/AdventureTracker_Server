import {createPool} from "mysql2/promise";
import {config} from "../config/config";

export const pool = createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    port: config.port,
    namedPlaceholders: true,
    decimalNumbers: true,
});
