const express = require("express");
const router = express.Router();

const {createEmp, updateEmp, deleteEmp, searchEmp} = require("../controller/empController");

router.post("/create", createEmp);
router.post("/update", updateEmp);
router.post("/delete", deleteEmp);
router.post("/search", searchEmp);

module.exports = router;