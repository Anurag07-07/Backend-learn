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
//Admin is a middleware that run between endpoint and function
//So that it can valiadate if patient is created by admin or not

// Route For Admin
// http://localhost:3000/api/v1/create-patient?admin=Anurag

// Route For Normal User
// http://localhost:3000/api/v1/create-patient

router.post('/create-patient',admin,CreatePatient)

export default router