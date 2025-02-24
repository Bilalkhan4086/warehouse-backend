const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  createShipment,
  deleteShipment,
  getAllShipments,
  getShipmentById,
  updateShipment,
} = require('../../../controllers/shipment.controller');
const {
  getProductsBySID,
  addProductsToShipment,
  deleteProductFromShipment,
  updateProductInShipment,
} = require('../../../controllers/shipment-product.controller');

router.use(authMiddleware);

router.get('/', getAllShipments);
router.get('/:id', getShipmentById);
router.post('/', createShipment);
router.delete('/:id', deleteShipment);
router.patch('/:id', updateShipment);
router.get('/:id/products', getProductsBySID);
router.post('/:id/products', addProductsToShipment);
router.delete('/:id/products/:product_id', deleteProductFromShipment);
router.patch('/:id/products/:product_id', updateProductInShipment);

module.exports = router;
