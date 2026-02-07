import castModel from "../models/castModel.mjs";
const addCast=async(req,res)=>{
    try {
        let data= req.body;
        let cast= await castModel.create(data);
        return res.status(201).send({message:'ok',data:cast})
    } catch (error) {
        if(error.message.includes('validation')){
            return res.status(400).send({message:"failed",error:error.message})
        }else if(error.message.includes('duplicate')){
            return res.status(400).send({message:"failed",error:error.message})
        }else{
            return res.status(500).send({message:"failed",error:error.message})
        }
    }
}
const allCasts= async (req,res)=>{
    try {
        let casts=await castModel.find();
        return res.status(200).send({message:'ok',data:casts})
    } catch (error) {
        return res.status(500).send({message:"failed",error:error.message})
    }
}
const findCast= async (req,res)=>{
    try {
        let {id}=req.params;
        let cast= await castModel.findById(id);
        return res.status(200).send({message:'ok',data:cast})
    } catch (error) {
        return res.status(500).send({message:"failed",error:error.message})
    }
}
export {addCast,allCasts,findCast}