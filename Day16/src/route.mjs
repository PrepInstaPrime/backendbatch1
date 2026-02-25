import express from "express";
import { createUser, getUsers } from "./controllers/userController.mjs";
const router = express.Router();
router.get("/", (req, res) => {
  return res.send("Hello World");
});
router.post("/register", createUser);
router.get("/users", getUsers);
export default router;