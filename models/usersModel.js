const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const User = db.define('user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  accountNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    defaultValue: function () {
      return Math.floor(100000 + Math.random() * 900000);
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 1000,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'available',
  },
});

module.exports = { User };
