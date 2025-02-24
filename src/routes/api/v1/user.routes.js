const express = require('express');
const router = express.Router();
const {
  authMiddleware,
  isAdmin,
} = require('../../../middleware/auth.middleware');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../../../controllers/user.controller');

router.use(authMiddleware);

router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

router.get('/:id', getUserById);
router.put('/:id', updateUser);

module.exports = router;
