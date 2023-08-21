const { bioData } = require("../");
const { bio } = require("./testData");

describe("bioData function", () => {
  test("It should output player's biographical data", async () => {
    const data = await bioData(
      "https://www.baseball-almanac.com/players/player.php?p=aaronha01"
    );
    expect(data).toEqual(bio);
  });
});
