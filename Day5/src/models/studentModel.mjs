import mongoose from "mongoose";
const stdSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    courses:[String],
    password:String,
    dob:Date,
    phone:String,
    placed:Boolean,
    rollNo:String,
    rank:Number,
    backlog:Boolean,
    university:String,
    college:String,
    degree:String,
    Address:{
        country:String,
        state:String,
        district:String,
        pincode:Number
    }
},{timestamps:true})
// timestamps helps in understading the created and updated time
let studentModel =mongoose.model("Student",stdSchema)
export default studentModel;