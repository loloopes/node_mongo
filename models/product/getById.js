const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  return (await connection()).collection('products').find(ObjectId(id)).toArray();
};
