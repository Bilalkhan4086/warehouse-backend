const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} = require('../../../controllers/product.controller');

router.use(authMiddleware);

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
