const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendConfirmationEmail = async (to, token) => {
  const url = `http://yourdomain.com/confirm/${token}`;
  await transporter.sendMail({
    to,
    subject: 'Confirm Your Email',
    html: `Click <a href="${url}">here</a> to confirm your email.`,
  });
};
