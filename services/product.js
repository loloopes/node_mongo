/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const { ObjectId } = require('mongodb');
const product = require('../models/product');
const verifier = require('../utilities/verifier');

const create = async ({ name, quantity }) => {
  if (verifier.verifyName(name)) return verifier.verifyName(name);
  if (verifier.verifyQuantity(quantity)) return verifier.verifyQuantity(quantity); 

  const existsProduct = await product.getByName(name);
  
  return existsProduct 
  ? { err: { code: 'invalid_data', message: 'Product already exists' } } 
  : product.create({ name, quantity });
};

const update = async (id, { name, quantity }) => {
  if (verifier.verifyName(name)) return verifier.verifyName(name);
  if (verifier.verifyQuantity(quantity)) return verifier.verifyQuantity(quantity);

  const existsProduct = await product.getById(id);

  return existsProduct.length
    ? product.updateById(id, name, quantity)
    : { err: { code: 'invalid_data', message: 'Wrong id format' } };
};

const listAll = async () => {
  return product.getAll();
};

const removeById = async (id) => {
  const entity = await product.getById(id);
  const { result: { n } } = await product.remove(id);

  return n > 0 
    ? entity
    : { err: { code: 'invalid_data', message: 'Wrong id format' } };
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return {
    err: {
      code: 'invalid_data',
      message: 'Wrong id format',
    },
  };

  const existsProduct = await product.getById(id);

  return existsProduct.length
    ? existsProduct
    : { err: { code: 'invalid_data', message: 'Wrong id format' } };
};

module.exports = { create, listAll, getById, update, removeById };
