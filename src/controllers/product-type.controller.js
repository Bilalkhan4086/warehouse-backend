const ProductTypeService = require('../services/product-type.service');

const getAllProductTypes = async (req, res) => {
  const result = await ProductTypeService.getAll();
  res.json(result);
};

const getProductTypeById = async (req, res) => {
  const result = await ProductTypeService.getById(req.params.id);
  res.json(result);
};

const createProductType = async (req, res) => {
  const result = await ProductTypeService.create(req.body);
  res.json(result);
};

const updateProductType = async (req, res) => {
  const result = await ProductTypeService.update(req.params.id, req.body);
  res.json(result);
};

const deleteProductType = async (req, res) => {
  const result = await ProductTypeService.delete(req.params.id);
  res.json(result);
};

const getProductsByPTId = async (req, res) => {
  const result = await ProductTypeService.getProductsByProductTypeId(
    req.params.id
  );
  res.json(result);
};

module.exports = {
  getAllProductTypes,
  getProductTypeById,
  createProductType,
  updateProductType,
  deleteProductType,
  getProductsByPTId,
};
