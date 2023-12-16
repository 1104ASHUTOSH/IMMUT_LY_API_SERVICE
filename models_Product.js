// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  price: { type: Number, required: true },
  availabilityStatus: { type: String, enum: ['available', 'out_of_stock'], required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
