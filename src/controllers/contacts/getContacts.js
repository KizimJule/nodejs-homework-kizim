const contactsServices = require('../../services');

const getContacts = async (req, res) => {
  const contacts = await contactsServices.getContactsServices();
  res.json({ status: 'success', code: 200, data: { contacts } });
};

module.exports = getContacts;
