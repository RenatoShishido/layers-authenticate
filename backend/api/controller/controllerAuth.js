require('dotenv/config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/user')
const serviceUser = require('../services/serviceUser')

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400,
  })
}

module.exports = class controllerAuth {
  static async authenticate(req, res) {
    const {
      email,
      password
    } = req.body

    try {
      const user = await User.findOne({
        email
      }).select('+password')

      if (!user) return res.status(400).send({
        error: "Usuario invalido"
      })

      if (!await bcrypt.compare(password, user.password))
        return res.status(401).send({
          error: "Senha invalida"
        })

      user.password = undefined

      return res.send({
        user,
        token: generateToken({
          id: user.id
        }),
      })

    } catch (error) {
      console.log("Error no authentication")
      return res.status(500).send(error)
    }
  }

  static async registerUser(req, res) {
    try {
      const {
        email,
        nome,
        password
      } = req.body

      if (await User.findOne({
          email
        }))
        return res.status(400).send({
          error: "Este Email ja foi cadastrado, tente novamente"
        })

      if (!nome)
        return res.status(400).send({
          error: "Nome invalido!"
        })
        
      if (!email)
        return res.status(400).send({
          error: "Email invalido!"
        })


      if (!password)
        return res.status(400).send({
          error: "Senha invalida"
        })

      const user = await serviceUser.registerUser(req.body)

      user.password = undefined

      return res.send({
        user,
        token: generateToken({
          id: user.id
        })
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
}