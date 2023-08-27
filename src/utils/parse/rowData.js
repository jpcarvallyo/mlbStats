const { statsReducer } = require("../reducers/");
const { hittingRows } = require("./filters/hitting");
const { fieldingRows } = require("./filters/fielding");
const { categoryType } = require("../constants/");

function rowsData(rows, rowConfig) {
  let seasons = [];

  rows.each((index, element) => {
    const config = {
      rowConfig,
      seasons,
      index,
      element,
    };
    let season = null;

    switch (rowConfig.category) {
      case categoryType.hitting:
        season = hittingRows(config);
        break;
      case categoryType.fielding:
        season = fieldingRows(config);
        break;
    }
  });

  const statsConfig = {
    rowConfig,
    seasons,
  };

  return statsReducer(statsConfig);
}

module.exports = {
  rowsData,
};
