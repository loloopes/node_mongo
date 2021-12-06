const connection = require('../connection');

module.exports = async (product) => {
  return (await connection()).collection('products').insertOne(product);
};
