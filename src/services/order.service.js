const BaseService = require('./base.service');
const Order = require('../models/order.model');
const OrderedProduct = require('../models/ordered-product.model');
const Product = require('../models/product.model');

class OrderService extends BaseService {
  constructor() {
    super(Order);
  }

  async getOrderByTrackingId(trackingId) {
    return await Order.findOne({
      where: { trackingId },
    });
  }
  async getProductsByOrder(orderId) {
    return await OrderedProduct.findAll({
      where: { orderId },
      include: [
        {
          model: Product,
          as: 'product',
          attributes: { exclude: ['price'] },
        },
      ],
    });
  }
}

module.exports = new OrderService();
