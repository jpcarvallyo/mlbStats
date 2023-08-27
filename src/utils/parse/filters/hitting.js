const { modeProcessor } = require("../../processors/");
const { determineObjStrc } = require("../../dataShapes/determineDataStruc");

function hittingRows(config) {
  const { rowConfig, index, element, seasons } = config;
  const { isSeason, isCareer, $, category } = rowConfig;
  if ((isSeason && index >= 2) || (isCareer && isSeason === false)) {
    const columns = $(element).find("td");
    const rowData = [];
    let obj = null;
    let objStrc = determineObjStrc(isSeason, isCareer, category);

    columns.each((colIndex, colElement) => {
      rowData.push($(colElement).text().trim());
    });

    const careerStat = rowData[0].includes("Years");
    if (rowData[0] === "Career") {
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
  hittingRows,
};
