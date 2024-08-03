const express = require("express");
const router = express.Router();
const multer = require('multer');

const upload = multer(); 

// doctor routes 
const { createDoctor, getAllDoctors, getDoctorById } = require("../Controllers/Doctor")
const {bookConsultation} =require("../Controllers/ConsultationBook")
const {contactUs} =require("../Controllers/ContactUs")
const {getAllVacancy,createVacancy,deleteVacancyById} =require("../Controllers/Hiring")
const {apply} =require("../Controllers/VacancyFormController")

// vacancy related routes  
// this is done 
router.post("/createvacancy", createVacancy);
router.post("/getallvacancy", getAllVacancy);
router.post("/deletevacancy/:id", deleteVacancyById);

// doctor related routes   
// this is done 
router.post("/createdoctor", createDoctor);
router.post("/getalldoctors", getAllDoctors);
router.post("/getdoctorbyid/:id", getDoctorById);

// appply for the job route 
router.post("/apply",upload.none(), apply);
// contact us form  routes
router.post("/contactus", contactUs);

// consultation booking ralted routes 
router.post("/bookappointment", bookConsultation);



module.exports = router;