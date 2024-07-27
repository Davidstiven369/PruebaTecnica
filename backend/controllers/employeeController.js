// employeeController.js
const { Employee } = require('../models');

const getEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

const createEmployee = async (req, res) => {
  const { FECHA_INGRES, NOMBRE, SALARIO } = req.body;
  const employee = await Employee.create({ FECHA_INGRES, NOMBRE, SALARIO });
  res.status(201).json(employee);
};

module.exports = { getEmployees, createEmployee };
