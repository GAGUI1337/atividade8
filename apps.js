const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração da View Engine EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Rotas
const indexRoute = require('./routes/index');
const calcularRoute = require('./routes/calcular');

app.use('/', indexRoute);
app.use('/calcular', calcularRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
