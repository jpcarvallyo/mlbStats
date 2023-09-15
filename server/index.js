const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = 8008;
const myMiddleware = require("./src/middleware/index.js");
const routes = require("./src/routes/index.js");
const app = express();
const { getStats } = require("../src/scrape/stats.js");
const { categoryType } = require("../src/utils/constants/");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

// Body parser
app.use(
  express.urlencoded({
    extended: false,
  })
);

// add middleware to router
app.use(myMiddleware);

// // use routers interface and serve static HTML for base URL "/" route
app.use("/api", routes);

app.get("/", async (req, res) => {
  const config = {
    playerUrl:
      "https://www.baseball-almanac.com/players/player.php?p=aaronha01",
    categories: [categoryType.hitting],
    isSeason: false,
    isCareer: true,
  };
  const data = await getStats(config);
  res.status(200).json({ data });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
