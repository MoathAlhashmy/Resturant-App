const express = require('express');

// rest object 
const app = express();

//reoute 
app.get('/', (req,res)=> {
    return res.status(200).send("<h1> Welcome to the server</h1>");
});

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("Server running ");
});