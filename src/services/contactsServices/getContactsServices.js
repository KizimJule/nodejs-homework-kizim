const { Contact } = require('../../models');

const getContactsServices = async (_id, skip, limit) => {
  // const contacts = await Contact.find({});

  const contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: Number(limit),
  })
    .populate('owner', '_id email')
    .select({
      updatedAt: 0,
      createdAt: 0,
    });

  return contacts;
};

module.exports = getContactsServices;
