const express = require('express');
const calcularController = require('../controllers/calcularController');
const router = express.Router();

router.post('/', calcularController.calcular);

module.exports = router;