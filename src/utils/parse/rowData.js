const { modeProcessor } = require("../processors/");
const { determineObjStrc } = require("../processors/dataShape");

function rowsData(rows, rowConfig) {
  const { isCareer, isSeason, $ } = rowConfig;
  const seasons = [];

  rows.each((index, element) => {
    if (isCareer || index >= 2) {
      const columns = $(element).find("td");
      const rowData = [];
      let obj = null;
      let objStrc = determineObjStrc(isSeason, isCareer);

      columns.each((colIndex, colElement) => {
        rowData.push($(colElement).text().trim());
      });

      rowData.forEach((item, index) => {
        const modeConfig = {
          isSeason,
          isCareer,
          item,
          index,
          objStrc,
        };
        obj = modeProcessor(modeConfig);
      });

      seasons.push(obj);
    }
  });

  let statsObj = {};
  if (isCareer && isSeason) {
    statsObj = seasons.reduce(
      (acc, curr) => {
        if (curr.year.includes("Years")) {
          acc.career = curr;
        } else if (curr.year.length === 4 && curr.year !== "Year") {
          acc.seasons[curr.year] = curr;
        }

        return acc;
      },
      { career: {}, seasons: {} }
    );
  } else if (isSeason && isCareer === false) {
    seasons.splice(-2);
    // return seasons array but remove last two indexes (those are career numbers and header)

    statsObj = seasons.reduce((acc, curr) => {
      if (curr.year.length === 4) {
        acc[curr.year] = curr;
      }
      return acc;
    }, {});
  } else if (isCareer && isSeason === false) {
    statsObj = seasons.at(0);
  }
  return statsObj;
}

module.exports = {
  rowsData,
};
