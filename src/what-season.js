const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dateSeason) {
  if (dateSeason == null){
   return 'Unable to determine the time of year!';
  }
  if (Date.prototype.toString.call(dateSeason) === "[object Date]") {
    throw new Error('Error');
  } else {
  let month = dateSeason.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    case 8:
    case 9:
    case 10:
      return 'fall';
      break;                    
  }
  }
  
  
};
