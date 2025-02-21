const express = require("express");
const router = express.Router();

router.get("/addNewStudent", (req,res) => {
    console.log("New student added...");
    res.render('studentData', {
        pageTitle: "New Student Added"
    })
});

router.get("/deleteStudent", (req,res) => {
    res.render('studentData', {
        pageTitle: "New Student Added"
    })
});

router.get("/updateStudent", (req,res) => {
    res.render('studentData', {
        pageTitle: "New Student Added"
    })
});

module.exports = router;