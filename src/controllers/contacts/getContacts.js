const contactsServices = require('../../services/contactsServices');

const parseBoolean = value => {
  if (value === 'true') return true;
  if (value === 'false') return false;

  return null;
};

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10, favorite = null } = req.query;

  // const skip = (page - 1) * limit;

  const formattedFavorite = favorite ? parseBoolean(favorite) : null;

  const contacts = await contactsServices.getContactsServices(owner, {
    page: Number(page),
    limit: Number(limit),
    favorite: formattedFavorite,
  });

  res.json({ status: 'success', code: 200, data: { contacts } });
};

module.exports = getContacts;
