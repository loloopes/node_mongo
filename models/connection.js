const { MongoClient } = require('mongodb');

// For local development
const URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'StoreManager';

// To run tests
// const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
// const DB_NAME = 'StoreManager';

let connection = null;

module.exports = async () => {
  try{
    // eslint-disable-next-line no-return-assign
    return connection 
      ? connection 
      : connection = (await MongoClient.connect(
        // MONGO_DB_URL,
        URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      )).db(DB_NAME);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
