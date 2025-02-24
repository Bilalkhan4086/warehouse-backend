const ProductService = require('../services/product.service');

const getAllProducts = async (req, res) => {
  const result = await ProductService.getAll();
  res.json(result);
};

const getProductById = async (req, res) => {
  const result = await ProductService.getById(req.params.id);
  res.json(result);
};

const createProduct = async (req, res) => {
  const result = await ProductService.create(req.body);
  res.json(result);
};

const updateProduct = async (req, res) => {
  const result = await ProductService.update(req.params.id, req.body);
  res.json(result);
};

const deleteProduct = async (req, res) => {
  const result = await ProductService.delete(req.params.id);
  res.json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
