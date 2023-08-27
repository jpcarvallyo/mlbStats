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
  fielding: {
    team: null,
    pos: null,
    g: null,
    gs: null,
    outs: null,
    tc: null,
    "tc/g": null,
    ch: null,
    po: null,
    a: null,
    e: null,
    dp: null,
    pb: null,
    casb: null,
    cacs: null,
    "FLD%": null,
    rf: null,
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

const allStatsStructure = {
  hitting: {
    career: {
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
    seasons: {
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
  },
  fielding: {
    career: {},
    seasons: {},
  },
  pitching: {
    career: {},
    seasons: {},
  },
  miscellaneous: {},
};

module.exports = {
  seasonStatsStructure,
  careerStatsStructure,
  allStatsStructure,
};
