const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  vendaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precoUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'pedidos'
});

// Definindo associações (se houver)
Pedido.associate = (models) => {
  Pedido.belongsTo(models.Venda, { foreignKey: 'vendaId', as: 'venda' });
  Pedido.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
};

module.exports = Pedido;
