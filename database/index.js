const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

// Load the appropriate .env file based on NODE_ENV
if (process.env.NODE_ENV === "local") {
  dotenv.config({ path: ".env.development" });
} else {
  dotenv.config({ path: ".env.production" });
}
console.log(`env: ${process.env.NODE_ENV}`);

const url = process.env.MONGODB_URI;

let db; // Store the database reference

async function connectDB() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    // console.log("Connected to MongoDB");
    db = client.db();
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    throw error;
  }
}

// Export a function to get the reference to the connected database
function getDB() {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}

module.exports = {
  connectDB,
  getDB,
};
