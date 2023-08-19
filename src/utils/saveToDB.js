const fs = require("fs");
const path = require("path");
const { connectDB, getDB } = require("../../database");
// connect to db;

const savePlayerStats = async () => {
  await connectDB();
  const db = getDB();
  const playersCollection = db.collection("players");
  const twoLevelsUpDir = path.join(__dirname, "..", "..");
  const pathToJson = `${twoLevelsUpDir}/data/homerunlist.json`;

  const readStream = fs.createReadStream(pathToJson, "utf8");
  let playerData = "";
  readStream.on("data", (chunk) => {
    playerData += chunk;
  });

  readStream.on("end", async () => {
    console.log(playerData);
    playerData = JSON.parse(playerData);
    for (const player of playerData) {
      // Check if the player already exists
      const query = {
        firstName: player.firstName,
        lastName: player.lastName,
        // Add more fields as needed
      };

      const document = await playersCollection.findOne(query);

      if (!document) {
        // Player doesn't exist, insert the new player
        await playersCollection.insertOne(player);
        console.log("Player inserted successfully!");
      } else {
        console.log("Player already exists!");
      }
    }
  });
};

savePlayerStats();

module.exports = {
  savePlayerStats,
};
