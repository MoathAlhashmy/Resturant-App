const mongoose = require("mongoose")
const colors = require('colors')
// function mongodb dfatebase connection
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(
            'DB Connected ${mongoose.connection.host}'.bgCyan
        );
    }catch(error){
        console.log('DB Error',error)
    }
};
module.exports = connectDb;