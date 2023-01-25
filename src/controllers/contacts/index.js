const removeContact = require('./removeContact');
const updateContact = require('./updateContact');
const addContact = require('./addContact');
const getContactById = require('./getContactById');
const getContacts = require('./getContacts');
const updateStatusContact = require('./patchContact');

module.exports = {
  removeContact,
  addContact,
  updateContact,
  getContacts,
  getContactById,
  updateStatusContact,
};
