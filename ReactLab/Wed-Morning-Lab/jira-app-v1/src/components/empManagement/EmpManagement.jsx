import { useState } from "react";
import "./EmpManagement.styles.css";

export const Employee = ({teamList, addEmp}) => {
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSkills, setEmpSkills] = useState("");
    const [teamName, setTeamName] = useState("");

    const addEmpHandler = () => {
        addEmp(empId, empName, teamName, empSkills);
    }

    return (
        <div className="emp-wrapper">
            <h2>Add Employee</h2>
            <div className="form-wrapper">
                <div className="input-group">
                    <label>Enter Emp ID</label>
                    <input
                        type="text"
                        placeholder="Enter Emp ID"
                        onChange={(e) => setEmpId(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Name</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Name"
                        onChange={(e) => setEmpName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Skills</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Skills (comma separated)"
                        onChange={(e) => setEmpSkills(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select onChange={(e) => setTeamName(e.target.value)}>
                        <option value="">Select Team</option>
                        {
                            teamList.map((item) => (
                                <option value={item.teamName}>{item.teamName}</option>
                            ))
                        }
                    </select>
                </div>

                <button onClick={addEmpHandler}>Add Employee</button>
            </div>
        </div>
    )
}