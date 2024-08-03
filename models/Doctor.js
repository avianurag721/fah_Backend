const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    
    info: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
        trim: true,
        // match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    degree: {
        type: String,
        // required: true,
        trim: true,
    },

    phone: {
        type: String,
        trim: true,
        // match: [/^\d{10}$/, 'Please fill a valid phone number'] // Assuming a 10 digit phone number
    },
    department: {
        type: String,
        // required: true,
        trim: true
    },
    specialization: {
        type: String,
        // required: true,
        trim: true
    },
    yearsOfExperience: {
        type: String,
        // required: true,
        min: 0
    },
    consultationFees: {
        type: Number,
        // required: true,
        min: 0
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});



const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
