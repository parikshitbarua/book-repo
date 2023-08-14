import { dbConfig } from "../configs/db.config";
import { Dialect, Sequelize } from "sequelize";
import { Books } from './book.model'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect as Dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

export const db = {
    Sequelize,
    sequelize,
    books: Books(sequelize, Sequelize)
};
