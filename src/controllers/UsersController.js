const AWS = require("aws-sdk");
const AppError = require("../utils/AppError");

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "events"; // Your DynamoDB table name

