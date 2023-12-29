const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title Required"],
        minlength: [2, "Product Title must be at least 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Product Price Required"]
    },
    description: {
        type: String
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;