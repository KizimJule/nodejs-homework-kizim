const { User } = require('../../models');
const { Conflict } = require('http-errors');

const registerServices = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  newUser.save();
  return newUser;
};

module.exports = registerServices;
