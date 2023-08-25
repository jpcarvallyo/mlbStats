const { getStats } = require("../");
const { categoryType } = require("../../utils/constants/");
const { allHittingStats } = require("./testData");

describe("getStats function", () => {
  describe("hitting stats", () => {
    test("It should output all hitting stats from each season", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        category: categoryType.hitting,
      };
      const data = await getStats(config);
      expect(data).toEqual(allHittingStats.seasons);
    });

    test("It should output career hitting stats", async () => {
      const config = {
        playerUrl:
          "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
        category: categoryType.hitting,
        isSeason: false,
        isCareer: true,
      };
      const data = await getStats(config);
      expect(data).toEqual(allHittingStats.career);
    });

    // test("It should output both season and career hitting stats", async () => {
    //   const config = {
    //     playerUrl:
    //       "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
    //     category: categoryType.hitting,
    //     isSeason: true,
    //     isCareer: true,
    //   };
    //   const data = await getStats(config);
    //   expect(data).toEqual(allHittingStats);
    // });
  });
  // describe("fielding stats", () => {
  //   test("It should output all fielding stats from each season", async () => {
  //     const config = {
  //       playerUrl:
  //         "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
  //       category: categoryType.fielding,
  //     };
  //     const data = await getStats(config);
  //     expect(data).toEqual(seasonsData);
  //   });

  //   test("It should output career hitting stats", async () => {
  //     const config = {
  //       playerUrl:
  //         "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
  //       category: categoryType.hitting,
  //       isSeason: false,
  //       isCareer: true,
  //     };
  //     const data = await getStats(config);
  //     expect(data).toEqual(careerData);
  //   });

  //   test("It should output both season and career hitting stats", async () => {
  //     const config = {
  //       playerUrl:
  //         "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
  //       category: categoryType.hitting,
  //       isSeason: true,
  //       isCareer: true,
  //     };
  //     const data = await getStats(config);
  //     expect(data).toEqual(allHittingStats);
  //   });
  // });
});
