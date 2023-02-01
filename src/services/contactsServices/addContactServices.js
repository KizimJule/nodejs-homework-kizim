const { Contact } = require('../../models/contact');

const addContactServices = async newContact => {
  const result = await Contact.create(newContact);

  return result;
};

module.exports = addContactServices;
