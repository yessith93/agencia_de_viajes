import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const { DATABASE_URL } = process.env;
const isProduction = process.env.NODE_ENV === 'production';
let db;
if (!isProduction) {
    db = new Sequelize('agencia_de_viajes', 'admin', '123', {
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false
    });
} else {
    db = new Sequelize(DATABASE_URL, {
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false
    });
}

export default db;