import type { Request, Response } from "express";
import Patient from "../models/user.model.js";

///////////////////////////////////////////////GET////////////////////////////////////////////////////////////////////

//Get One User Data Only
export const getUserData = (req:Request,res:Response)=>{
  res.json(Patient)
}


//Get More than One Data according to id
export const getUserDataFromId = (req:Request,res:Response)=>{
 const userId = parseInt(req.params.id as string) 
 const user = Patient.filter((u)=>u.id===userId)

 if (user.length===0) {
  return res.status(400).json({
    message:`User not Found`
  })
 }

 res.status(200).json({
  user:user
 })
}

// http:localhost:3000/users?dis=fever1

//Give the user on the Basis of dieasease
export const getUserOnDiseases = (req:Request,res:Response)=>{
  //This data is not in the form of string so convert it first
  const disea = req.query.dis

  //This is how we convert the data into string
  const d = disea?.toString()

  const FilterData = Patient.filter((u)=>u.diseases === d)
  
  if (FilterData.length === 0) {
    return res.status(400).json({
    message:`User not Found`
  })
  }

  res.status(200).json({
    patient : FilterData
  })
}

////////////////////////////////////////////////////POST////////////////////////////////////////////////////////////////////////////

export const CreatePatient = (req:Request,res:Response)=>{
  const {name,diseases} = req.body

  if (!name || !diseases ) {
    return res.status(404).json({
      message:`Data pura de bhai`
    })
  }

  const mariz = {
    id:Patient.length+1,
    name:name,
    diseases:diseases,
  }

  Patient.push(mariz)

  res.status(200).json({
    message:`Mariz Added`
  })
}