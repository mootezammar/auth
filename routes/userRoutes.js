import express from 'express'
import {
    registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment,
    logout, sendVerifyOtp, verifyEmail, sendResetOtp, resetPassword,
    payment,
    verifyPayment
} from '../controllers/userController.js'
import authUser from './../middlewars/authUser.js';
import upload from './../middlewars/multer.js';


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/logout', logout)
userRouter.post('/send-verify-otp', authUser, sendVerifyOtp)
userRouter.post('/verify-account', authUser, verifyEmail)
userRouter.post('/send-reset-otp', sendResetOtp)
userRouter.post('/reset-password', resetPassword)