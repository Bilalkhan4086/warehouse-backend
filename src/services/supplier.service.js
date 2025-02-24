const BaseService = require('./base.service');
const Supplier = require('../models/supplier.model'); // Adjust path as needed
const Shipment = require('../models/shipment.model'); // Import the Shipment model

class SupplierService extends BaseService {
  constructor() {
    super(Supplier);
  }

  async getShipmentBySupplierId(supplierId) {
    try {
      const supplier = await this.model.findByPk(supplierId);

      if (!supplier) {
        return { success: false, error: 'Supplier not found', statusCode: 404 };
      }

      const shipments = await Shipment.findAll({
        where: {
          supplierId: supplierId,
        },
      });

      return { success: true, data: shipments };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new SupplierService();
