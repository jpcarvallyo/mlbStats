const { connectDB, getDB } = require("./index");
const careerStats = require("../src/utils/scrape/careerStats");
const { upsertPlayer } = require("../src/models/upsertPlayer");

async function main() {
  await connectDB();
  const db = getDB();
  const playersCollection = db.collection("players");
  const players = await playersCollection.find({}).toArray();
  const upsertPromises = players.map(async (player) => {
    const stats = await careerStats(player);
    return await upsertPlayer(player, stats);
  });
  try {
    const results = await Promise.allSettled(upsertPromises);
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index} fulfilled with value:`, result.value);
      } else {
        console.error(`Promise ${index} rejected with reason:`, result.reason);
      }
    });
  } catch (error) {
    console.error("Error upserting players: ", error);
  }
}

main();
