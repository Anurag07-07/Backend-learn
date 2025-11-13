import { NextFunction, Request, Response } from "express";

export const admin = (req:Request,res:Response,next:NextFunction)=>{
  //Get the Query 
  const data = req.query.admin 
  const admin = data?.toString()

  if (admin !== 'Anurag') {
    return res.status(400).json({
      message:`You are Not admin`
    })
  }
  
  next()
}