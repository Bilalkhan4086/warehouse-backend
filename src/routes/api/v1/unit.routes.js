const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../../../middleware/auth.middleware');
const {
  createUnit,
  deleteUnit,
  getAllUnits,
  getUnitById,
  updateUnit,
} = require('../../../controllers/unit.controller');

router.use(authMiddleware);

router.get('/', getAllUnits);
router.get('/:id', getUnitById);
router.post('/', createUnit);
router.patch('/:id', updateUnit);
router.delete('/:id', deleteUnit);

module.exports = router;
