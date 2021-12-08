const connection = require('../connectionSQL');

module.exports = async () => {
  const query = 'SELECT * FROM sale';

  const result = await connection.execute(query);

  return result;
};
