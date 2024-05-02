// db.ts
import { Pool } from 'pg';


export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'practicabe',
    password: '123',
    port: 5432,
});
