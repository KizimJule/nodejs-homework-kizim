const { Contact } = require('../../models');

const getContactsServices = async (req, res) => {
  const contacts = await Contact.find({});
  return contacts;
};

module.exports = getContactsServices;
