const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

// Defina suas rotas
router.get('/', vendaController.getAllVendas);
router.post('/', vendaController.createVenda);
// Adicione outras rotas conforme necessário

module.exports = router;
