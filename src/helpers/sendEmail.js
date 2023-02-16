const sgMail = require('@sendgrid/mail');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  try {
    const email = { ...data, from: 'kizimjule@gmail.com' };
    await sgMail.send(email);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;

// const email = {
//   to: 'shevick31@gmail.com',
//   from: 'KizimJule@gmail.com',
//   subject: 'New user',
//   html: '<p>New user<p>',
// };
// sgMail
//   .send(email)
//   .then(() => console.log('Email send success').catch(error => console.log(error.message)));
