const Crypto = require("../models/Crypto");

// GET /crypto — all cryptocurrencies
const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.status(200).json({ cryptos });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// GET /crypto/gainers — top gainers (highest 24h change)
const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 }).limit(10);
    res.status(200).json({ gainers });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// GET /crypto/new — newest listings
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ newListings });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// POST /crypto — add a new cryptocurrency
const addCrypto = async (req, res) => {
  const { name, symbol, price, image, change24h } = req.body;

  try {
    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({ message: "Cryptocurrency added successfully.", crypto });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

module.exports = { getAllCryptos, getTopGainers, getNewListings, addCrypto };
