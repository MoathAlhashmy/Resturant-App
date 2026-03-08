const mognoose = require('mongoose')

//schema
const userSchema = new mognoose.Schema({
    userName:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    address:{
        type:Array,
        required:[true,'address is required']
    },
    phone:{
        type:String,
        required:[true,'phone number is required']
    },
    userType:{
        type:String,
        required:[true,'user type is required'],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }

},{timestamps:true})


//export
module.exports = mognoose.model('User',userSchema)