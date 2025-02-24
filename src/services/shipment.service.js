const BaseService = require('./base.service');
const Shipment = require('../models/shipment.model'); // Adjust path as needed

class ShipmentService extends BaseService {
  constructor() {
    super(Shipment);
  }

  // You can add custom methods here, for example:
  // - Methods to calculate shipment costs
  // - Methods to update shipment status
  // - Methods to retrieve shipment details with related data (supplier, products, etc.)
}

module.exports = new ShipmentService();
