const authServices = require('../../services/authServices');
const { Unauthorized } = require('http-errors');

const getCurrent = async (req, res) => {
  const id = req.user.id;

  const user = await authServices.getUserById(id);

  if (!user) {
    throw new Unauthorized('Not authorized');
  }

  const { subscription, email } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: { email, subscription },
    },
  });
};

module.exports = getCurrent;
