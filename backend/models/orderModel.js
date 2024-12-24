const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId: String,
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
        },
        quantity: Number,
        price: Number,
        total: Number,  // calculated as quantity * price
    }],
    totalAmount: Number,  // Sum of all product totals
    shippingAddress: String,
    paymentStatus: String,  // Paid/Unpaid
    shippingMethod: String,  // Standard/Express
    status: String,  // Order status like 'Pending', 'Shipped', etc.
    paymentMethod: String,  // Credit Card, PayPal, etc.
}, {
    timestamps: true
});

const OrderModel = mongoose.model("Order", orderSchema);



module.exports = OrderModel;
