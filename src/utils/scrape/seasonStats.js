const axios = require("axios");
const cheerio = require("cheerio");
const { seasonStatsStructure } = require("../constants.js");

async function seasonStats(playerUrl) {
  try {
    let url = playerUrl;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const tablesWithHittingStats = $("table.boxed").filter((index, element) => {
      return $(element).find('p:contains("Hitting Stats")').length > 0;
    })[0];
    const rows = $(tablesWithHittingStats).find("tr");
    const seasons = [];

    rows.each((index, element) => {
      if (index >= 2) {
        const seasonObj = Object.assign({}, seasonStatsStructure);
        const columns = $(element).find("td");
        const rowData = [];

        columns.each((colIndex, colElement) => {
          rowData.push($(colElement).text().trim());
        });

        rowData.forEach((item, index, array) => {
          switch (index) {
            case 0:
              seasonObj.year = item;
              break;
            case 1:
              seasonObj.age = item;
              break;
            case 2:
              seasonObj.team = item;
              break;
            case 3:
              seasonObj.games = item;
              break;
            case 4:
              seasonObj.atBat = item;
              break;
            case 5:
              seasonObj.runs = item;
              break;
            case 6:
              seasonObj.hits = item;
              break;
            case 7:
              seasonObj.doubles = item;
              break;
            case 8:
              seasonObj.triples = item;
              break;
            case 9:
              seasonObj.homeruns = item;
              break;
            case 10:
              seasonObj.grandSlams = item;
              break;
            case 11:
              seasonObj.runBattedIn = item;
              break;
            case 12:
              seasonObj.baseOnBalls = item;
              break;
            case 13:
              seasonObj.intentionBallOnBalls = item;
              break;
            case 14:
              seasonObj.strikeOut = item;
              break;
            case 15:
              seasonObj.sacrificeHit = item;
              break;
            case 16:
              seasonObj.sacrificeFly = item;
              break;
            case 17:
              seasonObj.hitByPitch = item;
              break;
            case 18:
              seasonObj.groundIntoDoublePlay = item;
              break;
            case 19:
              seasonObj.battingAverage = item;
              break;
            case 20:
              seasonObj.onBasePercentage = item;
              break;
            case 21:
              seasonObj.sluggingAverage = item;
              break;
          }
        });
        seasons.push(seasonObj);
      }
    });
    seasons.splice(-2);
    // return seasons array but remove last two indexes (those are career numbers and header)
    const seasonsObj = seasons.reduce((acc, curr) => {
      if (curr.year.length === 4) {
        acc[curr.year] = curr;
      }
      return acc;
    }, {});
    return seasonsObj;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example of how to use seasonStats function
// (async () => {
//   const data = await seasonStats(
//     "https://www.baseball-almanac.com/players/player.php?p=bondsba01"
//   );
//   console.log(data);
// })();

module.exports = { seasonStats };
