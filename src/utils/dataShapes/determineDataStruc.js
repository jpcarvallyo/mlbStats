const {
  seasonStatsStructure,
  careerStatsStructure,
  allStatsStructure,
} = require("./index");

function determineObjStrc(isSeason, isCareer) {
  // todo: use category to determine which seasonStat or careerStat structure to use
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
