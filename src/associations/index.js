// associations.js
const User = require("../models/user.model");
const Warehouse = require("../models/warehouse.model");
const Order = require("../models/order.model");
const Product = require("../models/product.model");
const OrderedProduct = require("../models/orderedProduct.model");
const Shipment = require("../models/shipment.model");
const ShipmentProduct = require("../models/shipmentProduct.model");
const ProductType = require("../models/productType.model");
const Unit = require("../models/unit.model");
const Supplier = require("../models/supplier.model");

// User and Warehouse
User.belongsTo(Warehouse, { foreignKey: "warehouseId" });
Warehouse.hasMany(User, { foreignKey: "warehouseId" });

// Order and User (Retailer)
Order.belongsTo(User, { as: "Retailer", foreignKey: "retailerId" });
User.hasMany(Order, { as: "RetailerOrders", foreignKey: "retailerId" });

// Order and Product (through OrderedProduct)
Order.belongsToMany(Product, {
  through: OrderedProduct,
  foreignKey: "orderId",
});
Product.belongsToMany(Order, {
  through: OrderedProduct,
  foreignKey: "productId",
});
OrderedProduct.belongsTo(Order, { foreignKey: "orderId" });
OrderedProduct.belongsTo(Product, { foreignKey: "productId" });

// Shipment and Supplier
Shipment.belongsTo(Supplier, { foreignKey: "supplierId" });
Supplier.hasMany(Shipment, { foreignKey: "supplierId" });

// Shipment and User (Inventory Manager)
Shipment.belongsTo(User, {
  as: "InventoryManager",
  foreignKey: "inventoryManagerId",
});
User.hasMany(Shipment, {
  as: "InventoryManagerShipments",
  foreignKey: "inventoryManagerId",
});

// Shipment and Product (through ShipmentProduct)
Shipment.belongsToMany(Product, {
  through: ShipmentProduct,
  foreignKey: "shipmentId",
});
Product.belongsToMany(Shipment, {
  through: ShipmentProduct,
  foreignKey: "productId",
});
ShipmentProduct.belongsTo(Shipment, { foreignKey: "shipmentId" });
ShipmentProduct.belongsTo(Product, { foreignKey: "productId" });

// Product and ProductType
Product.belongsTo(ProductType, { foreignKey: "productTypeId" });
ProductType.hasMany(Product, { foreignKey: "productTypeId" });

// ProductType and Unit
ProductType.belongsTo(Unit, { foreignKey: "unitId" });
Unit.hasMany(ProductType, { foreignKey: "unitId" });

// (Optional) Export a function to initialize associations
module.exports = function () {
  console.log("Associations initialized.");
};
