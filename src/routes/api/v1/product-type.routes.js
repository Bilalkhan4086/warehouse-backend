const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  createProductType,
  deleteProductType,
  getAllProductTypes,
  getProductTypeById,
  updateProductType,
  getProductsByPTId,
} = require('../../../controllers/product-type.controller');

router.use(authMiddleware);

router.get('/', getAllProductTypes);
router.get('/:id', getProductTypeById);
router.post('/', createProductType);
router.patch('/:id', updateProductType);
router.delete('/:id', deleteProductType);
router.get('/:id/products', getProductsByPTId);

module.exports = router;
