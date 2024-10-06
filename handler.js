import express from "express";

const AppError = require("./src/utils/AppError");

// Initialize express app
const app = express()
app.use(express.json());
app.use(cors());

// Register routes
app.use(routes);

// Error handling middleware
app.use((err, request, response, next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
});

module.exports.handler = serverless(app);