const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const app = express();

app.use(express.json());

const githubRoutes = require("./routes/github.routes");

//test api
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/api", githubRoutes);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
