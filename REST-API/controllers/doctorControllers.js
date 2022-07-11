const doctorSchema = require("../models/doctorsModel")
const { validationResult } = require('express-validator');
const DoctorModel = require('../models/doctorsModel')
const bcrypt = require('bcryptjs')

exports.getAllDoctors = (req, res, next) => {
    doctorSchema.find().then(result => res.status(200).json({ message: 'All doctors fitched automatically', doctorsData: result }))
}

exports.getDoctorDataById = (req, res, next) => {
    const userEmail = req.params.email
    doctorSchema.findById(userEmail).then(users => {
        res.status(200).json({ message: "all users fetched succsessfully", usersData: users }).catch(e => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
    })
}

exports.doctorRegestration = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error("validation faild")
        error.statusCode = 422
        error.data = errors.array()
        throw error
    }
    const email = req.body.email;
    const name = req.body.name
    const password = req.body.password
    const specailization = req.body.specailization
    const clinicName = req.body.clinicName
    const clinicAddress = req.body.clinicAddress
    const certificatePic = req.body.certificateImageUrl
    const price = req.body.price
    const profileImagePic = req.body.profileImageUrl
    bcrypt.hash(password, 12).then(
        hashedpass => {
            const doctorModelVal = new DoctorModel({
                name: name,
                email: email,
                password: hashedpass,
                certificateImageUrl: certificatePic,
                imageUrl: profileImagePic,
                specailization: specailization,
                price: price,
                clinicName: clinicName,
                clinicAddress: clinicAddress,

            })
            return doctorModelVal.save()
        }).then(result =>{
            res.status(201).json({message:'userAdded',userID: result.id})
        })
        .catch(e => console.log(e))
    if (!err.statusCode) {
        err.statusCode = 500
    }
    next()
}
