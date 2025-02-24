const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  getShipmentBySID,
} = require('../../../controllers/supplier.controller');

router.use(authMiddleware);

router.get('/', getAllSuppliers);
router.get('/:id', getSupplierById);
router.post('/', createSupplier);
router.patch('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);
router.get('/:id/shipments', getShipmentBySID);

module.exports = router;
