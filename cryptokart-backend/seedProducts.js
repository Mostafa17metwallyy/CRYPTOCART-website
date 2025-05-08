const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    return seedProducts();
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));

async function seedProducts() {
  try {
    await Product.deleteMany();

    const products = [
      {
        name: "Modern Chair",
        image: "/assets/laptop.png",
        description: "A sleek modern chair for stylish homes.",
        price: "0.12 ETH",
        rating: 4.5,
        size: '40"',
        width: '35"',
      },
      {
        name: "Desk Lamp",
        image: "/assets/laptop.png",
        description: "Minimalist LED desk lamp with adjustable neck.",
        price: "0.05 ETH",
        rating: 4.7,
        size: '15"',
        width: '6"',
      },
      {
        name: "Ergonomic Keyboard",
        image: "/assets/laptop.png",
        description: "Mechanical ergonomic keyboard with RGB lighting.",
        price: "0.18 ETH",
        rating: 4.8,
        size: '17"',
        width: '5"',
      },
      {
        name: "Wireless Mouse",
        image: "/assets/laptop.png",
        description: "Smooth tracking wireless mouse for productivity.",
        price: "0.08 ETH",
        rating: 4.6,
        size: '4"',
        width: '2.5"',
      },
    ];

    await Product.insertMany(products);
    console.log("✅ Products seeded");
    process.exit();
  } catch (err) {
    console.error("❌ Seed Error:", err);
    process.exit(1);
  }
}
