const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//dotenv config
dotenv.config({path:'./.env'});


// rest object 
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//reoute 
app.get('/', (req,res)=> {
    return res.status(200).send("<h1> Welcome to the server</h1>");
});
// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`.white.bgMagenta);
});