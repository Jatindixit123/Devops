const express = require("express");
const path = require("path");
const router = express.Router();

// router
// - instance of Router
// - specifically used for routing
// - apply middleware specific to certain routes
// router.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "../", 'views', 'admin.html'));
// });

// router.get("/studentOperations", (req, res) => {
//     res.sendFile(path.join(__dirname, "../", 'views', 'studentOperations.html'));
// });

// router.get("/facultyOperations", (req, res) => {
//     res.sendFile(path.join(__dirname, "../", 'views', 'facultyOperations.html'));
// });

router.get("/", (req,res) => {
    // res.sendFile(path.join(__dirname, "../", 'views', 'admin.html'));
    res.render('admin', {
        pageTitle: "Admin",
        path: "/"
    })
});

router.get("/studentOperations", (req,res) => {
    console.log("student operations...");
    res.render('studentOperations', {
        pageTitle: "Student Operations"
    })
});

router.get("/facultyOperations", (req,res) => {
    res.render('facultyOperations', {
        pageTitle: "Faculty Operations",
    })
});

module.exports = router;