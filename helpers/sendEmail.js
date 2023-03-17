const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const { CREATE_API_KEY } = process.env;

sgMail.setApiKey(CREATE_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "kristuwa150289@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
