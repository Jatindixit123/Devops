const Emp = require("../model/emp");

exports.createEmp = async (req, res) => {
    try {
        const {empId, empName, empSkills, teamName} = req.body;
        const emp = new Emp({empId, empName, empSkills, teamName});
        await emp.save();
        res.status(200).json({"msg" : "New emp inserted successfully..."});
    } catch (error) {
        console.log("Error while inserting new emp :",error);
        res.status(500).json({"msg" : "Error while inserting new emp"});
    }
}

exports.deleteEmp = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}