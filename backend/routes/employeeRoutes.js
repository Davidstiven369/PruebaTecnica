// employeeRoutes.js
const express = require('express');
const { getEmployees, createEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getEmployees);
router.post('/', authMiddleware, createEmployee);

module.exports = router;