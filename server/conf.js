// This file is responsible for loading environment variables and ensuring that required ones are present.

import dotenv from "dotenv";
// dotenv.config();
dotenv.config({
  path: "./.env",
});

const requiredEnvVars = [
  "FRONTEND_URL",
  "MONGO_URI",
  "PORT",
  "SERVER_URL",
  "GEMINI_API_KEY",
  "JWT_SECRET",
  "ADMIN_EMAILS",
];

// Check for missing environment variables
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    process.exit(1); // Exit process if a required env variable is missing
  }
});

const conf = {
  MONGO_URI: process.env.MONGO_URI,
  FRONTEND_URL: process.env.FRONTEND_URL,
  SERVER_URL: process.env.SERVER_URL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  PORT: parseInt(process.env.PORT, 10) || 5000,
  JWT_SECRET: String(process.env.JWT_SECRET),
  CORS_ORIGIN1: String(process.env.CORS_ORIGIN1),
  ADMIN_EMAILS: String(process.env.ADMIN_EMAILS),
};

export default conf;
