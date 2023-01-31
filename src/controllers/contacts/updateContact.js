const contactsServices = require('../../services/contactsServices');

const updateContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const { contactId } = req.params;
  const newContact = { name, email, phone };

  const result = await contactsServices.updateContactServices(contactId, newContact);

  res.status(200).json({
    message: `updated contact by id=${contactId} `,
    code: 200,
    data: { result },
  });
};

module.exports = updateContact;
