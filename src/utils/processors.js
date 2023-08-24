const { modeProcessor } = require("./mode.js");
const {
  seasonStatsStructure,
  careerStatsStructure,
} = require("../utils/constants.js");

function rowsData(rows, rowConfig) {
  const { isCareer, isSeason, $ } = rowConfig;
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
}

module.exports = {
  rowsData,
};
