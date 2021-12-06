const product = require('../../services/product');

module.exports = async (_req, res, next) => {
  try {
    const allProducts = await product.listAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    next(err);
  }
};
