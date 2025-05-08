const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: "Message received." });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to save contact message." });
  }
});

module.exports = router;
