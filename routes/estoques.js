const express = require('express');
const router = express.Router();

// Define rotas para operações CRUD
router.get('/', (req, res) => {
  res.send('Lista de estoques');
});

router.post('/', (req, res) => {
  res.send('Produto de estoque criado');
});

router.get('/:id', (req, res) => {
  res.send(`Produto de estoque obtido com ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Atualizado estoque com ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Excluido estoque com ID ${req.params.id}`);
});

module.exports = router;
