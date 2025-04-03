const express = require("express");
const router = express.Router();

const {createEmp, deleteEmp, searchEmp} = require("../controller/empController");

router.post("/create", createEmp);
router.delete("/delete", deleteEmp);
router.get("/search", searchEmp);

module.exports = router;