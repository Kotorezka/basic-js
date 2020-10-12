const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  return {turns: Math.pow(2,diskNumber)-1, seconds: Math.floor((Math.pow(2,diskNumber)-1)/(turnsSpeed/3600))};
  
  
};
