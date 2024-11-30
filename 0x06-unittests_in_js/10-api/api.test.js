const request = require('request');
const { expect } = require('chai');

describe('Simple API intergration test for /available_payments', () => {
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
});

describe('Simple API intergration test for /login', () => {
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
