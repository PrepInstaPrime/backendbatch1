import express from "express";
import config from "./config.mjs";
import router from "./src/route.mjs";
import mongoose from "mongoose";
import multer from "multer";
const app = express();
app.use(multer().any());
app.use(express.json());
mongoose.connect(config.URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
})
app.use('/',router);
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});