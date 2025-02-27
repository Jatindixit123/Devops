import { useState } from "react";
import "./AssignTask.styles.css";

export const AssignTask = ({teamList}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [teamName, setTeamName] = useState("");
    const [empName, setEmpName] = useState("");

    return (
        <div className="task-wrapper">
            <h2>Add New Task</h2>
            <div className="form-wrapper">
                <div className="input-group">
                    <label>Enter Task Title</label>
                    <input
                        type="text"
                        placeholder="Enter Task Title"
                        className="input-box"
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Task Description</label>
                    <input
                        type="text"
                        placeholder="Enter Task Description"
                        className="input-box"
                        onChange={(e) => setTaskDesc(e.target.value)}
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

                <div className="input-group">
                    <label>Select Employee</label>
                    <select className="input-box"
                    onChange={(e) => setEmpName(e.target.value)}>
                        <option value="">Select Employee</option>
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