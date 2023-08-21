const axios = require("axios");
const cheerio = require("cheerio");
const cleanUrl = require("../careerStatsUrlLinter");

async function careerStats(player, playerUrl) {
  try {
    let url = playerUrl || cleanUrl(player);
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let nameInPage = $("div.intro h1:first-child").text();

    nameInPage = nameInPage.substring(0, nameInPage.length - 6).toLowerCase();

    const playerName = `${player.firstName} ${player.lastName}`.toLowerCase();

    if (nameInPage !== playerName) {
      console.log("Page does not correspond to player");

      return;
    }

    const tablesWithHittingStats = $("table.boxed").filter((index, element) => {
      return $(element).find('p:contains("Hitting Stats")').length > 0;
    })[0];
    const rows = $(tablesWithHittingStats).find("tr:last-child");

    const careerStats = {
      years: null,
      games: null,
      atBat: null,
      runs: null,
      hits: null,
      doubles: null,
      triples: null,
      homeruns: null,
      grandSlams: null,
      runBattedIn: null,
      baseOnBalls: null,
      intentionBallOnBalls: null,
      strikeOut: null,
      sacrificeHit: null,
      sacrificeFly: null,
      hitByPitch: null,
      groundIntoDoublePlay: null,
      battingAverage: null,
      onBasePercentage: null,
      sluggingAverage: null,
    };

    rows.each((index, element) => {
      const columns = $(element).find("td");
      const rowData = [];

      columns.each((colIndex, colElement) => {
        rowData.push($(colElement).text().trim());
      });

      rowData.forEach((item, index, array) => {
        switch (index) {
          case 0:
            careerStats.years = item;
            break;
          case 1:
            careerStats.games = item;
            break;
          case 2:
            careerStats.atBat = item;
            break;
          case 3:
            careerStats.runs = item;
            break;
          case 4:
            careerStats.hits = item;
            break;
          case 5:
            careerStats.doubles = item;
            break;
          case 6:
            careerStats.triples = item;
            break;
          case 7:
            careerStats.homeruns = item;
            break;
          case 8:
            careerStats.grandSlams = item;
            break;
          case 9:
            careerStats.runBattedIn = item;
            break;
          case 10:
            careerStats.baseOnBalls = item;
            break;
          case 11:
            careerStats.intentionBallOnBalls = item;
            break;
          case 12:
            careerStats.strikeOut = item;
            break;
          case 13:
            careerStats.sacrificeHit = item;
            break;
          case 14:
            careerStats.sacrificeFly = item;
            break;
          case 15:
            careerStats.hitByPitch = item;
            break;
          case 16:
            careerStats.groundIntoDoublePlay = item;
            break;
          case 17:
            careerStats.battingAverage = item;
            break;
          case 18:
            careerStats.onBasePercentage = item;
            break;
          case 19:
            careerStats.sluggingAverage = item;
            break;
        }
      });
    });
    return careerStats;
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = careerStats;
