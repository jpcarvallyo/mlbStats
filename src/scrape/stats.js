const axios = require("axios");
const cheerio = require("cheerio");
const { categoryType } = require("../utils/constants/");
const { tableQuery, rowQuery } = require("../utils/cheerioQueries.js");
const { rowsData } = require("../utils/parse/rowData.js");

async function getStats(config) {
  const {
    playerUrl,
    categories = [categoryType.hitting],
    isSeason = true,
    isCareer = false,
  } = config;
  try {
    let url = playerUrl;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const statsObj = categories.map((category) => {
      const tableStats = $("table.boxed").filter((index, element) => {
        return $(element).find(tableQuery(category)).length > 0;
      })[0];

      const rows = $(tableStats).find(rowQuery(isSeason, isCareer));
      const rowConfig = {
        isCareer,
        isSeason,
        $,
        category,
      };
      const statsObj = rowsData(rows, rowConfig);

      return statsObj;
    });
    return statsObj[0];
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { getStats };
