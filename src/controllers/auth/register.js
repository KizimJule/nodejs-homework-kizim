// const { User } = require('../../models');
// const { Conflict } = require('http-errors');

const authServices = require('../../services/authServices');

const register = async (req, res) => {
  const { email, password } = req.body;

  const newUser = await authServices.registerServices(email, password);
  // const user = await User.findOne({ email });
  // if (user) {
  //   throw new Conflict('Email in use');
  // }

  // const newUser = new User({ email });
  // newUser.setPassword(password);
  // newUser.save();

  res.status(200).json({
    message: `create new user `,
    code: 200,
    data: { newUser: { email: newUser.email, subscription: newUser.subscription } },
  });
};

module.exports = register;
