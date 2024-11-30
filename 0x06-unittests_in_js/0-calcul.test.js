const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('shoud round first before sum and return correct value', () => {
    const a = 2.1111333;
    const b = 3.5000555;
    const want = Math.round(a) + Math.round(b);
    const got = calculateNumber(a, b);
    assert.strictEqual(want, got);
  });

  it('shoud check if individual numbers are rounded first before sum', () => {
    const a = 2.3;
    const b = 3.3;
    const got = calculateNumber(a, b);
    assert.strictEqual(got, 5);
  });

  it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
