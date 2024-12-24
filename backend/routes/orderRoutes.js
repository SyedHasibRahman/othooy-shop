const express = require('express');
const router = express.Router();
const orderController = require('../controller/order/orderController');

// Create a new order
router.post('/orders', orderController.createOrder);

// Get all orders
router.get('/orders', orderController.getAllOrders);

// Get a specific order by ID
router.get('/orders/:id', orderController.getOrderById);

// Update an order status
router.put('/orders/:id/status', orderController.updateOrderStatus);

module.exports = router;
