const express = require('express')
const Products = require('../model/productsModel')
const expressAsyncHandler = require('express-async-handler')
const data = require('../data')
const router = express.Router()

router.get('/seed', expressAsyncHandler(async (req, res) => {
    await Products.remove({})
    const createProduct = await Products.insertMany(data.products)
    res.send({ createProduct })
}))
router.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Products.find({})
    res.send(products)
}));
router.get('/:id', expressAsyncHandler(async (req, res) => {
    const productById = await Products.findById(req.params.id)
    if (productById) {
        res.send(productById)
    } else {
        res.status(404).send({ message: 'product is not found' })
    }
}))

module.exports = router