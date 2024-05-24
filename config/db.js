import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const { DATABASE,DATABASE_USER,DATABASE_PASS ,DATABASE_HOST,DATABASE_URL } = process.env;
const db = new Sequelize(DATABASE_URL, {
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

export default db;