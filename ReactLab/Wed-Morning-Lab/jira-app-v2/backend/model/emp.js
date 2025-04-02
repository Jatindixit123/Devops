const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema({
    empId: String,
    empName: String,
    teamName: String,
    empSkills: Array
});

module.exports = mongoose.model("Emp", EmpSchema);