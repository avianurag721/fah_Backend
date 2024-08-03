const { uploadImageToCloudinary } = require("../config/ImageUploader");
const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Create Doctor  handler
exports.createDoctor = async (req, res) => {
  try {
    //get data
    const {
      name,
      info,
      email,
      phone,
      department,
      specialization,
      yearsOfExperience,
      consultationFees,
    } = req.body;
    const doctorsImage = req?.files?.image;
    console.log(doctorsImage);
    // check if Doctor already exist
    // const existingDoctor = await Doctor.findOne({ email });

    // if (existingDoctor) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Doctor already Exists",
    //   });
    // }
    let uploadedImageurl=null;
    try {
      uploadedImageurl = await uploadImageToCloudinary(
        doctorsImage,
        process.env.FOLDER_NAME
      );
    } catch (error) {
      console.log("error while uploading image", error);
    }
    console.log("img",uploadedImageurl)
    // create entry for Doctor

    const createdDoctor = await Doctor.create({
      name,
      image:uploadedImageurl,
      email,
      phone,
      info,
      department,
      specialization,
      yearsOfExperience,
      consultationFees,
    });
    console.log("dr created", createdDoctor);
    return res.status(200).json({
      success: true,
      data: createdDoctor,
      message: "Doctor Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Doctor cannot be registered, please try again later",
    });
  }
};
exports.getAllDoctors = async (req, res) => {
  try {
    const Doctors = await Doctor.find({});

    return res.status(200).json({
      success: true,
      data: Doctors,
      message: "Doctor fetched Successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Cannot Get the Doctors list",
    });
  }
};
exports.getDoctorById = async (req, res) => {
  const { id } = req.params;
  console.log("doctor id ", id);
  try {
    const doctorResp = await Doctor.findById({ _id: id });
    console.log(doctorResp);
    return res.status(200).json({
      success: true,
      DoctorData: doctorResp,
      message: "Doctor Data Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Cannot Get the Doctors list",
    });
  }
};
