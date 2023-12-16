const express = require("express");
const router = express.Router();

// Import routes
const playerRouter = require("./player");

// bind url routes with the routers

router.use("/", playerRouter);

module.exports = router;
