const contactsServices = require('../../services');

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await contactsServices.removeContactServices(contactId);

  res.status(200).json({
    message: `contact deleted`,
    code: 200,
    data: { result },
  });
};

module.exports = removeContact;
