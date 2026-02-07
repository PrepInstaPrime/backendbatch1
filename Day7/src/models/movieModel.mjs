import mongoose from "mongoose";
const movieSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:[100,"Title can't be more than 100 characters"],
        minLenth:3
    },
    cast:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        max:5,
        min:0
    },
    category:{
        type:String,
        enum:{
            values:['Comedy','Romantic','Sci-fi','Horror'],
            message:`only these values :'Comedy','Romantic','Sci-fi','Horror' are allowed`
        },
        required:true
    },
    year:{
        type:Date,
        default:Date.now,
        required:true
    },
    revenue:String,
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
let movieModel= mongoose.model('Movie',movieSchema)
export default movieModel;
