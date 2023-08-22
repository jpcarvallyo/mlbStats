const path = require("path");
const { generateAllPlayerUrls } = require("../");
const { readFileAsync } = require("../../readFileAsync");

describe("All Player Urls scraper", () => {
  test("It should output all playerUrls", async () => {
    const fourLevelsUpDir = path.join(__dirname, "..", "..", "..", "..");
    const pathToJson = `${fourLevelsUpDir}/data/playerUrls.json`;

    const playerUrls = await readFileAsync(pathToJson, "utf8");
    const playerUrlsJSON = JSON.parse(playerUrls);
    const hrefs = await generateAllPlayerUrls();
    expect(hrefs.length).toEqual(playerUrlsJSON.length);
  });
});
