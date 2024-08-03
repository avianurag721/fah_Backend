const Vacancy = require("../models/Hiring");

exports.getAllVacancy = async (req, res) => {
  try {
    console.log("getting all vacancies")
    const vacancies = await Vacancy.find({}).sort({ createdAt: -1 });
  
    return res.status(201).json({
      success: true,
      message: "getting all vacancies",
      data:vacancies
    })
  } catch (error) {
    
    console.log("error while getting all vacancies",error);
  }
};

exports.createVacancy = async (req, res) => {
  try {
    const { Title, Info, Department, Qualification, Experience, Location } =
      req.body;

    if (!Title) {
      return res.status(403).json({
        success: false,
        message:"Please Fill Required "
      })
    }
    
    const newVacancy = await Vacancy.create(
     { Title,
      Info,
      Department,
      Qualification,
      Experience,
      Location}
    );
    console.log("creating vacancies");
    res.status(201).json({
      success: true,
      message: "Vacancy created Successfully",
      data: newVacancy,
    });
  } catch (error) {
    console.log("error while creating vacancies",error);

    res.status(400).json({ message: err.message });
  }
};
exports.deleteVacancyById = async (req, res) => {
  console.log("into deleting vacancy")
  try {
    const { id } = req.params;
    
    const resp= await Vacancy.findByIdAndDelete(id)
    if (!resp) {
      return res.status(403).json({
        success: false,
        message:"No Vacancy Exist with this is"
      })
    }
    console.log("delteing vacancies  by id",id);
    res.status(201).json({
      success: true, 
      data:resp,
      message: "Vacancy deleted Successfully",
    });
  } catch (err) {
    console.log("error while deleting vacancies");
    res.status(400).json({ message: err.message });
  }
};
