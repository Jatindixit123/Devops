const express = require("express");
const router = express.Router();

const {createEmp, deleteEmp} = require("../controller/empController");

router.post("/create", createEmp);
router.delete("/delete", deleteEmp);

module.exports = router;