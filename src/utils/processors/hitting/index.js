const seasonProcessor = function (item, index, seasonObj) {
  switch (index) {
    case 0:
      seasonObj.year = item;
      break;
    case 1:
      seasonObj.age = item;
      break;
    case 2:
      seasonObj.team = item;
      break;
    case 3:
      seasonObj.games = item;
      break;
    case 4:
      seasonObj.atBat = item;
      break;
    case 5:
      seasonObj.runs = item;
      break;
    case 6:
      seasonObj.hits = item;
      break;
    case 7:
      seasonObj.doubles = item;
      break;
    case 8:
      seasonObj.triples = item;
      break;
    case 9:
      seasonObj.homeruns = item;
      break;
    case 10:
      seasonObj.grandSlams = item;
      break;
    case 11:
      seasonObj.runBattedIn = item;
      break;
    case 12:
      seasonObj.baseOnBalls = item;
      break;
    case 13:
      seasonObj.intentionBallOnBalls = item;
      break;
    case 14:
      seasonObj.strikeOut = item;
      break;
    case 15:
      seasonObj.sacrificeHit = item;
      break;
    case 16:
      seasonObj.sacrificeFly = item;
      break;
    case 17:
      seasonObj.hitByPitch = item;
      break;
    case 18:
      seasonObj.groundIntoDoublePlay = item;
      break;
    case 19:
      seasonObj.battingAverage = item;
      break;
    case 20:
      seasonObj.onBasePercentage = item;
      break;
    case 21:
      seasonObj.sluggingAverage = item;
      break;
  }
  return seasonObj;
};

const careerProcessor = function (item, index, careerObj) {
  switch (index) {
    case 0:
      careerObj.years = item;
      break;
    case 1:
      careerObj.games = item;
      break;
    case 2:
      careerObj.atBat = item;
      break;
    case 3:
      careerObj.runs = item;
      break;
    case 4:
      careerObj.hits = item;
      break;
    case 5:
      careerObj.doubles = item;
      break;
    case 6:
      careerObj.triples = item;
      break;
    case 7:
      careerObj.homeruns = item;
      break;
    case 8:
      careerObj.grandSlams = item;
      break;
    case 9:
      careerObj.runBattedIn = item;
      break;
    case 10:
      careerObj.baseOnBalls = item;
      break;
    case 11:
      careerObj.intentionBallOnBalls = item;
      break;
    case 12:
      careerObj.strikeOut = item;
      break;
    case 13:
      careerObj.sacrificeHit = item;
      break;
    case 14:
      careerObj.sacrificeFly = item;
      break;
    case 15:
      careerObj.hitByPitch = item;
      break;
    case 16:
      careerObj.groundIntoDoublePlay = item;
      break;
    case 17:
      careerObj.battingAverage = item;
      break;
    case 18:
      careerObj.onBasePercentage = item;
      break;
    case 19:
      careerObj.sluggingAverage = item;
      break;
  }
  return careerObj;
};

function seasonAndCareerProcessor(item, index, obj, careerStat) {
  let data = null;

  if (careerStat) {
    data = careerProcessor(item, index, obj.career);
  } else {
    data = seasonProcessor(item, index, obj.seasons);
  }
  return data;
}

module.exports = {
  seasonProcessor,
  careerProcessor,
  seasonAndCareerProcessor,
};
