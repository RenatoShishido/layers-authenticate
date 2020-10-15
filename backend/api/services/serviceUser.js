const User = require('../models/user')

module.exports = class serviceUser {
  static async getUserAll(){
    try {
      
      return await User.find()
       
    } catch (error) {
      throw {
        errorUser: "Erro ao achar usuario",
        error: error
      }
    }
  }
  static async getUserId(id){
    try {
      
      return await User.findById(id)

    } catch (error) {
      throw {
        errorUser: "Erro ao achar um unico usuario",
        error: error
      }
    }
  }
  static async registerUser(user){
    try {
      
      return await User.create(user)

    } catch (error) {
      throw {
        errorUser: "Erro ao registrar um usuario",
        error: error
      }
    }
  }
  static async updateUser(id, user){
    try {
      
      return await User.findByIdAndUpdate(id, user)
       
    } catch (error) {
      throw {
        errorUser: "Erro ao atualizar usuario",
        error: error
      }
    }
  }
  static async removeUser(id){
    try {
      
      return await User.findByIdAndDelete(id)
       
    } catch (error) {
      throw {
        errorUser: "Erro ao deletar usuario",
        error: error
      }
    }
  }
}
