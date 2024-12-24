const addToCartModel = require("../../models/cartProduct");
const OrderModel = require("../../models/orderModel");

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, shippingAddress, paymentMethod, shippingMethod } = req.body;

        // Fetch cart items for the user
        const cartItems = await addToCartModel.find({ userId }).populate('productId');

        if (cartItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Your cart is empty!'
            });
        }

        // Calculate total amount and construct the products list
        let totalAmount = 0;
        const products = cartItems.map(item => {
            const totalPrice = item.quantity * item.productId.sellingPrice;
            totalAmount += totalPrice;
            return {
                productId: item.productId._id,
                title: item.productId.productName,
                quantity: item.quantity,
                price: item.productId.sellingPrice,
                total: totalPrice
            };
        });

        // Create a new order from cart data
        const order = new OrderModel({
            userId,
            products,
            totalAmount,
            shippingAddress,
            paymentMethod,
            shippingMethod,
            status: 'Pending',  // Default order status
            paymentStatus: 'Unpaid',  // Default payment status
        });

        // Save the order to the database
        await order.save();

        // Clear the user's cart after successful order
        await addToCartModel.deleteMany({ userId });

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            order
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to create order'
        });
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    /* try {
        const orders = await OrderModel.find();
        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch orders'
        });
    } */


    try {
        // Fetch orders with populated product data
        const orders = await OrderModel.find()
            .populate({
                path: 'products.productId', // Populate the productId field in each product
                // select: 'productName brandName price sellingPrice productImage' 
                // Select specific fields to include in the response
            });

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch orders'
        });
    }
};

// Get a specific order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await OrderModel.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }
        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch order'
        });
    }
};

// Update an order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        console.log(status);
        const order = await OrderModel.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Order status updated successfully',
            order
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to update order status'
        });
    }
};
