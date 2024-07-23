const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Defina suas rotas
router.get('/', pedidoController.getAllPedidos);
router.post('/', pedidoController.createPedido);
// Adicione outras rotas conforme necessário

module.exports = router;
