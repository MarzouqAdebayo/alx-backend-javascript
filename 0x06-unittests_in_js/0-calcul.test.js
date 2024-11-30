const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('it shoud round first before sum and return correct value', function () {
    const a = 2.1111333;
    const b = 3.5000555;
    const want = Math.round(a) + Math.round(b);
    const got = calculateNumber(a, b);
    assert.equal(want, got);
  });

  it('it shoud check if individual numbers are rounded first before sum', function () {
    const a = 2.3;
    const b = 3.3;
    const want = Math.round(a + b);
    const got = calculateNumber(a, b);
    console.log(want, got);
    assert.notEqual(want, got);
  });
});
