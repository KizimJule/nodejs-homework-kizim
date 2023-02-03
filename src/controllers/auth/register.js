const authServices = require('../../services/authServices');

const register = async (req, res) => {
  const { email, password } = req.body;

  const newUser = await authServices.registerServices(email, password);

  res.status(200).json({
    message: `create new user `,
    code: 200,
    data: {
      newUser: {
        email: newUser.email,
        subscription: newUser.subscription,
        avatarUrl: newUser.avatarUrl,
      },
    },
  });
};

module.exports = register;
