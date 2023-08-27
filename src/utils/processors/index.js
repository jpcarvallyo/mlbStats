const { categoryType } = require("../constants/");
const {
  seasonProcessor: hittingSeason,
  careerProcessor: hittingCareer,
  seasonAndCareerProcessor: seasonAndCareer,
} = require("./hitting");
const {
  seasonProcessor: fieldingSeason,
  careerProcessor: fieldingCareer,
} = require("./fielding");

const modeProcessor = (modeConfig) => {
  const { isSeason, isCareer, item, index, objStrc, careerStat, category } =
    modeConfig;
  let result = null;
  switch (category) {
    case categoryType.hitting:
      if (isSeason && isCareer === false) {
        result = hittingSeason(item, index, objStrc);
      } else if (isCareer && isSeason === false) {
        result = hittingCareer(item, index, objStrc);
      } else {
        result = seasonAndCareer(item, index, objStrc, careerStat);
      }
      break;
    case categoryType.fielding:
      if (isSeason && isCareer === false) {
        result = fieldingSeason(item, index, objStrc);
      } else if (isCareer && isSeason === false) {
        result = fieldingCareer(item, index, objStrc);
      } else {
        // result = seasonAndCareer(item, index, objStrc, careerStat);
      }
      break;
    case categoryType.pitching:
      break;
    case categoryType.miscellaneous:
      break;
  }
  return result;
};

module.exports = {
  modeProcessor,
};
