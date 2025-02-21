import { useState } from "react";
import "./EmployeeManagement.styles.css";

export const EmployeeManagement = ({teamData, addEmp}) => {
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSkills, setEmpSkills] = useState("");
    const [teamName, setTeamName] = useState("");

    const handleClick = () =>{
        addEmp(empId, empName, empSkills, teamName);
    }

    return (
        <div className="emp-wrapper">
            <h2>Add Emp to Team</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Enter Emp ID</label>
                    <input type="text" placeholder="Enter Emp ID"
                        onChange={(e) => setEmpId(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Name</label>
                    <input type="text" placeholder="Enter Emp Name"
                        onChange={(e) => setEmpName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Skills</label>
                    <input type="text" placeholder="Enter Emp Skills"
                        onChange={(e) => setEmpSkills(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select onChange={(e) => setTeamName(e.target.value)}>
                        <option value="">Select Team</option>
                        {
                            teamData.map((team) => (
                                <option key={team.team_id} value={team.team_name}>
                                    {team.team_name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button onClick={handleClick}>Add Employee</button>
            </div>
        </div>
    )
}