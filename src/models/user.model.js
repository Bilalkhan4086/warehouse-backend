const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/database'); // Your Sequelize instance
const Warehouse = require('./warehouse.model');
const bcrypt = require('bcrypt');
const { UserRoles } = require('../utils/common');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: UserRoles.INVENTORY_MANAGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    warehouseId: {
      type: DataTypes.UUID,
      references: {
        model: Warehouse,
        key: 'warehouseId',
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
    indexes: [{ unique: true, fields: ['email'] }, { fields: ['warehouseId'] }],
  }
);
User.belongsTo(Warehouse, { foreignKey: 'warehouseId' });

module.exports = User;
