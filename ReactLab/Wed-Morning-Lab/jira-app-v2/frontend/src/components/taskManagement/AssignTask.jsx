import { useState } from "react";
import "./AssignTask.styles.css";

export const AssignTask = ({teamList}) => {
    const [taskId, setTaskId] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [empName, setEmpName] = useState("");

    const addTaskHandler = () => {
        
    }

    return (
        <div className="task-wrapper">
            <h2>Assign Task</h2>
            <div className="form-wrapper">
                <div className="input-group">
                    <label>Enter Task Title</label>
                    <input
                        type="text"
                        placeholder="Enter Task Title"
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Enter Task Description</label>
                   <textarea placeholder="Enter task description"></textarea>
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

                <div className="input-group">
                    <label>Select Emp</label>
                    <select onChange={(e) => setTeamName(e.target.value)}>
                        <option value="">Select Emp</option>
                        {
                            teamList.map((item) => (
                                <option value={item.teamName}>{item.teamName}</option>
                            ))
                        }
                    </select>
                </div>

                <button onClick={addTaskHandler}>Assign Task</button>
            </div>
        </div>
    )
}