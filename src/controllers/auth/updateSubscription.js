// const contactsServices = require('../../services');
const { User } = require('../../models');

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { id } = req.params;

  // const result = await contactsServices.updateStatusContactServices(favorite, contactId);
  if (subscription === undefined) {
    const error = new Error(`missing field favorite`);
    error.status = 400;
    throw error;
  }

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
