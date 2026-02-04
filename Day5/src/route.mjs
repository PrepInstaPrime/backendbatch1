import express from 'express';
import { getStudent, register } from './controllers/studentController.mjs';
const router= express.Router();
router.get('/api',(req,res)=>{
    res.send({message:"ok"})
})
router.post('/register',register)
router.get('/student/:rollNo',getStudent);
export default router;