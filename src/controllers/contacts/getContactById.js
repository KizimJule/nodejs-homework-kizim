const { Contact } = require('../../models');
const ObjectId = require('mongodb').ObjectId;

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contactById = await Contact.find({ _id: ObjectId(contactId) });

  if (!contactById.length) {
    const error = new Error(`contact by id=${contactId} not found`);
    error.status = 404;
    throw error;
  }

  res.json({
    message: `contact by id=${contactId}`,
    status: 'success',
    code: 200,
    data: { contactById },
  });
};

module.exports = getContactById;
