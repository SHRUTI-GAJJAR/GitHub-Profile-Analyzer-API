const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "GitHub Profile Analyzer API",
      version: "1.0.0",
      description:
        "REST API to analyze GitHub profiles using Node.js, Express.js, TiDB, and GitHub Public API.",
    },

    servers: [
      {
        url: "https://github-profile-analyzer-api-qp01.onrender.com",
        description: "Production Server",
      },
      {
        url: "http://localhost:3000",
        description: "Local Server",
      },
    ],
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;