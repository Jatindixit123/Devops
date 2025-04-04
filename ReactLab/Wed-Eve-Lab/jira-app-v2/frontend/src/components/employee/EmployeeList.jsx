import { useState } from "react";
import "./Employee.css";
import axios from "axios";

const EmployeeList = ({teamList, empList, addEmp}) => {
    const [newEmployee, setNewEmployee] = useState({
        empId: "",
        empName : "",
        empSkills: "",
        teamName: ""
    });
    const EMP_SAVE_URL = "http://localhost:8989/api/emp";

    const changeHandler = (event) => {
        const empKey = event.target.name;
        const empValue = event.target.value;
        setNewEmployee({...newEmployee, [empKey]:empValue});
    }

    const handleAddEmp = async () => {
        // addEmp(newEmployee.empId, 
        //     newEmployee.empName, 
        //     newEmployee.empSkills, 
        //     newEmployee.teamName);
        try {
            const res = await axios.post(EMP_SAVE_URL + "/create", {...newEmployee});
        } catch (error) {
            console.log("Error while creating new emp...");
        }
    }

    return (
        <div className="emp-wrapper">
            <div className="add-emp">
                <h2>Add Employee</h2>
                <input 
                    type="text"
                    placeholder="Enter Emp ID"
                    onChange={changeHandler}
                    name="empId"
                />

                <input 
                    type="text"
                    placeholder="Enter Emp Name"
                    onChange={changeHandler}
                    name="empName"
                />

                <input 
                    type="text"
                    placeholder="Enter Emp Skills"
                    onChange={changeHandler}
                    name="empSkills"
                />

                <select name="teamName" onChange={changeHandler}>
                    <option value="">Select Team</option>
                    {
                        teamList.map((team) => (
                            <option key={team.team_id} value={team.team_name}>
                                {team.team_name}
                            </option>
                        ))
                    }
                </select>
                <button onClick={handleAddEmp}>Add Employee</button>
            </div>
            {/* <div className="employee-list">
                <h2>Employee List</h2>
                <ul>
                    {
                        empList.map((emp, index) => (
                            <li key={index}>
                                {emp.empName}
                            </li>
                        ))
                    }
                </ul>
            </div> */}
        </div>

    )
}

export default EmployeeList;