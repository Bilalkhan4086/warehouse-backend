const BaseService = require('./base.service'); // Adjust the path as needed
const ProductType = require('../models/product-type.model'); // Adjust the path as needed
const Product = require('../models/product.model'); // Import the Product model

class ProductTypeService extends BaseService {
  constructor() {
    super(ProductType);
  }

  // Custom method to get products by product type ID
  async getProductsByProductTypeId(productTypeId) {
    try {
      const productType = await this.model.findByPk(productTypeId);

      if (!productType) {
        return {
          success: false,
          error: 'ProductType not found',
          statusCode: 404,
        };
      }

      const products = await Product.findAll({
        where: {
          productTypeId: productTypeId,
        },
      });

      return { success: true, data: products };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new ProductTypeService();
