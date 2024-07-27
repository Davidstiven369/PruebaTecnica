
// employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FECHA_INGRES: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  NOMBRE: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SALARIO: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Employee;
