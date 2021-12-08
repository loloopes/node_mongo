const sale = require('../models/sales');

const getAll = () => {
  return sale.getAll();
};

module.exports = { getAll };