const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Send payment request to api', () => {
  it('sendPaymentRequestToApi calls calculateNumber exactly once with arguments', () => {
    const consoleSpy = sinon.spy(console);
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 200)).to.be.true;
    expect(consoleSpy.log.calledOnceWithExactly('The total is: 10')).to.be.true;
    consoleSpy.log.restore();
    stub.restore();
  });
});
