const writeLocally = require("../writeLocally");
const homeruns = require("./homeruns");

(async () => {
  const data = await homeruns();
  writeLocally(data);
})();

module.exports = {
  homeruns,
};
