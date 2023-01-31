const express = require('express');

const router = express.Router();
const { ctrl } = require('../../controllers');
const ctrlWrapper = require('../../middlewares/ctrlWrapper');
const { auth } = require('../../middlewares/');

router.get('/', auth, ctrlWrapper(ctrl.getContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', auth, ctrlWrapper(ctrl.addContact));

router.put('/:contactId', auth, ctrlWrapper(ctrl.updateContact));

router.patch('/:contactId/favorite', auth, ctrlWrapper(ctrl.updateStatusContact));

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

module.exports = router;
