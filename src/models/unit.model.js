const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');

const Unit = sequelize.define('Unit', {
  unitId: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pieces: {
    type: DataTypes.INTEGER, // Consider if this is always applicable
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Unit;
