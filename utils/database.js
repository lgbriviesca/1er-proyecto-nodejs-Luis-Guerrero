const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'lgbriviesca',
  database: 'bank',
  logging: false,
  port: 54321,
});

module.exports = { db };
