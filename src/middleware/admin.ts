import { NextFunction, Request, Response } from "express";

/*
This is middleware to check the admin 
*/


export const admin = (req:Request,res:Response,next:NextFunction)=>{
  //Get the Query 
  //Get Data in The From of query
  const data = req.query.admin 
  //Convert The Data into the string
  const admin = data?.toString()

  //Check if the Admin is User1 or User2 
  if (admin === 'Anurag' || admin === 'Chitranshi') {
    //If Admin is Valid the next is call and CreatePatient Fucntion will Run
    next()
  }else{
    //Otherwise Patient is not added
    return res.status(400).json({
      message:`You are Not admin`
    })
  }
}