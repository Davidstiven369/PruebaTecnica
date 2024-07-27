// request.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Request = sequelize.define('Request', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CODIGO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Resumen: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  ID_EMPLEADO: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Employees',
      key: 'ID',
    },
  },
});

module.exports = Request;