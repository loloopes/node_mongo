const express = require('express');
const error = require('./middleware/error');
const root = require('./controller/router');

const app = express();
const PORT = proces.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong!' });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
//
app.use(root);

app.use(error);

app.listen(PORT, () => console.log(`Running, port ${PORT}`));
