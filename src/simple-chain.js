const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    let link = '( )';
    if (value !== undefined) {
      link = '( ' + value + ' )';
    }
    this.chain.push(link);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof(position) !== 'number') {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
