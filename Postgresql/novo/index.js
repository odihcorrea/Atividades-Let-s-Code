const { Client } = require('pg');

const client = new Client({
    user: 'Adilson',
    host: 'localhost',
    database: 'dih',
    password: '123456',
    port: 5432, // porta padrão do PostgreSQL
  });

  client.connect();

  client.query('SELECT * FROM nome_da_tabela', (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows); // imprime os resultados da consulta
    }
    client.end(); // fecha a conexão com o banco de dados
  });