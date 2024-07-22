// controllers/estoqueController.js
const Estoque = require('../models/estoque');

exports.listar = async (req, res) => {
  try {
    const estoques = await Estoque.findAll();
    res.json(estoques);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obter = async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (estoque) {
      res.json(estoque);
    } else {
      res.status(404).json({ error: 'Estoque não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const estoque = await Estoque.create(req.body);
    res.status(201).json(estoque);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (estoque) {
      await estoque.update(req.body);
      res.json(estoque);
    } else {
      res.status(404).json({ error: 'Estoque não encontrado' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (estoque) {
      await estoque.destroy();
      res.json({ message: 'Estoque deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Estoque não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
