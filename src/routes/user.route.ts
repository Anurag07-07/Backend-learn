import e from "express";
import { Router } from "express";
import { CreatePatient, getUserData, getUserDataFromId, getUserOnDiseases } from "../controllers/user.controller.js";
import { admin } from "../middleware/admin.js";

const router:Router  = e.Router()

//Get Routes
router.get('/users',getUserData)
router.get('/users/:id',getUserDataFromId)
router.get('/die',getUserOnDiseases)

//Post Routes
router.post('/create-patient',admin,CreatePatient)

export default router