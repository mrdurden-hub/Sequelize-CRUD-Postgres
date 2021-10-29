const { Sequelize, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.STRING,
    }, {
      sequelize,
      modelName: 'user',
    });
    return this;
  }
}

module.exports = User;
