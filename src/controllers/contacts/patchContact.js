const { Contact } = require('../../models');
const ObjectId = require('mongodb').ObjectId;

const updateStatusContact = async (req, res) => {
  const { favorite } = req.body;
  const { contactId } = req.params;
  if (favorite === undefined) {
    const error = new Error(`missing field favorite`);
    error.status = 400;
    throw error;
  }

  const result = await Contact.findByIdAndUpdate(
    { _id: ObjectId(contactId) },
    { favorite },
    {
      new: true,
    }
  );

  if (!result) {
    const error = new Error(`Not found`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    message: `updated contact by id=${contactId} `,
    code: 200,
    data: { result },
  });
};

module.exports = updateStatusContact;
