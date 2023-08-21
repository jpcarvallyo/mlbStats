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

async function writeToFile(data, pathToFile) {
  // Convert the array to JSON format
  const dataJSON = JSON.stringify(data, null, 2); // The second argument adds indentation for better readability

  // Write the JSON data to a file
  fs.writeFile(pathToFile, dataJSON, "utf8", (error) => {
    if (error) {
      console.error("Error writing to file:", error);
    } else {
      console.log(`Data has been saved to ${pathToFile}`);
    }
  });
}

module.exports = { writeLocally, writeToFile };
