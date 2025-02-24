const OrderService = require('../services/order.service');

const getAllOrders = async (req, res) => {
  const result = await OrderService.getAll();
  res.json(result);
};

const getOrderById = async (req, res) => {
  const result = await OrderService.getById(req.params.id);
  res.json(result);
};

const createOrder = async (req, res) => {
  const result = await OrderService.create(req.body);
  res.json(result);
};

const updateOrder = async (req, res) => {
  const result = await OrderService.update(req.params.id, req.body);
  res.json(result);
};

const deleteOrder = async (req, res) => {
  const result = await OrderService.delete(req.params.id);
  res.json(result);
};

const getProductsByOrder = async (req, res) => {
  const result = await OrderService.getProductsByOrder(req.params.id);
  res.json(result);
};
const getOrderByTrackingId = async (req, res) => {
  const result = await OrderService.getOrderByTrackingId(req.params.id);
  res.json(result);
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getProductsByOrder,
  getOrderByTrackingId,
};
