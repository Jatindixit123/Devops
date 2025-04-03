// Emp Controller
const Emp = require("../model/Emp");

exports.createEmp = async(req, res) => {
    try {
        const {empId, empName, empSkills, teamName} = req.body; // retrieve from front-end
        const emp = new Emp({empId, empName, empSkills, teamName}); // object to save
        await emp.save();   // saving data to mongoDB
        res.status(200).json({"msg" : "New emp inserted successfully..."});
    } catch (error) {
        console.log("Error while inserting new emp",error);
        res.status(500).json({"msg" : "Can't insert emp to database"});
    }
}

exports.deleteEmp = async(req, res) => {
    
}

exports.searchEmp = async(req, res) => {
    
}