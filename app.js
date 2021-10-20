module.exports.sum=(a,b)=>{
    return a+b;
}

module.exports.sendError=(sms)=>{
    throw new Error(sms);
  }
  