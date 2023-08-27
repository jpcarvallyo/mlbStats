const { categoryType } = require("./constants/");

function tableQuery(category) {
  category = category.split("");
  category = category[0].toUpperCase() + category.join("").substring(1);
  return `p:contains("${category} Stats")`;
}

function rowQuery(isSeason, isCareer, categories) {
  let query = "";
  const isHitting = categories.some((category) =>
    category.includes(categoryType.hitting)
  );
  const isFielding = categories.some((category) =>
    category.includes(categoryType.fielding)
  );

  if ((isSeason && isCareer) || isSeason) {
    query = `tr`;
  } else if (isCareer && isHitting) {
    query = `tr:last-child`;
  } else if (isCareer && isFielding) {
    query = "tr";
  }
  return query;
}

function nameQuery() {
  return `div.intro h1`;
}

module.exports = {
  tableQuery,
  rowQuery,
  nameQuery,
};
