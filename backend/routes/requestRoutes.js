// requestRoutes.js
const express = require('express');
const { getRequests, createRequest, deleteRequest } = require('../controllers/requestController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getRequests);
router.post('/', authMiddleware, createRequest);
router.delete('/:id', authMiddleware, deleteRequest);

module.exports = router;