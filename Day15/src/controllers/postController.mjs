import postModel from "../models/postModel.mjs";
import { createClient } from 'redis';
import config from "../../config.mjs";
const client = createClient({
    username: config.redisUserName,
    password: config.redisPassword,
    socket: {
        host: config.redisHost,
        port: config.redisPort
    }
});
client.on('error', err => console.log('Redis Client Error', err));
client.connect().then(() => {
    console.log("Connected to Redis");
}).catch((err) => {
    console.log(err);
});
const createPost = async (req, res) => {
    try {
        const data = req.body;
        await client.set('posts', JSON.stringify(data), { EX: 60 * 60 * 24 });
        const result = await client.get('posts');
        // console.log(result)         
        const post = await postModel.create(data);
        return res.status(201).send({ message: "Post created successfully", post, result });
    } catch (error) {
        if(error.message.includes('validation')){
            return res.status(400).send({ message: "Validation error", error: error.message });
        }else if(error.message.includes('duplicate')){
            return res.status(400).send({ message: "Duplicate error", error: error.message });
        }else{
            return res.status(500).send({ message: "Internal server error", error: error.message });
        }
    }
}
const getPostsFromRedis = async (req, res) => {
    try {
        const result = await client.get('posts');
        if(result){
            const posts = JSON.parse(result);
            return res.status(200).send({ message: "Posts fetched successfully", posts });
        }else{
            const posts = await postModel.find();
            return res.status(200).send({ message: "Posts fetched successfully", posts });
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}
const getPostsFromDatabase = async (req, res) => {
    try {
        const posts = await postModel.find();
        return res.status(200).send({ message: "Posts fetched successfully", posts });
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}
export {createPost, getPostsFromRedis, getPostsFromDatabase};