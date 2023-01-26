const { Contact } = require('../../models');

const removeContactServices = async contactId => {
  const result = await Contact.findByIdAndRemove({
    _id: contactId,
  });

  if (!result) {
    const error = new Error(`contact by id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  return result;
};

module.exports = removeContactServices;
