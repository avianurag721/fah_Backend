const ContactUs = require("../models/contactUs");

exports.contactUs = async (req, res) => {
  try {
    const { name,email, phone,message  } = req.body;

    const contactReponce = await ContactUs.create({
      name,
      email,
      phone,
      message}
    );
    console.log("contact  us form");
    return res.status(200).json({
      success: true,
      data: contactReponce,
      message: "Contact us form submitted successfully",
    });
  } catch (error) {
    console.log("error in contact us form", error.message);
  }
};
