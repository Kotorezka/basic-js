const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) != 'String')||(sampleActivity == null)||(sampleActivity == undefined)||(sampleActivity == '')) {
    return false;
  }
  else {
    return Math.floor((Math.log(MODERN_ACTIVITY/+(sampleActivity)))/(0.693/HALF_LIFE_PERIOD))
  }
  
};
