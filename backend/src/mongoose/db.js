const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce2', {
    useCreateIndex: true,
    useNewUrlParser: true,
    // useCreateIndex: true
    useUnifiedTopology: true
})