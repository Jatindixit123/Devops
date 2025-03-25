import { useState } from "react";
import "./EmployeeManagement.styles.css";

export const EmployeeManagement = ({teamList, addEmp}) => {

    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSkills, setEmpSkills] = useState("");
    const [teamName, setTeamName] = useState("");

    const handleSubmit = () => {
        addEmp(empId, empName, empSkills, teamName)
        setEmpId("");
    }

    return (
        <div className="emp-wrapper">
            <h2>Add Employee</h2>
            <div className="input-group">
                <label>Enter Emp ID</label>
                <input 
                    type="text" 
                    placeholder="Enter Emp ID"
                    value={empId}
                    onChange={(e) => setEmpId(e.target.value)}/>
            </div>

            <div className="input-group">
                <label>Enter Emp Name</label>
                <input 
                    type="text" 
                    placeholder="Enter Emp Name"
                    onChange={(e) => setEmpName(e.target.value)}/>
            </div>

            <div className="input-group">
                <label>Enter Emp Skills</label>
                <input 
                    type="text" 
                    placeholder="Enter Emp skills"
                    onChange={(e) => setEmpSkills(e.target.value)}/>
            </div>

            <div className="input-group">
                <label>Select Team</label>
                <select onChange={(e) => setTeamName(e.target.value)}>
                    <option value="">Select Team</option>
                    {
                        teamList.map(team => (
                            <option value={team.team_name}>
                                {team.team_name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <button onClick={handleSubmit}>Add Employee</button>
        </div>
    )
}