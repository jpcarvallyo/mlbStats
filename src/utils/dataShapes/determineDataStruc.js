const {
  seasonStatsStructure,
  careerStatsStructure,
  allStatsStructure,
} = require("./index");

function determineObjStrc(isSeason, isCareer, category) {
  let obj = null;
  if (isSeason && isCareer) {
    obj = allStatsStructure[category];
  } else {
    obj = isSeason
      ? seasonStatsStructure[category]
      : careerStatsStructure[category];
  }

  const struc = Object.assign({}, obj);

  return struc;
}

module.exports = {
  determineObjStrc,
};
