const { User } = require('../../models');

const getUserById = async id => {
  return await User.findById(id);
};
module.exports = getUserById;
