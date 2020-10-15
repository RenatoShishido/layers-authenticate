const serviceUser = require('../services/serviceUser')
module.exports = middleware => {
  return async (req, res, next) => {
    const user = await serviceUser.getUserId(req.userId)
    if(user.is_admin)
      middleware(req, res, next)
    else
      res.status(401).send({error: "Precisar ser administrador"})
  }
}