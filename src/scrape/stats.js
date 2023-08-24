const axios = require("axios");
const cheerio = require("cheerio");
const {
  seasonStatsStructure,
  categoryType,
  careerStatsStructure,
} = require("../utils/constants.js");
const { modeProcessor } = require("../utils/mode.js");

async function getStats(config) {
  const {
    playerUrl,
    category = categoryType.hitting,
    modeType = "season",
  } = config;
  try {
    let url = playerUrl;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const tableStats = $("table.boxed").filter((index, element) => {
      return $(element).find(`p:contains("${category} Stats")`).length > 0;
    })[0];
    const rows = $(tableStats).find(
      `tr${modeType === "career" ? ":last-child" : ""}`
    );
    const seasons = [];

    rows.each((index, element) => {
      if (modeType === "career" || index >= 2) {
        const obj = Object.assign(
          {},
          modeType === "season"
            ? seasonStatsStructure.hitting
            : careerStatsStructure.hitting
        );
        const columns = $(element).find("td");
        const rowData = [];

        columns.each((colIndex, colElement) => {
          rowData.push($(colElement).text().trim());
        });

        rowData.forEach((item, index, array) => {
          modeProcessor(modeType, item, index, obj);
        });

        seasons.push(obj);
      }
    });

    let statsObj = {};
    if (modeType === "season") {
      seasons.splice(-2);
      // return seasons array but remove last two indexes (those are career numbers and header)

      statsObj = seasons.reduce((acc, curr) => {
        if (curr.year.length === 4) {
          acc[curr.year] = curr;
        }
        return acc;
      }, {});
    } else {
      statsObj.career = seasons.at(0);
    }

    return statsObj;
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { getStats };
