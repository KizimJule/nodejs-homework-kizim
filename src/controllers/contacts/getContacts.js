// const { Contact } = require('../../models');

const contactsServices = require('../../services/contactsServices');

const getContacts = async (req, res) => {
  const { _id } = req.user;

  const { page = 1, limit = 10 } = req.query;

  const skip = (page - 1) * limit;

  // const contacts = await Contact.find({ owner: _id }, '', {
  //   skip,
  //   limit: Number(limit),
  // }).populate('owner', '_id email');
  const contacts = await contactsServices.getContactsServices(_id, skip, limit);

  res.json({ status: 'success', code: 200, data: { contacts } });
};

module.exports = getContacts;
