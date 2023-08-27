const { categoryType } = require("../constants");
const { hittingReducer } = require("./hitting");
const { fieldingReducer } = require("./fielding");

const statsReducer = (config) => {
  const { rowConfig } = config;
  let data = null;
  switch (rowConfig.category) {
    case categoryType.hitting:
      data = hittingReducer(config);
      break;
    case categoryType.fielding:
      data = fieldingReducer(config);
      break;
  }
  return data;
};

module.exports = {
  statsReducer,
};
