const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Order = sequelize.define(
  'Order',
  {
    orderId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trackingId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending', // Example default status
      // Consider using ENUM:
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    retailerId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    indexes: [{ fields: ['trackingId'] }, { fields: ['status'] }],
  }
);

Order.belongsTo(User, { foreignKey: 'retailerId' });

module.exports = Order;
