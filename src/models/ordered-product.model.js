const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order.model');
const Product = require('./product.model');

const OrderedProduct = sequelize.define(
  'OrderedProduct',
  {
    orderedProductId: {
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
    unitPrice: {
      type: DataTypes.DECIMAL(10, 2), // Adjust precision as needed
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.UUID,
      references: {
        model: Order,
        key: 'orderId',
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
    indexes: [{ fields: ['orderId'] }, { fields: ['productId'] }],
  }
);

Order.belongsToMany(Product, {
  through: OrderedProduct,
  foreignKey: 'orderId',
});
Product.belongsToMany(Order, {
  through: OrderedProduct,
  foreignKey: 'productId',
});

OrderedProduct.belongsTo(Order, { foreignKey: 'orderId' });
OrderedProduct.belongsTo(Product, { foreignKey: 'productId' });

module.exports = OrderedProduct;
