const Emp = require("../model/emp");

// Create new Emp
exports.createEmp = async (req, res) => {
    try {
        const {empId, empName, empSkills, teamName} = req.body;
        console.log("Adding new emp :",empName);
        const emp = new Emp({empId, empName, empSkills, teamName});
        await emp.save();
        res.json(emp);
    } catch (error) {
        console.error("Error while saving new emp in DB");
        res.status(500).send({message : "Error while saving new emp in DB"});
    }
}

exports.updateEmp = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error while saving new emp in DB");
        res.status(500).send({message : "Error while saving new emp in DB"});
    }
}


exports.deleteEmp = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error while saving new emp in DB");
        res.status(500).send({message : "Error while saving new emp in DB"});
    }
}


exports.searchEmp = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error while saving new emp in DB");
        res.status(500).send({message : "Error while saving new emp in DB"});
    }
}