const prod = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const sales_prod = [
  {
    "saleId": 1,
    "date": "2022-11-18T18:09:40.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-11-18T18:09:40.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-11-18T18:09:40.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const sales_date = [
  {
    "id": 1,
    "date": "2022-11-18T18:09:40.000Z",
  },
  {
    "id": 2,
    "date": "2022-11-18T18:09:40.000Z",
  }
];

const product_sales = [
  {
    "sale_id": 1,
    "product_id": 1,
    "quantity": 5
  },
  {
    "sale_id": 1,
    "product_id": 2,
    "quantity": 10
  },
  {
    "sale_id": 2,
    "product_id": 3,
    "quantity": 15
  }
];

const prodNew = {
  "id": 4,
  "name": "Martelo do Batman"
};

const prodUpdate = [
  {
    "id": 1,
    "name": "Martelinho de Thor"
  },
];

const productId = [
  {
    "sale_id": 2,
    "product_id": 3,
    "quantity": 15
  }
];

const getProductById = [
  {
    "date": "2022-11-18T18:09:40.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const saleId = [
  {
    "id": 2,
    "date": "2022-11-18T18:09:40.000Z",
  }
];

const productById = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
];

module.exports = {
  prod,
  productById,
  prodNew,
  getProductById,
  productId,
  saleId,
  
}