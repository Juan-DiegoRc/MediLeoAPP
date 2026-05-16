const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { username, password } = req.body;

  if (
    username !== 'admin' ||
    password !== 'admin123'
  ) {
    return res.status(401).json({
      message: 'Invalid credentials'
    });
  }

  const token = jwt.sign(
    {
      username: 'admin',
      role: 'administrator'
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '24h'
    }
  );

  return res.status(200).json({
    token
  });
};

module.exports = {
  login
};