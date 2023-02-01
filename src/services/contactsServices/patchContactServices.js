const { Contact } = require('../../models/contact');

const updateStatusContactServices = async (favorite, contactId) => {
  if (favorite === undefined) {
    const error = new Error(`missing field favorite`);
    error.status = 400;
    throw error;
  }

  const result = await Contact.findByIdAndUpdate({ _id: contactId }, { favorite }, { new: true });

  if (!result) {
    const error = new Error(`Not found`);
    error.status = 404;
    throw error;
  }
  return result;
};

module.exports = updateStatusContactServices;
