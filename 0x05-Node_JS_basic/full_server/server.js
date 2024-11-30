import express from 'express';
import routes from './routes';

const PORT = 1245;
const app = express();

routes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
