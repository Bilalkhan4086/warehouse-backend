const sequelize = require('./database');
const User = require('../models/warehouse.model');

const initDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

module.exports = initDatabase;
