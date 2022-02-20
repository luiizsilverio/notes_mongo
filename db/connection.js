const {MongoClient} = require('mongodb')

// notesDb é o nome do banco de dados

let url = "mongodb://localhost:27017/notesDb"

if (process.env.DB_ATLAS === 'Yes') { // banco no MongoDB Atlas
  url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5cmwr.mongodb.net/notesDb?retryWrites=true&w=majority`
}

let _db;

const initDb = (callback) => {
  MongoClient.connect(url, { useUnifiedTopology: true })
    .then((client) => {
      _db = client
      callback(null, _db)
    })
    .catch((err) => {
      callback(err)
    })
}

const getDb = () => {
  return _db
}

module.exports = {
  initDb,
  getDb
}