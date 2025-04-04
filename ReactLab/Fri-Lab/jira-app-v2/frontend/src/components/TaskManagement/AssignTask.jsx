import { useState } from "react";
import "./AssignTask.styles.css";

export const AssignTask = ({teamData}) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [teamName, setTeamName] = useState("");
    const [empName, setEmpName] = useState("");

    const handleClick = () =>{
        // addEmp(empId, empName, empSkills, teamName);
    }

    return (
        <div className="task-assign-wrapper">
            <h2>Assign Task to Emp</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Enter Task Title</label>
                    <input type="text" placeholder="Enter Task Title"/>
                </div>

                <div className="input-group">
                    <label>Enter Task Description</label>
                    <textarea placeholder="Enter task description"></textarea>
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select>
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

                <div className="input-group">
                    <label>Select Emp</label>
                    <select>
                        <option value="">Select Emp</option>
                        {
                            teamData.map((team) => (
                                <optgroup key={team.team_id} label={team.team_name}>
                                    {
                                        team.emp_data.map((emp) => (
                                        <option key={emp.emp_id} value={emp.emp_name}>
                                            {emp.emp_name}
                                        </option>
                                        ))
                                    }
                                </optgroup>
                                
                            ))
                        }
                    </select>
                </div>

                <button onClick={handleClick}>Assign Task</button>
            </div>
        </div>
    )
}