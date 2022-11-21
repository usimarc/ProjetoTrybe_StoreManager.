// Iniciando o projeto
const express = require('express');
const productController = require('./controllers/products.controller');
const { validateName } = require('./middlewares/validation');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/:id', productController.productGetById);
app.get('/products', productController.productGetAll);

app.post('/products', validateName, productController.insertProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;