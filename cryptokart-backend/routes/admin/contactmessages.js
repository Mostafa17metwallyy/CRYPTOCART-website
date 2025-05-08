const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');  // Ensure the correct model import

// GET all contact messages for admin
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find();  // Fetch all contact messages from the database
    console.log("Fetched contact messages:", messages);  // Log the fetched messages
    res.json(messages);  // Send the messages as a JSON response
  } catch (err) {
    console.error("Error fetching contact messages:", err);
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
});

module.exports = router;
