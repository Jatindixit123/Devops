import { useState } from "react";
import "./AssignTask.css";

const AssignTask = ({teamList}) => {
    const handleAssignTask = () => {
        const [taskTitle, setTaskTitle] = useState("");
    }
    return (
        <>
            <div className="assign-task">
                <h2>Enter Task Details</h2>
                <div className="input-group">
                    <label>Enter task title</label>
                    <input
                        type="text"
                        placeholder="Enter task title"
                    />
                </div>
                <div className="input-group">
                    <label>Enter task description</label>
                    <textarea placeholder="Enter Task Description"></textarea>
                </div>
                <div className="input-group">
                    <label>Select Employee</label>
                    <select>
                        <option value="">Select Employee</option>
                        {
                            teamList.map((team, index) => (
                                <optgroup key={index} label={team.team_name}>
                                    {
                                        team.emp_data.map((emp, index) => (
                                            <option key={index} value={emp.emp_name}>
                                                {emp.emp_name}
                                            </option>
                                        ))
                                    }
                                </optgroup>
                                
                            ))
                        }
                    </select>
                </div>

                <button onClick={handleAssignTask}>Assign Task</button>
            </div>
        </>
    )
}

export default AssignTask;