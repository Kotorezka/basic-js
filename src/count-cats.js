const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if ((matrix === null)||(matrix == undefined)||(matrix.length == 0)){
    return 0;
  }
  else {
    let catCounter = 0;
    let i = 0;
    let j = 0;
    for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++){
        if (matrix[i][j]== '^^') {
          catCounter++;
        }
      }

    }
    return catCounter;

  }
  
};
