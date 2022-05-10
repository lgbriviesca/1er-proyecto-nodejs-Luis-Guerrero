const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

//este modelo permite que SQL interactúe con JS a travpes de sequalize
const Transference = db.define('transference', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Transference };
