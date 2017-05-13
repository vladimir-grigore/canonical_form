const assert = require('chai').assert;
const buildSummands = require('../build_summands');

describe('Build summands list', () => {
  it('should take equation: x^2+3.5xy+y=y^2-xy+y and return an array of summands', () => {
    let equation = 'x^2+3.5xy+y=y^2-xy+y';
    let summands_list = [ 
      { coefficient: 1, variable: 'x', exponent: 2 },
      { coefficient: 4.5, variable: 'xy', exponent: 1 },
      { coefficient: -1, variable: 'y', exponent: 2 } ];
    assert.deepEqual(buildSummands(equation), summands_list);
  });

  it('should take equation: x=1 and return an array of summands', () => {
    let equation = 'x=1';
    let summands_list = [ 
      { coefficient: 1, variable: 'x', exponent: 1 },
      { coefficient: -1, variable: '', exponent: 1 } ];
    assert.deepEqual(buildSummands(equation), summands_list);
  });

  it('should take equation: x-(y^2-x)=0 and return an array of summands', () => {
    let equation = 'x-(y^2-x)=0';
    let summands_list = [ 
      { coefficient: 2, variable: 'x', exponent: 1 },
      { coefficient: -1, variable: 'y', exponent: 2 } ];
    assert.deepEqual(buildSummands(equation), summands_list);
  });

  it('should take equation: x-(0-(0-x))=0 and return an empty array of summands', () => {
    let equation = 'x-(0-(0-x))=0';
    let summands_list = [];
    assert.deepEqual(buildSummands(equation), summands_list);
  });

});
