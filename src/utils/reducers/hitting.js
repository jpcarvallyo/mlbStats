const hittingReducer = (config) => {
  const { rowConfig, seasons } = config;
  const { isCareer, isSeason } = rowConfig;
  let statsObj = null;
  if (isCareer && isSeason) {
    statsObj = seasons.reduce(
      (acc, curr) => {
        if (curr?.years && curr?.years.includes("Years")) {
          acc.career = curr;
        } else if (curr.year.length === 4 && curr.year !== "Year") {
          acc.seasons[curr.year] = curr;
        }

        return acc;
      },
      { career: {}, seasons: {} }
    );
  } else if (isSeason && isCareer === false) {
    seasons.splice(-1);
    // return seasons array but remove last index (career numbers)

    statsObj = seasons.reduce((acc, curr) => {
      if (curr.year.length === 4) {
        acc[curr.year] = curr;
      }
      return acc;
    }, {});
  } else if (isCareer && isSeason === false) {
    statsObj = seasons.at(0);
  }
  return statsObj;
};

module.exports = {
  hittingReducer,
};
