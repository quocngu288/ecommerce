const express = require('express')
const expressAsyncHandler = require('express-async-handler');
const orderRouter = express.Router();
const Order = require('../model/orderModel')
const utils = require('../util')

orderRouter.post('/', utils.isAuth, expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is Empty' })
    }
    else {
        let order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemPrice: req.body.itemPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        })
        console.log(order);
        const createOrder = await order.save();
        console.log("create", createOrder);
        res.send({ message: 'New order created', order: createOrder })
    }
}))
orderRouter.get('/:id', utils.isAuth, expressAsyncHandler(async (req, res) => {
    const orderDetail = await Order.findById(req.params.id);
    if (orderDetail) {
        res.send(orderDetail)
    } else {
        res.status(404).send({ message: 'order not found' })
    }
}))
orderRouter.put('/:id/pay', utils.isAuth, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }
        const updateOrder = await order.save();
        res.send({ message: 'order Paid', order: updateOrder })
    } else {
        res.status(404).send({ message: 'order not found' })
    }
}))
module.exports = orderRouter