// const { User } = require('../../models');
// const { Unauthorized } = require('http-errors');

const authServices = require('../../services/authServices');

const logout = async (req, res) => {
  const { _id } = req.user;

  await authServices.logoutServices(_id);
  // if (!_id) {
  //   throw new Unauthorized('Not authorized');
  // }

  // await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json({ message: `logout user `, code: 204 });
};

module.exports = logout;
