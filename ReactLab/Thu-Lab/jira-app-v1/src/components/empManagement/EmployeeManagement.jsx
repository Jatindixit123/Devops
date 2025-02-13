import { useState } from "react";
import "./EmployeeManagement.styles.css";

export const EmployeeManagement = ({teamList, addEmp}) => {
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSkills, setEmpSkills] = useState("");
    const [teamName, setTeamName] = useState("");

    return (
        <div className="emp-wrapper">
            <h2>Add New Employee</h2>
            <div className="form-wrapper">
                <div className="input-group">
                    <label>Enter Emp ID</label>
                    <input
                        type="text"
                        placeholder="Enter Emp ID"
                        className="input-box"
                        onChange={(e) => setEmpId(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Name</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Name"
                        className="input-box"
                        onChange={(e) => setEmpName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Skills</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Skills"
                        className="input-box"
                        onChange={(e) => setEmpSkills(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select className="input-box"
                    onChange={(e) => setTeamName(e.target.value)}>
                        <option value="">Select Team</option>
                        {
                            teamList.map((team) => (
                                <option value={team.teamName}>
                                    {team.teamName}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button 
                    onClick={(e) => addEmp(empId, empName, empSkills, teamName)}>
                    Add Employee
                    </button>
            </div>
        </div>
    )
}