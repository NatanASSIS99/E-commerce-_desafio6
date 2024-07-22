// models/cliente.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho se necessário

class Cliente extends Model {}

Cliente.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'cliente' // Certifique-se de que o nome da tabela está correto
});

module.exports = Cliente;
