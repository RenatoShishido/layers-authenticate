const serviceUser = require('../services/serviceUser')
module.exports = middleware => {
  return async (req, res, next) => {
    const user = await serviceUser.getUserId(req.userId)
    if (user.is_moderador)
      middleware(req, res, next)
    else
      res.status(401).send({
        error: "Precisar ser moderador para fazer esta acao"
      })
  }
}