import express from 'express';
import mongoose from 'mongoose';
import router from './src/route.mjs';
import { port, uri } from './config.mjs';
const app= express();
app.use(express.json());
mongoose.connect(uri).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err))
app.use('/',router)
app.listen(port,()=>{
    console.log(`Server started on port : ${port}`)
})