const SupplierService = require('../services/supplier.service');

const getAllSuppliers = async (req, res) => {
  const result = await SupplierService.getAll();
  res.json(result);
};

const getSupplierById = async (req, res) => {
  const result = await SupplierService.getById(req.params.id);
  res.json(result);
};

const createSupplier = async (req, res) => {
  const result = await SupplierService.create(req.body);
  res.json(result);
};

const updateSupplier = async (req, res) => {
  const result = await SupplierService.update(req.params.id, req.body);
  res.json(result);
};

const deleteSupplier = async (req, res) => {
  const result = await SupplierService.delete(req.params.id);
  res.json(result);
};

const getShipmentBySID = async (req, res) => {
  const result = await SupplierService.getShipmentBySupplierId(req.params.id);
  res.json(result);
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getShipmentBySID,
};
