// requestController.js
const { Request, Employee } = require('../models');

const getRequests = async (req, res) => {
  const requests = await Request.findAll({ include: Employee });
  res.json(requests);
};

const createRequest = async (req, res) => {
  const { CODIGO, Descripcion, Resumen, ID_EMPLEADO } = req.body;
  const request = await Request.create({ CODIGO, Descripcion, Resumen, ID_EMPLEADO });
  res.status(201).json(request);
};

const deleteRequest = async (req, res) => {
  const { id } = req.params;
  await Request.destroy({ where: { ID: id } });
  res.status(204).send();
};

module.exports = { getRequests, createRequest, deleteRequest };
