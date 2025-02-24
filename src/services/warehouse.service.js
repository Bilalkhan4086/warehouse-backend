const BaseService = require('./base.service');
const Warehouse = require('../models/warehouse.model');

class WarehouseService extends BaseService {
  constructor() {
    super(Warehouse);
  }
}

module.exports = new WarehouseService();
