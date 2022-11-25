const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const controllers = require('../../../src/controllers/products.controller');
const services = require('../../../src/services/products.service');
const { prod, getProductById } = require('../../product.mock');
// productsNew, productsUpdate, sales_products, getProductById

describe('Testa a controller ', function () {

  afterEach(function () { sinon.restore() });

  describe('Testa a controller', function () {
    it('Prod cadastrados', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services, 'productGetAll').resolves({ type: 200, message: prod });

      await controllers.productGetAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(prod);
    });
  });
});

describe('Testa productGetById', function () {
  it('Busca por um produto cadastrado', async function () {
    const req = { params: { id: 2 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(services, 'productGetById').resolves({ type: null, message: getProductById });
    await controllers.productGetById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getProductById);
  });
});