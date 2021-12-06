const express = require('express');
const product = require('./product/router');

const root = express.Router();

root.use('/products', product);

module.exports = root;
