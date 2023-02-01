const { Contact } = require('../../models/contact');

const getContactsServices = async (owner, settings) => {
  const { page, limit, favorite } = settings;
  const skip = (page - 1) * limit;

  const query = { owner };

  if (typeof favorite === 'boolean') query.favorite = favorite;

  const contacts = await Contact.find(query, '-createdAt -updatedAt', { skip, limit }).populate(
    'owner',
    '_id email'
  );

  return contacts;
};

module.exports = getContactsServices;
