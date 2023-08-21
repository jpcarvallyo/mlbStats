const { connectDB, getDB } = require("./index");
const { getStats } = require("../src/utils/scrape/");
const { upsertPlayer } = require("../src/models/upsertPlayer");

async function main() {
  await connectDB();
  const db = getDB();

  // TODO: Rework the collection to grab all the urls from the playersUrl array, then call the getStats function
  // const playersCollection = db.collection("players");
  // const players = await playersCollection.find({}).toArray();
  // const upsertPromises = players.map(async (player) => {
  //   const stats = await getStats(player);
  //   return await upsertPlayer(player, stats);
  // });

  // example would be:
  // const playerUrls = fs.readFile(pathToFile);
  // const upsertPromises = playerUrls.map(async (playerUrl) => {
  //   await getStats(playerUrl, seasonType.hitting, 'season');
  //   return await upsertPlayer(player, stats);
  // })

  // try {
  //   const results = await Promise.allSettled(upsertPromises);
  //   results.forEach((result, index) => {
  //     if (result.status === "fulfilled") {
  //       console.log(`Promise ${index} fulfilled with value:`, result.value);
  //     } else {
  //       console.error(`Promise ${index} rejected with reason:`, result.reason);
  //     }
  //   });
  // } catch (error) {
  //   console.error("Error upserting players: ", error);
  // }
}

main();
