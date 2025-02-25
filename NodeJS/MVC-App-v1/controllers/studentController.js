import Student from "../models/student";

// exports.addStudent = (req, res, next) => {
//     console.log("New student added...");
//     res.render('studentData', {
//         pageTitle: "New Student Added"
//     })
// }

export function addStudent(req, res, next) {
    try {
        console.log("Request body :",req.body);
        const student = new Student(req.body.student_name);
        student.saveStudent();
        const students = Student.fetchAll();
        res.render('studentData', {
                pageTitle: "New Student Added",
                studentsList: students
            })   
    } catch (error) {
        console.log("Error while saving student",error);
    }
    
}

export function getStudents(req, res, next) {
    const students = Student.fetchAll();
    res.render('studentData', 
        {
            pageTitle: "Students List",
            studentsList: students
        })
}