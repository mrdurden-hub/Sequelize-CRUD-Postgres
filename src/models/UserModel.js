const { Sequelize, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 5 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 e 5 caracteres.',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },

      senha: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      // campo virtual (não existe na base de dados)
      senha_enviada: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Campo senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },

    }, {
      sequelize,
      modelName: 'user',
    });

    this.addHook('beforeSave', async (user) => {
      user.senha = await bcryptjs.hash(user.senha_enviada, 8);
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.senha);
  }
}

module.exports = User;
