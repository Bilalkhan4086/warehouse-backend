const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');
const Shipment = require('./shipment.model');
const Product = require('./product.model');

const ShipmentProduct = sequelize.define(
  'ShipmentProduct',
  {
    shipmentProductId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shipmentId: {
      type: DataTypes.UUID,
      references: {
        model: Shipment,
        key: 'shipmentId',
      },
    },
    productId: {
      type: DataTypes.UUID,
      references: {
        model: Product,
        key: 'productId',
      },
    },
  },
  {
    indexes: [{ fields: ['shipmentId'] }, { fields: ['productId'] }],
  }
);

Shipment.belongsToMany(Product, {
  through: ShipmentProduct,
  foreignKey: 'shipmentId',
});
Product.belongsToMany(Shipment, {
  through: ShipmentProduct,
  foreignKey: 'productId',
});

ShipmentProduct.belongsTo(Shipment, { foreignKey: 'shipmentId' });
ShipmentProduct.belongsTo(Product, { foreignKey: 'productId' });

module.exports = ShipmentProduct;
