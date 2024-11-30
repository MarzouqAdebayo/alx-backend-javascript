const Express = require('express');

const PORT = 1245;
const HOST = 'localhost';
const app = Express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
