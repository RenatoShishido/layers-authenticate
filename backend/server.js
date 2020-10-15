const express = require("express")
const cors = require("cors")
const LOADER = require('./api/loader')
const DATABASE = require('./api/db/db')

class Server {
  constructor() {
    const app = express()


    app.use(cors())
    app.use(express.json())
    LOADER.loadAll(app)
    new DATABASE()

    const PORT = 3000
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  }
}

new Server()