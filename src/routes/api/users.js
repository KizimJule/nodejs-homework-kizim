const express = require('express');
const router = express.Router();

const { auth: ctrl } = require('../../controllers');
const { ctrlWrapper, validation, auth, upload } = require('../../middlewares/');
const { joiSchema, updateSubscriptionSchema } = require('../../models/user');

router.post('/signup', validation(joiSchema), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiSchema), ctrlWrapper(ctrl.login));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.patch(
  '/:id/subscription',
  auth,
  validation(updateSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
