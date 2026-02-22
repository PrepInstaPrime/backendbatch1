import express from "express";
import router from "./src/route.mjs";
import config from "./config.mjs";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
mongoose.connect(config.URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
app.use('/',router);
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});