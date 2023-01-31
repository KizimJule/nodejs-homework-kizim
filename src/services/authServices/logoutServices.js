const { User } = require('../../models');
const { Unauthorized } = require('http-errors');

const logoutServices = async _id => {
  if (!_id) {
    throw new Unauthorized('Not authorized');
  }

  await User.findByIdAndUpdate(_id, { token: null });
};

module.exports = logoutServices;
