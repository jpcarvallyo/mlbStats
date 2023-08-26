function extractPlayerName(string) {
  // Assuming string will come in like this;
  // let string = 'HANK AARON STATS'
  string = string.split(" ");
  string.length = string.length - 1;
  string = string.join(" ");
  console.log(string);
  return string;
}

module.exports = {
  extractPlayerName,
};
