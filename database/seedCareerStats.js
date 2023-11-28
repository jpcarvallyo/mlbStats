const { readFileAsync } = require("../src/utils/miscellaneous/readFileAsync");
const path = require("path");
const { categoryType } = require("../src/utils/constants/");
// const { connectDB, getDB } = require("./index");
const { getStats, getBioData } = require("../src/scrape/");

// const { upsertPlayer } = require("../src/models/upsertPlayer");

async function main() {
  // await connectDB();
  // const db = getDB();

  // TODO: Rework the collection to grab all the urls from the playersUrl array, then call the getStats function
  // const playersCollection = db.collection("players");
  // const players = await playersCollection.find({}).toArray();
  // const upsertPromises = players.map(async (player) => {
  //   const stats = await getStats(player);
  //   return await upsertPlayer(player, stats);
  // });

  // example would be:
  const filePath = `${path.join(__dirname, "..")}/data/playerUrls.json`;
  console.log(filePath);
  const playerUrlsJson = await readFileAsync(filePath);
  const playerUrls = JSON.parse(playerUrlsJson).slice(0, 10);
  const results = [];
  for (const playerUrl of playerUrls) {
    console.log(playerUrl);
    const config = {
      playerUrl,
      category: categoryType.hitting,
      isSeason: true,
      isCareer: true,
    };
    const stats = await getStats(config);
    const bioData = await getBioData(playerUrl);
    const result = { stats: { ...stats }, bio: { ...bioData } };
    results.push(result);
  }

  const dictionary = {};
  results.reduce((dictionary, player) => {
    dictionary[player.bio.birthName] = player;

    return dictionary;
  }, dictionary);
  console.log(dictionary);
  // console.log(results);
  // const resultsJson = JSON.stringify(results);
  // console.log(resultsJson);
  // const upsertPromises = playerUrls.map(async (playerUrl) => {
  //   const config = {
  //     playerUrl,
  //     category: categoryType.hitting,
  //   };
  //   const result = await getStats(config);
  //   return result;
  //   // return await upsertPlayer(player, stats);
  // });

  try {
    // const results = await Promise.allSettled(upsertPromises);
    // results.forEach((result, index) => {
    //   if (result.status === "fulfilled") {
    //     console.log(`Promise ${index} fulfilled with value:`, result.value);
    //   } else {
    //     console.error(`Promise ${index} rejected with reason:`, result.reason);
    //   }
    // });
  } catch (error) {
    console.error("Error upserting players: ", error);
  }
}

main();
