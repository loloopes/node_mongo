const express = require('express');
const product = require('./product/router');
const sale = require('./sales/router');

const root = express.Router();

root.use('/products', product);
root.use('/sales', sale);

module.exports = root;
