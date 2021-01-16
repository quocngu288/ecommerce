const env = require('dotenv')
env.config()
const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const Cors = require('cors');
require('./mongoose/db')

const usersRouter = require('./routers/usersRouter')
const productsRouter = require('./routers/productsRouter')
const orderRouter = require('./routers/orderRouter');
const port = process.env.PORT || 5000
app.use(Cors())
app.get('/', (req, res) => {
    res.send('Nguyễn Chu Quốc Ngữ')
})
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/order', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIEND_ID || 'sb')
})
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
app.listen(port, () => {
    console.log('server is running on port 5000');
})
