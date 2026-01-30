// importing express js
const express = require('express');
// importing route file 
const route = require('./src/route.js');
// creating app instance
const app = express();

// app.use('/', async (req, res) => {
//     res.send("Hey i am coming from backend")
// })

// moving all the api request to route file
app.use('/',route);
// creating server
app.listen(8080, () => {
    console.log("Server is started on port 8080");
})
