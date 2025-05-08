const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String, // e.g. '0.12 ETH'
  rating: Number,
  size: String,
  width: String
});

module.exports = mongoose.model("Product", productSchema);
