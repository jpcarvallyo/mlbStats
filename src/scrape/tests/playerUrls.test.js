const { generateAllPlayerUrls } = require("../");

describe("All Player Urls scraper", () => {
  test("It should output all playerUrls", async () => {
    const hrefs = await generateAllPlayerUrls();
    const href = hrefs[0];
    expect(href).toContain(
      "https://www.baseball-almanac.com/players/player.php?p="
    );
    expect(hrefs.length).toBeGreaterThan(20000);
  });
});
