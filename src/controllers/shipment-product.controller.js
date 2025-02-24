const ShipmentProductService = require('../services/shipment-product.service');

const getProductsBySID = async (req, res) => {
  const result = await ShipmentProductService.getAll();
  res.json(result);
};

const getShipmentProductByID = async (req, res) => {
  const result = await ShipmentProductService.getById(req.params.id);
  res.json(result);
};

const addProductsToShipment = async (req, res) => {
  const result = await ShipmentProductService.create(req.body);
  res.json(result);
};

const updateProductInShipment = async (req, res) => {
  const result = await ShipmentProductService.update(req.params.id, req.body);
  res.json(result);
};

const deleteProductFromShipment = async (req, res) => {
  const result = await ShipmentProductService.delete(req.params.id);
  res.json(result);
};

module.exports = {
  getProductsBySID,
  addProductsToShipment,
  deleteProductFromShipment,
  updateProductInShipment,
  getShipmentProductByID,
};
