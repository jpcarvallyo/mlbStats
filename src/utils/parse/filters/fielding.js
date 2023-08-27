const { modeProcessor } = require("../../processors/");
const { determineObjStrc } = require("../../dataShapes/determineDataStruc");

function fieldingRows(config) {
  const { rowConfig, index, element, seasons } = config;
  const { isSeason, isCareer, $, category } = rowConfig;
  if (index >= 2) {
    const columns = $(element).find("td");
    const rowData = [];
    let obj = null;
    let objStrc = determineObjStrc(isSeason, isCareer, category);

    columns.each((colIndex, colElement) => {
      rowData.push($(colElement).text().trim());
    });

    const careerStat =
      rowData[0].includes("Years") || rowData[0].includes("Totals");

    // if (rowData is a isSeason data type AND isCareer is on and isSeason is false, then skip)
    if (!careerStat && isCareer && isSeason === false) {
    } else {
      rowData.forEach((item, index) => {
        const modeConfig = {
          isSeason,
          isCareer,
          item,
          index,
          objStrc,
          careerStat,
          category,
        };
        obj = modeProcessor(modeConfig);
      });

      seasons.push({ ...obj });
    }
  }
}

module.exports = {
  fieldingRows,
};
