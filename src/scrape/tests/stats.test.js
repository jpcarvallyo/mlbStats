const { getStats } = require("../");
const { seasonType } = require("../../utils/constants");
const { seasonsData, careerData } = require("./testData");

describe("get stats function", () => {
  test("It should output all hitting stats from each season", async () => {
    const data = await getStats(
      "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
      seasonType.hitting
    );
    expect(data).toEqual(seasonsData);
  });

  test("It should output career hitting stats", async () => {
    const data = await getStats(
      "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
      seasonType.hitting,
      "career"
    );
    expect(data).toEqual(careerData);
  });
});
