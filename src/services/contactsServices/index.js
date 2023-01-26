const removeContactServices = require('./removeContactServices');
const updateContactServices = require('./updateContactServices');
const addContactServices = require('./addContactServices');
const getContactByIdServices = require('./getContactByIdServices');
const getContactsServices = require('./getContactsServices');
const updateStatusContactServices = require('./patchContactServices');

module.exports = {
  removeContactServices,
  addContactServices,
  updateContactServices,
  getContactsServices,
  getContactByIdServices,
  updateStatusContactServices,
};
