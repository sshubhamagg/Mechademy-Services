var mongoose=require('mongoose');

var chainSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    chain:[{
    index:{
        type:String,
        required:true
    },
    previousHash:{
        type:String,
        required:true
    },
    timestamp:{
        type: String,
        default: Date.now()
     
    },
    data:{
        type:String,
        required:true
    },
    hash:{
        type:String,
        required:true
    },
    nonce:{
        type:String,
        required:true
    }
}]
})

module.exports= mongoose.model('shubhamChain',chainSchema);