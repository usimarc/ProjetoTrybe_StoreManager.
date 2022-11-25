const productModel = require('../models/products.model');

const validateName = (req, res, next) => {
  const product = req.body;
  if (!product.name) return res.status(400).json({ message: '"name" is required' });
  if (product.name.length < 5) {
 return res.status(422).json({ message: '"name" length must be at least 5 characters long' }); 
}
  next();
};

const validateQuantity = (req, res, next) => {
  const sales = req.body;
  const noQtd = sales.find((sale) => !sale.quantity || sale.quantity < 1);
  if (noQtd && noQtd.quantity === undefined) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (noQtd && noQtd.quantity < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validateProduct = async (req, res, next) => {
  const sales = req.body;
  const noProduct = sales.filter((sale) => !sale.productId);
  if (noProduct.length !== 0) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const existProduct = await Promise.all(sales
    .map(async (sale) => productModel.productGetById(sale.productId)));
  const exist = existProduct.some((element) => element.length === 0);
  if (exist) {
    return res.status(404).json({ message: 'Product not found' });
  }
 
  next();
};

module.exports = {
  validateName,
  validateQuantity,
  validateProduct,
};
