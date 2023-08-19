const fs = require("fs");
const path = require("path");

const writeLocally = (data) => {
  const twoLevelsUpDir = path.join(__dirname, "..", "..");
  const pathToJson = `${twoLevelsUpDir}/data/homerunlist.json`;

  const writeStream = fs.createWriteStream(pathToJson, "utf8");

  writeStream.write(data, () => {
    console.log("wrote to file successfully");
    writeStream.end();
  });

  writeStream.on("finish", () => {
    console.log("write stream is finished");
  });

  // handle errors

  writeStream.on("error", (error) => {
    console.error("Error writing file:", error);
  });
};

module.exports = writeLocally;
