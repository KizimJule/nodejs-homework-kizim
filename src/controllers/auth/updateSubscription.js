// const contactsServices = require('../../services');
const { User } = require('../../models/user');

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { id } = req.params;

  if (subscription === undefined) {
    const error = new Error(`missing field "subscription"`);
    error.status = 400;
    throw error;
  }

  // if (subscription !== 'pro' || subscription !== 'starter' || subscription !== 'business') {
  //   const error = new Error(`field "subscription" must be:'pro', 'starter' or 'business'`);
  //   error.status = 400;
  //   throw error;
  // }

  const result = await User.findByIdAndUpdate({ _id: id }, { subscription }, { new: true });

  if (!result) {
    const error = new Error(`Not found`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    message: `updated subscription `,
    code: 200,
    data: { result },
  });
};

module.exports = updateSubscription;
