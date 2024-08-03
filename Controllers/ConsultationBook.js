const ConsultationForm = require("../models/ConsultationBooking");

exports.bookConsultation = async (req, res) => {
  try {
    const { fullName, email, phone, symptoms, doctor, date, time } = req.body;

    const BookingResp = await ConsultationForm.create({
      fullName,
      email,
      phone,
      symptoms,
      doctor,
      date,
      time,
    });
    console.log("booking consulation");
    return res.status(200).json({
      success: true,
      data: BookingResp,
      message: "Consultation Booked Successfully",
    });
  } catch (error) {
    console.log("error in booking consultation form", error);
  }
};
