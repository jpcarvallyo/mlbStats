const {
  allStatsStructure,
  seasonStatsStructure,
  careerStatsStructure,
} = require("../constants");

const {
  seasonProcessor,
  careerProcessor,
  seasonAndCareerProcessor,
} = require("./hitting");

function determineObjStrc(isSeason, isCareer) {
  let obj = null;
  if (isSeason && isCareer) {
    obj = allStatsStructure;
  } else {
    obj = isSeason
      ? seasonStatsStructure.hitting
      : careerStatsStructure.hitting;
  }

  const struc = Object.assign({}, obj);

  return struc;
}

function modeProcessor(modeConfig) {
  const { isSeason, isCareer, item, index, objStrc } = modeConfig;

  let result = null;
  // todo: configure a type. i.e. hitting, pitching, fielding, mis
  // depending on type, call the particular processor.

  if (isSeason && isCareer === false) {
    result = seasonProcessor(item, index, objStrc);
  } else if (isCareer && isSeason === false) {
    result = careerProcessor(item, index, objStrc);
  } else {
    result = seasonAndCareerProcessor(item, index, objStrc);
  }
  return result;
}

module.exports = {
  modeProcessor,
  determineObjStrc,
};
