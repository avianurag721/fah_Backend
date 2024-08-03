const mongoose = require("mongoose");
const {consultUsEmail}=require('../MailTemplates/ConsultationBookingTemp')
const { sendUserEmail, sendAdminEmail }=require("../config/sendMail")

const formSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    // required: true,
  },
  preferredContact: String,
});

formSchema.pre("save", async function (next) {
  try {
    await sendUserEmail(this.email,consultUsEmail(this)); // Send confirmation email to the user
    await sendAdminEmail(this); // Send details email to yourself

    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("ConsultationForm", formSchema);
