import mongoose from "mongoose";
let castSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true
    },
    networth:Number,
    gender:{
        type:String,
        required:true,
        enum:{
            values:["Male","Female","Other"],
            message:`Only values :"Male","Female","Other" are allowed`
        }
    },
    allMovies:[String],
    address:{
        country:String,
        city:String
    },
    height:Number,
    role:{
        type:String,
        required:true
    },
    charge:Number,
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
let castModel= mongoose.model("Cast",castSchema);
export default castModel;