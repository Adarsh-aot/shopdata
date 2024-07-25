const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  product_id: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  user: { type: String, required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;