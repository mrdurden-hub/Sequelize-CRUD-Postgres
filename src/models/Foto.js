const { Sequelize, Model } = require('sequelize');

class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio.',
          },
        },
      },
    }, {
      sequelize,
      modelName: 'photo',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.user, { foreignKey: 'user_id' });
  }
}

module.exports = Photo;
