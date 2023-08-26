const axios = require("axios");
const cheerio = require("cheerio");
const {
  getFullPlayerName,
} = require("../utils/miscellaneous/extractPlayerName");

async function getBioData(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const tablesWithBioData = $("table.boxed").filter((index, element) => {
      return $(element).find('td:contains("Biographical Data")').length > 0;
    })[0];
    const rows = $(tablesWithBioData).find("tbody tr");

    const bioData = {
      birthName: "",
      nickName: "",
      bornOn: "",
      diedOn: "",
      diedIn: "",
      cemetery: "",
      highSchool: "",
      college: "",
      bats: "",
      throws: "",
      height: "",
      weight: "",
      firstGame: null,
      lastGame: null,
      draft: "",
    };

    rows.each((index, element) => {
      if (index === 4) {
        // Focus on just the bio data;
        const columns = $(element).find("td");
        const rowData = [];

        columns.each((colIndex, colElement) => {
          rowData.push($(colElement).text().trim());
        });

        bioData.birthName = getFullPlayerName(rowData[2]);
        bioData.nickName = rowData[4];
        bioData.bornOn = rowData[6];
        bioData.bornIn = rowData[8];
        bioData.diedOn = rowData[10];
        bioData.diedIn = rowData[12];
        bioData.cemetery = rowData[14];
        bioData.highSchool = rowData[17];
        bioData.college = rowData[19];
        bioData.bats = rowData[21];
        bioData.throws = rowData[24];
        bioData.height = rowData[26];
        bioData.weight = rowData[29];
        bioData.firstGame = rowData[31];
        bioData.lastGame = rowData[33];
        bioData.draft = rowData[35];
      }
    });
    return bioData;
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { getBioData };
