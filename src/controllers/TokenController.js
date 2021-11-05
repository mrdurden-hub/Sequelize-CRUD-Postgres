const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

class TokenController {
  async store(req, res) {
    const { email = '', senha_enviada = '' } = req.body;

    // eslint-disable-next-line camelcase
    if (!email || !senha_enviada) return res.status(401).json({ error: 'Credenciais inválidas' });

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: 'Usuário não existe' });
    if (!(await user.passwordIsValid(senha_enviada))) {
      return res.status(401).json({ error: 'senha inválida' });
    }

    try {
      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      res.json({ token });
    } catch (error) {
      return res.status(401).json({ error: 'Desculpe, algo deu errado' });
    }
  }
}

module.exports = new TokenController();
