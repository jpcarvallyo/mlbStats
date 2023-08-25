const fs = require("fs");

// JSON data (replace this with your actual JSON data)
const jsonData = {
  name: "John Doe",
  age: 30,
  city: "Example City",
};

// Convert JSON data to a string
const jsonString = JSON.stringify(jsonData);

// Convert the string to binary data
const binaryData = Buffer.from(jsonString, "binary").toString("hex");

const textFromHex = Buffer.from(binaryData, "hex").toString("utf8");
console.log(textFromHex);

// Path to the binary file
const binaryFilePath = __dirname + "/test.bin";
console.log(binaryFilePath);

// Write the binary data to a binary file
fs.writeFile(binaryFilePath, binaryData, "binary", (error) => {
  if (error) {
    console.error("Error writing binary file:", error);
  } else {
    console.log("Binary file created successfully.");
  }
});
