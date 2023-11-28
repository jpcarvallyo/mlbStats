const express = require("express");
const router = express.Router();
const { getStats } = require("../../../src/scrape/stats.js");
const { findCategoryType, stringBooleanConverter } = require("../utils");

router.get("/", async (req, res) => {
  try {
    const { player, category, isSeason, isCareer } = req.query;
    const sanitizedCategory = findCategoryType(category);
    console.log("season: ", stringBooleanConverter(isSeason));
    console.log("career: ", stringBooleanConverter(isCareer));
    const config = {
      playerUrl: `https://www.baseball-almanac.com/players/player.php?p=${player}`,
      categories: [sanitizedCategory],
      isSeason: stringBooleanConverter(isSeason),
      isCareer: stringBooleanConverter(isCareer),
    };
    console.log(config);
    const data = await getStats(config);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Oh no, it looks like we've encountered a problem",
    });
  }
});

module.exports = router;
