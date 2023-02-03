const { User } = require('../../models');
const { Conflict } = require('http-errors');
const gravatar = require('gravatar');

const registerServices = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }

  const avatarUrl = gravatar.url(email);
  const newUser = new User({ email, avatarUrl });
  newUser.setPassword(password);
  newUser.save();

  return newUser;
};

module.exports = registerServices;
