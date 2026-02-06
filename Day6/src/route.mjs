import express from 'express';
import { createProduct } from './controllers/productController.mjs';
const router= express.Router();
router.get('/api',(req,res)=>{
    return res.send({message:"ok"})
})
router.post('/addproduct',createProduct);
export default router;