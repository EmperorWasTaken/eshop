const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const api = process.env.API_URL;
app.use(express.json()); //Middleware
app.use(morgan('tiny')); // For logging

// Mongoose Schema
const productSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    countInStock: Number
    
});

// Product model
const Product = mongoose.model('Product', productSchema);

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "bubblegum",
        image: "some_url",
        countInStock: 2
    }
    res.send(product);
});

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Database Connected!');
})
.catch((err) => {
    console.log(err);
})

app.post(`${api}/products`, (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    product.save().then((createdProduct => {
        res.status(201).json(createdProduct);
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
});

app.listen(3000, ()=>{
    console.log("Server is running now http://localhost:3000");
});