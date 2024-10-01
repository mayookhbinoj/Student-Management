import {Student, IStudent  } from "../model/studentmodel";
import {CreateStudentRequest,UpdateStudentInterface} from "../model/requestmode"
import {StudentResponse} from "../model/responsemodel"


export class studentservice{
    async createstudent(data:CreateStudentRequest): Promise<StudentResponse>{
        try {
            console.log("Data received:", data)
            const students=new Student(data)
            const savestudent=await students.save()
            return this.transformToResponse(savestudent)

        } catch (error) {
            throw new Error("failed to create the stundet"+error )
            
        }
    }

    async getallstudent(): Promise<StudentResponse[]>{
     try {
        const studentdata=await Student.find()
        return studentdata.map(this.transformToResponse)

     } catch (error) {
        throw new Error("canoot find the students")
     }
    }
    async  getstudentbyid(id:string): Promise <StudentResponse>{
        try {
            const students=await Student.findById(id)
            if(!students) throw new Error("canot find the id related students")
                return this.transformToResponse(students)
        } catch (error) {
            throw new  Error("cannot find the user")
        }
    }

    async updatestudent(id:string,data:UpdateStudentInterface): Promise<StudentResponse>{
        try {
          const students=await Student.findByIdAndUpdate(id,data,{new :true})
          if(!students) throw new Error("student not have beenn found")
          return this.transformToResponse(students)
        } catch (error) {
            throw new Error ("canot update the student")
        }
    }
    async deleteStudent(id: string): Promise<string>{
        try {
            const result=await Student.findByIdAndDelete(id)
            return "student has been deleted"
        } catch (error) {
            throw new Error("canot delete the student")
        }
    }

    private transformToResponse(student:IStudent):StudentResponse{
        return{
            id: student._id.toString(),
            studentId:student.studentId,
            firstName:student.firstName,
            lastName:student.lastName,
            email:student.email,
            course:student.course
        }
    }   
}