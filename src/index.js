const fs = require("fs");
const { connectDB } = require("../database");
const { homeruns } = require("./utils/scrape");

async function main() {
  await connectDB();
  const runs = await homeruns();
  console.log(runs);
}

main();
