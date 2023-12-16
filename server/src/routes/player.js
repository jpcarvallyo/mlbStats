const express = require("express");
const router = express.Router();
const { getStats } = require("../../../src/scrape/stats.js");
const { getBioData } = require("../../../src/scrape/bioData.js");
const { findCategoryType, stringBooleanConverter } = require("../utils");
const { categoryType, urls } = require("../../../src/utils/constants/");

router.get("/", async (req, res) => {
  try {
    const { player, categories, isSeason, isCareer, bio, all } = req.query;
    if (all === "true") {
      console.log("all");
      const bio = await getBioData(`${urls.player}${player}`);
      const catKeys = Object.keys(categoryType);
      catKeys.filter((cat) => cat !== "miscellaneous");
      const config = {
        playerUrl: `${urls.player}${player}`,
        categories: catKeys,
        isSeason: true,
        isCareer: true,
      };
      console.log(config);
      const stats = await getStats(config);
      res.status(200).json({ bio, stats });
    } else if (bio === "true") {
      const bio = await getBioData(`${urls.player}${player}`);
      res.status(200).json({ bio });
    } else {
      const sanitizedCategories = findCategoryType(categories);
      const config = {
        playerUrl: `${urls.player}${player}`,
        categories: [...sanitizedCategories],
        isSeason: stringBooleanConverter(isSeason),
        isCareer: stringBooleanConverter(isCareer),
      };
      console.log(config);
      const stats = await getStats(config);
      res.status(200).json({ stats });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Oh no, it looks like we've encountered a problem",
    });
  }
});

router.get("/bio", async (req, res) => {
  try {
    const { p } = req.query;
    const data = await getBioData(`${urls.player}${p}`);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Oh no, it looks like we've encountered a problem",
    });
  }
});

module.exports = router;
