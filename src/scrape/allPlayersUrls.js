const axios = require("axios");
const cheerio = require("cheerio");

async function scrapePlayerUrlsFromPage(url, playerHrefs) {
  try {
    // scrape every url in the page
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const playerUrls = $("table.boxed a[href*='player.php?p='] ");

    playerUrls.each((index, element) => {
      const urlPart = $(element).attr("href");
      const urlWhole = `https://www.baseball-almanac.com/players/${urlPart}`;

      playerHrefs.push(urlWhole);
    });
  } catch (error) {
    throw error;
  }
}

async function generatePages() {
  try {
    // scrape every url in the page
    // general url shape
    const url = "https://www.baseball-almanac.com/players/ballplayer.shtml";
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const playerUrls = $("table.boxed a[href*='player-'] ");
    const hrefs = [];

    playerUrls.each((index, element) => {
      const urlPart = $(element).attr("href");
      const urlWhole = `https://www.baseball-almanac.com/players/${urlPart}`;

      hrefs.push(urlWhole);
    });

    return hrefs;
  } catch (error) {
    throw error;
  }
}

async function generateAllPlayerUrls() {
  const playerHrefs = [];
  const urls = await generatePages();

  // Use .map() to create an array of promises and then await them
  const promises = urls.map(async (url) => {
    await scrapePlayerUrlsFromPage(url, playerHrefs);
  });

  // Wait for all the promises to settle
  await Promise.all(promises);

  // Now you can use Promise.allSettled() on the array of URLs if needed
  const results = await Promise.allSettled(urls);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index} fulfilled with value:`, result.value);
    } else {
      console.error(`Promise ${index} rejected with reason:`, result.reason);
    }
  });

  return playerHrefs;
}

// Example of how to writeToFile on machine.
// (async () => {
//   const twoLevelsUpDir = path.join(__dirname, "..", "..", "..");
//   const pathToJson = `${twoLevelsUpDir}/data/playerUrls.json`;
//   const hrefs = await generateAllPlayerUrls();
//   await writeToFile(hrefs, pathToJson);
// })();

module.exports = {
  generatePages,
  generateAllPlayerUrls,
  scrapePlayerUrlsFromPage,
};
