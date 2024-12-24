const OrderModel = require("../../models/orderModel");



// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const {
            name,
            number,
            title,
            quantity,
            price,
            status,
            paymentStatus,
            shippingAddress,
            shippingMethod,
            trackingNumber,
            discountApplied,
            tax,
            totalAmount,
            paymentMethod
        } = req.body;

        // Create a new order
        const order = new OrderModel({
            name,
            number,
            title,
            quantity,
            price,
            status,
            paymentStatus,
            shippingAddress,
            shippingMethod,
            trackingNumber,
            discountApplied,
            tax,
            totalAmount,
            paymentMethod
        });

        // Save the order to the database
        await order.save();

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
    try {
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
