const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const orderRoutes = require('./order.routes');
const warehouseRoutes = require('./warehouse.routes');
const productTypeRoutes = require('./product-type.routes');
const productRoutes = require('./product.routes');
const shipmentRoutes = require('./shipment.routes');
const supplierRoutes = require('./supplier.routes');
const unitRoutes = require('./unit.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/warehouses', warehouseRoutes);
router.use('/product_types', productTypeRoutes);
router.use('/products', productRoutes);
router.use('/shipment', shipmentRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/units', unitRoutes);

module.exports = router;

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: Inventory Management API
 *   version: 1.0.0
 *   description: API for managing inventory, users, orders, and more.
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the user
 *           readOnly: true
 *         firstName:
 *           type: string
 *           description: User's first name
 *         lastName:
 *           type: string
 *           description: User's last name
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *         role:
 *           type: string
 *           description: User's role (inventory_manager, retailer, administrator)
 *           enum: [inventory_manager, retailer, administrator]
 *         warehouseId:
 *           type: string
 *           format: uuid
 *           nullable: true
 *           description: ID of the warehouse the user belongs to
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     Product:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the product
 *           readOnly: true
 *         barcode:
 *           type: string
 *           description: Product barcode
 *         name:
 *           type: string
 *           description: Product name
 *         costPrice:
 *           type: number
 *           format: float
 *           description: Cost price of the product
 *         salePrice:
 *           type: number
 *           format: float
 *           description: Selling price of the product
 *         productTypeId:
 *           type: string
 *           format: uuid
 *           description: ID of the product type
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     Order:
 *       type: object
 *       properties:
 *         orderId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the order
 *           readOnly: true
 *         customerName:
 *           type: string
 *           description: Name of the customer placing the order
 *         trackingId:
 *           type: string
 *           description: Tracking ID for the shipment
 *         status:
 *           type: string
 *           description: Status of the order (pending, completed, cancelled)
 *           enum: [pending, completed, cancelled]
 *         retailerId:
 *           type: string
 *           format: uuid
 *           description: ID of the retailer associated with the order
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     Shipment:
 *       type: object
 *       properties:
 *         shipmentId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the shipment
 *           readOnly: true
 *         arrivalDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Expected or actual arrival date of the shipment
 *         supplierId:
 *           type: string
 *           format: uuid
 *           description: ID of the supplier
 *         inventoryManagerId:
 *           type: string
 *           format: uuid
 *           description: ID of the inventory manager responsible for the shipment
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     Warehouse:
 *       type: object
 *       properties:
 *         warehouseId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the warehouse
 *           readOnly: true
 *         name:
 *           type: string
 *           description: Warehouse name
 *         location:
 *           type: string
 *           description: Warehouse location
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     Supplier:
 *       type: object
 *       properties:
 *         supplierId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the supplier
 *           readOnly: true
 *         name:
 *           type: string
 *           description: Supplier name
 *         phone:
 *           type: string
 *           description: Supplier phone number
 *         email:
 *           type: string
 *           format: email
 *           description: Supplier email address
 *         address:
 *           type: string
 *           description: Supplier address
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     Unit:
 *       type: object
 *       properties:
 *         unitId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the unit
 *           readOnly: true
 *         name:
 *           type: string
 *           description: Unit name (e.g., Piece, Gram, Dozen)
 *         pieces:
 *           type: integer
 *           nullable: true
 *           description: Number of individual items a unit represents (if applicable)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     ProductType:
 *       type: object
 *       properties:
 *         productTypeId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the product type
 *           readOnly: true
 *         name:
 *           type: string
 *           description: Product type name
 *         image:
 *           type: string
 *           description: URL to an image representing the product type
 *         unitId:
 *           type: string
 *           format: uuid
 *           description: ID of the unit of measurement
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           readOnly: true
 *     OrderedProduct:
 *       type: object
 *       properties:
 *         orderedProductId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier
 *           readOnly: true
 *         quantity:
 *           type: integer
 *           description: Quantity of the product ordered
 *         unitPrice:
 *           type: number
 *           format: float
 *           description: Price of the product at the time of the order
 *         orderId:
 *           type: string
 *           format: uuid
 *           description: ID of the order
 *         productId:
 *           type: string
 *           format: uuid
 *           description: ID of the product
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 *     ShipmentProduct:
 *       type: object
 *       properties:
 *         shipmentProductId:
 *           type: string
 *           format: uuid
 *           description: Unique identifier
 *           readOnly: true
 *         quantity:
 *           type: integer
 *           description: Quantity of the product in the shipment
 *         shipmentId:
 *           type: string
 *           format: uuid
 *           description: ID of the shipment
 *         productId:
 *           type: string
 *           format: uuid
 *           description: ID of the product
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           readOnly: true
 * security:
 *   - bearerAuth: []  # Apply bearerAuth globally
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and User Registration
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Email already exists
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       401:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User Management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of users to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Starting point for pagination
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - role
 *               - warehouseId
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *               role:
 *                 type: string
 *                 description: User's role (inventory_manager, retailer, administrator)
 *               warehouseId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the warehouse the user belongs to
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *               role:
 *                 type: string
 *                 description: User's role (inventory_manager, retailer, administrator)
 *               warehouseId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the warehouse the user belongs to
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID (UUID)
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product Management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - barcode
 *               - name
 *               - costPrice
 *               - salePrice
 *               - productTypeId
 *             properties:
 *               barcode:
 *                 type: string
 *                 description: Product barcode
 *               name:
 *                 type: string
 *                 description: Product name
 *               costPrice:
 *                 type: number
 *                 format: float
 *                 description: Cost price of the product
 *               salePrice:
 *                 type: number
 *                 format: float
 *                 description: Selling price of the product
 *               productTypeId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the product type
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Product ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Product ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               barcode:
 *                 type: string
 *                 description: Product barcode
 *               name:
 *                 type: string
 *                 description: Product name
 *               costPrice:
 *                 type: number
 *                 format: float
 *                 description: Cost price of the product
 *               salePrice:
 *                 type: number
 *                 format: float
 *                 description: Selling price of the product
 *               productTypeId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the product type
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Product ID (UUID)
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order Management
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerName
 *               - status
 *               - retailerId
 *             properties:
 *               customerName:
 *                 type: string
 *                 description: Name of the customer placing the order
 *               trackingId:
 *                 type: string
 *                 description: Tracking ID for the shipment
 *               status:
 *                 type: string
 *                 description: Status of the order (pending, completed, cancelled)
 *               retailerId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the retailer associated with the order
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Order ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Order not found
 */

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Order ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *                 description: Name of the customer placing the order
 *               trackingId:
 *                 type: string
 *                 description: Tracking ID for the shipment
 *               status:
 *                 type: string
 *                 description: Status of the order (pending, completed, cancelled)
 *               retailerId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the retailer associated with the order
 *     responses:
 *       200:
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Order not found
 */

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Order ID (UUID)
 *     responses:
 *       204:
 *         description: Order deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Order not found
 */

/**
 * @swagger
 * tags:
 *   name: Shipments
 *   description: Shipment Management
 */

/**
 * @swagger
 * /shipments:
 *   get:
 *     summary: Get all shipments
 *     tags: [Shipments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shipment'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /shipments:
 *   post:
 *     summary: Create a new shipment
 *     tags: [Shipments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - arrivalDate
 *               - supplierId
 *               - inventoryManagerId
 *             properties:
 *               arrivalDate:
 *                 type: string
 *                 format: date
 *                 description: Expected or actual arrival date of the shipment
 *               supplierId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the supplier
 *               inventoryManagerId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the inventory manager responsible for the shipment
 *     responses:
 *       201:
 *         description: Shipment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shipment'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /shipments/{id}:
 *   get:
 *     summary: Get shipment by ID
 *     tags: [Shipments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Shipment ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shipment'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Shipment not found
 */

/**
 * @swagger
 * /shipments/{id}:
 *   put:
 *     summary: Update shipment by ID
 *     tags: [Shipments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Shipment ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               arrivalDate:
 *                 type: string
 *                 format: date
 *                 description: Expected or actual arrival date of the shipment
 *               supplierId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the supplier
 *               inventoryManagerId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the inventory manager responsible for the shipment
 *     responses:
 *       200:
 *         description: Shipment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shipment'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Shipment not found
 */

/**
 * @swagger
 * /shipments/{id}:
 *   delete:
 *     summary: Delete shipment by ID
 *     tags: [Shipments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Shipment ID (UUID)
 *     responses:
 *       204:
 *         description: Shipment deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Shipment not found
 */

/**
 * @swagger
 * tags:
 *   name: Warehouses
 *   description: Warehouse Management
 */

/**
 * @swagger
 * /warehouses:
 *   get:
 *     summary: Get all warehouses
 *     tags: [Warehouses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Warehouse'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /warehouses:
 *   post:
 *     summary: Create a new warehouse
 *     tags: [Warehouses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - location
 *             properties:
 *               name:
 *                 type: string
 *                 description: Warehouse name
 *               location:
 *                 type: string
 *                 description: Warehouse location
 *     responses:
 *       201:
 *         description: Warehouse created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Warehouse'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /warehouses/{id}:
 *   get:
 *     summary: Get warehouse by ID
 *     tags: [Warehouses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Warehouse ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Warehouse'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Warehouse not found
 */

/**
 * @swagger
 * /warehouses/{id}:
 *   put:
 *     summary: Update warehouse by ID
 *     tags: [Warehouses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Warehouse ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Warehouse name
 *               location:
 *                 type: string
 *                 description: Warehouse location
 *     responses:
 *       200:
 *         description: Warehouse updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Warehouse'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Warehouse not found
 */

/**
 * @swagger
 * /warehouses/{id}:
 *   delete:
 *     summary: Delete warehouse by ID
 *     tags: [Warehouses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Warehouse ID (UUID)
 *     responses:
 *       204:
 *         description: Warehouse deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Warehouse not found
 */

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Supplier Management
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Get all suppliers
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Create a new supplier
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Supplier name
 *               phone:
 *                 type: string
 *                 description: Supplier phone number
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Supplier email address
 *               address:
 *                 type: string
 *                 description: Supplier address
 *     responses:
 *       201:
 *         description: Supplier created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /suppliers/{id}:
 *   get:
 *     summary: Get supplier by ID
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Supplier ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Supplier not found
 */

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Update supplier by ID
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Supplier ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Supplier name
 *               phone:
 *                 type: string
 *                 description: Supplier phone number
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Supplier email address
 *               address:
 *                 type: string
 *                 description: Supplier address
 *     responses:
 *       200:
 *         description: Supplier updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Supplier not found
 */

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Delete supplier by ID
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Supplier ID (UUID)
 *     responses:
 *       204:
 *         description: Supplier deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Supplier not found
 */

/**
 * @swagger
 * tags:
 *   name: Units
 *   description: Units of Measure Management
 */

/**
 * @swagger
 * /units:
 *   get:
 *     summary: Get all units
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Unit'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /units:
 *   post:
 *     summary: Create a new unit
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Unit name (e.g., Piece, Gram, Dozen)
 *               pieces:
 *                 type: integer
 *                 nullable: true
 *                 description: Number of individual items a unit represents (if applicable)
 *     responses:
 *       201:
 *         description: Unit created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unit'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /units/{id}:
 *   get:
 *     summary: Get unit by ID
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unit ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unit'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Unit not found
 */

/**
 * @swagger
 * /units/{id}:
 *   put:
 *     summary: Update unit by ID
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unit ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Unit name (e.g., Piece, Gram, Dozen)
 *               pieces:
 *                 type: integer
 *                 nullable: true
 *                 description: Number of individual items a unit represents (if applicable)
 *     responses:
 *       200:
 *         description: Unit updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unit'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Unit not found
 */

/**
 * @swagger
 * /units/{id}:
 *   delete:
 *     summary: Delete unit by ID
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unit ID (UUID)
 *     responses:
 *       204:
 *         description: Unit deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Unit not found
 */

/**
 * @swagger
 * tags:
 *   name: Product Types
 *   description: Product Type Management
 */

/**
 * @swagger
 * /product-types:
 *   get:
 *     summary: Get all product types
 *     tags: [Product Types]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductType'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /product-types:
 *   post:
 *     summary: Create a new product type
 *     tags: [Product Types]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - unitId
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product type name
 *               image:
 *                 type: string
 *                 description: URL to an image representing the product type
 *               unitId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the unit of measurement
 *     responses:
 *       201:
 *         description: Product type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductType'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /product-types/{id}:
 *   get:
 *     summary: Get product type by ID
 *     tags: [Product Types]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Product type ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductType'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Product type not found
 */

/**
 * @swagger
 * /product-types/{id}:
 *   put:
 *     summary: Update product type by ID
 *     tags: [Product Types]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Product type ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product type name
 *               image:
 *                 type: string
 *                 description: URL to an image representing the product type
 *               unitId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the unit of measurement
 *     responses:
 *       200:
 *         description: Product type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductType'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product type not found
 */

/**
 * @swagger
 * /product-types/{id}:
 *   delete:
 *     summary: Delete product type by ID
 *     tags: [Product Types]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Product type ID (UUID)
 *     responses:
 *       204:
 *         description: Product type deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product type not found
 */

/**
 * @swagger
 * tags:
 *   name: Ordered Products
 *   description: Ordered Product (Order-Product Relationship) Management
 */

/**
 * @swagger
 * /ordered-products:
 *   get:
 *     summary: Get all ordered products
 *     tags: [Ordered Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderedProduct'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /ordered-products:
 *   post:
 *     summary: Create a new ordered product
 *     tags: [Ordered Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *               - unitPrice
 *               - orderId
 *               - productId
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product ordered
 *               unitPrice:
 *                 type: number
 *                 format: float
 *                 description: Price of the product at the time of the order
 *               orderId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the order
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the product
 *     responses:
 *       201:
 *         description: Ordered product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderedProduct'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /ordered-products/{id}:
 *   get:
 *     summary: Get ordered product by ID
 *     tags: [Ordered Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Ordered product ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderedProduct'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Ordered product not found
 */

/**
 * @swagger
 * /ordered-products/{id}:
 *   put:
 *     summary: Update ordered product by ID
 *     tags: [Ordered Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Ordered product ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product ordered
 *               unitPrice:
 *                 type: number
 *                 format: float
 *                 description: Price of the product at the time of the order
 *               orderId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the order
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the product
 *     responses:
 *       200:
 *         description: Ordered product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderedProduct'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Ordered product not found
 */

/**
 * @swagger
 * /ordered-products/{id}:
 *   delete:
 *     summary: Delete ordered product by ID
 *     tags: [Ordered Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Ordered product ID (UUID)
 *     responses:
 *       204:
 *         description: Ordered product deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Ordered product not found
 */

/**
 * @swagger
 * tags:
 *   name: Shipment Products
 *   description: Shipment Product (Shipment-Product Relationship) Management
 */

/**
 * @swagger
 * /shipment-products:
 *   get:
 *     summary: Get all shipment products
 *     tags: [Shipment Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ShipmentProduct'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /shipment-products:
 *   post:
 *     summary: Create a new shipment product
 *     tags: [Shipment Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *               - shipmentId
 *               - productId
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product in the shipment
 *               shipmentId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the shipment
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the product
 *     responses:
 *       201:
 *         description: Shipment product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShipmentProduct'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /shipment-products/{id}:
 *   get:
 *     summary: Get shipment product by ID
 *     tags: [Shipment Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Shipment product ID (UUID)
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShipmentProduct'
 *       400:
 *         description: Invalid ID format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Shipment product not found
 */

/**
 * @swagger
 * /shipment-products/{id}:
 *   put:
 *     summary: Update shipment product by ID
 *     tags: [Shipment Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Shipment product ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product in the shipment
 *               shipmentId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the shipment
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the product
 *     responses:
 *       200:
 *         description: Shipment product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShipmentProduct'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Shipment product not found
 */

/**
 * @swagger
 * /shipment-products/{id}:
 *   delete:
 *     summary: Delete shipment product by ID
 *     tags: [Shipment Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Shipment product ID (UUID)
 *     responses:
 *       204:
 *         description: Shipment product deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Shipment product not found
 */
