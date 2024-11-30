const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Send payment request to api', () => {
  it('sendPaymentRequestToApi calls calculateNumber exactly once with arguments', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
    spy.calculateNumber.restore();
  });
});
