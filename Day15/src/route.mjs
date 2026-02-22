import express from "express";
const router = express.Router();
import { createPost,getPostsFromDatabase,getPostsFromRedis } from "./controllers/postController.mjs";
router.post("/post", createPost);
router.get("/posts", getPostsFromRedis);
router.get("/posts/database", getPostsFromDatabase);
export default router;