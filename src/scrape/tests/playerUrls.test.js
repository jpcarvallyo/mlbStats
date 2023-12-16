const { generateAllPlayerUrls } = require("../");
const { urls } = require("../../utils/constants");

describe("All Player Urls scraper", () => {
  test("It should output all playerUrls", async () => {
    const hrefs = await generateAllPlayerUrls();
    const href = hrefs[0];
    expect(href).toContain(urls.player);
    expect(hrefs.length).toBeGreaterThan(20000);
  });
});
