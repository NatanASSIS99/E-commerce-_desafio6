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
  sequelize,
  tableName: 'estoque',
  timestamps: true, 
});

module.exports = Estoque;
