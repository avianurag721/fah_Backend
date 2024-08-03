const mongoose = require("mongoose");
const {contactUsEmail} =require("../MailTemplates/contactFormRes")
const { sendUserEmail, sendAdminEmail }=require("../config/sendMail")

const ContactForm = new mongoose.Schema({
    name: {
        type: String,
        required:true
  },
    phone: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    message: {
        type: String,
        required:true
    },
})
ContactForm.pre("save", async function (next) {
    try {
      await sendUserEmail(this.email, contactUsEmail(this)); // Send confirmation email to the user
      await sendAdminEmail(this); // Send details email to yourself
  
      next();
    } catch (err) {
      next(err);
    }
  });
module.exports=mongoose.model("ContactUs",ContactForm)