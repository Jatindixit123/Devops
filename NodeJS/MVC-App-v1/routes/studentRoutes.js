import { Router } from "express";
const router = Router();
import { addStudent, getStudents } from "../controllers/studentController";

router.post("/addNewStudent", addStudent);
router.get("/studentData", getStudents);

router.get("/deleteStudent", (req,res) => {
    res.render('studentData', {
        pageTitle: "New Student Added"
    })
});


export default router;