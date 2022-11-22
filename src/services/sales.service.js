const salesModel = require('../models/sales.model');

const salesGetAll = async () => {
  const allSales = await salesModel.salesGetAll();
  const allSalesProduct = await salesModel.salesProductsGetAll();
  const array = [];
  allSalesProduct.forEach((element) => {
    array.push({
        saleId: element.sale_id,
        date: allSales.find((data) => data.id === element.sale_id).date,
        productId: element.product_id,
        quantity: element.quantity,
    });
  });

  return { type: null, message: array };
};

const salesGetById = async (id) => {
  const allSalesById = await salesModel.salesGetById(id);
  if (!allSalesById.length) return { type: 404, message: 'Sale not found' };
  const allSalesProductById = await salesModel.salesProductGetById(id);
  const array = [];
  allSalesProductById.forEach((element) => {
    array.push({
      date: allSalesById.find((data) => data.id === element.sale_id).date,
      productId: element.product_id,
      quantity: element.quantity,
    });
  });

  return { type: null, message: array };
};

module.exports = {
  salesGetAll,
  salesGetById,
};