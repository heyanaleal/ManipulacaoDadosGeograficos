const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo à API GeoPoly!');
});

app.use('/v1', authRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
