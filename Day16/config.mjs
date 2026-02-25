import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT,
  URI:process.env.mongoDB,
  secretKey:process.env.accessKey,
  secretAccessKey:process.env.secretAccessKey,
  region:process.env.region
};
export default config;