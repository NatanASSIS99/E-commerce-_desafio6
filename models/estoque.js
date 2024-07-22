// models/estoque.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estoque = sequelize.define('estoque', {
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'estoque',
  timestamps: false, // Se você não tiver as colunas createdAt e updatedAt
});

module.exports = Estoque;
