const User = require('../models/UserModel');

class UserController {
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (e) {
      return res.status(400).json({
        error: 'Sorry, something is wrong', e,
      });
    }
  }

  // Find all users
  async findAll(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'sobrenome', 'email'] });
      res.json(users);
    } catch (e) {
      return res.status(400).json({
        error: 'Sorry, something is wrong', e,
      });
    }
  }

  // Find one user by primary key
  async findOne(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {
        id, nome, sobrenome, email,
      } = user;
      res.json({
        id, nome, sobrenome, email,
      });
    } catch (e) {
      return res.status(400).json({
        error: 'Sorry, something is wrong', e,
      });
    }
  }

  // Update one user by primary key
  async updateOne(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          error: 'User do not exist',
        });
      }

      const userUpdated = await user.update(req.body);
      res.json(userUpdated);
    } catch (e) {
      return res.status(400).json({
        error: 'Sorry, something is wrong', e,
      });
    }
  }

  // Delete one user by primary key
  async deleteOne(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          error: 'User do not exist',
        });
      }

      await user.destroy(req.body);

      return res.json({
        msg: 'User deleted',
      });
    } catch (e) {
      return res.status(400).json({
        error: 'Sorry, something is wrong', e,
      });
    }
  }
}

module.exports = new UserController();
