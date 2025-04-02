const Emp = require("../model/emp");

exports.createEmp = async (request, response) => {
    try {
        const {empId, empName, empSkills, teamName} = request.body;
        const emp = new Emp({empId, empName, empSkills, teamName}); // new object of Emp
        await emp.save();   // insert new emp in Emp collection
        response.status(200).json({"msg" : "New emp inserted successfully..."});
    } catch (error) {
        console.log("Error while saving new emp...");
        response.status(500).json({"msg" : "Failed to insert new emp..."});
    }
}

exports.deleteEmp = async (request, response) => {
    
}

exports.updateEmp = async (request, response) => {
    
}

exports.searchEmp = async (request, response) => {
    
}