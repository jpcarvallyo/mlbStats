const { getStats } = require("../");
const { categoryType } = require("../../utils/constants");
const { seasonsData, careerData } = require("./testData");

describe("get stats function", () => {
  test("It should output all hitting stats from each season", async () => {
    const config = {
      playerUrl:
        "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
      category: categoryType.hitting,
    };
    const data = await getStats(config);
    expect(data).toEqual(seasonsData);
  });

  test("It should output career hitting stats", async () => {
    const config = {
      playerUrl:
        "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
      category: categoryType.hitting,
      modeType: "career",
    };
    const data = await getStats(config);
    expect(data).toEqual(careerData);
  });
});
