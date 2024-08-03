const mongoose = require("mongoose");

const VacancySchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    Info: {
      type: String,
      required: true,
      trim: true,
    },
    Department: {
      type: String,
      required: true,
      trim: true,
    },
    Qualification: {
      type: String,
      required: true,
      trim: true,
    },
    Experience: {
      type: String,
      required: true,
      trim: true,
    },
    Location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vacancy", VacancySchema);

