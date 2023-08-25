const {
  allStatsStructure,
  seasonStatsStructure,
  careerStatsStructure,
} = require("../constants");

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

module.exports = {
  determineObjStrc,
};
