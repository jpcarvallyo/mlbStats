const { getStats } = require("../");
const { categoryType } = require("../../utils/constants/");
const {
  allHittingStats,
  allFieldingStats,
  multipleCategories,
} = require("./testData");

describe("getStats function", () => {
  describe("hitting stats", () => {
    test("It should output all hitting stats from each season", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        categories: [categoryType.hitting],
      };
      const data = await getStats(config);
      const expectedData = { hitting: allHittingStats.seasons };
      expect(data).toEqual(expectedData);
    });

    test("It should output career hitting stats", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        categories: [categoryType.hitting],
        isSeason: false,
        isCareer: true,
      };
      const data = await getStats(config);
      const expectedData = { hitting: allHittingStats.career };
      expect(data).toEqual(expectedData);
    });

    test("It should output both season and career hitting stats", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        categories: [categoryType.hitting],
        isSeason: true,
        isCareer: true,
      };
      const data = await getStats(config);
      const expectedData = { hitting: allHittingStats };
      expect(data).toEqual(expectedData);
    });
  });

  describe("fielding stats", () => {
    test("It should output all fielding stats from each season", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        categories: [categoryType.fielding],
      };
      const data = await getStats(config);
      const expectedData = { fielding: allFieldingStats.seasons };
      expect(data).toEqual(expectedData);
    });

    test("It should output all fielding stats from career", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        categories: [categoryType.fielding],
        isSeason: false,
        isCareer: true,
      };
      const data = await getStats(config);
      const expectedData = { fielding: allFieldingStats.career };
      expect(data).toEqual(expectedData);
    });
  });

  // describe("all categories", () => {
  //   test("It should output all stats from each category into a single object", async () => {
  //     const config = {
  //       playerUrl:
  //         "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
  //       categories: [categoryType.hitting, categoryType.fielding],
  //     };
  //     const data = await getStats(config);
  //     expect(data).toEqual(multipleCategories);
  //   });
  // });
});
