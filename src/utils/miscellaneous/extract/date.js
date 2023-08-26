function extractDate(string) {
  // '12-27-1981  (Capricorn)'
  const inputString = "12-27-1981  (Capricorn)";
  const regex = /(\d{2}-\d{2}-\d{4})/;
  const match = inputString.match(regex);
  let extractedDate = "";

  if (match && match[1]) {
    extractedDate = match[1];
  }
  return extractedDate;
}

module.exports = { extractDate };
