const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');
const ProductType = require('./product-type.model');

const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    barcode: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    costPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    salePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    productTypeId: {
      type: DataTypes.UUID,
      references: {
        model: ProductType,
        key: 'productTypeId',
      },
    },
  },
  {
    indexes: [{ unique: true, fields: ['barcode'] }, { fields: ['name'] }],
  }
);

Product.belongsTo(ProductType, { foreignKey: 'productTypeId' });

module.exports = Product;
