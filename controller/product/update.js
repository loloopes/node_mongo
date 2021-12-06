const product = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const updateResult = await product.update(id, { name, quantity });

    if (updateResult.err) return res.status(422).json(updateResult);

    return res.status(200).json({ _id: id, name, quantity });
  } catch (err) {
    next(err);
  }
};
