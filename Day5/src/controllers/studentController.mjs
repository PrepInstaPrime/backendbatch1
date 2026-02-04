import studentModel from "../models/studentModel.mjs";
const register= async (req,res)=>{
    try {
        let data= req.body;
        let std= await studentModel.create(data);
        res.send({message:"successful",data:std});
    } catch (error) {
        return res.send({message:"failed"})
    }
}
const getStudent= async(req,res)=>{
    try {
        let {rollNo}= req.params;
        let student= await studentModel.find({rollNo:rollNo});
        if(student.length<1){
           return res.send({message:"ok",data:null})
        }
        return res.send({status:"successful",data:student})
    } catch (error) {
        return res.send({message:"failed"})
    }
}
export {register,getStudent}