const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split(' )~~( ').length;
  },
  addLink(value) {
    if (this.chain === '') {
      this.chain += `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    const splitted = this.chain.split('~~');
    if (typeof splitted[position - 1] === 'undefined') {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }
    if (position === 1) {
      if (splitted.length > 1) {
        splitted.shift();
        this.chain = splitted.join('~~');
      } else {
        this.chain = '';
      }
    } else {
      splitted.splice(position - 1, 1);
      this.chain = splitted.join('~~');
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let res = this.chain;
    this.chain = '';
    return res;
  }
};

module.exports = {
  chainMaker
};
