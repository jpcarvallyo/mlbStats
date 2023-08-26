const { modeProcessor } = require("../processors/");
const { determineObjStrc } = require("../dataShapes/determineDataStruc");

function rowsData(rows, rowConfig) {
  const { isCareer, isSeason, $, category } = rowConfig;
  const seasons = [];

  rows.each((index, element) => {
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
          };
          obj = modeProcessor(modeConfig);
        });

        seasons.push({ ...obj });
      }
    }
  });

  let statsObj = {};
  if (isCareer && isSeason) {
    statsObj = seasons.reduce(
      (acc, curr) => {
        if (curr?.years && curr?.years.includes("Years")) {
          acc.career = curr;
        } else if (curr.year.length === 4 && curr.year !== "Year") {
          acc.seasons[curr.year] = curr;
        }

        return acc;
      },
      { career: {}, seasons: {} }
    );
  } else if (isSeason && isCareer === false) {
    seasons.splice(-1);
    // return seasons array but remove last index (career numbers)

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
