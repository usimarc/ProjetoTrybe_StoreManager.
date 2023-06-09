const productService = require('../services/products.service');

const productGetAll = async (_req, res) => {
  const { message } = await productService.productGetAll();
  return res.status(200).json(message);
};

const productGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.productGetById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const product = req.body;
  const { message } = await productService.insertProduct(product);
  res.status(201).json(message);
};

const productUpdateById = async (req, res) => {
  const product = req.body;
  const { id } = req.params;
  const { type, message } = await productService.productUpdateById(id, product);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const productDeleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.productDeleteById(id);
  if (type) return res.status(type).json({ message });
  res.status(204).json();
};

module.exports = {
  productGetAll,
  productGetById,
  insertProduct,
  productUpdateById,
  productDeleteById,
};