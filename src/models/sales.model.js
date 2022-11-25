const connection = require('./db/connection');

const salesGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );

  return result;
};

const salesGetById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = (?)',
    [id],
  );

  return result;
};

const salesProductsGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products',
  );

  return result;
};

const salesProductGetById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = (?)',
    [id],
  );

  return result;
};

const insertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return { id: insertId };
};

const insertSalesProduct = async (id, { productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [id, productId, quantity],
  );
};

module.exports = {
  salesGetAll,
  salesGetById,
  salesProductsGetAll,
  salesProductGetById,
  insertSales,
  insertSalesProduct,
};