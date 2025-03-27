import express from 'express';
import { addDoctor , allDoctors, loginAdmin ,appointmentAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js';
import upload from '../middlewars/multer.js';
import authAdmin from './../middlewars/authAdmin.js';
import { changeAvailability } from '../controllers/doctorController.js';

const adminRouter = express.Router();

// Route pour ajouter un médecin
adminRouter.post('/add-doctor', authAdmin,addDoctor);
adminRouter.post('/login', loginAdmin);