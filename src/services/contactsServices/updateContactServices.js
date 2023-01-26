const { Contact } = require('../../models');

const updateContactServices = async (contactId, newContact) => {
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, newContact, {
    new: true,
  });

  if (!result) {
    const error = new Error(`contact by id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  return result;
};

module.exports = updateContactServices;
