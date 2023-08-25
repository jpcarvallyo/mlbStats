const {
  allStatsStructure,
  seasonStatsStructure,
  careerStatsStructure,
} = require("../dataShapes/hitting");

function determineObjStrc(isSeason, isCareer, category) {
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
