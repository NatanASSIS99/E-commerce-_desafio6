const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venda = sequelize.define('Venda', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dataVenda: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'vendas'
});

// Definindo associações (se houver)
Venda.associate = (models) => {
  Venda.hasMany(models.Pedido, { foreignKey: 'vendaId', as: 'pedidos' });
};

module.exports = Venda;
