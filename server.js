// server.js
const express = require('express');
const app = express();

// Importando os roteadores
const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');
const v3Router = require('./routes/v3');
const v4Router = require('./routes/v4');

// Configurando middlewares
app.use(express.json());

// Roteadores
app.use('/v1', v1Router);
app.use('/v2', v2Router);
app.use('/v3', v3Router);
app.use('/v4', v4Router);

// Iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
