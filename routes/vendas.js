const express = require('express');
const router = express.Router();

// Define rotas para operações CRUD
router.get('/', (req, res) => {
  res.send('List of vendas');
});

router.post('/', (req, res) => {
  res.send('Create a venda');
});

router.get('/:id', (req, res) => {
  res.send(`Get venda with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update venda with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete venda with ID ${req.params.id}`);
});

module.exports = router;
