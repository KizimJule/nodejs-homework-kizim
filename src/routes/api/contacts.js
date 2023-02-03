const express = require('express');
const router = express.Router();

const { ctrl } = require('../../controllers');
const ctrlWrapper = require('../../middlewares/ctrlWrapper');
const { auth, validation } = require('../../middlewares/');
const { joiSchema, joiStatusSchema } = require('../../models/contact');

router.get('/', auth, ctrlWrapper(ctrl.getContacts));

router.get('/:contactId', auth, ctrlWrapper(ctrl.getContactById));

router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.put('/:contactId', auth, validation(joiSchema), ctrlWrapper(ctrl.updateContact));

router.patch(
  '/:contactId/favorite',
  auth,
  validation(joiStatusSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

module.exports = router;
