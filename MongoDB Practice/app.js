require('dotenv').config();
const express = require('express')
require('./Database/connection')
const product = require('./Routes/productRoute')
const review = require('./Routes/reviewRoute')
const app = express()


app.use(express.json())
app.use('/api/product',product)
app.use('/api/review',review)


app.listen(3000,() => {
    console.log('The port is running 3000')
})