const { contactsServices } = require('../../services');

const addContact = async (req, res) => {
  const { _id } = req.user;
  const { name, email, phone } = req.body;
  const newContact = { name, email, phone };

  const result = await contactsServices.addContactServices({ ...newContact, owner: _id });

  res
    .status(201)
    .json({ message: `New contact add`, status: 'success', code: 201, data: { result } });
};

module.exports = addContact;
