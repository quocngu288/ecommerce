const express = require('express')
const User = require('../model/userModel')
const expressAsyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const data = require('../data')
const router = express.Router()
const utils = require('../util')
router.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({})
    const createUser = await User.insertMany(data.users)
    res.send({ createUser })
}))
router.post('/register', expressAsyncHandler(async (req, res) => {
    const user = {
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email
    }
    const createUser = new User(user)
    createUser.save()
    res.status(201).send({
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
        isAdmin: createUser.isAdmin,
        token: utils.generateToken(createUser)
    })
}))
router.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email }) //lâý ra user có email là email body gửi lên
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                password: user.password,
                isAdmin: user.isAdmin,
                token: utils.generateToken(user)
            })
            return user
        }
    }
    res.status(404).send({ message: 'Invalid email and password' })
}))
module.exports = router