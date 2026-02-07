import express from 'express'
import mongoose from 'mongoose'
import router from './src/route.mjs'
import { uri,PORT } from './config.mjs'
const app= express();
app.use(express.json());
mongoose.connect(uri).then(()=>"database connected successfully").catch((err)=>console.log(err));
app.use('/',router);
app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`);
})