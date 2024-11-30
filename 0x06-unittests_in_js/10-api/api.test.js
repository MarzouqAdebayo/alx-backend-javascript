const request = require('request');
const { expect } = require('chai');

describe('Simple API intergration test', () => {
  it('/ route return correct response', (done) => {
    request.get('http://localhost:7865', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

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

  it('/available_payments route', (done) => {
    request.get('http://localhost:7865/available_payments', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });

  it('/login route', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'Betty' } },
      (_, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
        done();
      },
    );
  });
});
