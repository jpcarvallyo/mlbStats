const axios = require("axios");
const cheerio = require("cheerio");
const {
  seasonStatsStructure,
  categoryType,
  careerStatsStructure,
} = require("../utils/constants.js");
const { tableQuery, rowQuery } = require("../utils/cheerioQueries.js");
const { modeProcessor } = require("../utils/mode.js");

async function getStats(config) {
  const {
    playerUrl,
    category = categoryType.hitting,
    isSeason = true,
    isCareer = false,
  } = config;
  try {
    let url = playerUrl;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const tableStats = $("table.boxed").filter((index, element) => {
      return $(element).find(tableQuery(category)).length > 0;
    })[0];

    const rows = $(tableStats).find(rowQuery(isSeason, isCareer));
    const seasons = [];

    rows.each((index, element) => {
      if (isCareer || index >= 2) {
        const obj = Object.assign(
          {},
          isSeason ? seasonStatsStructure.hitting : careerStatsStructure.hitting
        );
        const columns = $(element).find("td");
        const rowData = [];

        columns.each((colIndex, colElement) => {
          rowData.push($(colElement).text().trim());
        });

        rowData.forEach((item, index, array) => {
          // todo
          modeProcessor(isSeason, isCareer, item, index, obj);
        });

        seasons.push(obj);
      }
    });

    let statsObj = {};
    if (isSeason) {
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
