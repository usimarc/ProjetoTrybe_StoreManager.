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

const productUpdateById = async (id, product) => {
  const hasProduct = await productModel.productGetById(id);
  if (!hasProduct.length) return { type: 404, message: 'Product not found' };
  console.log(id, product);
  await productModel.productUpdateById(id, product);
  return { type: null, message: { id, ...product } };
};

module.exports = {
  productGetAll,
  productGetById,
  insertProduct,
  productUpdateById,
};