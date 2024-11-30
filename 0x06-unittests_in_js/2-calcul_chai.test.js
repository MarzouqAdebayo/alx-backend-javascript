const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('type == "SUM"', () => {
  it('equal positive numbers (alternate)', () => {
    const want = calculateNumber('SUM', 2.3, 1.8);
    expect(want).to.equal(4);
  });

  it('equal negative numbers (alternate)', () => {
    const want = calculateNumber('SUM', -2.3, -1.8);
    expect(want).to.equal(-4);
  });

  it('negative and positive numbers', () => {
    const want = calculateNumber('SUM', -2.0, 2.0);
    expect(want).to.equal(0);
  });

  it('positive and negative numbers', () => {
    const want = calculateNumber('SUM', 2.0, -2.0);
    expect(want).to.equal(0);
  });
});

describe('type == "SUBTRACT"', () => {
  it('equal positive numbers (alternate)', () => {
    const want = calculateNumber('SUBTRACT', 2.3, 1.8);
    expect(want).to.equal(0);
  });

  it('equal negative numbers (alternate)', () => {
    const want = calculateNumber('SUBTRACT', -2.3, -1.8);
    expect(want).to.equal(0);
  });

  it('negative and positive numbers', () => {
    const want = calculateNumber('SUBTRACT', -2.0, 2.0);
    expect(want).to.equal(-4.0);
  });

  it('positive and negative numbers', () => {
    const want = calculateNumber('SUBTRACT', 2.0, -2.0);
    expect(want).to.equal(4.0);
  });
});

describe('type == "DIVIDE"', () => {
  it('numbers with different signs', () => {
    const want = calculateNumber('DIVIDE', -7.0, 2.0);
    expect(want).to.equal(-3.5);
  });

  it('negative numbers', () => {
    const want = calculateNumber('DIVIDE', -7.0, -2.0);
    expect(want).to.equal(3.5);
  });

  it('0 and negative number', () => {
    const want = calculateNumber('DIVIDE', 0.0, -5.0);
    expect(want).to.equal(-0);
  });

  it('positive number and 0', () => {
    const want = calculateNumber('DIVIDE', 5.0, 0);
    expect(want).to.equal('Error');
  });

  it('positive number and number rounded down to 0', () => {
    const want = calculateNumber('DIVIDE', 5.0, 0.2);
    expect(want).to.equal('Error');
  });

  it('positive number and number rounded up to 0', () => {
    const want = calculateNumber('DIVIDE', 5.0, -0.2);
    expect(want).to.equal('Error');
  });

  it('negative number and number rounded down to zero', () => {
    const want = calculateNumber('DIVIDE', -5.0, 0.2);
    expect(want).to.equal('Error');
  });

  it('negative number and number rounded up to zero', () => {
    const want = calculateNumber('DIVIDE', -5.0, -0.2);
    expect(want).to.equal('Error');
  });
});
