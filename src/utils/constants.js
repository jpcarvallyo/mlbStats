const seasonStatsStructure = {
  hitting: {
    year: null,
    age: null,
    team: null,
    games: null,
    atBat: null,
    runs: null,
    hits: null,
    doubles: null,
    triples: null,
    homeruns: null,
    grandSlams: null,
    runBattedIn: null,
    baseOnBalls: null,
    intentionBallOnBalls: null,
    strikeOut: null,
    sacrificeHit: null,
    sacrificeFly: null,
    hitByPitch: null,
    groundIntoDoublePlay: null,
    battingAverage: null,
    onBasePercentage: null,
    sluggingAverage: null,
  },
};

const careerStatsStructure = {
  hitting: {
    years: null,
    games: null,
    atBat: null,
    runs: null,
    hits: null,
    doubles: null,
    triples: null,
    homeruns: null,
    grandSlams: null,
    runBattedIn: null,
    baseOnBalls: null,
    intentionBallOnBalls: null,
    strikeOut: null,
    sacrificeHit: null,
    sacrificeFly: null,
    hitByPitch: null,
    groundIntoDoublePlay: null,
    battingAverage: null,
    onBasePercentage: null,
    sluggingAverage: null,
  },
  pitching: {},
  fielding: {},
};

const categoryType = {
  hitting: "Hitting",
  fielding: "Fielding",
  pitching: "Pitching",
  miscellaneous: "Miscellaneous Items",
};

module.exports = {
  seasonStatsStructure,
  categoryType,
  careerStatsStructure,
};
