const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  getAllOrders,
  deleteOrder,
  createOrder,
  updateOrder,
  getOrderById,
  getOrderByTrackingId,
  getProductsByOrder,
} = require('../../../controllers/order.controller');

router.use(authMiddleware);

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.get('/tracking/:id', getOrderByTrackingId);

router.post('/', createOrder);
router.delete('/:id', deleteOrder);
router.patch('/:id', updateOrder);

router.get('/:id/products', getProductsByOrder);

module.exports = router;
