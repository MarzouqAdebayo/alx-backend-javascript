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

describe('Simple API intergration test for /cart/:id', () => {
  it('/cart/:id route return correct response', (done) => {
    request.get('http://localhost:7865/cart/2', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 2');
      done();
    });
  });

  it('/cart/:id route return Error when id is a negative number response', (done) => {
    request.get('http://localhost:7865/cart/-1', (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('/cart/:id route return Error when id is not number response', (done) => {
    request.get('http://localhost:7865/cart/hey', (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
