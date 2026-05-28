const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const app = express();

app.use(express.json());

const githubRoutes = require("./routes/github.routes");

app.use("/api", githubRoutes);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
