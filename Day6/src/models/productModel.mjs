import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
     title:String,
     price:Number,
     discription:String,
     reviews:[String],
     author:String,
     category:String,
     productDetails:{
        mfg:Date,
        expire:Date,
        properties:String,
     },
     productId:String
},{timestamps:true})
const productModel=mongoose.model("Product",productSchema)
export default productModel;