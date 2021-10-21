
module.exports.sum=(a,b)=>{
    return a+b;
}

module.exports.sendError=(sms)=>{
    throw new Error(sms);
  }
  

  //callback function
  module.exports.fetchData=(back)=>{
    return back('rana abobakar')
  }
  
  //promises function
module.exports.promis=()=>{
return new Promise((resolve,reject)=>{
if(1==1)
 resolve('rana')
else
 reject('grana')
  })}
  

  //await / async

  module.exports.promis2=()=>{
    return new Promise((resolve,reject)=>{
    if(1==1)
     resolve('rana')
    else
     reject('grana')
      })}
      
    