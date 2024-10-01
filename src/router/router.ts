import {Router } from 'express'
import {getallstudents,createloadStudent,createstudent,updateStudentLoad,updatestudent,deletestudent} from  "../controllers/studentcontroller"
const router=Router()

router.get('/', getallstudents);
router.get("/add",createloadStudent)
router.post("/addstudent",createstudent)
router.get("/edit",updateStudentLoad)
router.post("/editstuent",updatestudent)
router.get("/delete",deletestudent)



export default router