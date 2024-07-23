// app.js
const express = require('express');
const sequelize = require('./config/database');
const produtoRoutes = require('./routes/produtos');
const clienteRoutes = require('./routes/clientes');
const estoqueRoutes = require('./routes/estoques');

const app = express();

app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/estoque', estoqueRoutes);

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');

  // Sincronizar os modelos com o banco de dados
  sequelize.sync({ alter: true }) // Use { alter: true } para atualizar a tabela se necessário
    .then(() => {
      console.log('Modelos sincronizados com o banco de dados.');

      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Servidor está rodando na porta ${PORT}`);
      });
    }).catch(err => {
      console.error('Erro ao sincronizar os modelos com o banco de dados:', err);
    });
}).catch(error => {
  console.error('Erro ao conectar com o banco de dados:', error);
});
