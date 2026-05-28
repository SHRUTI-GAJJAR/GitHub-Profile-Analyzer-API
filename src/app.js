const express = require("express");
const app = express();

app.use(express.json());

const githubRoutes = require("./routes/github.routes");

app.use("/api", githubRoutes);

module.exports = app;