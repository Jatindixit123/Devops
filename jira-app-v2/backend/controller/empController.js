const Emp = require("../model/emp");

// create emp
exports.createEmp = async(req, res) => {
    try {
        const {empId, empName, teamName, empSkills} = req.body;     // fetch emp details from front-end
        const emp = new Emp({empId, empName, teamName, empSkills});  // new Emp document
        await emp.save();   // save emp data to mongoDB
        res.json(emp);
    } catch (error) {
        console.log("Error while saving new emp...");
        res.status(500).json({"message" : "Failed to store emp data"});
    }
}

// update emp
exports.updateEmp = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}


// delete emp
exports.deleteEmp = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}


// search emp
exports.searchEmp = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}