const { Contact } = require('../../models');
const ObjectId = require('mongodb').ObjectId;

const updateContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const { contactId } = req.params;
  const newContact = { name, email, phone };
  const result = await Contact.findByIdAndUpdate({ _id: ObjectId(contactId) }, newContact, {
    new: true,
  });

  if (!result) {
    const error = new Error(`contact by id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    message: `updated contact by id=${contactId} `,
    code: 200,
    data: { result },
  });
};

module.exports = updateContact;
