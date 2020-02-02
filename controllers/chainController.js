var http_status_code=require('http-status-codes')
var chainService=require('../services/chainService')
var authenticate=require('../authHandler/auth').auth

module.exports.addToChain=async(req,res)=>{
    const isValid=await authenticate(req);
    if(!isValid.success)
         return res.status(401).json(isValid.error);  
  
      var block=await chainService.addToChain(req.body);
      if (block.success) {
        res.status(http_status_code.OK).json({ success: true, data: block.data});
    }
    else {
        res.status(http_status_code.BAD_REQUEST).json({ success: false, error: block.error })
    }
}

module.exports.getChain=async(req,res)=>{
   const isValid=await authenticate(req);
   if(!isValid.success)
        return res.status(401).json(isValid.error)
    var chain=await chainService.getChain(req.params.userName);
    if (chain.success) {
        res.status(http_status_code.OK).json({ success: true, data: chain.data});
    }
    else {
        res.status(http_status_code.BAD_REQUEST).json({ success: false, error: chain.error })
    }

}