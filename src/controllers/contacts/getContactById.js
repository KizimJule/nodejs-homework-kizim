const contactsServices = require('../../services/contactsServices');

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const contactById = await contactsServices.getContactByIdServices(contactId);

  res.json({
    message: `contact by id=${contactId}`,
    status: 'success',
    code: 200,
    data: { contactById },
  });
};

module.exports = getContactById;
