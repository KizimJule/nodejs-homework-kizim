const { Contact } = require('../../models');

const getContactByIdServices = async contactId => {
  const contactById = await Contact.findById(contactId);

  if (!contactById) {
    const error = new Error(`contact by id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  return contactById;
};

module.exports = getContactByIdServices;
