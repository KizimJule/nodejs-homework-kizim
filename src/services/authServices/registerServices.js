const { User } = require('../../models');
const { Conflict } = require('http-errors');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
const { sendEmail } = require('../../helpers');

const registerServices = async (email, password) => {
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict('Email in use');
  }

  const avatarUrl = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = new User({ email, avatarUrl, verificationToken });

  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: 'Confirm email',
    html: `<a target="_blank" href="http://localhost:3001/api/users/verify/${verificationToken}">Confirm mail<a>`,
  };

  await sendEmail(mail);
  return newUser;
};

module.exports = registerServices;
