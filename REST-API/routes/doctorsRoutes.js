const express = require('express');
const app = express()
const doctorControllers = require('../controllers/doctorControllers')
const router = express.Router()
const { body } = require('express-validator')
const DoctorsModel = require('../models/doctorsModel')

router.get('/doctors', doctorControllers.getAllDoctors)

router.put('/doctors/registration', [
    body('email').isEmail().withMessage('please enter valid email').custom((value, { req }) =>
        DoctorsModel.findOne({ email: value }).then(doctorDocumentation => {
            if (doctorDocumentation) {
                return Promise.reject('Email already exists')
            }
        })).normalizeEmail(),
    body('password').trim().isLength({ min: 6 }),
    body('name').trim().isEmpty()
], doctorControllers.doctorRegestration)

router.get('/doctors/:doctorName', doctorControllers.getDoctorDataById)

module.exports = router

