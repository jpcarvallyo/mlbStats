const axios = require("axios");
const cheerio = require("cheerio");
const { categoryType } = require("../utils/constants.js");
const { tableQuery, rowQuery } = require("../utils/cheerioQueries.js");
const { rowsData } = require("../utils/processors.js");

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
    const rowConfig = {
      isCareer,
      isSeason,
      $,
    };
    const statsObj = rowsData(rows, rowConfig);

    return statsObj;
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { getStats };
