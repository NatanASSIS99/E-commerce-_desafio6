const express = require('express');
const router = express.Router();

// Define rotas para operações CRUD
router.get('/', (req, res) => {
  res.send('List of pedidos');
});

router.post('/', (req, res) => {
  res.send('Create a pedido');
});

router.get('/:id', (req, res) => {
  res.send(`Get pedido with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update pedido with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete pedido with ID ${req.params.id}`);
});

module.exports = router;
