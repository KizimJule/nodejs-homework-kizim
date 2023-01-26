const contactsServices = require('../../services');

const updateStatusContact = async (req, res) => {
  const { favorite } = req.body;
  const { contactId } = req.params;

  const result = await contactsServices.updateStatusContactServices(favorite, contactId);

  res.status(200).json({
    message: `updated contact by id=${contactId} `,
    code: 200,
    data: { result },
  });
};

module.exports = updateStatusContact;
