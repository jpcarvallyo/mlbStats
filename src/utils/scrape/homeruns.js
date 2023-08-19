const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.baseball-almanac.com/hitting/hihr1.shtml";

async function homeruns() {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const rows = $("table.boxed tr"); // Assuming the data is within a table with a border attribute of 1

    const data = [];

    rows.each((index, element) => {
      if (index !== 0) {
        // Skip the header row
        const columns = $(element).find("td");
        const rowData = [];
        const dataEntry = {
          firstName: null,
          lastName: null,
          stats: {
            careerStats: {
              homeruns: null,
            },
          },
        };

        columns.each((colIndex, colElement) => {
          rowData.push($(colElement).text().trim());
        });
        rowData.forEach((item, index, array) => {
          if (index === 0) {
            const name = item.split(" ");
            const firstName = name[0];
            const lastName = name[1];
            dataEntry.firstName = firstName;
            dataEntry.lastName = lastName;
          } else if (index === 1) {
            dataEntry.stats.careerStats.homeruns = item;
          }
        });

        data.push(dataEntry);
      }
    });
    const dataJSON = JSON.stringify(data);
    return dataJSON;
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = homeruns;
