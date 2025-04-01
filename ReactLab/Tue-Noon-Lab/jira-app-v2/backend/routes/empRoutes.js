const express = require("express");
const router = express.Router();

const {createEmp, deleteEmp, updateEmp, getAllEmp} = require("../controller/empController");

router.post("/createEmp", createEmp);
router.post("/deleteEmp", deleteEmp);
router.post("/updateEmp", updateEmp);

module.exports = router;