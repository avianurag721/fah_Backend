// const { sendUserEmail, sendAdminEmail } = require("../config/sendMail");
const multer = require("multer");
const {sendUserEmail,sendAdminEmail}=require("../config/sendMail")
const VacancyResponce = require("../models/VacancyContactForm");

// Controller function to handle form submission
exports.apply = async (req, res) => {
  console.log("into job application");
  console.log("req ki body in job application", req.body);
  // Access form data
  const { fullName, email, phone, jobPosition, coverLetter, termsAgreed } =
    req.body;
  const resume = req.file;

  // Create a new job application document
  try {
    // Save the job application to MongoDB
    const Responce = await VacancyResponce.create({
      fullName,
      email,
      phone,
      jobPosition,
      resume,
      coverLetter,
      termsAgreed,
    });

    await sendUserEmail(email, Responce); // Send confirmation email to the user
    await sendAdminEmail(Responce);

    return res.status(200).json({
      message: "Application submitted successfully",
      data: Responce,
    });
  } catch (error) {
    console.log("error while submitting form data", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
};
