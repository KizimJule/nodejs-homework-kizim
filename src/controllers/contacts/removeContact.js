const { Contact } = require('../../models');
const ObjectId = require('mongodb').ObjectId;

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndRemove({
    _id: new ObjectId(contactId),
  });

  if (!result) {
    const error = new Error(`contact by id=${contactId} not found`);
    error.status = 404;
    throw error;
  }

  res.status(200).json({
    message: `contact deleted`,
    code: 200,
    data: { result },
  });
};

module.exports = removeContact;
