const { categoryType } = require("../../src/utils/constants/");

// function findCategoryType(category) {
//   if (typeof category !== "string") throw Error("problem with category");

//   const sanitizedCategory = category.toLowerCase();
//   const catKeys = Object.keys(categoryType).find(
//     (item) => item === sanitizedCategory
//   );
//   if (catKeys) return categoryType[sanitizedCategory];
// }

function findCategoryType(categories, all = false) {
  const catKeys = Object.keys(categoryType);
  const sanitizedCategories = categories
    .split(",")
    .map((category) => category.toLowerCase());
  const catArray = catKeys.filter((category) =>
    sanitizedCategories.includes(category)
  );

  if (catArray) return catArray;
  throw Error("problem with categories");
}

function stringBooleanConverter(boolStr) {
  if (boolStr === "true") return true;
  if (boolStr === "false") return false;
}

module.exports = { findCategoryType, stringBooleanConverter };
