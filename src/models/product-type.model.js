const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');
const Unit = require('./unit.model');

const ProductType = sequelize.define(
  'ProductType',
  {
    productTypeId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, // Store URL to image
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    unitId: {
      type: DataTypes.UUID,
      references: {
        model: Unit,
        key: 'unitId',
      },
    },
  },
  {
    indexes: [{ fields: ['name'] }],
  }
);

ProductType.belongsTo(Unit, { foreignKey: 'unitId' });

module.exports = ProductType;
