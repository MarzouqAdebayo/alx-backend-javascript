const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('Send payment request to api', () => {
  let consoleSpy;

  beforeEach(() => {
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    if (consoleSpy.log) {
      consoleSpy.log.resetHistory();
    }
  });

  it('sendPaymentRequestToApi calls calculateNumber with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.log.calledOnceWithExactly('The total is: 120')).to.be
      .true;
  });

  it('sendPaymentRequestToApi calls calculateNumber with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.log.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
