// importing express js 
const express = require('express');
// creating routes
const router = express.Router();
// Home api
router.get('/',(req,res)=>{
    res.send("Hey i am coming from backend")
})
router.get('/india',(req,res)=>{
    res.send("Hey i am India")
})
router.get('/china',(req,res)=>{
    res.send("Hey i am China")
})

module.exports= router;
