const authServices = require('../../services/authServices');

const logout = async (req, res) => {
  const { _id } = req.user;

  await authServices.logoutServices(_id);

  res.status(204).json({ message: `logout user `, code: 204 });
};

module.exports = logout;
