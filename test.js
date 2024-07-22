const { Sequelize } = require('sequelize');

// Configura o Sequelize
const sequelize = new Sequelize('vendas_online', 'root', 'natan', {
  host: 'localhost',
  dialect: 'mysql',
});

// Testa a conexão e executa uma consulta para verificar o banco de dados
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Executa uma consulta para obter informações sobre o banco de dados
    const [results] = await sequelize.query('SELECT DATABASE() AS current_database');
    console.log('Banco de dados atual:', results[0].current_database);
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

testConnection();
