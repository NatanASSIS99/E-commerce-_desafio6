const express = require('express');
const router = express.Router();

// Define rotas para operações CRUD
router.get('/', (req, res) => {
  res.send('List of estoques');
});

router.post('/', (req, res) => {
  res.send('Create a estoque');
});

router.get('/:id', (req, res) => {
  res.send(`Get estoque with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update estoque with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete estoque with ID ${req.params.id}`);
});

module.exports = router;
