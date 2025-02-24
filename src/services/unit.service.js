const BaseService = require('./base.service'); // Adjust path as needed
const Unit = require('../models/unit.model'); // Adjust path as needed

class UnitService extends BaseService {
  constructor() {
    super(Unit);
  }
}

module.exports = new UnitService();
