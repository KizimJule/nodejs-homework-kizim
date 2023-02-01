const express = require('express');
const router = express.Router();

const { auth: ctrl } = require('../../controllers');
const { ctrlWrapper, validation, auth } = require('../../middlewares/');
const { joiSchema } = require('../../models/user');

router.post('/signup', validation(joiSchema), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiSchema), ctrlWrapper(ctrl.login));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.patch('/:id/subscription', auth, ctrlWrapper(ctrl.updateSubscription));

module.exports = router;
