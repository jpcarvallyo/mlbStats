const fs = require("fs");

function readFileAsync(filePath, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  readFileAsync,
};
