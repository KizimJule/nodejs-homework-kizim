const { Contact } = require('../../models');

const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { name, email, phone };

  const result = await Contact.create(newContact);

  res
    .status(201)
    .json({ message: `New contact add`, status: 'success', code: 201, data: { result } });
};

module.exports = addContact;
