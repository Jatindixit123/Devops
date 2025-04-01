const Emp = require("../model/emp");

exports.createEmp = async(req, res) => {
    try {
        const {empId, empName, empSkills, teamName} = req.body;
        const emp = new Emp({empId, empName, empSkills, teamName});
        await emp.save();
        res.json(emp);
    } catch (error) {
        console.log("Error while saving emp to MongoDB...");
        res.json({"msg" : "Error while saving emp to MongoDB..."});
    }
}

exports.updateEmp = async(req, res) => {
    try {
        
    } catch (error) {

    }
}

exports.deleteEmp = async(req, res) => {
    try {
        
    } catch (error) {

    }
}


exports.getAllEmp = async(req, res) => {
    try {
        
    } catch (error) {

    }
}