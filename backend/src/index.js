// /backend/src/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('../config/database');
const authRoutes = require('../routes/authRoutes');
const employeeRoutes = require('../routes/employeeRoutes');
const requestRoutes = require('../routes/requestRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/requests', requestRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3002, () => {
    console.log('Server is running on port 3002');
  });
});
