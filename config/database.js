const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vendas_online', 'root', 'natan', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Desativa o log detalhado das consultas SQL
});

  

module.exports = sequelize;
