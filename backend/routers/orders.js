const {Order} = require('../models/order');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const orderList = await Order.find();

    if(!orderList) {
        res.status(500).json({success: false}) // Logging
    }
    res.send(orderList);
})

router.post(`/`, (req, res) => {
    const order = new Order({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    order.save().then((createdOrder => {
        res.status(201).json(createdOrder);
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;