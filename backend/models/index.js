const sequelize = require('../config/database');
const User = require('./user');
const Employee = require('./employee');
const Request = require('./request');

// Define associations here
Employee.hasMany(Request, { foreignKey: 'ID_EMPLEADO' });
Request.belongsTo(Employee, { foreignKey: 'ID_EMPLEADO' });

module.exports = {
  sequelize,
  User,
  Employee,
  Request,
};
