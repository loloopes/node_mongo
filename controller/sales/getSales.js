const sales = require('../../services/sales');

module.exports = async (_req, res, next) => {
  try {
    const allSales = await sales.getAll();
    console.log(allSales);
    return res.status(200).json({ message: 'under implementation =)' });
  } catch (err) {
    next(err);
  }
};
