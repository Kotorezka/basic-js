const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainsArr: [],
  getLength() {
    return this.chainsArr.length;
    
  },
  addLink(value) {
    this.chainsArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chainsArr = [];
      throw new Error('Error');      
    } else {
    if (!this.chainsArr[position-1]) {
      this.chainsArr = [];
      throw new Error('Error');
    } else {
      this.chainsArr.splice(position-1, 1);
    }
  }
    return this;
    
  },
  reverseChain() {
    this.chainsArr.reverse();    
    return this;
  },
  finishChain() {
    result = this.chainsArr.join('~~');
    this.chainsArr = [];
    return result;
    
    
  }
};

module.exports = chainMaker;
