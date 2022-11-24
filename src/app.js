// Iniciando o projeto
const express = require('express');
const productController = require('./controllers/products.controller');
const salesController = require('./controllers/sales.controller');

const { validateName } = require('./middlewares/validation');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/:id', productController.productGetById);
app.delete('/products/:id', productController.productDeleteById);
app.put('/products/:id', validateName, productController.productUpdateById);
app.get('/products', productController.productGetAll);
app.post('/products', validateName, productController.insertProduct);

app.get('/sales/:id', salesController.salesGetById);
app.get('/sales', salesController.salesGetAll);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;