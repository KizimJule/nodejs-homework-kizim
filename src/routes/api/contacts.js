const express = require('express');

const router = express.Router();
const { ctrl } = require('../../controllers');
const ctrlWrapper = require('../../middlewares/ctrlWrapper');

router.get('/', ctrlWrapper(ctrl.getContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', ctrlWrapper(ctrl.addContact));

router.put('/:contactId', ctrlWrapper(ctrl.updateContact));

router.patch('/:contactId/favorite', ctrlWrapper(ctrl.updateStatusContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact));

module.exports = router;
