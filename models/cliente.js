// models/cliente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho se necessário

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Isso cria `createdAt` e `updatedAt` automaticamente
});

module.exports = Cliente;
