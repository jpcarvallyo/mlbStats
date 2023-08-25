const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/homerunList.bin", "hex");

readStream.on("data", (data) => {
  console.log(data);

  const buff = Buffer.from(data);
});
