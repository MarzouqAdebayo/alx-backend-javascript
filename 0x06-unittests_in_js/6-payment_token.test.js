const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.only('', () => {
  it('', (done) => {
    getPaymentTokenFromAPI(true).then((value) => {
      expect(value).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
