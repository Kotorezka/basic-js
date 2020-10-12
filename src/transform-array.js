const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  let resArr = [];
  for (let j = 0; j < arr.length; j++){
    resArr.push(arr[j]);
  }
  
    for(let i = 0; i < resArr.length; i++){
      if (typeof(resArr[i]) == 'string') {
        switch (resArr[i]){
          case '--discard-next':
            if (resArr[i+1] != null){
            resArr[i] = undefined;
            resArr[i+1]= undefined;
            } else {
              resArr.splice(i,1);
            }
            break;
          case '--discard-prev':
            if (resArr[i-1] != resArr[resArr.length+1]){
            resArr[i] = undefined;
            resArr[i-1] = undefined;
            } else {
              resArr.splice(i,1);
            }
            break;
          case '--double-next':
            if(resArr[i+1] != null){
              resArr[i] = resArr[i+1];
            } else {
              resArr.splice(i,1);
            }
            break;
          case '--double-prev':
            if(resArr[i-1] != resArr[resArr.length+1]){
              resArr[i] = resArr[i-1];
            } else {
              resArr.splice(i,1);
            }
            break;
        }
      }
     
  }
  
  
  return resArr.filter(x => typeof(x) !=='undefined' );
};
