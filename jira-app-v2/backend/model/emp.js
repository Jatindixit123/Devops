const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
    empId: String,
    empName: String,
    teamName: String,
    empSkills: String
});

module.exports = mongoose.model("Emp", EmpSchema);