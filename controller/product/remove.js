const product = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteResult = await product.removeById(id);

    return res.status(200).json(deleteResult);
  } catch (err) {
    next(err);
  }
};
