const product = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundProduct = await product.getById(id);

    return foundProduct[0]
      ? res.status(200).json(foundProduct[0])
      : res.status(422).json(foundProduct);
  } catch (err) {
    next(err);
  }
};
