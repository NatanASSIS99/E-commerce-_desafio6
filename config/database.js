const { Sequelize } = require('sequelize');

// Crie uma instância do Sequelize
const sequelize = new Sequelize('vendas_online', 'root', 'natan', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

  

module.exports = sequelize;
