import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    autherName: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    views:{
        type: Number,
        default: 0
    },
    isTrending:{
        type: Boolean,
        default: false
    },
},{timestamps:true});
const postModel = mongoose.model("Post", postSchema);
export default postModel;