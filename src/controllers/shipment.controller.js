const ShipmentService = require('../services/shipment.service');

const getAllShipments = async (req, res) => {
  const result = await ShipmentService.getAll();
  res.json(result);
};

const getShipmentById = async (req, res) => {
  const result = await ShipmentService.getById(req.params.id);
  res.json(result);
};

const createShipment = async (req, res) => {
  const result = await ShipmentService.create(req.body);
  res.json(result);
};

const updateShipment = async (req, res) => {
  const result = await ShipmentService.update(req.params.id, req.body);
  res.json(result);
};

const deleteShipment = async (req, res) => {
  const result = await ShipmentService.delete(req.params.id);
  res.json(result);
};

module.exports = {
  getAllShipments,
  getShipmentById,
  createShipment,
  updateShipment,
  deleteShipment,
};
