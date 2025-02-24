const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { UserRoles } = require('../utils/common');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('req.headers', req.headers);
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === UserRoles.ADMIN) {
    next();
  } else {
    res.status(403).json({ message: 'Admin access required' });
  }
};

const isInventoryManager = (req, res, next) => {
  if (req.user && req.user.role === UserRoles.INVENTORY_MANAGER) {
    next();
  } else {
    res.status(403).json({ message: 'Inventory Manager access required' });
  }
};

const isOrderManager = (req, res, next) => {
  if (req.user && req.user.role === UserRoles.ORDER_MANGER) {
    next();
  } else {
    res.status(403).json({ message: 'Inventory Manager access required' });
  }
};

const isAdminOrInventroryManager = (req, res, next) => {
  if (
    req.user &&
    (req.user.role === UserRoles.ADMIN ||
      req.user.role === UserRoles.INVENTORY_MANAGER)
  ) {
    next();
  } else {
    res.status(403).json({
      message: 'You do not have permission to perform this action',
    });
  }
};

module.exports = {
  authMiddleware,
  isAdmin,
  isAdminOrInventroryManager,
  isInventoryManager,
  isOrderManager,
};
