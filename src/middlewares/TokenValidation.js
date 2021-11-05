const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const tokenValidation = async (req, res, next) => {
  const { auth } = req.headers;

  if (!auth) {
    return res.send({
      error: 'Login required',
    });
  }

  try {
    const dados = jwt.verify(auth, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) return res.status(401).json({ error: 'user invalid' });

    req.userId = id;
    req.userEmail = email;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: 'your token has expired or is invalid',
    });
  }
};

module.exports = tokenValidation;
