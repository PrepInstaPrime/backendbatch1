import productModel from "../models/productModel.mjs";
const createProduct=async (req,res)=>{
    try {
        let data= req.body;
        let product= await productModel.create(data);
        return res.send({message:"ok",data:product})
    } catch (error) {
        return res.send({message:"failed"})
    }
}
export {createProduct}