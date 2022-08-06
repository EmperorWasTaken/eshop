const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
    
});

exports.User = mongoose.model('User', userSchema);