const product = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const newProduct = await product.create({ name, quantity });

    if (newProduct.err) return res.status(422).json(newProduct);

    return res.status(201).send(newProduct.ops[0]);
  } catch (err) {
    next(err);
  }
};
