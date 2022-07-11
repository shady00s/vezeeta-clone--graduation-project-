const mongoose = require('mongoose')

const DoctorModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    certificateImageUrl: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    , email: {
        type: String,
        required: true
    },
    specailization: {
        type: String,
        required: true
    }
    , clinicName: {
        type: String,
        required: true
    },
    clinicAddress: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    , rating: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('DoctorsData',DoctorModel)