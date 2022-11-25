const sinon = require('sinon');
const { expect } = require('chai');

const service = require('../../../src/services/products.service');
const serviceSales = require('../../../src/services/sales.service');

const model = require('../../../src/models/products.model');
const modelSales = require('../../../src/models/sales.model');

const { prod, getProductById, productId, saleId } = require('../../product.mock');
// sales_products, saleId, productId, getProductById


describe('Testa a service', function () {
  afterEach(function () { sinon.restore() });
  describe('Testa a camada service', function () {
    it('Busca produtos', async function () {
      const resultado = { type: null, message: prod }
      sinon.stub(model, 'productGetAll').resolves(prod);
      const resposta = await service.productGetAll();
      expect(resposta).to.be.deep.equal(resultado);
    });
  });
});

describe('Testa sales"', function () {
  afterEach(function () { sinon.restore() });
  describe('Testa a salesGetById', function () {
    it('venda cadastrada ', async function () {
      const result = { type: null, message: getProductById }
      sinon.stub(modelSales, 'salesGetById').resolves(saleId);
      sinon.stub(modelSales, 'salesProductGetById').resolves(productId);
      const response = await serviceSales.salesGetById(2);
      expect(response).to.be.deep.equal(result);
    });
    it('venda não cadastrada', async function () {
      const result = { type: 404, message: 'Sale not found' }
      sinon.stub(modelSales, 'salesGetById').resolves([]);
      const response = await serviceSales.salesGetById(8);
      expect(response).to.be.deep.equal(result);
    });
  });
});