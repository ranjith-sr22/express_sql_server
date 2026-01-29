import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB,
    port: process.env.SQL_PORT,
    connectionLimit: 10,
    queueLimit: 0
});
export const connectDB = async () => {
    try {
        const connection = await db.getConnection();
        console.log('Database connected successfully');
        connection.release();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
    export default db;