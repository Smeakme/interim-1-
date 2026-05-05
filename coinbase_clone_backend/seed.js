require("dotenv").config();
const mongoose = require("mongoose");
const Crypto = require("./models/Crypto");

const seedData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 64231.50,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    change24h: 1.25
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 3452.12,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    change24h: -0.85
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 145.67,
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    change24h: 4.20
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: 0.45,
    image: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
    change24h: 0.12
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 0.62,
    image: "https://assets.coingecko.com/coins/images/44/large/xrp.png",
    change24h: -1.45
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.16,
    image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
    change24h: 2.30
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB for seeding...");

    // Optional: Clear existing data
    // await Crypto.deleteMany({});
    // console.log("🗑️ Cleared existing crypto data.");

    await Crypto.insertMany(seedData);
    console.log("🌱 Database seeded successfully!");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
