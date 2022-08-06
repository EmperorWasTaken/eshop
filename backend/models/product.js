const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
    
});

exports.Product = mongoose.model('Product', productSchema);