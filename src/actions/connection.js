import config from 'config';

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

const openConnection = () => new Promise((resolve, reject) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      reject(err);
    }
    resolve(db.db(config.dbName));
  });
});

function closeConnection(db) {
  if (db) {
    db.close();
  }
}

export {
  openConnection,
  closeConnection,
  MongoClient,
  url
};
