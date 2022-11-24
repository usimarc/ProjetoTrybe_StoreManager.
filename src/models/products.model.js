const connection = require('./db/connection');

const productGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const productGetById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = (?)',
    [id],
  );

  return result;
};

const insertProduct = async ({ name }) => {
  await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
};

const productUpdateById = async (id, { name }) => connection.execute( 
  'UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
  [name, id],
);

module.exports = {
  productGetAll,
  productGetById,
  insertProduct,
  productUpdateById,
};