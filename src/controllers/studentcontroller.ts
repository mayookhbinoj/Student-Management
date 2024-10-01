import { Request,Response } from "express";
import {studentservice} from  "../service/studentservice"
import {CreateStudentRequest,UpdateStudentInterface} from "../model/requestmode"

const studentservices=new studentservice()


export const  getallstudents=async(req:Request,res:Response)=>{
    try {
        const students=await studentservices.getallstudent()
        console.log(students)
        res.render("home",{students:students})
    } catch (error) {
        console.log(error)
        
    }
}

export  const createloadStudent=async(req:Request,res:Response)=>{
    try {
        res.render("add")
    } catch (error) {
        console.log(error)
    }
}
export const  createstudent=async(req:Request,res:Response)=>{
    console.log("enter in to the create")
    const data:CreateStudentRequest=req.body
    try {
        console.log("enter in to try")
        const datastudent=await studentservices.createstudent(data)
        res.json({sucess:true})
    } catch (error) {
        console.log(error+"failed")
        
    }
}

export const updateStudentLoad=async(req:Request,res:Response)=>{
    try {
       const studens=await studentservices.getstudentbyid(req.query.id as string)
        console.log("enter in to update load")
        res.render("edit",{studens:studens})
    } catch (error) {
        console.log(error)
    }

}
export const updatestudent=async(req:Request,res:Response)=>{
    const data:CreateStudentRequest=req.body
    try { 
        const studens=await studentservices.updatestudent(req.query.id as string,data)
        res.json({sucess:true})
       
    } catch (error) {
        console.log(error)
    }
}

export const deletestudent=async(req:Request,res:Response)=>{
    try {
        await studentservices.deleteStudent(req.query.id as string)
        res.redirect("/")
 
    } catch (error) {
        console.log(error)
    }
}