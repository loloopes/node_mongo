const connection = require('../connection');

module.exports = async (prodName) => {
  return (await connection()).collection('products').findOne({ name: prodName });
};
