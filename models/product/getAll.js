const connection = require('../connection');

module.exports = async () => {
  return (await connection()).collection('products').find().toArray();
};
