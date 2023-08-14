import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;
const DB_NAME = process.env.DB_NAME as string;
const DB_USER = process.env.DB_USER as string;
export const dbConfig = {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    DB: DB_NAME,
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};