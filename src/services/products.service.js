const productModel = require('../models/products.model');

const productGetAll = async () => {
  const allProducts = await productModel.productGetAll();

  return { type: null, message: allProducts };
};

const productGetById = async (id) => {
  const productsById = await productModel.productGetById(id);
  if (!productsById.length) return { type: 404, message: 'Product not found' };
  return { type: null, message: productsById[0] };
};

const insertProduct = async (products) => {
  await productModel.insertProduct(products);
  const allProducts = await productModel.productGetAll();
  const productInsered = allProducts.length - 1;
  return { type: null, message: allProducts[productInsered] };
};

module.exports = {
  productGetAll,
  productGetById,
  insertProduct,
};