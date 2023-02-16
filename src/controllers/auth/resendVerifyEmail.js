const { User } = require('../../models');
const { NotFound, BadRequest } = require('http-errors');

const { sendEmail } = require('../../helpers');

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw NotFound;
  }
  if (user.verify) {
    throw BadRequest;
  }

  const mail = {
    to: email,
    subject: 'Confirm email',
    html: `<a target="_blank" href="http://localhost:3001/api/users/verify/${user.verificationToken}">Confirm mail<a>`,
  };
  await sendEmail(mail);

  res.status(200).json({
    message: `Verification email sent`,
    code: 200,
  });
};

module.exports = resendVerifyEmail;
