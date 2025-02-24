const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');
const Supplier = require('./supplier.model');
const User = require('./user.model');

const Shipment = sequelize.define(
  'Shipment',
  {
    shipmentId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    arrivalDate: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    supplierId: {
      type: DataTypes.UUID,
      references: {
        model: Supplier,
        key: 'supplierId',
      },
    },
    inventoryManagerId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    indexes: [{ fields: ['supplierId'] }, { fields: ['inventoryManagerId'] }],
  }
);

Shipment.belongsTo(Supplier, { foreignKey: 'supplierId' });
Shipment.belongsTo(User, { foreignKey: 'inventoryManagerId' });

module.exports = Shipment;
