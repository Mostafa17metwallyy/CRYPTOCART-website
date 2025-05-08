const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: String,
      quantity: Number,
    },
  ],
  total: String,
  walletAddress: String,
  shippingAddress: String,
  status: { type: String, enum: ["done", "failed"], default: "failed" },
  transactionHash: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Purchase", purchaseSchema);