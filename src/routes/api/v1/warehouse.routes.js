const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  createWarehouse,
  deleteWarehouse,
  getAllWarehouses,
  getWarehouseById,
  updateWarehouse,
} = require('../../../controllers/warehouse.controller');

router.use(authMiddleware);

router.get('/', getAllWarehouses);
router.get('/:id', getWarehouseById);
router.post('/', createWarehouse);
router.patch('/:id', updateWarehouse);
router.delete('/:id', deleteWarehouse);

module.exports = router;
