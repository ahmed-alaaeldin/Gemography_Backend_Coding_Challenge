const express = require("express");

const app = express();

const apiRouter = require("./routes/apiRoutes");

// setting api router to home path '/'
app.use("/", apiRouter);

// General error handler
app.use(function (err, req, res, next) {
  res.status(500).json({ err: "Something broke!" });
});

module.exports = app;
