const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    orderItems: [
        {
            countInStock: { type: Number, required: true },
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            }
        }
    ],
    shippingAddress: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        code: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: {
        checked: { type: String, required: true }
    },
    paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String
    },
    itemPrice: { type: String, required: true },
    shippingPrice: { type: String, required: true },
    taxPrice: { type: String, required: true },
    totalPrice: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
},
    {
        timestamps: true
    })
const order = mongoose.model('Order', orderSchema);
module.exports = order;