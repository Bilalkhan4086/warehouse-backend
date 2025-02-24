const WarehouseService = require('../services/warehouse.service');

const getAllWarehouses = async (req, res) => {
  const result = await WarehouseService.getAll();
  res.json(result);
};

const getWarehouseById = async (req, res) => {
  const result = await WarehouseService.getById(req.params.id);
  res.json(result);
};

const createWarehouse = async (req, res) => {
  const result = await WarehouseService.create(req.body);
  res.json(result);
};

const updateWarehouse = async (req, res) => {
  const result = await WarehouseService.update(req.params.id, req.body);
  res.json(result);
};

const deleteWarehouse = async (req, res) => {
  const result = await WarehouseService.delete(req.params.id);
  res.json(result);
};

module.exports = {
  getAllWarehouses,
  getWarehouseById,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
};
