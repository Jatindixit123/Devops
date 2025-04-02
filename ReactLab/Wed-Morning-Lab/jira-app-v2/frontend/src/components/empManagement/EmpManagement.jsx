import { useState } from "react";
import "./EmpManagement.styles.css";
import axios from "axios";

export const Employee = ({teamList, addEmp}) => {
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSkills, setEmpSkills] = useState("");
    const [teamName, setTeamName] = useState("");
    const EMP_URL = "http://localhost:3333/api/emp";

    const addEmpHandler = async () => {
        // addEmp(empId, empName, teamName, empSkills);
        const response = await axios.post(EMP_URL + "/createEmp", {empId, empName, empSkills, teamName});
        console.log("Response from server :",response);
        setEmpId("");
        setEmpName("");
        setEmpSkills("");
        setTeamName("")
    }

    const deleteEmpHandler = async () => {
        // addEmp(empId, empName, teamName, empSkills);
        const response = await axios.post(EMP_URL + "/deleteEmp", {empId});
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
                        value={empId}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Name</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Name"
                        onChange={(e) => setEmpName(e.target.value)}
                        value={empName}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Emp Skills</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Skills (comma separated)"
                        onChange={(e) => setEmpSkills(e.target.value)}
                        value={empSkills}
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