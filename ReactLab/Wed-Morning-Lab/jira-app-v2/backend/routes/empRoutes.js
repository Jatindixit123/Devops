const express = require("express");
const router = express.Router();

const {createEmp, deleteEmp, searchEmp, updateEmp} = require("../controller/empController");

// http://localhost:3333/api/emp/createEmp
router.post("/createEmp", createEmp);
// http://localhost:3333/api/emp/deleteEmp
router.delete("/deleteEmp", deleteEmp);
// http://localhost:3333/api/emp/updateEmp
router.patch("/updateEmp", updateEmp);
// http://localhost:3333/api/emp/searchEmp
router.get("/searchEmp", searchEmp);

module.exports = router;