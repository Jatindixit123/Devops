// Emp Model
const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema({
    empId: {
        type: String,
        require: true
    },
    empName: String,
    teamName: String,
    empSkills: String
});

module.exports = mongoose.model("Emp", EmpSchema);