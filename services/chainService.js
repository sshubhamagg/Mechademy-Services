const _ = require('lodash');
const utils = require('../utils/index')
const chainModel = require('../models/chainModel')


module.exports.addToChain = async (block) => {
    return new Promise(async (resolve, reject) => {
        var userBlocks = await this.getChain(block.userName);
            var lastBlock = await utils.getLastBlock(userBlocks.data, block);
            chainModel.update({ userName: block.userName }, { $push: { chain: lastBlock } }, (error, response) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve({ success: true, data: response })
                }
            })

        
    }).catch((error) => {
        return ({ success: false, error: error })
    })
}


module.exports.getChain = async (userName) => {
    return new Promise(async (resolve, reject) => {
        chainModel.findOne({ userName: userName }, (error, response) => {
            if (error) {
                reject(error)
            }
            else {
                resolve({ success: true, data: response });
            }
        })
    }).catch((error) => {
        return ({ success: false, error: error })
    })
}


module.exports.createGenesisBlock= async(data)=>{
    return new Promise(async(resolve,reject)=>{
        var userChain=await utils.createGenisis(data);
        var chain=new chainModel(userChain)
        chain.save(userChain,(error,response)=>{
            if(error){
                reject(error);
            }
            else{
                resolve({success:true,data:response});
            }
        })
    }).catch((error)=>{
        return({success:false,error:error});
    })
}