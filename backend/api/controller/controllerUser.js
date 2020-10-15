const serviceUser = require('../services/serviceUser')

module.exports = class ControllerUser {
  static async getUserAll(req, res) {
    try {

      const response = await serviceUser.getUserAll()

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async getUserId(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id"
        })

      const response = await serviceUser.getUserId(req.params.id)

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }

  static async updateUser(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para atualizar usuario"
        })

      const response = await serviceUser.updateUser(req.params.id, req.body)

      return res.send({response})


    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async removeUser(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para remover"
        })

      const response = await serviceUser.removeUser(req.params.id)

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }


}