const { User } = require('../../models');

const { Unauthorized } = require('http-errors');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const loginServices = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized('Email or password is wrong');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '3h' });

  await User.findByIdAndUpdate(user._id, { token });

  return token;
};

module.exports = loginServices;
