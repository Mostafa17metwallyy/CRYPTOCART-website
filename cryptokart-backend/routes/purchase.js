const express = require("express");
const router = express.Router();
const Purchase = require("../models/Purchase");

// POST a purchase
router.post("/", async (req, res) => {
  try {
    const { items, total, walletAddress, shippingAddress, status, transactionHash } = req.body;
    const purchase = new Purchase({
      items,
      total,
      walletAddress,
      shippingAddress,
      status,
      transactionHash,
    });
    await purchase.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to save purchase." });
  }
});

// GET purchases (optional filter)
router.get("/", async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const purchases = await Purchase.find(query).sort({ createdAt: -1 });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch purchases." });
  }
});

module.exports = router;
