const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, name, quantity) => {
  return (await connection())
    .collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });
};
