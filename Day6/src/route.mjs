import express from 'express';
import { createProduct, productById, productByName, readProducts, updateProduct, updateProducts, uploadProducts,updateProductById, deleteProduct, permanentDelete } from './controllers/productController.mjs';
const router= express.Router();
router.get('/api',(req,res)=>{
    return res.send({message:"ok"})
})
router.post('/addproduct',createProduct);
router.post('/bulkupload',uploadProducts);
router.get('/allproducts',readProducts);
router.get('/products/:productid',productById);
router.get('/product/:title',productByName);
router.patch('/update',updateProduct);
router.patch('/updateproducts',updateProducts);
router.put('/product/:id',updateProductById)
router.delete('/product/:id',deleteProduct)
router.delete('/pdelete/:id',permanentDelete)
export default router;