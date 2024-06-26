import { Sequelize, DataTypes } from 'sequelize';
import db from '../database/db.js';

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    }
});
