// services/emailService.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass:  process.env.MAIL_PASS,
  },
});

// Function to send email to the user
const sendUserEmail = async (to,body) => {
  try {
    const mailOptions = {
      from: "Fah Super Speciality Lucknow",
      to: to,
      subject: "Form Submission Confirmation",
      html: `${body}` ,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error while sending ADmin email", error.message);
  }
};

// Function to send email to yourself
const sendAdminEmail = async (formData, to) => {
  try {
    formData._id=null
    const mailOptions = {
      from: "Fah Super Speciality Lucknow",
      // adjust this email according to the  department    hr // reception  //   admin
      to: to || "anurag.721721@gmail.com", // Your email
      subject: `New Application for ${formData.jobPosition?formData.jobPosition:"Consultation"}`,
      text: `New form submission received.\n\nDetails:\n${JSON.stringify(
        formData,
        null,
        2
      )}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error while sending ADmin email", error.message);
  }
};

module.exports = { sendUserEmail, sendAdminEmail };
