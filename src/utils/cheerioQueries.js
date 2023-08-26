function tableQuery(category) {
  category = category.split("");
  category = category[0].toUpperCase() + category.join("").substring(1);
  return `p:contains("${category} Stats")`;
}

function rowQuery(isSeason, isCareer) {
  let query = "";
  if ((isSeason && isCareer) || isSeason) {
    query = `tr`;
  } else if (isCareer) {
    query = `tr:last-child`;
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
