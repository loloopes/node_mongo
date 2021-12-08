const express = require('express');
const getSales = require('./getSales');

const router = express.Router({ mergeParams: true });

router.get('/', getSales);

module.exports = router;