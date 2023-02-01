const authServices = require('../../services/authServices');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await authServices.loginServices(email, password);

  res.status(200).json({
    message: `login user `,
    code: 200,
    data: {
      token,
      email,
    },
  });
};

module.exports = login;
