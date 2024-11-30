const express = require('express');

const PORT = 7865;
const HOST = 'localhost';
const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome ${username}`);
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`API available on localhost port ${PORT}`);
});
