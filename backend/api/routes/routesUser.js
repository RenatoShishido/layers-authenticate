const controllerUser = require('../controller/controllerUser')
const controllerAuth = require('../controller/controllerAuth')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const moder = require('../middleware/moderador')

module.exports = class UserRouter {
  constructor(app) {
    app.post('/authenticate', controllerAuth.authenticate)
    app.post('/register', controllerAuth.registerUser)


    app.route('/user')
      .all(auth)
      .get(moder(controllerUser.getUserAll))
      .get(admin(controllerUser.getUserAll))

    app.route('/user/:id')
      .all(auth)
      .get(moder(controllerUser.getUserId))
      .get(admin(controllerUser.getUserId))
      .delete(admin(controllerUser.removeUser))
      .put(admin(controllerUser.updateUser))
  }
}