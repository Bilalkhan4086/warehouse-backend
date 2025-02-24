const BaseService = require('./base.service');
const ShipmentProduct = require('../models/shipment-product.model'); // Adjust path as needed
const Shipment = require('../models/shipment.model');
const Product = require('../models/product.model');

class ShipmentProductService extends BaseService {
  constructor() {
    super(ShipmentProduct);
  }

  // You can add methods to handle specific logic related to shipment products
  // e.g., calculating total weight of a shipment, validating quantities, etc.

  // Example of retrieving shipment products with related data
  async getShipmentProductsWithDetails(shipmentId) {
    try {
      const shipment = await Shipment.findByPk(shipmentId);

      if (!shipment) {
        return { success: false, error: 'Shipment not found', statusCode: 404 };
      }

      const shipmentProducts = await ShipmentProduct.findAll({
        where: { shipmentId: shipmentId },
        include: [Product], // Eagerly load the associated Product data
      });

      return { success: true, data: shipmentProducts };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new ShipmentProductService();
