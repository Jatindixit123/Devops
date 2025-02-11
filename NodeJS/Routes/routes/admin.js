const express = require("express");
const path = require("path");
const router = express.Router();

// router
// - instance of Router
// - specifically used for routing
// - apply middleware specific to certain routes
router.get("/", (req,res) => {
    // res.send(`
    //     <h1>This is Admin Panel</h1>
    //     <a href='/admin/studentOperations'>Student Operations</a> | 
    //     <a href='/admin/facultyOperations'>Faculty Operations</a>
    //     `)
    res.sendFile(path.join(__dirname, "../", 'views', 'admin.html'));
});

router.get("/studentOperations", (req, res) => {
    // res.send(`
    //     <h1>Add New Student</h1>
    //     <form action='/addNewStudent' method='post'>
    //         <label>Enter Student Name</label>
    //         <input type='text' placeholder='Enter student name'/>
    //         <button type='submit'>Add New Student</button>
    //     </form>
    //     `);
    res.sendFile(path.join(__dirname, "../", 'views', 'studentOperations.html'));
});

router.get("/facultyOperations", (req, res) => {
    // res.send(`
    //     <h1>Add New Faculty</h1>
    //     <form action='/addNewFaculty' method='post'>
    //         <label>Enter Student Name</label>
    //         <input type='text' placeholder='Enter student name'/>
    //         <button type='submit'>Add New Student</button>
    //     </form>
    //     `);
    res.sendFile(path.join(__dirname, "../", 'views', 'facultyOperations.html'));
});

module.exports = router;