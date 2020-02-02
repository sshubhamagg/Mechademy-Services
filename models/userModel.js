var mongoose=require('mongoose');
const validator = require('validator');

var userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'First Name is required']
    },
    lastName:{
        type:String,
        required:[true,'Last Name is required']
    },
    userName:{
        type:String,
        required:[true,'Username is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
})

module.exports= mongoose.model('shubhamUser',userSchema);