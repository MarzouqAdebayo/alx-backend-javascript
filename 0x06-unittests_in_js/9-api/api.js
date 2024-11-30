const Express = require('express');

const PORT = 7865;
const HOST = 'localhost';
const app = Express();

app.get('/', (_, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`API available on localhost port ${PORT}`);
});
