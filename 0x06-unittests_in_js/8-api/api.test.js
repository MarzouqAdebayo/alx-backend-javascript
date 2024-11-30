const request = require('request');
const { expect } = require('chai');

describe('Simple API intergration test for Index page', () => {
  it('/ route return correct response', (done) => {
    request.get('http://localhost:7865', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
