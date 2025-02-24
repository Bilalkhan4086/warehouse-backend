const BaseService = require('./base.service');
const Product = require('../models/product.model'); // Adjust path as needed

class ProductService extends BaseService {
  constructor() {
    super(Product);
  }
  // You can add custom methods specific to products here if needed,
  // such as methods to handle inventory management, price calculations, etc.
}

module.exports = new ProductService();
