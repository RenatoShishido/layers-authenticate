const mongoose = require('mongoose')

module.exports = class dataBase {
  constructor() {
    mongoose.connect(`mongodb://root:passwordRoot@173.10.0.2:27017`, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection

db.once('open', () => console.log('Banco de dados funcionando...'))
  }
}

