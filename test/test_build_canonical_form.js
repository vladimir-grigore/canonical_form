const assert = require('chai').assert;
const buildCanonicalForm = require('../build_canonical_form');

describe('Build canonical form', () => {
  it('should take an array of summands and return canonical form: x^2 - y^2 + 4.5xy = 0', () => {
    let summands_list = [ 
      { coefficient: 1, variable: 'x', exponent: 2 },
      { coefficient: 4.5, variable: 'xy', exponent: 1 },
      { coefficient: -1, variable: 'y', exponent: 2 } ];
    let canonical_form = 'x^2 - y^2 + 4.5xy = 0';
    assert.equal(buildCanonicalForm(summands_list), canonical_form);
  });

  it('should take an array of summands and return canonical form: x - 1 = 0', () => {
    let summands_list = [
      { coefficient: 1, variable: 'x', exponent: 1 },
      { coefficient: -1, variable: '', exponent: 1 } ];
    let canonical_form = 'x - 1 = 0';
    assert.equal(buildCanonicalForm(summands_list), canonical_form);
  });

  it('should take an array of summands and return canonical form: -y^2 + 2x = 0', () => {
    let summands_list = [ 
      { coefficient: 2, variable: 'x', exponent: 1 },
      { coefficient: -1, variable: 'y', exponent: 2 } ];
    let canonical_form = '-y^2 + 2x = 0';
    assert.equal(buildCanonicalForm(summands_list), canonical_form);
  });

  it('should take an empty array of summands and return: 0 = 0', () => {
    let summands_list = [];
    let canonical_form = '0 = 0';
    assert.equal(buildCanonicalForm(summands_list), canonical_form);
  });
});
