const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/db/connection');
const model = require('../../../src/models/products.model');
const { prod, productById, prodNew } = require('../../product.mock');

describe('Testa rota product', function () {

  afterEach(function () { sinon.restore() });

  describe('Testa a camada model', function () {
    it('Busca produtos', async function () {
      sinon.stub(connection, 'execute').resolves([prod]);

      const response = await model.productGetAll();
      expect(response).to.be.deep.equal(prod);
    });
  });

  describe('Testa productGetById', function () {
    it('Busca por todos os produtos cadastrados', async function () {
      sinon.stub(connection, 'execute').resolves([productById]);

      const response = await model.productGetById(1);
      expect(response).to.be.deep.equal(productById);
    });
  });

  // describe('Testa a camada model para a função "insertProduct"', function () {
  //   it('Busca por todos os produtos cadastrados', async function () {
  //     sinon.stub(connection, 'execute').resolves(undefined);

  //     const response = await model.insertProduct(productsNew);
  //     expect(response).to.be.deep.equal(undefined);
  //   });
  // });
});