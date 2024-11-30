const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const { expect } = chai;

describe('Send payment request to api', () => {
  const spy = sinon.spy(Utils);

  sendPaymentRequestToApi(100, 20);
  const called = spy.calculateNumber.calledOnceWithExactly('SUM', 100, 21);
  expect(called).to.be.true;
  spy.calculateNumber.restore();
});
