const mongoose = require('mongoose');

const productscheema = new mongoose.Schema({
  name: { type: String, required: true },
  description : { type: String, required: true } ,
  price : { type: Number, required: true },
  quantity : { type: Number, required: true }
});

const product = mongoose.model('product', productscheema);

module.exports = product;