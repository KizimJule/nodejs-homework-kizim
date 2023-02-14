const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'KizimJule@gmail.com' };

  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    // throw error;
    console.log(error);
  }
};

module.exports = sendEmail;

// const email = {
//   to: 'pideve9835@mustbeit.com',
//   from: 'KizimJule@gmail.com',
//   subject: 'New user',
//   html: '<pNew user<p>',
// };
// sgMail.send(email)
//       .then(() => console.log('Email send success').catch(error => console.log(error.message)));
