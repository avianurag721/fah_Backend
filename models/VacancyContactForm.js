const mongoose=require("mongoose")

const vacancyResponce= mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        format: "email",
        required: true
    },
    phone: {
        type: String,
        format: "phone",
        required: true
    },
    jobPosition: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        // required: true
    },
    coverLetter: {
        type: String,
        required: false
    },
    termsAgreed: {
        type: Boolean,
        // required: true
    }
}
)

module.exports=mongoose.model("VacancyResponce",vacancyResponce)